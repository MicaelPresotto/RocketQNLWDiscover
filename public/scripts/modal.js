export default function Modal() {
  const cancel = document.querySelector('.button.cancel')
  cancel.addEventListener('click', close)
  function open() {
    document.querySelector('.modal-wrapper').classList.add('active')
  }
  function close() {
    document.querySelector('.modal-wrapper').classList.remove('active')
  }

  return {
    open,
    close
  }
}
