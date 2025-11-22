document.getElementById('printBtn')?.addEventListener('click', () => window.print());

const expandAllBtn = document.getElementById('expandAllBtn');
const collapseAllBtn = document.getElementById('collapseAllBtn');

function setAllDetails(open) {
  document.querySelectorAll('details.block').forEach((el) => {
    el.open = open;
  });
}

expandAllBtn?.addEventListener('click', () => setAllDetails(true));
collapseAllBtn?.addEventListener('click', () => setAllDetails(false));
