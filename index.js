const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const menuButtons = $('.content-body-buttons')
const menuDishes = $('.content-body-data')
const reviewList = $('.review-list')

const menuData = [
  {
    type: 'bread',
    name: 'Banana bread',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non omnis qui, nobis, assumenda, facilis quis aut exercitationem.',
    price: 12.09,
  },
  {
    type: 'bread',
    name: 'Baguette',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non omnis qui, nobis, assumenda, facilis quis aut exercitationem.',
    price: 4.11,
  },
  {
    type: 'bread',
    name: 'Breadstick',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non omnis qui, nobis, assumenda, facilis quis aut exercitationem.',
    price: 12.09,
  },
  {
    type: 'bread',
    name: 'Brioche',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non omnis qui, nobis, assumenda, facilis quis aut exercitationem.',
    price: 20.01,
  },
  {
    type: 'bread',
    name: 'Challah',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non omnis qui, nobis, assumenda, facilis quis aut exercitationem.',
    price: 12.09,
  },
  {
    type: 'bread',
    name: 'Ciabatta',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non omnis qui, nobis, assumenda, facilis quis aut exercitationem.',
    price: 12.09,
  },
  {
    type: 'cakes',
    name: 'Butter',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non omnis qui, nobis, assumenda, facilis quis aut exercitationem.',
    price: 12.09,
  },
  {
    type: 'cakes',
    name: 'Pound',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non omnis qui, nobis, assumenda, facilis quis aut exercitationem.',
    price: 12.09,
  },
  {
    type: 'cakes',
    name: 'Biscuit',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non omnis qui, nobis, assumenda, facilis quis aut exercitationem.',
    price: 12.09,
  },
  {
    type: 'cakes',
    name: 'Chiffon',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non omnis qui, nobis, assumenda, facilis quis aut exercitationem.',
    price: 12.09,
  },
  {
    type: 'pastry',
    name: 'Shortcrust',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non omnis qui, nobis, assumenda, facilis quis aut exercitationem.',
    price: 12.09,
  },
  {
    type: 'pastry',
    name: 'Choux',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non omnis qui, nobis, assumenda, facilis quis aut exercitationem.',
    price: 12.09,
  },
  {
    type: 'pastry',
    name: 'Filo',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non omnis qui, nobis, assumenda, facilis quis aut exercitationem.',
    price: 12.09,
  },
  {
    type: 'pastry',
    name: 'Flaky',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non omnis qui, nobis, assumenda, facilis quis aut exercitationem.',
    price: 12.09,
  },
  {
    type: 'cookie',
    name: 'Chocolate Chip',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non omnis qui, nobis, assumenda, facilis quis aut exercitationem.',
    price: 12.09,
  },
  {
    type: 'cookie',
    name: 'Shortbread',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non omnis qui, nobis, assumenda, facilis quis aut exercitationem.',
    price: 12.09,
  },
  {
    type: 'cookie',
    name: 'Macaron',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non omnis qui, nobis, assumenda, facilis quis aut exercitationem.',
    price: 12.09,
  },
  {
    type: 'cookie',
    name: 'Biscotti',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non omnis qui, nobis, assumenda, facilis quis aut exercitationem.',
    price: 12.09,
  },
  {
    type: 'cookie',
    name: 'Oatmeal',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non omnis qui, nobis, assumenda, facilis quis aut exercitationem.',
    price: 12.09,
  },
  {
    type: 'cookie',
    name: 'Gingerbread',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non omnis qui, nobis, assumenda, facilis quis aut exercitationem.',
    price: 12.09,
  },
  {
    type: 'desserts',
    name: 'Confection',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non omnis qui, nobis, assumenda, facilis quis aut exercitationem.',
    price: 12.09,
  },
  {
    type: 'desserts',
    name: 'Custards',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non omnis qui, nobis, assumenda, facilis quis aut exercitationem.',
    price: 12.09,
  },
  {
    type: 'desserts',
    name: 'Deep-fried',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non omnis qui, nobis, assumenda, facilis quis aut exercitationem.',
    price: 12.09,
  },
  {
    type: 'desserts',
    name: 'Pastries',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non omnis qui, nobis, assumenda, facilis quis aut exercitationem.',
    price: 12.09,
  },
  {
    type: 'drinks',
    name: 'Macchiato',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non omnis qui, nobis, assumenda, facilis quis aut exercitationem.',
    price: 12.09,
  },
  {
    type: 'drinks',
    name: 'Cider',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non omnis qui, nobis, assumenda, facilis quis aut exercitationem.',
    price: 12.09,
  },
  {
    type: 'drinks',
    name: 'Milk',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non omnis qui, nobis, assumenda, facilis quis aut exercitationem.',
    price: 12.09,
  },
  {
    type: 'drinks',
    name: 'Wine',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non omnis qui, nobis, assumenda, facilis quis aut exercitationem.',
    price: 12.09,
  },
  {
    type: 'drinks',
    name: 'Latte',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non omnis qui, nobis, assumenda, facilis quis aut exercitationem.',
    price: 12.09,
  },
  {
    type: 'drinks',
    name: 'Soft drinks',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non omnis qui, nobis, assumenda, facilis quis aut exercitationem.',
    price: 12.09,
  },
]

const reviewData = [
  {
    name: 'nathan ford',
    company: 'google inc',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id neque impedit ex inventore? Ipsa quo facilis, accusantium neque amet labore saepe dolorum, officia animi molestias nemo obcaecati tempore eius quasi?',
  },
  {
    name: 'nathan ford',
    company: 'google inc',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id neque impedit ex inventore? Ipsa quo facilis, accusantium neque amet labore saepe dolorum, officia animi molestias nemo obcaecati tempore eius quasi?',
  },
  {
    name: 'nathan ford',
    company: 'google inc',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id neque impedit ex inventore? Ipsa quo facilis, accusantium neque amet labore saepe dolorum, officia animi molestias nemo obcaecati tempore eius quasi?',
  },
]

window.onscroll = () => {
  if (window.innerWidth > 960) {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      Object.assign(document.getElementById('nav').style, {
        background: '#000',
        padding: '1rem 2rem 1rem 2rem',
      })
    } else {
      Object.assign(document.getElementById('nav').style, {
        background: 'transparent',
        padding: '2rem',
      })
    }
  } else {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      Object.assign(document.getElementById('nav').style, {
        background: '#000',
      })
    } else {
      Object.assign(document.getElementById('nav').style, {
        background: 'transparent',
      })
    }
  }
}
let isDone = true
window.onresize = () => {
  const linkList = document.querySelector('#links-items')
  if (window.innerWidth > 960) {
    linkList.style.display = 'flex'
    isDone = true
  } else if (isDone && window.innerWidth <= 960) {
    isDone = false
    handlePopup()
  }
}
// Popup in navigation bar
const handlePopup = () => {
  const linkList = document.querySelector('#links-items')
  if (linkList.style.display == 'flex') linkList.style.display = 'none'
  else linkList.style.display = 'flex'
}
const handlePopupClicked = () => {
  if (window.innerWidth <= 960) {
    const linkList = document.querySelector('#links-items')
    linkList.style.display = 'none'
  }
}

window.onload = () => {
  // Default menu data
  const menuHtml = menuData
    .filter((data) => data.type === 'bread')
    .map((data) => {
      return `
          <div class="content-body-data-item">
            <div class="data-item-content">
              <div class="data-item-head">${data.name}</div>
              <div class="data-item-des">${data.description}</div>
            </div>
            <div class="data-item-price">$${data.price}</div>
          </div>
        `
    })
    .join('')
  const reviewHtml = reviewData
    .map((data) => {
      return `
      <div class="review-item">
        <i class="ti-quote-left"></i>
        <div class="review-text">${data.review}</div>
        <div class="review-vote">
          <i class="ti-star"></i>
          <i class="ti-star"></i>
          <i class="ti-star"></i>
          <i class="ti-star"></i>
          <i class="ti-star"></i>
        </div>
        <div class="review-name">${data.name}</div>
        <div class="review-company">${data.company}</div>
      </div>
    `
    })
    .join('')
  menuDishes.innerHTML = menuHtml
  reviewList.innerHTML = reviewHtml
}

// Click on menu buttons
menuButtons.onclick = (e) => {
  if (e.target.tagName === 'IMG') {
    const icons = $$('.content-body-button > img')
    icons.forEach((icon) => {
      icon.classList.remove('button-clicked')
    })
    e.target.classList.add('button-clicked')

    const html = menuData
      .filter((data) => data.type === e.target.id)
      .map((data) => {
        return `
          <div class="content-body-data-item">
            <div class="data-item-content">
              <div class="data-item-head">${data.name}</div>
              <div class="data-item-des">${data.description}</div>
            </div>
            <div class="data-item-price">$${data.price}</div>
          </div>
        `
      })
      .join('')
    menuDishes.innerHTML = html
  }
}
