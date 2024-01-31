const burgerBtn = document.getElementById('burger-btn');
const navMenu = document.getElementById('nav-Menu');
const subNav = document.querySelector(`.subnav`)

burgerBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  burgerBtn.classList.toggle('open');
})

const navIds = [
  "aboutCompany",
  "production",
  "services",
  "services",
  "services"
]
const navIdsSub = [
  "kadr",
]

navIds.forEach(id => {
  const subNavContent = document.getElementById(`nav-${id}`);
  
  document.getElementById(id).addEventListener('click', () => {
    navIds.forEach(ids => {
      if (ids != id) {
        document.getElementById(`nav-${ids}`).classList.remove('open');
      }
    })

    if (subNavContent.classList.contains('open')) {
      subNavContent.classList.remove('open');
    } else {
      subNavContent.classList.add('open');
    }
  })
})

function hideSubNav(id) {
  let item = document.getElementById(id);
  if(item.classList.contains('open')) {
    item.classList.remove('open');
  } else {
    item.classList.add('open');
  }
}

navIdsSub.forEach(id => {
  document.getElementById(id).addEventListener('click', () => {
    document.querySelector(`.subnav__container_${id}`).classList.add('openclick');
  })
  document.getElementById(id).addEventListener('mouseover', () => {
    document.querySelector(`.subnav__container_${id}`).classList.add('open');
  })
  document.getElementById(id).addEventListener('mouseout', () => {
    document.querySelector(`.subnav__container_${id}`).classList.remove('open');
  })
})

