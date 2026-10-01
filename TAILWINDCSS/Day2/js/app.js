/**
 * RecruitLens — Main Application Engine
 * Handles State, Score Calculation, Interactive Builders, Checklist Sync,
 * Recruiter Simulation, and LocalStorage Persistence.
 */

// Application State
const AppState = {
  activeTab: 'home',
  assessmentAnswers: {},
  checklistState: {},
  currentRole: 'frontend',
  recruiterMode: 'optimized',
  totalScore: 0,
  scoreBreakdown: {
    completed: [],
    needsImprovement: [],
    missing: []
  }
};

// Initialize App on DOM Load
document.addEventListener('DOMContentLoaded', () => {
  loadStateFromStorage();
  initNavigation();
  renderSectionGuides();
  renderRoleHub();
  renderChecklist();
  renderRecruiterView();
  initAssessmentModal();
  calculateAndRenderScore();
  initInteractiveTools();
  setupEventListeners();
});

// Load persistent state from localStorage
function loadStateFromStorage() {
  try {
    const savedAssessment = localStorage.getItem('lio_assessment');
    if (savedAssessment) {
      AppState.assessmentAnswers = JSON.parse(savedAssessment);
    } else {
      // Default baseline assessment for demonstration
      AppState.assessmentAnswers = {
        photo: { score: 4, status: 'needs_work' },
        banner: { score: 0, status: 'missing' },
        headline: { score: 5, status: 'needs_work' },
        custom_url: { score: 2, status: 'needs_work' },
        about: { score: 5, status: 'needs_work' },
        featured: { score: 0, status: 'missing' },
        experience: { score: 5, status: 'needs_work' },
        projects: { score: 4, status: 'needs_work' },
        skills: { score: 4, status: 'needs_work' },
        education: { score: 6, status: 'complete' },
        certifications: { score: 2, status: 'needs_work' },
        activity: { score: 1, status: 'needs_work' },
        connections: { score: 1, status: 'needs_work' },
        recommendations: { score: 0, status: 'missing' },
        job_preferences: { score: 1, status: 'needs_work' }
      };
    }

    const savedChecklist = localStorage.getItem('lio_checklist');
    if (savedChecklist) {
      AppState.checklistState = JSON.parse(savedChecklist);
    } else {
      // Default initial checked items
      AppState.checklistState = {
        chk_photo_crop: true,
        chk_edu_courses: true,
        chk_custom_url: true
      };
    }

    const savedRole = localStorage.getItem('lio_role');
    if (savedRole && LINKEDIN_DATA.roles.some(r => r.id === savedRole)) {
      AppState.currentRole = savedRole;
    }
  } catch (e) {
    console.error('Error reading localStorage:', e);
  }
}

// Save state to localStorage
function saveStateToStorage() {
  try {
    localStorage.setItem('lio_assessment', JSON.stringify(AppState.assessmentAnswers));
    localStorage.setItem('lio_checklist', JSON.stringify(AppState.checklistState));
    localStorage.setItem('lio_role', AppState.currentRole);
  } catch (e) {
    console.error('Error saving to localStorage:', e);
  }
}

// Navigation & Tab Switching
function initNavigation() {
  // Global delegated listener for tab targets (supports dynamic buttons)
  document.addEventListener('click', (e) => {
    const targetEl = e.target.closest('[data-tab-target]');
    if (targetEl) {
      e.preventDefault();
      const targetTab = targetEl.getAttribute('data-tab-target');
      switchTab(targetTab);
    }
  });

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Handle URL hash changes
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.replace('#', '');
    if (hash.startsWith('guide-section-')) {
      const sectionId = hash.replace('guide-section-', '');
      scrollToSectionGuide(sectionId);
    } else if (['home', 'guides', 'roles', 'tools', 'checklist', 'recruiter'].includes(hash)) {
      switchTab(hash);
    }
  });

  // Check initial hash
  const initialHash = window.location.hash.replace('#', '');
  if (['home', 'guides', 'roles', 'tools', 'checklist', 'recruiter'].includes(initialHash)) {
    switchTab(initialHash);
  }
}

function switchTab(tabId) {
  if (!tabId) return;
  AppState.activeTab = tabId;

  // Update tab views
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => {
    if (tab.id === `tab-${tabId}`) {
      tab.classList.remove('hidden');
    } else {
      tab.classList.add('hidden');
    }
  });

  // Update active nav link classes
  const navLinks = document.querySelectorAll('[data-tab-target]');
  navLinks.forEach(link => {
    if (link.getAttribute('data-tab-target') === tabId) {
      link.classList.add('text-blue-600', 'border-blue-600', 'font-semibold');
      link.classList.remove('text-slate-600', 'border-transparent');
      if (link.classList.contains('mobile-nav-link')) {
        link.classList.add('bg-blue-50');
      }
    } else {
      link.classList.remove('text-blue-600', 'border-blue-600', 'font-semibold', 'bg-blue-50');
      link.classList.add('text-slate-600', 'border-transparent');
    }
  });

  // Close mobile menu if open
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.add('hidden');
  }

  // Scroll to top of content smoothly
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // If opening checklist, re-render to reflect latest state
  if (tabId === 'checklist') {
    renderAssessmentQuiz();
    renderChecklist();
  }
}

// Global Toast Notifications
function showToast(message, type = 'success') {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-xl text-sm font-medium text-white shadow-xl transition-all duration-300 transform translate-y-20 opacity-0';
    document.body.appendChild(toast);
  }

  const bgColors = {
    success: 'bg-slate-900 border border-slate-700',
    info: 'bg-blue-600',
    warning: 'bg-amber-600'
  };

  const icons = {
    success: '<svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>',
    info: '<svg class="w-5 h-5 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',
    warning: '<svg class="w-5 h-5 text-amber-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>'
  };

  toast.className = `fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-xl text-sm font-medium text-white shadow-xl transition-all duration-300 ${bgColors[type] || bgColors.success}`;
  toast.innerHTML = `${icons[type] || icons.success} <span>${message}</span>`;

  // Show
  setTimeout(() => {
    toast.classList.remove('translate-y-20', 'opacity-0');
  }, 10);

  // Hide after 3 seconds
  setTimeout(() => {
    toast.classList.add('translate-y-20', 'opacity-0');
  }, 3000);
}

// Copy to Clipboard Utility
function copyToClipboard(text, successMessage = 'Copied to clipboard!') {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMessage, 'success');
    }).catch(() => {
      fallbackCopyTextToClipboard(text, successMessage);
    });
  } else {
    fallbackCopyTextToClipboard(text, successMessage);
  }
}

function fallbackCopyTextToClipboard(text, successMessage) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    showToast(successMessage, 'success');
  } catch (err) {
    showToast('Failed to copy text', 'warning');
  }
  document.body.removeChild(textArea);
}

// Profile Assessment Engine
function initAssessmentModal() {
  renderAssessmentQuiz();
}

function renderAssessmentQuiz() {
  const container = document.getElementById('assessment-questions-container');
  if (!container || !LINKEDIN_DATA.assessmentQuestions) return;

  container.innerHTML = LINKEDIN_DATA.assessmentQuestions.map((q, index) => {
    const currentAnswer = AppState.assessmentAnswers[q.id] || { score: 0, status: 'missing' };

    return `
      <div class="bg-white p-5 md:p-6 rounded-2xl border border-slate-200 shadow-2xs mb-5 transition-all hover:border-slate-300" id="question-card-${q.id}">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div class="flex items-center gap-3">
            <span class="w-8 h-8 rounded-full bg-blue-50 text-blue-700 font-bold text-xs flex items-center justify-center border border-blue-100 flex-shrink-0">${index + 1}</span>
            <div>
              <h3 class="font-bold text-slate-900 text-sm md:text-base">${q.title}</h3>
              <p class="text-xs text-slate-500 font-medium">Worth ${q.weight} points toward recruiter readiness</p>
            </div>
          </div>
          <span class="text-[11px] px-2.5 py-1 rounded-full font-semibold uppercase tracking-wider self-start sm:self-auto ${
            currentAnswer.status === 'complete' ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' :
            currentAnswer.status === 'needs_work' ? 'bg-amber-100 text-amber-800 border border-amber-200' : 'bg-slate-100 text-slate-600 border border-slate-200'
          }">
            ${currentAnswer.status === 'complete' ? '✓ Optimized' : currentAnswer.status === 'needs_work' ? '⚠ Needs Work' : '× Incomplete'}
          </span>
        </div>
        <p class="text-slate-700 text-xs md:text-sm font-medium mb-3">${q.question}</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5">
          ${q.options.map((opt) => {
            const isSelected = currentAnswer.score === opt.score && currentAnswer.status === opt.status;
            return `
              <label class="flex items-start gap-2.5 p-3 rounded-xl border cursor-pointer transition-all ${
                isSelected ? 'border-blue-600 bg-blue-50/70 shadow-xs ring-1 ring-blue-600' : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }">
                <input type="radio" name="assessment_${q.id}" value="${opt.score}" class="mt-0.5 text-blue-600 focus:ring-blue-500" ${isSelected ? 'checked' : ''} onchange="handleAssessmentChange('${q.id}', ${opt.score}, '${opt.status}')">
                <div class="text-xs">
                  <span class="font-bold block text-slate-900 mb-0.5">${opt.score} / ${q.weight} pts</span>
                  <span class="text-slate-600 leading-snug text-[11px] block">${opt.label}</span>
                </div>
              </label>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }).join('');
}

function handleAssessmentChange(questionId, score, status) {
  AppState.assessmentAnswers[questionId] = { score, status };
  saveStateToStorage();
  calculateAndRenderScore();
  renderAssessmentQuiz();
  showToast(`Updated ${questionId.replace('_', ' ')} score: ${score} pts`, 'info');
}

// Scoring & Breakdown Computation
function calculateAndRenderScore() {
  if (!LINKEDIN_DATA.assessmentQuestions) return;

  let total = 0;
  const completed = [];
  const needsImprovement = [];
  const missing = [];

  LINKEDIN_DATA.assessmentQuestions.forEach(q => {
    const ans = AppState.assessmentAnswers[q.id] || { score: 0, status: 'missing' };
    total += ans.score;

    const itemData = {
      id: q.id,
      title: q.title,
      weight: q.weight,
      score: ans.score,
      maxScore: q.weight,
      status: ans.status,
      potentialGain: q.weight - ans.score
    };

    if (ans.status === 'complete') {
      completed.push(itemData);
    } else if (ans.status === 'needs_work') {
      needsImprovement.push(itemData);
    } else {
      missing.push(itemData);
    }
  });

  // Cap score at 100
  total = Math.min(100, Math.max(0, total));

  // Sort opportunities by largest potential gain
  const opportunities = [...needsImprovement, ...missing].sort((a, b) => b.potentialGain - a.potentialGain);

  AppState.totalScore = total;
  AppState.scoreBreakdown = { completed, needsImprovement, missing };

  // Update UI everywhere
  updateScoreDisplays(total, completed, needsImprovement, missing, opportunities);
}

function updateScoreDisplays(score, completed, needsImprovement, missing, opportunities) {
  // Score elements
  const scoreElements = document.querySelectorAll('.dynamic-score-val');
  scoreElements.forEach(el => {
    el.textContent = score;
  });

  // Score Bar / Ring
  const scoreBars = document.querySelectorAll('.score-progress-bar');
  scoreBars.forEach(scoreBar => {
    scoreBar.style.width = `${score}%`;
    if (score >= 80) {
      scoreBar.className = 'score-progress-bar h-full bg-emerald-500 transition-all duration-700';
    } else if (score >= 50) {
      scoreBar.className = 'score-progress-bar h-full bg-blue-600 transition-all duration-700';
    } else {
      scoreBar.className = 'score-progress-bar h-full bg-amber-500 transition-all duration-700';
    }
  });

  // Tier Badge & Message
  let tierTitle = "Beginning Stage";
  let tierDesc = "Your profile has substantial missing sections. Follow our step-by-step guides to unlock recruiter visibility.";
  let tierColor = "text-amber-700 bg-amber-50 border-amber-200";

  if (score >= 80) {
    tierTitle = "Recruiter-Ready (All-Star)";
    tierDesc = "Your profile is in the top tier! Key sections are well-structured, keyword-rich, and optimized for recruiter searches.";
    tierColor = "text-emerald-700 bg-emerald-50 border-emerald-200";
  } else if (score >= 50) {
    tierTitle = "Promising Foundation";
    tierDesc = "You have good fundamentals in place, but need to improve headline formulas, metrics in experience, and featured media.";
    tierColor = "text-blue-700 bg-blue-50 border-blue-200";
  }

  const tierBadges = document.querySelectorAll('.score-tier-badge');
  tierBadges.forEach(tierBadge => {
    tierBadge.textContent = tierTitle;
    tierBadge.className = `score-tier-badge inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${tierColor}`;
  });

  const tierSummaries = document.querySelectorAll('.score-tier-summary');
  tierSummaries.forEach(tierSummary => {
    tierSummary.textContent = tierDesc;
  });

  // Render Dashboard Section Status Lists
  renderDashboardLists(completed, needsImprovement, missing);

  // Render Top Opportunities List
  renderOpportunities(opportunities);
}

function renderDashboardLists(completed, needsImprovement, missing) {
  // Completed List
  const completedContainer = document.getElementById('dashboard-completed-list');
  if (completedContainer) {
    if (completed.length === 0) {
      completedContainer.innerHTML = `<p class="text-xs text-slate-500 italic py-2">No sections fully optimized yet. Start with the guide below!</p>`;
    } else {
      completedContainer.innerHTML = completed.map(item => `
        <div class="flex items-center justify-between p-3 rounded-xl bg-emerald-50/60 border border-emerald-200/80 text-xs">
          <div class="flex items-center gap-2.5">
            <span class="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">✓</span>
            <span class="font-semibold text-slate-800">${item.title}</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="font-bold text-emerald-700">${item.score}/${item.maxScore} pts</span>
            <button onclick="scrollToSectionGuide('${item.id}')" class="text-blue-600 hover:text-blue-800 font-medium hover:underline">Review →</button>
          </div>
        </div>
      `).join('');
    }
  }

  // Needs Improvement List
  const needsContainer = document.getElementById('dashboard-needs-list');
  if (needsContainer) {
    if (needsImprovement.length === 0) {
      needsContainer.innerHTML = `<p class="text-xs text-slate-500 italic py-2">No sections currently flagged as partial.</p>`;
    } else {
      needsContainer.innerHTML = needsImprovement.map(item => `
        <div class="flex items-center justify-between p-3 rounded-xl bg-amber-50/60 border border-amber-200/80 text-xs">
          <div class="flex items-center gap-2.5">
            <span class="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold">!</span>
            <span class="font-semibold text-slate-800">${item.title}</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="font-bold text-amber-700">${item.score}/${item.maxScore} pts</span>
            <button onclick="scrollToSectionGuide('${item.id}')" class="px-2.5 py-1 rounded bg-white text-blue-600 hover:bg-blue-50 font-semibold border border-blue-200 shadow-2xs">Improve →</button>
          </div>
        </div>
      `).join('');
    }
  }

  // Missing List
  const missingContainer = document.getElementById('dashboard-missing-list');
  if (missingContainer) {
    if (missing.length === 0) {
      missingContainer.innerHTML = `<p class="text-xs text-emerald-600 font-semibold py-2">✓ Great job! No missing profile sections.</p>`;
    } else {
      missingContainer.innerHTML = missing.map(item => `
        <div class="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
          <div class="flex items-center gap-2.5">
            <span class="w-5 h-5 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center font-bold">×</span>
            <span class="font-semibold text-slate-700">${item.title}</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="font-bold text-slate-500">0/${item.maxScore} pts</span>
            <button onclick="scrollToSectionGuide('${item.id}')" class="px-2.5 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 font-semibold shadow-2xs">Add Now →</button>
          </div>
        </div>
      `).join('');
    }
  }
}

function renderOpportunities(opportunities) {
  const container = document.getElementById('opportunities-container');
  if (!container) return;

  const top3 = opportunities.slice(0, 4);

  if (top3.length === 0) {
    container.innerHTML = `
      <div class="p-6 bg-emerald-50 rounded-2xl border border-emerald-200 text-center">
        <p class="text-emerald-800 font-bold text-base">🎉 Incredible! Your profile is 100% complete and recruiter-ready.</p>
        <p class="text-emerald-700 text-xs mt-1">Keep updating your projects and checking our role-specific keywords as your career grows.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = top3.map((opp, idx) => `
    <div class="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white rounded-xl border border-slate-200 shadow-2xs hover:border-blue-300 transition-all gap-4">
      <div class="flex items-start gap-3.5">
        <span class="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 font-bold text-xs flex items-center justify-center border border-blue-100 flex-shrink-0 mt-0.5">${idx + 1}</span>
        <div>
          <h4 class="font-bold text-slate-900 text-sm">${opp.title}</h4>
          <p class="text-xs text-slate-500 mt-0.5">Currently: <strong class="text-slate-700">${opp.score}/${opp.maxScore} pts</strong> (Fixing this adds <strong class="text-emerald-600">+${opp.potentialGain} pts</strong> to your profile score)</p>
        </div>
      </div>
      <button onclick="scrollToSectionGuide('${opp.id}')" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold whitespace-nowrap self-start sm:self-center transition-colors">
        Fix ${opp.title} →
      </button>
    </div>
  `).join('');
}

function scrollToSectionGuide(sectionId) {
  switchTab('guides');
  setTimeout(() => {
    const el = document.getElementById(`guide-section-${sectionId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      el.classList.add('ring-2', 'ring-blue-500', 'bg-blue-50/30');
      setTimeout(() => {
        el.classList.remove('ring-2', 'ring-blue-500', 'bg-blue-50/30');
      }, 2000);
    }
  }, 120);
}

// Render Deep Section Guides with Rich Visuals & Examples
function renderSectionGuides() {
  const container = document.getElementById('section-guides-container');
  if (!container || !LINKEDIN_DATA.sections) return;

  container.innerHTML = LINKEDIN_DATA.sections.map((section, idx) => {
    return `
      <section id="guide-section-${section.id}" class="guide-card bg-white rounded-3xl border border-slate-200 p-6 md:p-8 mb-8 shadow-2xs scroll-mt-24">
        <!-- Section Header -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-4">
          <div class="flex items-center gap-3">
            <span class="w-9 h-9 rounded-xl bg-slate-900 text-white font-extrabold text-sm flex items-center justify-center flex-shrink-0">${idx + 1}</span>
            <div>
              <h3 class="text-xl md:text-2xl font-extrabold text-slate-900">${section.title}</h3>
              <span class="text-xs px-2.5 py-0.5 rounded-full font-bold bg-blue-50 text-blue-700 border border-blue-100 inline-block mt-0.5">${section.badge}</span>
            </div>
          </div>
          <button onclick="scrollToChecklistSection('${section.id}')" class="text-xs px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-700 font-semibold border border-slate-200 transition-colors self-start sm:self-auto flex items-center gap-1.5">
            <span>Checklist & Audit</span> →
          </button>
        </div>

        <!-- What It Is -->
        ${section.whatIsIt ? `
          <div class="my-5 p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-600 mb-1 flex items-center gap-1.5">
              <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              What It Is & Where It Appears
            </h4>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">${section.whatIsIt}</p>
          </div>
        ` : ''}

        <!-- Why It Matters -->
        <div class="mb-6 p-4 rounded-2xl bg-blue-50/50 border border-blue-100">
          <h4 class="text-xs font-bold uppercase tracking-wider text-blue-900 mb-1 flex items-center gap-1.5">
            <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            Why This Section Matters
          </h4>
          <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">${section.whyItMatters}</p>
        </div>

        <!-- SPECIAL VISUAL SHOWCASE FOR PHOTO -->
        ${section.id === 'photo' && section.photoPreview ? `
          <div class="mb-6">
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center justify-between">
              <span>📸 Ideal Headshot Composition (60-70% Face Fill)</span>
              <span class="text-blue-600 text-[11px] font-semibold">Min 800 x 800 px</span>
            </h4>
            <div class="flex items-center gap-6 p-4 bg-slate-50 rounded-2xl border border-slate-200">
              <img src="${section.photoPreview}" alt="Professional LinkedIn Headshot Sample" class="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover flex-shrink-0" onerror="this.src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80'">
              <div class="text-xs text-slate-700 space-y-1">
                <p class="font-bold text-slate-900">Key photo success factors:</p>
                <p>• Soft natural window light facing your face directly</p>
                <p>• Clear eye contact with warm, confident facial expression</p>
                <p>• Plain warm neutral background with zero clutter</p>
              </div>
            </div>
          </div>
        ` : ''}

        <!-- SPECIAL VISUAL SHOWCASE FOR BANNER -->
        ${section.id === 'banner' && section.bannerPreviewImage ? `
          <div class="mb-8">
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center justify-between">
              <span>🖼️ Ideal Custom Banner Layout (1584 x 396 px)</span>
              <span class="text-blue-600 text-[11px] font-semibold">Aspect Ratio: 4:1</span>
            </h4>
            <div class="rounded-2xl border border-slate-200 overflow-hidden shadow-xs relative bg-slate-900">
              <img src="${section.bannerPreviewImage}" alt="LinkedIn Cover Banner Blueprint" class="w-full h-auto max-h-56 object-cover" onerror="this.parentElement.innerHTML='<div class=\'p-8 text-center text-white bg-slate-900\'><h4 class=\'text-lg font-bold\'>Full Stack Engineer • React | TypeScript | Node.js | AWS</h4><p class=\'text-xs text-slate-400 mt-1\'>alexmorgan.dev | github.com/alexmorgan</p></div>'">
              <div class="p-3 bg-slate-900/90 text-white flex flex-wrap items-center justify-between text-[11px] border-t border-slate-800">
                <span class="text-slate-300">💡 Left 25% kept clear for avatar overlap • Center/Right features role & tech keywords</span>
                <span class="text-blue-400 font-mono">1584 x 396 px</span>
              </div>
            </div>
          </div>
        ` : ''}

        <!-- Formula or Framework (if available) -->
        ${section.formula ? `
          <div class="mb-6 p-5 rounded-2xl bg-blue-50/70 border border-blue-200">
            <h4 class="text-xs font-bold uppercase tracking-wider text-blue-900 mb-2 flex items-center gap-1.5">
              <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
              ${section.formula.title}
            </h4>
            <div class="p-3.5 bg-white rounded-xl border border-blue-200 font-mono text-xs text-blue-950 font-bold mb-3 select-all leading-relaxed">
              ${section.formula.structure}
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
              ${section.formula.breakdown.map(b => `
                <div class="bg-white p-3 rounded-xl border border-blue-100 text-xs">
                  <span class="font-bold text-blue-900 block mb-0.5">${b.part}</span>
                  <span class="text-slate-600 leading-tight text-[11px] block">${b.desc}</span>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        ${section.framework ? `
          <div class="mb-6 p-5 rounded-2xl bg-blue-50/70 border border-blue-200">
            <h4 class="text-xs font-bold uppercase tracking-wider text-blue-900 mb-3 flex items-center gap-1.5">
              <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>
              The 4-Part Structure Framework
            </h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              ${section.framework.map(f => `
                <div class="bg-white p-3.5 rounded-xl border border-blue-100 text-xs">
                  <strong class="text-blue-900 block font-bold mb-1">${f.step}</strong>
                  <p class="text-slate-600 leading-relaxed text-[12px]">${f.desc}</p>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- Good Practices vs Avoid List Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <!-- Good Practices -->
          <div class="p-5 rounded-2xl border border-emerald-200 bg-emerald-50/40">
            <h4 class="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-3 flex items-center gap-2">
              <span class="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold">✓</span>
              What You Should Add
            </h4>
            <ul class="space-y-2 text-xs text-slate-700">
              ${(section.whatToAdd || []).map(item => `
                <li class="flex items-start gap-2">
                  <span class="text-emerald-600 font-bold mt-0.5">•</span>
                  <span>${item}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <!-- Avoid List -->
          <div class="p-5 rounded-2xl border border-rose-200 bg-rose-50/40">
            <h4 class="text-xs font-bold uppercase tracking-wider text-rose-900 mb-3 flex items-center gap-2">
              <span class="w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center text-[10px] font-bold">×</span>
              What You Should Avoid
            </h4>
            <ul class="space-y-2 text-xs text-slate-700">
              ${(section.commonMistakes || []).map(item => `
                <li class="flex items-start gap-2">
                  <span class="text-rose-500 font-bold mt-0.5">•</span>
                  <span>${item}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>

        <!-- Before vs After Concrete Content Examples -->
        ${section.examples ? `
        <div class="mb-6">
          <h4 class="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Concrete Content Comparison</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Bad Example -->
            <div class="p-4 rounded-2xl border border-rose-200 bg-white">
              <div class="flex items-center justify-between mb-2 pb-2 border-b border-rose-100">
                <span class="text-xs font-bold text-rose-600 flex items-center gap-1.5">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  ❌ Avoid This (Weak / Passive)
                </span>
              </div>
              <div class="text-xs text-slate-600 whitespace-pre-line font-mono bg-rose-50/40 p-3.5 rounded-xl border border-rose-100 leading-relaxed">
                ${escapeHtml(section.examples.bad)}
              </div>
            </div>

            <!-- Good Example -->
            <div class="p-4 rounded-2xl border border-emerald-200 bg-white">
              <div class="flex items-center justify-between mb-2 pb-2 border-b border-emerald-100">
                <span class="text-xs font-bold text-emerald-700 flex items-center gap-1.5">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  ✅ Better (Recruiter-Ready)
                </span>
                <button onclick="copyToClipboard(\`${escapeForAttr(section.examples.good)}\`, 'Example content copied!')" class="copy-btn text-[11px] px-2.5 py-1 rounded bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold border border-emerald-200 transition-colors">
                  Copy Example
                </button>
              </div>
              <div class="text-xs text-slate-800 whitespace-pre-line font-mono bg-emerald-50/40 p-3.5 rounded-xl border border-emerald-100 leading-relaxed select-all">
                ${escapeHtml(section.examples.good)}
              </div>
            </div>
          </div>
        </div>
        ` : ''}

        <!-- Recruiter Lens Pro-Tip -->
        ${section.howToImprove ? `
        <div class="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-3.5">
          <span class="p-2 bg-amber-100 text-amber-800 rounded-xl text-sm flex-shrink-0">💡</span>
          <div>
            <h5 class="text-xs font-bold text-amber-900 uppercase tracking-wider mb-0.5">Recruiter Action Step</h5>
            <p class="text-xs text-amber-950 leading-relaxed">${section.howToImprove}</p>
          </div>
        </div>
        ` : ''}
      </section>
    `;
  }).join('');
}

function scrollToChecklistSection(sectionId) {
  switchTab('checklist');
  setTimeout(() => {
    const el = document.getElementById(`question-card-${sectionId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.classList.add('ring-2', 'ring-blue-500');
      setTimeout(() => el.classList.remove('ring-2', 'ring-blue-500'), 2000);
    }
  }, 100);
}

// Role-Based Customization Hub
function renderRoleHub() {
  const container = document.getElementById('role-cards-container');
  const detailsContainer = document.getElementById('role-details-container');
  if (!container || !detailsContainer || !LINKEDIN_DATA.roles) return;

  // Render role selector chips/cards
  container.innerHTML = LINKEDIN_DATA.roles.map(role => {
    const isSelected = role.id === AppState.currentRole;
    return `
      <button onclick="selectRole('${role.id}')" class="p-4 rounded-xl border text-left transition-all ${
        isSelected 
          ? 'border-blue-600 bg-blue-50/70 shadow-sm ring-1 ring-blue-600' 
          : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
      }">
        <div class="flex items-center justify-between mb-1">
          <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 uppercase tracking-wider">${role.badge}</span>
          ${isSelected ? '<span class="w-2 h-2 rounded-full bg-blue-600"></span>' : ''}
        </div>
        <h4 class="font-bold text-slate-900 text-xs md:text-sm mt-1">${role.title}</h4>
      </button>
    `;
  }).join('');

  // Render current selected role details
  const currentRoleData = LINKEDIN_DATA.roles.find(r => r.id === AppState.currentRole) || LINKEDIN_DATA.roles[0];

  detailsContainer.innerHTML = `
    <div class="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xs">
      <!-- Role Title & Badge -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-3">
        <div>
          <span class="text-xs font-bold text-blue-600 tracking-wider uppercase">${currentRoleData.badge} Playbook</span>
          <h3 class="text-2xl font-bold text-slate-900 mt-0.5">${currentRoleData.title} Optimization Kit</h3>
        </div>
        <button onclick="applyRoleToGenerators('${currentRoleData.id}')" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold transition-colors flex items-center gap-2 self-start sm:self-center">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
          Load Into Profile Builders
        </button>
      </div>

      <!-- High-Impact Keywords -->
      <div class="my-6">
        <h4 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">High-Priority Recruiter Search Keywords (ATS Index)</h4>
        <div class="flex flex-wrap gap-2">
          ${currentRoleData.keywords.map(kw => `
            <span class="px-3 py-1 rounded-lg bg-slate-100 text-slate-800 text-xs font-medium border border-slate-200/60">${kw}</span>
          `).join('')}
        </div>
      </div>

      <!-- Suggested Skills to Pin -->
      <div class="mb-6 p-4 rounded-xl bg-slate-50 border border-slate-200">
        <h4 class="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Recommended Skills Order (Add to Skills Section)</h4>
        <div class="flex flex-wrap gap-2">
          ${currentRoleData.skillsList.map((skill, sIdx) => `
            <span class="px-2.5 py-1 rounded-md text-xs font-medium ${
              skill.includes('(Pinned)') 
                ? 'bg-blue-100 text-blue-800 border border-blue-200 font-bold' 
                : 'bg-white text-slate-700 border border-slate-200'
            }">
              ${sIdx + 1}. ${skill}
            </span>
          `).join('')}
        </div>
      </div>

      <!-- Headline Formulas for this role -->
      <div class="mb-6">
        <h4 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Tested Headline Templates (Choose one & customize)</h4>
        <div class="space-y-3">
          ${currentRoleData.headlineTemplates.map((hl, hIdx) => `
            <div class="p-3.5 rounded-xl border border-slate-200 bg-white hover:border-blue-200 transition-colors flex items-start justify-between gap-3">
              <div class="text-xs text-slate-800 font-mono select-all">
                <span class="text-blue-600 font-bold font-sans mr-2">Option ${hIdx + 1}:</span>
                ${hl}
              </div>
              <button onclick="copyToClipboard(\`${escapeForAttr(hl)}\`, 'Headline template copied!')" class="copy-btn text-[11px] px-2.5 py-1 rounded bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-700 font-semibold border border-slate-200 whitespace-nowrap">
                Copy
              </button>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Tailored About Summary Template -->
      <div class="mb-6">
        <div class="flex items-center justify-between mb-2">
          <h4 class="text-xs font-bold text-slate-500 uppercase tracking-wider">Tailored About Summary (Copy & Fill Your Details)</h4>
          <button onclick="copyToClipboard(\`${escapeForAttr(currentRoleData.aboutTemplate)}\`, 'About summary template copied!')" class="copy-btn text-xs px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold border border-emerald-200 transition-colors">
            Copy Complete Summary
          </button>
        </div>
        <div class="p-4 rounded-xl border border-slate-200 bg-slate-50/70 text-xs text-slate-800 font-mono whitespace-pre-line leading-relaxed max-h-80 overflow-y-auto select-all">
          ${escapeHtml(currentRoleData.aboutTemplate)}
        </div>
      </div>

      <!-- Recommended Projects to Build -->
      <div>
        <h4 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Standout Project Ideas That Impress Recruiters</h4>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
          ${currentRoleData.projectIdeas.map((idea, pIdx) => `
            <div class="p-3.5 rounded-xl border border-slate-200 bg-white text-xs">
              <span class="w-5 h-5 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-[10px] mb-2 border border-blue-100">${pIdx + 1}</span>
              <p class="text-slate-700 font-medium leading-relaxed">${idea}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function selectRole(roleId) {
  AppState.currentRole = roleId;
  saveStateToStorage();
  renderRoleHub();
  showToast(`Switched role to ${roleId.replace('-', ' ')}`, 'info');
}

function applyRoleToGenerators(roleId) {
  const roleData = LINKEDIN_DATA.roles.find(r => r.id === roleId);
  if (!roleData) return;

  switchTab('tools');
  setTimeout(() => {
    // Fill Headline Generator
    const roleInput = document.getElementById('gen-role');
    const skillsInput = document.getElementById('gen-skills');
    const valueInput = document.getElementById('gen-value');
    const proofInput = document.getElementById('gen-proof');

    if (roleInput) roleInput.value = roleData.title;
    if (skillsInput) skillsInput.value = roleData.keywords.slice(0, 4).join(', ');
    if (valueInput) valueInput.value = `Building high-performance, user-centric solutions`;
    if (proofInput) proofInput.value = `3+ Production Projects | Open Source Contributor`;

    generateHeadlineVariations();

    // Fill About Generator
    const abRole = document.getElementById('about-role');
    const abExp = document.getElementById('about-experience');
    const abTech = document.getElementById('about-tech');
    const abProj = document.getElementById('about-project');
    const abEmail = document.getElementById('about-email');

    if (abRole) abRole.value = roleData.title;
    if (abExp) abExp.value = `2+ years building production-grade software`;
    if (abTech) abTech.value = roleData.keywords.slice(0, 6).join(', ');
    if (abProj) abProj.value = roleData.projectIdeas[0];
    if (abEmail) abEmail.value = `your.name@domain.com`;

    generateAboutDraft();
    showToast(`Loaded ${roleData.title} templates into interactive tools!`, 'success');
  }, 100);
}

// Recruiter View Simulation
function renderRecruiterView() {
  const mode = AppState.recruiterMode;
  const data = LINKEDIN_DATA.recruiterViewData ? LINKEDIN_DATA.recruiterViewData[mode] : null;
  const container = document.getElementById('recruiter-preview-card');
  const toggleWeakBtn = document.getElementById('recruiter-mode-weak');
  const toggleOptBtn = document.getElementById('recruiter-mode-opt');

  if (!container || !data) return;

  // Toggle button styling
  if (toggleWeakBtn && toggleOptBtn) {
    if (mode === 'weak') {
      toggleWeakBtn.className = 'px-4 py-2 rounded-xl text-xs font-bold bg-white text-rose-700 shadow-xs border border-rose-200';
      toggleOptBtn.className = 'px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-900';
    } else {
      toggleOptBtn.className = 'px-4 py-2 rounded-xl text-xs font-bold bg-white text-emerald-700 shadow-xs border border-emerald-200';
      toggleWeakBtn.className = 'px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-900';
    }
  }

  container.innerHTML = `
    <!-- Mock LinkedIn Profile Header -->
    <div class="relative bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-6">
      <!-- Banner -->
      <div class="h-32 sm:h-44 w-full ${data.banner} relative flex items-center justify-end px-6">
        ${data.bannerText ? `
          <div class="text-right text-white drop-shadow-md hidden sm:block">
            <span class="text-sm font-bold tracking-wide">${data.bannerText}</span>
          </div>
        ` : ''}
      </div>

      <!-- Avatar & Recruiter Verdict Pill -->
      <div class="px-6 pb-6 relative pt-0">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between -mt-16 sm:-mt-20 mb-4 gap-3">
          <div class="relative">
            <img src="${data.avatar}" alt="${data.name}" class="w-28 h-28 sm:w-36 sm:h-36 rounded-full border-4 border-white shadow-md object-cover bg-white" onerror="this.src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80'">
            <span class="absolute bottom-1 right-1 w-6 h-6 rounded-full ${mode === 'optimized' ? 'bg-emerald-500' : 'bg-slate-400'} border-2 border-white flex items-center justify-center text-white text-[10px] font-bold">✓</span>
          </div>
          <div class="flex flex-col sm:items-end gap-1.5">
            <span class="text-xs px-3 py-1 rounded-full font-bold border ${data.verdictColor}">
              Score: ${data.score}/100 • ${data.verdict}
            </span>
          </div>
        </div>

        <!-- Name & Headline -->
        <div class="mb-4">
          <div class="flex items-center gap-2">
            <h3 class="text-xl sm:text-2xl font-bold text-slate-900">${data.name}</h3>
            <span class="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-semibold">1st</span>
          </div>
          <p class="text-sm text-slate-800 font-medium mt-1 leading-snug">${data.headline}</p>
          <p class="text-xs text-slate-500 mt-1">${data.location}</p>
        </div>

        <!-- Quick CTAs -->
        <div class="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
          <button class="px-4 py-1.5 bg-blue-600 text-white rounded-full text-xs font-semibold shadow-2xs">Send InMail</button>
          <button class="px-4 py-1.5 bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 rounded-full text-xs font-semibold">Save to Project</button>
          <button class="px-4 py-1.5 bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 rounded-full text-xs font-semibold">Download PDF</button>
        </div>
      </div>
    </div>

    <!-- About Section Preview -->
    <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs mb-6">
      <div class="flex items-center justify-between mb-3">
        <h4 class="font-bold text-slate-900 text-base">About</h4>
        <span class="text-xs text-blue-600 font-semibold">Gaze Point #2</span>
      </div>
      <p class="text-xs text-slate-700 leading-relaxed whitespace-pre-line">${data.about}</p>
    </div>

    <!-- Experience Preview -->
    <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs mb-6">
      <div class="flex items-center justify-between mb-3">
        <h4 class="font-bold text-slate-900 text-base">Experience</h4>
        <span class="text-xs text-blue-600 font-semibold">Gaze Point #3</span>
      </div>
      <div class="border-l-2 border-slate-200 pl-4 py-1">
        <h5 class="text-sm font-bold text-slate-900">${data.experienceTitle}</h5>
        <p class="text-xs text-slate-500 font-medium mb-2">${data.experienceCompany}</p>
        <ul class="space-y-1.5 text-xs text-slate-700">
          ${data.experienceBullets.map(b => `<li class="flex items-start gap-2"><span class="text-blue-600 font-bold">•</span><span>${b}</span></li>`).join('')}
        </ul>
      </div>
    </div>

    <!-- Skills & Proof Preview -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="bg-white rounded-xl border border-slate-200 p-4">
        <h4 class="font-bold text-slate-900 text-xs mb-2">Skills (Recruiter Match)</h4>
        <div class="flex flex-wrap gap-1.5">
          ${data.skills.map(s => `<span class="px-2 py-1 rounded bg-slate-100 text-slate-800 text-[11px] font-medium">${s}</span>`).join('')}
        </div>
      </div>
      <div class="bg-white rounded-xl border border-slate-200 p-4">
        <h4 class="font-bold text-slate-900 text-xs mb-2">Featured Proof & Projects</h4>
        <p class="text-xs text-slate-700 font-medium mb-1">📁 ${data.projectsCount}</p>
        <p class="text-xs text-slate-700 font-medium">⭐ ${data.featuredCount}</p>
      </div>
    </div>

    <!-- Recruiter Eye Tracking Breakdown -->
    <div class="mt-6 p-5 rounded-xl bg-slate-900 text-white">
      <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
        <span class="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse"></span>
        Recruiter Gaze Audit (The First 6-8 Seconds)
      </h4>
      <div class="space-y-2.5">
        ${data.recruiterGazeNotes.map(n => `
          <div class="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs">
            <strong class="text-blue-400 block font-bold mb-0.5">${n.label}</strong>
            <p class="text-slate-300 leading-snug">${n.note}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function setRecruiterMode(mode) {
  AppState.recruiterMode = mode;
  renderRecruiterView();
}

// 100-Point Optimization Checklist
function renderChecklist(filter = 'all') {
  const container = document.getElementById('checklist-items-container');
  if (!container || !LINKEDIN_DATA.checklistItems) return;

  const items = LINKEDIN_DATA.checklistItems;
  const filtered = filter === 'all' ? items : items.filter(item => item.category === filter);

  let checkedCount = 0;
  let earnedPoints = 0;
  const totalPoints = items.reduce((sum, item) => sum + item.points, 0);

  items.forEach(item => {
    if (AppState.checklistState[item.id]) {
      checkedCount++;
      earnedPoints += item.points;
    }
  });

  const percent = Math.round((checkedCount / items.length) * 100);

  // Update header checklist stats
  const countEl = document.getElementById('checklist-completed-count');
  const percentEl = document.getElementById('checklist-percent-bar');
  const percentText = document.getElementById('checklist-percent-text');

  if (countEl) countEl.textContent = `${checkedCount} / ${items.length}`;
  if (percentEl) percentEl.style.width = `${percent}%`;
  if (percentText) percentText.textContent = `${percent}%`;

  container.innerHTML = filtered.map(item => {
    const isChecked = !!AppState.checklistState[item.id];
    return `
      <label class="flex items-start justify-between p-4 rounded-xl border transition-all cursor-pointer ${
        isChecked 
          ? 'bg-emerald-50/40 border-emerald-200' 
          : 'bg-white border-slate-200 hover:border-slate-300'
      }">
        <div class="flex items-start gap-3.5">
          <input type="checkbox" class="custom-checkbox mt-1 rounded text-blue-600 focus:ring-blue-500" ${isChecked ? 'checked' : ''} onchange="toggleChecklistItem('${item.id}', this.checked)">
          <div>
            <span class="font-bold text-slate-900 text-sm block ${isChecked ? 'line-through text-slate-500' : ''}">${item.title}</span>
            <p class="text-xs text-slate-500 mt-0.5 leading-relaxed">${item.desc}</p>
          </div>
        </div>
        <div class="flex items-center gap-2 flex-shrink-0 ml-3">
          <span class="text-xs font-bold px-2 py-0.5 rounded ${isChecked ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'}">
            +${item.points} pts
          </span>
          <button type="button" onclick="event.preventDefault(); scrollToSectionGuide('${item.sectionId}')" class="text-blue-600 hover:text-blue-800 text-xs font-semibold">
            Guide →
          </button>
        </div>
      </label>
    `;
  }).join('');
}

function toggleChecklistItem(itemId, isChecked) {
  AppState.checklistState[itemId] = isChecked;
  saveStateToStorage();
  renderChecklist();
  showToast(isChecked ? 'Item checked!' : 'Item unchecked', 'info');
}

function selectAllChecklist(selectAll) {
  if (!LINKEDIN_DATA.checklistItems) return;
  LINKEDIN_DATA.checklistItems.forEach(item => {
    AppState.checklistState[item.id] = selectAll;
  });
  saveStateToStorage();
  renderChecklist();
  showToast(selectAll ? 'All checklist items checked!' : 'Checklist reset', 'success');
}

function filterChecklist(category, btnElement) {
  const buttons = document.querySelectorAll('.checklist-filter-btn');
  buttons.forEach(btn => {
    btn.classList.remove('bg-blue-600', 'text-white');
    btn.classList.add('bg-white', 'text-slate-700');
  });

  if (btnElement) {
    btnElement.classList.add('bg-blue-600', 'text-white');
    btnElement.classList.remove('bg-white', 'text-slate-700');
  }

  renderChecklist(category);
}

// Interactive Utility Tools
function initInteractiveTools() {
  const btnGenHeadline = document.getElementById('btn-generate-headline');
  if (btnGenHeadline) {
    btnGenHeadline.addEventListener('click', generateHeadlineVariations);
  }

  const btnGenAbout = document.getElementById('btn-generate-about');
  if (btnGenAbout) {
    btnGenAbout.addEventListener('click', generateAboutDraft);
  }

  const btnOptBullet = document.getElementById('btn-optimize-bullet');
  if (btnOptBullet) {
    btnOptBullet.addEventListener('click', optimizeBulletPoint);
  }
}

// 1. Headline Generator
function generateHeadlineVariations() {
  const role = document.getElementById('gen-role')?.value.trim() || 'Frontend Developer';
  const skills = document.getElementById('gen-skills')?.value.trim() || 'React.js, Next.js, TypeScript, Tailwind CSS';
  const value = document.getElementById('gen-value')?.value.trim() || 'Building accessible & high-performance web applications';
  const proof = document.getElementById('gen-proof')?.value.trim() || 'Ex-Intern @ TechStartup | Open Source Contributor';

  const skillBullets = skills.split(',').map(s => s.trim()).filter(Boolean).join(' • ');

  const var1 = `${role} | ${skillBullets} | ${value} | ${proof}`;
  const var2 = `${role} specializing in ${skills.split(',')[0] || 'Modern Web'} & ${skills.split(',')[1] || 'Cloud'} | ${value} | ${proof}`;
  const var3 = `${role} | ${skillBullets} | Passionate about ${value}`;

  const container = document.getElementById('headline-results-container');
  if (container) {
    container.innerHTML = `
      <div class="space-y-3 mt-4">
        <div class="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start justify-between gap-3">
          <div>
            <span class="text-[11px] font-bold uppercase tracking-wider text-blue-700 block mb-1">Variation 1: Full SEO Formula</span>
            <p class="text-xs font-mono text-slate-900 select-all leading-relaxed">${var1}</p>
            <span class="text-[10px] text-slate-500 mt-1 block">${var1.length} chars (Optimal: 120-180)</span>
          </div>
          <button onclick="copyToClipboard(\`${escapeForAttr(var1)}\`, 'Headline variation 1 copied!')" class="copy-btn text-xs px-3 py-1.5 rounded-lg bg-white hover:bg-blue-50 text-blue-700 font-semibold border border-slate-300 shadow-2xs whitespace-nowrap">
            Copy
          </button>
        </div>

        <div class="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start justify-between gap-3">
          <div>
            <span class="text-[11px] font-bold uppercase tracking-wider text-blue-700 block mb-1">Variation 2: Conversational Specialist</span>
            <p class="text-xs font-mono text-slate-900 select-all leading-relaxed">${var2}</p>
            <span class="text-[10px] text-slate-500 mt-1 block">${var2.length} chars</span>
          </div>
          <button onclick="copyToClipboard(\`${escapeForAttr(var2)}\`, 'Headline variation 2 copied!')" class="copy-btn text-xs px-3 py-1.5 rounded-lg bg-white hover:bg-blue-50 text-blue-700 font-semibold border border-slate-300 shadow-2xs whitespace-nowrap">
            Copy
          </button>
        </div>

        <div class="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start justify-between gap-3">
          <div>
            <span class="text-[11px] font-bold uppercase tracking-wider text-blue-700 block mb-1">Variation 3: Clean & Minimal</span>
            <p class="text-xs font-mono text-slate-900 select-all leading-relaxed">${var3}</p>
            <span class="text-[10px] text-slate-500 mt-1 block">${var3.length} chars</span>
          </div>
          <button onclick="copyToClipboard(\`${escapeForAttr(var3)}\`, 'Headline variation 3 copied!')" class="copy-btn text-xs px-3 py-1.5 rounded-lg bg-white hover:bg-blue-50 text-blue-700 font-semibold border border-slate-300 shadow-2xs whitespace-nowrap">
            Copy
          </button>
        </div>
      </div>
    `;
  }
}

// 2. About Summary Generator
function generateAboutDraft() {
  const role = document.getElementById('about-role')?.value.trim() || 'Software Engineer';
  const exp = document.getElementById('about-experience')?.value.trim() || '1+ years of building web applications';
  const tech = document.getElementById('about-tech')?.value.trim() || 'React, TypeScript, Node.js, Tailwind CSS, PostgreSQL';
  const project = document.getElementById('about-project')?.value.trim() || 'Built a full-stack SaaS portal with real-time analytics used by 500+ active users';
  const email = document.getElementById('about-email')?.value.trim() || 'your.email@domain.com';

  const draft = `I am a ${role} with ${exp}. I am driven by creating high-quality, scalable digital experiences that solve real problems.\n\nOver the past years, I have engineered diverse software solutions, including: ${project}.\n\n🛠️ Technical Competencies:\n• Core Technologies: ${tech}\n• Engineering Best Practices: Clean Architecture, Responsive Design, RESTful APIs, Git Workflow\n\n📫 I am always open to discussing new opportunities, open-source projects, or tech collaborations. Feel free to connect or email me directly at ${email}.`;

  const container = document.getElementById('about-results-container');
  if (container) {
    container.innerHTML = `
      <div class="mt-4 p-4 rounded-xl border border-slate-200 bg-slate-50">
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-bold text-slate-700 uppercase tracking-wider">Your Formatted About Summary</span>
          <button onclick="copyToClipboard(\`${escapeForAttr(draft)}\`, 'About summary draft copied!')" class="copy-btn text-xs px-3 py-1.5 rounded-lg bg-blue-600 text-white font-semibold shadow-2xs hover:bg-blue-700">
            Copy Complete Text
          </button>
        </div>
        <div class="p-3.5 bg-white rounded-lg border border-slate-200 text-xs font-mono text-slate-800 whitespace-pre-line leading-relaxed select-all">
          ${escapeHtml(draft)}
        </div>
      </div>
    `;
  }
}

// 3. Bullet Point Metric Optimizer
function optimizeBulletPoint() {
  const rawBullet = document.getElementById('bullet-input')?.value.trim() || 'Worked on website UI and made it faster';
  const verb = document.getElementById('bullet-verb')?.value.trim() || 'Architected';
  const tech = document.getElementById('bullet-tech')?.value.trim() || 'React, Tailwind CSS, and Vite';
  const metric = document.getElementById('bullet-metric')?.value.trim() || 'reducing page load times by 38% for 8,000+ monthly users';

  const optimized = `${verb} user-facing components using ${tech}, ${metric}.`;

  const container = document.getElementById('bullet-results-container');
  if (container) {
    container.innerHTML = `
      <div class="mt-4 p-4 rounded-xl border border-slate-200 bg-slate-50">
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-bold text-emerald-800 uppercase tracking-wider">XYZ Metric Formula Bullet</span>
          <button onclick="copyToClipboard(\`${escapeForAttr(optimized)}\`, 'Optimized bullet copied!')" class="copy-btn text-xs px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-semibold shadow-2xs hover:bg-emerald-700">
            Copy Bullet
          </button>
        </div>
        <div class="p-3 bg-white rounded-lg border border-emerald-200 text-xs font-mono text-slate-900 select-all leading-relaxed">
          • ${escapeHtml(optimized)}
        </div>
      </div>
    `;
  }
}

// Helper: Escape HTML string for safe DOM injection
function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Helper: Escape string for inline attribute template strings
function escapeForAttr(str) {
  if (!str) return '';
  return str.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$').replace(/"/g, '&quot;');
}

// Setup Event Listeners
function setupEventListeners() {
  generateHeadlineVariations();
  generateAboutDraft();
  optimizeBulletPoint();
}
