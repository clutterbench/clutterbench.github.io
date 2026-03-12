/* ================================================================
   ClutterBench Project Page — JavaScript
   ================================================================ */

/* ── Tab switching ── */
function showTab(id, btn, groupId) {
  const group = document.getElementById(groupId);
  group.querySelectorAll(':scope > div').forEach(d => d.style.display = 'none');
  document.getElementById(id).style.display = '';
  btn.closest('.tab-group').querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
}

/* ── BibTeX copy ── */
function copyBibtex() {
  const text = [
    '@inproceedings{clutterbench2026,',
    '  title     = {ClutterBench: A Benchmark for Evaluating',
    '               Vision-Language-Action Models in Cluttered Environments},',
    '  author    = {Anonymous Authors},',
    '  booktitle = {IEEE/RSJ International Conference on',
    '               Intelligent Robots and Systems (IROS)},',
    '  year      = {2026},',
    '  url       = {https://clutterbench.github.io/}',
    '}'
  ].join('\n');

  navigator.clipboard.writeText(text).then(() => {
    const btn = document.querySelector('.copy-btn');
    btn.textContent = 'Copied!';
    setTimeout(() => btn.textContent = 'Copy', 2000);
  });
}
