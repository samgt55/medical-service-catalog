let currentTab = 'teleconsulta';

function renderCards(data) {
  const container = document.getElementById('cards-container');
  const q = document.getElementById('search').value.toLowerCase();
  const countryFilter = document.getElementById('country-filter').value.toLowerCase();

  const filtered = data.filter(item => {
    const text = JSON.stringify(item).toLowerCase();
    const matchQ = !q || text.includes(q);
    const matchCountry = !countryFilter || (item.country || '').toLowerCase().includes(countryFilter);
    return matchQ && matchCountry;
  });

  if (!filtered.length) {
    container.innerHTML = '<p class="empty">Sin resultados para esta búsqueda.</p>';
    return;
  }
  container.innerHTML = filtered.map(item => buildCard(item, currentTab)).join('');
}

function buildCard(item, tab) {
  const langs = (item.lang || '').split('/').map(l => `<span class="badge badge-lang">${l.trim()}</span>`).join('');
  const countryBadge = item.country ? `<span class="badge badge-country"> 📍 ${item.country} </span>` : '';
  const typeBadge = item.type ? `<span class="badge badge-type"> ${item.type} </span>` : '';
  const phone = item.phone ? `<div class="info-row"><span>📞</span><span>${item.phone}</span></div>` : '';
  const email = item.email ? `<div class="info-row"><span>✉️</span><span>${item.email}</span></div>` : '';
  const schedule = item.schedule ? `<div class="info-row"><span>🕐</span><span>${item.schedule}</span></div>` : '';
  const city = item.city && item.city !== '–' ? `<div class="info-row"><span>🏙️</span><span>${item.city}</span></div>` : '';
  const address = item.address ? `<div class="info-row"><span>📌</span><span>${item.address}</span></div>` : '';
  const specialty = item.specialty ? `<div class="card-specialty">${item.specialty}</div>` : '';
  const note = item.note ? `<div class="note">ℹ️ ${item.note}</div>` : '';

  return `
    <div class="card">
      <div class="card-name">${item.name}</div>
      ${specialty}
      <div class="badge-row">${langs}${countryBadge}${typeBadge}</div>
      <div class="card-details">${phone}${email}${schedule}${city}${address}${note}</div>
    </div>`;
}

function setTab(tab) {
  currentTab = tab;
  document.querySelectorAll('.tab').forEach(btn =>
    btn.classList.toggle('active', btn.dataset.tab === tab));
  renderCards(SERVICES[tab]);
}

document.querySelectorAll('.tab').forEach(btn => btn.addEventListener('click', () => setTab(btn.dataset.tab)));
document.getElementById('search').addEventListener('input', () => renderCards(SERVICES[currentTab]));
document.getElementById('country-filter').addEventListener('change', () => renderCards(SERVICES[currentTab]));

renderCards(SERVICES[currentTab]);
