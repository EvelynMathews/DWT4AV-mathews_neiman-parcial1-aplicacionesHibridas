async function cargar(){
  const res = await fetch('/api/houses');
  const houses = await res.json();
  document.getElementById('houses').innerHTML = `
    <div class="row justify-content-center">
      ${houses.map(h => `
        <div class="col-md-6 col-lg-3 mb-4">
          <article class="house-card house-${h.name.toLowerCase()} text-center">
            <h3>${h.name}</h3>
            <img src="${h.img}" alt="${h.name}" class="house-image" />
            <p><strong>Colores:</strong> ${h.colors.join(', ')}</p>
            <p><strong>Lema:</strong> ${h.motto}</p>
            <p><strong>Magos importantes:</strong> ${h.importantWizards.join(', ')}</p>
          </article>
        </div>
      `).join('')}
    </div>
  `;
}
cargar();