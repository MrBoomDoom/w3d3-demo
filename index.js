console.log('JS Connected!')

let counter = document.querySelector('h1')

let plusBtn = document.querySelector("#plus-btn")

console.log(plusBtn)




let count = 0

const increase = () => {
    count ++
    console.log(count)
    counter.textContent = count
}

plusBtn.addEventListener('click', increase)




let minusBtn = document.querySelector('#minus-btn')

const decrease = () => {
    count--
    console.log(count)
    counter.textContent = count
}

minusBtn.addEventListener('click', decrease)




let resetBtn = document.querySelector('#reset-btn')

const reset = (evt) => {
    count = 0
    console.log(count)
    counter.textContent = 0
    console.log(evt.target.id)
}

resetBtn.addEventListener('click', reset)




const themeButtons = document.querySelectorAll('.theme-buttons')

// console.log(themeButtons)

const selectTheme = (evt) => {

    console.log(evt.target)

   document.querySelector('body').classList = evt.target.textContent
   document.querySelector('main').classList = evt.target.textContent

   const buttons = document.querySelectorAll('button')

   for (let i = 0; i < buttons.length; i ++){
    buttons[i].classList=evt.target.textContent
   }

}

for(let i = 0; i < themeButtons.length; i++){
    // console.log(themeButtons[i])
    themeButtons[i].addEventListener('click', selectTheme)
}