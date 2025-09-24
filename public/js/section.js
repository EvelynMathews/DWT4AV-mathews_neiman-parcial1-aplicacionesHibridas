const params = new URLSearchParams(location.search);
const section = params.get('section');
const sectionNames = {
  clothing: 'Ropa',
  accessories: 'Accesorios',
  books: 'Libros',
  collectibles: 'Coleccionables',
  food: 'Comestibles'
};

const sectionDescriptions = {
  clothing: 'Descubre prendas oficiales inspiradas en las casas y personajes de Harry Potter. Diseños únicos para vestir con orgullo tu magia.',
  accessories: 'Encuentra varitas, reliquias mágicas y objetos icónicos que complementan cualquier colección de un verdadero fan.',
  books: 'Explora ediciones especiales y colecciones literarias del universo mágico. Ideal para revivir cada historia una y otra vez.',
  collectibles: 'Artículos de edición limitada y piezas exclusivas para quienes buscan atesorar la magia de Harry Potter.',
  food: 'Delicias mágicas como grajeas de todos los sabores, ranas de chocolate y la inconfundible cerveza de mantequilla.'
};

if (!section) {
  window.location.href = '/';
} else {
  document.getElementById('title').textContent = `${sectionNames[section] || section}`;

  const descElement = document.createElement('p');
  descElement.textContent = sectionDescriptions[section] || '';
  descElement.classList.add('section-description');
  document.getElementById('title').insertAdjacentElement('afterend', descElement);

  const filterLabel = document.getElementById('filter-label');
  const categoryInput = document.getElementById('category');

  if (section === 'food') {
    filterLabel.textContent = 'Filtrar por tipo de golosina: ';
    categoryInput.placeholder = 'ej: ranas de chocolate, grajeas';
  } else if (section === 'books') {
    filterLabel.textContent = 'Filtrar por libro: ';
    categoryInput.placeholder = 'ej: piedra filosofal, cámara secreta';
  } else if (section === 'collectibles') {
    filterLabel.textContent = 'Filtrar por personaje y objeto mágico: ';
    categoryInput.placeholder = 'ej: snitch dorada, cartas';
  } else if (section === 'accessories') {
    filterLabel.textContent = 'Filtrar por tipo de accesorio: ';
    categoryInput.placeholder = 'ej: varitas, llaveros';
  } else if (section === 'clothing') {
    filterLabel.textContent = 'Filtrar por casa de Hogwarts: ';
    categoryInput.placeholder = 'ej: Gryffindor, Slytherin';
  } else {
    filterLabel.textContent = 'Filtrar por categoría: ';
    categoryInput.placeholder = 'ej: madera, metal, lana';
  }
}

async function cargar() {
  if (!section) {
    return;
  }
  const category = document.getElementById('category').value.trim();
  const qs = new URLSearchParams({ section, ...(category && { category }) });

  try {
    const res = await fetch(`/api/products?${qs.toString()}`);
    const items = await res.json();

    if (items.length === 0) {
      document.getElementById('list').innerHTML = `
        <div class="no-results">
          <h3>No se encontraron productos</h3>
          <p>No hay productos que coincidan con "${category}" en la categoría ${sectionNames[section]}.</p>
          <p>Intenta con otros términos como: ${section === 'food' ? 'Ranas de chocolate, grajeas, etc' : section === 'books' ? 'piedra filosofal, cámara secreta, etc' : section === 'collectibles' ? 'snitch dorada, cartas, etc' : section === 'clothing' ? 'madera, metal, lana, etc' : 'varitas, llaveros, etc'}</p>
        </div>
      `;
    } else {
      document.getElementById('list').innerHTML = items.map(p => `
        <article class="product-card">
          <h3>${p.name}</h3>
          <img src="${p.img}" alt="${p.name}" class="product-image" />
          <p>${p.description || ''}</p>
          <p class="price"><strong>Precio:</strong> $${p.price}</p>
          <p class="material"><strong>${section === 'food' ? 'Tipo' : section === 'books' ? 'Libro' : section === 'collectibles' ? 'Personaje/Objeto' : section === 'accessories' ? 'Tipo de Accesorio' : section === 'clothing' ? 'Casa/Categoría' : 'Categoría'}:</strong> ${p.category || '-'}</p>
          <p><a href="${p.link}" target="_blank" rel="noopener" class="shop-link">Ver en tienda</a></p>
        </article>
      `).join('');
    }
  } catch (error) {
    document.getElementById('list').innerHTML = `
      <div class="no-results">
        <h3>Error al cargar productos</h3>
        <p>Hubo un problema al conectar con el servidor. Por favor, intenta de nuevo.</p>
      </div>
    `;
  }
}

function limpiarFiltro() {
  document.getElementById('category').value = '';
  cargar();
}

document.getElementById('filtrar').addEventListener('click', cargar);
document.getElementById('limpiar').addEventListener('click', limpiarFiltro);

document.getElementById('category').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    cargar();
  }
});

if (section) {
  cargar();
}