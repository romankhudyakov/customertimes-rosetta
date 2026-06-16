// Report gallery interactivity + estimator. Pure ES module, no deps.

const REPORTS = window.__ROSETTA_REPORTS__ || [];

function bindGallery() {
  const list = document.getElementById('report-list');
  const body = document.getElementById('report-body');
  const fname = document.getElementById('report-filename');
  if (!list || !body) return;

  function render(id) {
    const r = REPORTS.find(x => x.id === id) || REPORTS[0];
    if (!r) return;
    const gradeHtml = r.grade
      ? `<span class="grade ${r.gradeClass === 'bad' ? 'bad' : r.gradeClass === 'warn' ? 'warn' : ''}"><span class="v">${r.grade}</span></span>`
      : '';
    body.innerHTML = `
      <div class="meta">${r.meta}</div>
      <h4>${r.title}</h4>
      ${gradeHtml}
      ${r.body}
    `;
    fname.textContent = `rosetta-report-${r.num}-${r.id}.md`;
    list.querySelectorAll('button').forEach(b => b.classList.toggle('active', b.dataset.id === r.id));
  }

  list.addEventListener('click', e => {
    const btn = e.target.closest('button[data-id]');
    if (btn) render(btn.dataset.id);
  });
  render(list.querySelector('button.active')?.dataset.id || REPORTS[0]?.id);
}

function bindEstimator() {
  const ids = ['apex', 'flows', 'triggers', 'coverage', 'wf', 'old'];
  const els = {};
  ids.forEach(k => {
    els[k] = document.getElementById(`e-${k}`);
    els[k + 'v'] = document.getElementById(`e-${k}-v`);
  });
  const grade = document.getElementById('e-grade');
  const score = document.getElementById('e-score');
  const ann = document.getElementById('e-ann');
  const result = document.getElementById('e-result');
  if (!grade) return;

  function recompute() {
    const apex = +els.apex.value;
    const flows = +els.flows.value;
    const triggers = +els.triggers.value;
    const coverage = +els.coverage.value;
    const wf = +els.wf.value;
    const old = +els.old.value;

    els.apexv.textContent = apex;
    els.flowsv.textContent = flows;
    els.triggersv.textContent = triggers;
    els.coveragev.textContent = coverage + '%';
    els.wfv.textContent = wf;
    els.oldv.textContent = old;

    // Heuristic scoring — illustrative only
    let s = 100;
    s -= Math.min(20, Math.max(0, (triggers - 1) * 6));            // triggers per object beyond 1
    s -= Math.min(18, Math.max(0, (85 - coverage) * 0.9));          // coverage below 85
    s -= Math.min(15, wf * 0.18);                                   // active workflow rules
    s -= Math.min(20, old * 0.4);                                   // stale API classes
    s -= Math.min(8, Math.max(0, (apex - 500) / 200));              // sheer Apex sprawl
    s -= Math.min(6, Math.max(0, (flows - 100) / 40));              // flow sprawl
    s = Math.max(20, Math.round(s));

    let letter = 'A';
    if (s < 92) letter = 'A-';
    if (s < 87) letter = 'B+';
    if (s < 83) letter = 'B';
    if (s < 78) letter = 'B-';
    if (s < 74) letter = 'C+';
    if (s < 70) letter = 'C';
    if (s < 66) letter = 'C-';
    if (s < 62) letter = 'D+';
    if (s < 58) letter = 'D';
    if (s < 54) letter = 'D-';
    if (s < 50) letter = 'F';

    grade.textContent = letter;
    score.textContent = `${s} / 100`;

    let label, cls = '';
    if (s >= 85) { label = 'Solid foundation with a few targeted cleanups. Run a real scan to find the named offenders.'; }
    else if (s >= 70) { label = 'Real debt accumulating. Most of it is fixable in a single, scoped workstream — once you know which classes to attack.'; cls = 'warn'; }
    else if (s >= 55) { label = 'Significant debt. Deployment risk is elevated. Rosetta would surface the top 10 offenders with named patches in a few hours.'; cls = 'warn'; }
    else { label = 'Critical. Release pipeline is fragile. Recommended: full scan + opinionated remediation plan inside 7 days.'; cls = 'bad'; }
    ann.textContent = label;
    result.classList.remove('warn','bad');
    if (cls) result.classList.add(cls);
  }

  ids.forEach(k => els[k].addEventListener('input', recompute));
  recompute();
}

document.addEventListener('DOMContentLoaded', () => {
  bindGallery();
  bindEstimator();
});
