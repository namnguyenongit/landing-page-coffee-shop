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
