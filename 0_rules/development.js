let ticket = [
  {
    id: 1,
    img: 'photo/rules.jpg',
  },
]

const toHTML = (box) => `       
<div class="col">
<div class="card">
  <img
    class="card-img-top"
    src="${box.img}"
  />
  <div class="card-body">
    
    <a href="#" class="btn btn-primary" data-btn="price" data-id="${box.id}" style="font-size: 50px; background-color: #fff; color: #2c3f50; border: 1px solid #2c3f50">ПРАВИЛА</a>
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
  title: '<strong>Правила</strong>',
  closeable: false,
  width: '600px',
})

document.addEventListener('click', (event) => {
  const btnType = event.target.dataset.btn
  const id = +event.target.dataset.id
  const box = ticket.find((f) => f.id === id)

  if (btnType === 'price') {
    windowMessage.setContent(
      `<p style="margin-bottom: 30px">В этой игре тебя будут ждать <strong>10 </strong>карточек. В каждой из них хранится какое-то задание - либо наказание для тебя, либо наказание для Руслана. </p>
      <p style="margin-bottom: 30px"> Под карточками будут кнопки <strong>'НАЗАД'</strong> и <strong>'ВПЕРЕД'</strong>, которые помогут тебе выбрать нужную. Перед тем, как открыть карточки, ты можешь пролистать их.</p>
      <p style="margin-bottom: 30px"><strong>Твоя задача открыть 6 карточек.</strong> Если ты уже открыла карточку, то свой<strong> выбор менять нельзя</strong>.</p>
      <p style="margin-bottom: 60px">Как только ты откроешь <strong>6 карточек</strong>, игра будет <strong>окончена</strong>.</p>
      <p>Перед началом игры нужно сделать две вещи:</p>
      <p>1. <strong>включить запись экрана</strong></p>
      <p style="margin-bottom: 50px;">2. <strong>прибавить звук на телефоне</strong></p>
      <div class="bridges" id="bridges">
        <button style="background: #fff; border: 1px solid #2c3f50; border-radius: 10px;"><a href="01_choice.html">ПОЕХАЛИ!</a></button>
      </div>`
    )
    windowMessage.open()
  }
})
