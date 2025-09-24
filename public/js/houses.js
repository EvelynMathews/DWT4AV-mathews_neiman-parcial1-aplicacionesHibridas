async function cargar(){
  const res = await fetch('/api/houses');
  const houses = await res.json();
  document.getElementById('houses').innerHTML = houses.map(h => `
    <article class="house-card">
      <h3>${h.name}</h3>
      <img src="${h.img}" alt="${h.name}" class="house-image" />
      <p><strong>Colores:</strong> ${h.colors.join(', ')}</p>
      <p><strong>Lema:</strong> ${h.motto}</p>
    </article>
  `).join('');
}
cargar();