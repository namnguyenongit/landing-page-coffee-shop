import { menuData, reviewData, blogData, contactData } from './data.js'

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const navigationBtn = $('.nav-icons')
const linkItemsBtn = $$('.links-items-btn')
const menuButtons = $('.content-body-buttons')
const menuDishes = $('.content-body-data')
const reviewList = $('.review-list')
const carousel = $('.carousel')
const blogList = $('.blog-list')
const contactList = $('.contact-items')
const previewImages = $$('.agency-items > img')
const previewWindow = $('.preview-window')
const submitBtn = $('#submit')

window.onload = () => {
  if (window.innerWidth <= 960) {
    $('#links-items').style.display = 'none'
  }
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
  const blogListHtml = blogData
    .map((data) => {
      return `
      <div class="blog-item">
        <div class="blog-item-head">
          <img src=${data.image}>
        </div>
        <div class="blog-item-content">
          <button class="blog-content-address">${data.address}</button>
          <div class="blog-content-dish">${data.dish}</div>
          <div class="blog-content-des">${data.description}</div>
        </div>
      </div>
    `
    })
    .join('')
  const contactHtml = contactData
    .map((data) => {
      return `
      <div class="contact-item">
        <i class=${data.icon}></i>
        <div class="contact-item-title">${data.title}</div>
        <div class="contact-item-des">${data.description}</div>
      </div>
    `
    })
    .join('')
  blogList.innerHTML = blogListHtml
  menuDishes.innerHTML = menuHtml
  reviewList.innerHTML = reviewHtml
  contactList.innerHTML = contactHtml
}

previewImages.forEach((image) => {
  image.onclick = (e) => {
    if (window.innerWidth > 768) {
      previewWindow.innerHTML = `
          <div class="close-window-btn">
            <i class="ti-close"></i>
          </div>
          <img src=${e.target.getAttribute('src')}>
        `
      previewWindow.classList.remove('hide')
      $('.close-window-btn').onclick = () => {
        previewWindow.classList.add('hide')
      }
    }
  }
})

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
    linkList.style.display = 'none'
  }
}
// Popup in navigation bar
navigationBtn.onclick = () => {
  const linkList = document.querySelector('#links-items')
  if (linkList.style.display == 'flex') linkList.style.display = 'none'
  else linkList.style.display = 'flex'
}
linkItemsBtn.forEach((item) => {
  item.onclick = () => {
    if (window.innerWidth <= 960) {
      const linkList = document.querySelector('#links-items')
      linkList.style.display = 'none'
    }
  }
})

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

submitBtn.onclick = (e) => {
  e.preventDefault()
  alert('Thank you for checking out this page!')
}
