/**
 * PAGE 3 INTERACTIVE ENGINE: RESILIENCE ARCHITECTURE & CAREER ASSESSMENT
 */

document.addEventListener('DOMContentLoaded', () => {
  initCareerAssessment();
});

const recommendations = {
  hardware: {
    title: 'Track 1: Cyber-Physical & Hardware Prototyping Specialist',
    skills: 'Embedded C/Rust, CAN-Bus, Microcontrollers, ROS2',
    action: 'Pivot toward physical hardware and embedded electronics. Master microcontrollers that govern motors, pumps, inverters, and automotive sensors.'
  },
  biotech: {
    title: 'Track 2: Bio-Computing & Ecological Systems Specialist',
    skills: 'Sensors, Irrigation Automation, Desalination telemetry, Data Analysis',
    action: 'Connect computation with physical ecology and agriculture. Develop instrumentation for water management, solar microgrids, and precision farming.'
  },
  systems: {
    title: 'Track 3: Anti-Fragile Systems & Grid Resilience Engineer',
    skills: 'Power Distribution, Offline Mesh Radio, Fault-Tolerant Architecture',
    action: 'Specialize in critical civil infrastructure designed to function even when external cloud networks fail. Master local power grids and analog backups.'
  }
};

function initCareerAssessment() {
  const options = document.querySelectorAll('.quiz-opt-btn');
  const resultCard = document.getElementById('quiz-result-card');
  const resultTitle = document.getElementById('result-title');
  const resultSkills = document.getElementById('result-skills');
  const resultAction = document.getElementById('result-action');

  const answers = { q1: null, q2: null, q3: null };

  options.forEach(opt => {
    opt.addEventListener('click', () => {
      const q = opt.getAttribute('data-q');
      const val = opt.getAttribute('data-val');

      const siblings = document.querySelectorAll(`.quiz-opt-btn[data-q="${q}"]`);
      siblings.forEach(s => s.classList.remove('selected'));
      opt.classList.add('selected');

      answers[q] = val;

      if (answers.q1 && answers.q2 && answers.q3) {
        generateRecommendation();
      }
    });
  });

  function generateRecommendation() {
    let key = 'hardware';
    if (answers.q3 === 'bio' || answers.q1 === 'data') {
      key = 'biotech';
    } else if (answers.q3 === 'grid' || answers.q2 === 'none') {
      key = 'systems';
    }

    const rec = recommendations[key];
    if (!resultCard || !rec) return;

    resultTitle.textContent = rec.title;
    resultAction.textContent = rec.action;
    if (resultSkills) resultSkills.textContent = rec.skills;

    resultCard.classList.add('active');
  }
}
