let ticket = [
  {
    id: 1,
    title: '№1',
    img: 'photo/lightBlue.jpg',
  },
]

const toHTML = (box) => `       
<div class="col">
<div class="card">
  <img
    class="card-img-top"
    src="${box.img}"
    alt="${box.title}"
  />
  <div class="card-body">
    <h5 class="card-title" style="font-size: 100px; margin-bottom: 50px">${box.title}</h5>
    <a href="#" class="btn btn-primary" data-btn="price" data-id="${box.id}" style="font-size: 50px; background-color: #3578ab; border: 1px solid #2c3f50">ВЫБРАТЬ</a>
  </div>
</div>
</div>
`

function render() {
  const html = ticket.map(toHTML).join('')
  document.querySelector('#ticket').innerHTML = html
}

render()

const windowMessage = $.modal({
  title: '<strong>Упс... это задание для тебя 😒</strong>',
  closeable: false,
  width: '600px',
  footerButtons: [
    {
      text: 'Закрыть',
      type: 'primary',
      handler() {
        windowMessage.close()
      },
    },
  ],
})

document.addEventListener('click', (event) => {
  const btnType = event.target.dataset.btn
  const id = +event.target.dataset.id
  const box = ticket.find((f) => f.id === id)

  if (btnType === 'price') {
    windowMessage.setContent(
      `<p style="font-size: 40px">Нарисовать на лице кошачьи усики и сфоткаться.</p>`
    )
    windowMessage.open()
  }
})
