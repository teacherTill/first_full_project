const cookie = document.querySelector('.cookie')

document.querySelector('.cookie__reject').addEventListener('click', () => {
  cookie.classList.add('hidden')
})

const accordion_one = document.getElementById('accordion_one')
console.log(accordion_one)
accordion_one.onclick = (e) => {
  e.currentTarget.classList.toggle('accordion_active')
}
