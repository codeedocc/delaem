let ticket = [
  {
    id: 1,
    title: '№3',
    img: 'photo/orange.webp',
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
    <a href="#" class="btn btn-primary" data-btn="price" data-id="${box.id}" style="font-size: 50px; background-color: #ed850a; border: 1px solid #2c3f50; color: #fff;">ВЫБРАТЬ</a>
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
  title: '<strong>Звонок в дверь...</strong>',
  closeable: false,
  width: '600px',
  // footerButtons: [
  //   {
  //     text: 'Закрыть',
  //     type: 'primary',
  //     handler() {
  //       windowMessage.close()
  //     },
  //   },
  // ],
})

const vstavit =
  '<img src="https://www.imgonline.com.ua/examples/bee-on-daisy.jpg"/>'

document.addEventListener('click', (event) => {
  const btnType = event.target.dataset.btn
  const id = +event.target.dataset.id
  const box = ticket.find((f) => f.id === id)

  if (btnType === 'price') {
    windowMessage.setContent(
      `<div class="present">
      <audio autoplay >
            <source src="audio/doorBell.mp3" />
          </audio>
      <p style="font-size: 40px; margin-bottom: 100px">Ты тоже это слышала?? По моему к тебе кто-то пришёл, посмотри кто там 👀</p>
      <div class="bridges" id="bridges"">
        <button style="background: #fff; border: 1px solid #2c3f50; border-radius: 10px;"><a href="11_choice.html">Посмотреть!</a></button>
      </div>
      </div>`
    )
    windowMessage.open()
  }
})
