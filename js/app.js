let currentTab = 'teleconsulta';

function renderCards(data) {
  const container = document.getElementById('cards-container');
  const q = document.getElementById('search').value.toLowerCase();
  const countryFilter = document.getElementById('country-filter').value.toLowerCase();
  const langFilter = document.getElementById('lang-filter').value.toLowerCase();

  const filtered = data.filter(item => {
    const text = JSON.stringify(item).toLowerCase();
    const matchQ = !q || text.includes(q);
    const matchCountry = !countryFilter || (item.country || '').toLowerCase().includes(countryFilter);
    const matchLang = (currentTab !== 'teleconsulta' || !langFilter) ||
      (item.lang || '').toLowerCase().includes(langFilter);
    return matchQ && matchCountry && matchLang;
  });

  if (!filtered.length) {
    container.innerHTML = '<p class="empty">Sin resultados para esta busqueda.</p>';
    return;
  }
  container.innerHTML = filtered.map(item => buildCard(item, currentTab)).join('');
}

function buildCard(item, tab) {
  const langs = (item.lang || '').split('/').map(l => `<span class="badge badge-lang">${l.trim()}</span>`).join('');
  const countryBadge = item.country ? `<span class="badge badge-country"> ${item.country} </span>` : '';
  const typeBadge = item.type ? `<span class="badge badge-type"> ${item.type} </span>` : '';
  const phone = item.phone ? `<div class="info-row"><span>Tel:</span><span>${item.phone}</span></div>` : '';
  const email = item.email ? `<div class="info-row"><span>Email:</span><span>${item.email}</span></div>` : '';
  const schedule = item.schedule ? `<div class="info-row"><span>Horario:</span><span>${item.schedule}</span></div>` : '';
  const city = item.city && item.city !== '-' ? `<div class="info-row"><span>Ciudad:</span><span>${item.city}</span></div>` : '';
  const address = item.address ? `<div class="info-row"><span>Direccion:</span><span>${item.address}</span></div>` : '';
  const specialty = item.specialty ? `<div class="card-specialty">${item.specialty}</div>` : '';
  const note = item.note ? `<div class="note">Nota: ${item.note}</div>` : '';
  const web = item.web ? `<div class="info-row"><span>Web:</span><span><a href="${item.web}" target="_blank">${item.web}</a></span></div>` : '';
  const platform = item.platform ? `<div class="info-row"><span>Plataforma:</span><span>${item.platform}</span></div>` : '';
  const process = item.process ? `<div class="info-row"><span>Proceso:</span><span>${item.process}</span></div>` : '';
  const pharmacy = item.pharmacy ? `<div class="info-row"><span>Farmacia:</span><span>${item.pharmacy}</span></div>` : '';
  const forbidden = item.forbidden ? `<div class="info-row warn"><span>NO cubre:</span><span>${item.forbidden}</span></div>` : '';

  return `
    <div class="card">
      <div class="card-name">${item.name}</div>
      ${specialty}
      <div class="badge-row">${langs}${countryBadge}${typeBadge}</div>
      <div class="card-details">${phone}${email}${schedule}${city}${address}${web}${platform}${process}${pharmacy}${forbidden}${note}</div>
    </div>`;
}

function setTab(tab) {
  currentTab = tab;
  document.querySelectorAll('.tab').forEach(btn =>
    btn.classList.toggle('active', btn.dataset.tab === tab));

  const langFilter = document.getElementById('lang-filter');
  if (tab === 'teleconsulta') {
    langFilter.style.display = '';
  } else {
    langFilter.style.display = 'none';
    langFilter.value = '';
  }

  renderCards(SERVICES[tab]);
}

document.querySelectorAll('.tab').forEach(btn => btn.addEventListener('click', () => setTab(btn.dataset.tab)));
document.getElementById('search').addEventListener('input', () => renderCards(SERVICES[currentTab]));
document.getElementById('country-filter').addEventListener('change', () => renderCards(SERVICES[currentTab]));
document.getElementById('lang-filter').addEventListener('change', () => renderCards(SERVICES[currentTab]));

setTab('teleconsulta');
