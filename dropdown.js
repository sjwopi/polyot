const optSub = document.querySelector('.options__list.sub')
const optMoreBtn = document.querySelector('.options__more')

optMoreBtn.addEventListener('click', () => {
  if (optSub.classList.contains('open')) {
    optSub.classList.remove('open');
    optMoreBtn.textContent = 'Показать ещё'
  }
  else {
    optSub.classList.add('open')
    optMoreBtn.textContent = 'Скрыть'
  }
})