window.addEventListener('DOMContentLoaded', () => {
  const carousels = document.querySelectorAll('.infinite-carousel')

  const directions = [
    'normal', 'reverse', 'normal', 'reverse'
  ]

  const speeds = [
    35, 50, 30, 42
  ]

  carousels.forEach((carousel, i) => {
    const carouselInner = carousel.querySelector('.infinite-carousel div')
    const carouselContent = Array.from(carouselInner.children)

    carouselContent.forEach(item => {
      const duplicatedItem = item.cloneNode(true)

      carouselInner.appendChild(duplicatedItem)
    })

    carouselInner.style.animation = `move ${speeds[i]}s linear infinite ${directions[i]}}`
  })
})
