async function loadCategoryImages() {
  const categories = ['clothing', 'accessories', 'books', 'collectibles', 'food'];

  for (const category of categories) {
    try {
      const response = await fetch(`/api/products?section=${category}`);
      const products = await response.json();

      if (products.length > 0) {
        const randomProduct = products[Math.floor(Math.random() * products.length)];
        const categoryImage = document.querySelector(`.category-card.${category} .category-image`);
        if (categoryImage && randomProduct.img) {
          categoryImage.src = randomProduct.img;
        }
      }
    } catch (error) {
      console.log(`No se pudo cargar imagen para ${category}:`, error);
    }
  }
}

function parallaxEffect() {
  const banner = document.querySelector('.banner-image');
  if (banner) {
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.5;
    banner.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
  }
}

window.addEventListener('scroll', parallaxEffect);
document.addEventListener('DOMContentLoaded', loadCategoryImages);