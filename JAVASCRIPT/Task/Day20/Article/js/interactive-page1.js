/**
 * PAGE 1 INTERACTIVE ENGINE: 2030+ WORKFLOW SIMULATOR & TECH PARADIGM
 */

document.addEventListener('DOMContentLoaded', () => {
  initTimelineSimulator();
});

const timelineData = {
  '09:00': {
    badge: 'Cognitive Architecture // Swarm Directive',
    title: 'Natural Intent Specification & Agent Swarm Seeding',
    desc: 'The engineer frames high-level business goals, safety limits, and performance boundaries. A cluster of specialized agents creates the implementation specifications without manual syntax typing.',
    log: '[09:00:14] Orchestrator: Ingested Intent -> "Deploy low-latency routing for medical delivery in Chennai".\n[09:00:18] Sub-Agent Pool: 14 modules compiled and validated automatically.'
  },
  '11:30': {
    badge: 'Verification Engine // Math Proof',
    title: 'Formal Verification & Logic Validation',
    desc: 'Automated solvers and proof assistants mathematically confirm that synthesized logic has zero memory leaks, security flaws, or concurrency deadlocks.',
    log: '[11:30:05] SMT-Solver: Verifying theorem bounds for concurrent dispatch...\n[11:30:19] Result: Formal proof established. 0 invariant violations detected.'
  },
  '14:00': {
    badge: 'Physical Compute // Edge Integration',
    title: 'Neuromorphic Silicon & Edge Calibration',
    desc: 'Connecting software agents with physical hardware actuators. Calibrating spiking neural network weights on low-power edge chips embedded in vehicles and robotics.',
    log: '[14:00:11] Target: Low-power edge neural chip.\n[14:00:25] Telemetry: 100,000 spikes/sec @ 4.2 milliwatts power consumption.'
  },
  '16:30': {
    badge: 'AI Safety // Adversarial Auditing',
    title: 'Alignment Auditing & Red-Teaming',
    desc: 'Continuous surveillance of agent behaviors. The human engineer tests edge cases, verifies data privacy, and prevents unwanted shortcuts in agent networks.',
    log: '[16:30:12] Red-Team Cluster: Fuzzing agent protocol with 50,000 synthetic test cases.\n[16:30:44] Intervention: Safety constraint updated; agent redirected within bounds.'
  },
  '18:00': {
    badge: 'Green Compute // Grid Synthesis',
    title: 'Energy Optimization & Coprocessor Offloading',
    desc: 'Reviewing carbon and compute budgets. Offloading complex combinatorial problems to specialized coprocessors while keeping latency minimal.',
    log: '[18:00:03] Workload: Delivery route matrix with 4.8 million permutations.\n[18:00:15] Offload Engine: Completed in 410 ms. Minimal energy impact.'
  }
};

function initTimelineSimulator() {
  const tabs = document.querySelectorAll('.time-tab-btn');
  const badgeEl = document.getElementById('timeline-role-badge');
  const titleEl = document.getElementById('timeline-action-title');
  const descEl = document.getElementById('timeline-action-desc');
  const logEl = document.getElementById('timeline-console-log');

  if (!tabs.length || !titleEl) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const timeKey = tab.getAttribute('data-time');
      const data = timelineData[timeKey];
      if (!data) return;

      badgeEl.textContent = data.badge;
      titleEl.textContent = data.title;
      descEl.textContent = data.desc;
      logEl.textContent = data.log;
    });
  });
}
