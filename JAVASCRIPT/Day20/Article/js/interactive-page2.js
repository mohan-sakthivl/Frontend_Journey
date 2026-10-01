/**
 * PAGE 2 INTERACTIVE ENGINE: PROGRESSIVE SOFTWARE DEGRADATION SIMULATOR
 * Reflects the reality of software development stopping vs instant disappearance.
 */

document.addEventListener('DOMContentLoaded', () => {
  initCascadeSimulator();
});

const cascadeStages = {
  'day-1': {
    title: 'Day 1 — Nothing Seems Wrong (The Clock Has Started)',
    loss: '₹0 (Nominal Operation)',
    vacancy: '0% (Offices Open)',
    civicOps: '100% (Normal Baseline)',
    displaced: '0 (Initial Shock)',
    meters: {
      lossVal: '5%',
      civicVal: '98%',
      vacancyVal: '0%',
      displacedVal: '2%'
    },
    narrative: 'Phones turn on, UPI processes payments, and Chennai Metro trains run on schedule. Existing compiled binaries continue executing. People think: “Nothing happened.” But the invisible clock has started. Every operating system, database, and microservice is now permanently frozen without future updates.'
  },
  'month-1': {
    title: 'Month 1 — The Maintenance Backlog Begins',
    loss: '₹1,200 Cr / month',
    vacancy: '15% (Hiring Freeze)',
    civicOps: '88% (First Glitches)',
    displaced: '45,000 (Contractors & R&D)',
    meters: {
      lossVal: '25%',
      civicVal: '85%',
      vacancyVal: '15%',
      displacedVal: '20%'
    },
    narrative: 'New security vulnerabilities emerge across servers and APIs. With nobody to write patches, teams apply crude workarounds. The question inside tech firms along OMR shifts from “How do we build the next feature?” to “How long can we keep the current version alive?”'
  },
  'month-6': {
    title: '6 Months to 1 Year — Legacy Systems Take Over',
    loss: '₹14,500 Cr',
    vacancy: '45% (Project Abandonment)',
    civicOps: '62% (Severe Fragility)',
    displaced: '250,000+ Engineers',
    meters: {
      lossVal: '55%',
      civicVal: '60%',
      vacancyVal: '45%',
      displacedVal: '50%'
    },
    narrative: 'New hardware cannot be integrated with old drivers. Tamil Nadu government portals (e-Sevai, e-Office) face recurring database corruption. Chennai hospitals struggle as electronic health record systems crash under expanding datasets. Cybersecurity risk turns critical.'
  },
  'year-3': {
    title: '3 to 5 Years Later — Systemic Gridlock & The OMR Effect',
    loss: '₹85,460 Cr (State IT Exports Erased)',
    vacancy: '88% (Corridor Ghost Towns)',
    civicOps: '40% (Manual Fallbacks)',
    displaced: '1,500,000+ (Direct + Indirect)',
    meters: {
      lossVal: '95%',
      civicVal: '40%',
      vacancyVal: '88%',
      displacedVal: '92%'
    },
    narrative: 'The collapse spreads through the physical economy. Sholinganallur, Siruseri, and Perungudi tech parks stand largely empty. The cascading effect impacts 12,000 PG hostels, restaurants, cabs, and real estate. Chennai Metro and municipal services revert to manual paper clipboards.'
  }
};

function initCascadeSimulator() {
  const buttons = document.querySelectorAll('.cascade-step-btn');
  const stageTitle = document.getElementById('cascade-stage-title');
  const stageDesc = document.getElementById('cascade-narrative-text');
  
  const lossEl = document.getElementById('metric-loss');
  const civicEl = document.getElementById('metric-civic');
  const vacancyEl = document.getElementById('metric-vacancy');
  const displacedEl = document.getElementById('metric-displaced');

  const barLoss = document.getElementById('bar-loss');
  const barCivic = document.getElementById('bar-civic');
  const barVacancy = document.getElementById('bar-vacancy');
  const barDisplaced = document.getElementById('bar-displaced');

  if (!buttons.length || !stageTitle) return;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const stageKey = btn.getAttribute('data-stage');
      const data = cascadeStages[stageKey];
      if (!data) return;

      stageTitle.textContent = data.title;
      stageDesc.textContent = data.narrative;

      if (lossEl) lossEl.textContent = data.loss;
      if (civicEl) civicEl.textContent = data.civicOps;
      if (vacancyEl) vacancyEl.textContent = data.vacancy;
      if (displacedEl) displacedEl.textContent = data.displaced;

      if (barLoss) barLoss.style.width = data.meters.lossVal;
      if (barCivic) barCivic.style.width = data.meters.civicVal;
      if (barVacancy) barVacancy.style.width = data.meters.vacancyVal;
      if (barDisplaced) barDisplaced.style.width = data.meters.displacedVal;
    });
  });
}
