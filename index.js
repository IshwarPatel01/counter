const incrementBtn = document.querySelector(".increment")
const decrementBtn = document.querySelector(".decrement")
const counterValue = document.querySelector(".counter-value")

function increment(){

    incrementBtn.addEventListener("click", () => {
        let currentCount = parseInt(counterValue.textContent)
        if(currentCount < 10)
        currentCount++
        counterValue.textContent = currentCount
    })
}
increment()




function decrement() {
    decrementBtn.addEventListener("click", () => {
        let currentCount = counterValue.textContent
        if(currentCount > 0){
            currentCount--
            counterValue.textContent = currentCount
        }
    })
 }
 decrement()

    
     
        
