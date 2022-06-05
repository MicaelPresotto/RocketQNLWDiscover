import Modal from './modal.js'
const modal = Modal()
const title = document.querySelector('.modal h2')
const description = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal .buttons button')
const form = document.querySelector('.modal form')
const roomId = document.querySelector('#room-id').dataset.id
var slug = ''

const check = document.querySelectorAll('.actions a.check')
check.forEach(button => {
  button.addEventListener('click', event => {
    title.innerHTML = 'Marcar como lida esta pergunta'
    description.innerHTML =
      'Tem certeza que deseja marcar como lida esta pergunta?'
    modalButton.innerHTML = 'Sim, marcar como lida'
    modalButton.classList.remove('red')
    event.preventDefault()
    slug = 'check'
    var questionId = event.target.dataset.id
    form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`)
    modal.open()
  })
})

const deleteButton = document.querySelectorAll('.actions a.delete')

deleteButton.forEach(button => {
  button.addEventListener('click', event => {
    title.innerHTML = 'Excluir esta pergunta'
    description.innerHTML = 'Tem certeza que deseja excluir essa pergunta?'
    modalButton.innerHTML = 'Sim, excluir'
    modalButton.classList.add('red')
    event.preventDefault()
    slug = 'delete'
    var questionId = event.target.dataset.id
    form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`)

    modal.open()
  })
})
