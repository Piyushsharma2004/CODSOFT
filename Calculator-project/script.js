// HTML Imports
const root = document.querySelector(':root')
const output = document.querySelector('.output')
const clearBtn = document.getElementById('clear')
const toggle = document.getElementById('checkbox')
const numbers = document.querySelectorAll('button')

// Event Listeners
numbers.forEach((number) => {
  number.addEventListener('click', (e) => {
    if (e.target.textContent === 'AC') {
      output.textContent = ''
    } else if (e.target.textContent === '=') {
      solve()
    } else {
      output.textContent += e.target.textContent
    }
  })
})

clearBtn.addEventListener('click', () => {
  let outputText = output.textContent
  outputText = outputText.slice(0, outputText.length - 1)
  output.textContent = outputText
})

toggle.addEventListener('change', () => root.classList.toggle('active'))

// Utitity Functions
function solve() {
  let x = output.textContent
  let y = Function('return ' + x)()
  output.textContent = y
}
document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Calculator | Piyush Sharma";
            $("#favicon").attr("href", "images/favicon.jpeg");
        }
        else {
            document.title = "Come Back To Calculator";
            $("#favicon").attr("href", "images/favhand.png");
        }
      });  
      
      
