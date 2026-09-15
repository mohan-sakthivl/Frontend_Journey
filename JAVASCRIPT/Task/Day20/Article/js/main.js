/**
 * THE CHRONICLE // CORE SITE SCRIPTS
 * Reading progress bar and clean interactive utilities.
 */

document.addEventListener('DOMContentLoaded', () => {
  initReadingProgress();
});

/* Reading Progress Bar */
function initReadingProgress() {
  const progressBar = document.getElementById('reading-progress-bar');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight <= 0) return;
    const progress = (window.scrollY / totalHeight) * 100;
    progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  }, { passive: true });
}
