const buttons = document.querySelectorAll('button')
const currentdisplay = document.querySelector('.current-display')
const passDisplay = document.querySelector('.pass-display')
let operation = ""
buttons.forEach(button => {
    button.addEventListener("click", () =>{
        let value = button.innerHTML
        let display = currentdisplay.innerHTML;
        if(value == "AC") {display = "0"; passDisplay.innerHTML = ""}

        //if its a number
        if(!isNaN(Number(value)))
        {
            if(display == "0"){ display = value}
            else
            {
                display += value;
            }
        }
        else
        {
            if(value == "=")
            {
                console.log(display)
                if(!isNaN(Number(display)))
                {
                    passDisplay.innerHTML = display
                }
                else
                {
                    passDisplay.innerHTML = display
                    let val = display.split(operation)
                    switch(operation){
                        case '+':
                            display = Number(val[0]) + Number(val[1])
                            break;
                        case '-':
                            display = Number(val[0]) - Number(val[1])
                            break;
                        case '×':
                            display = Number(val[0]) * Number(val[1])
                            break;
                        case '÷':
                            display = Number(val[0]) / Number(val[1])
                            break;
                    }
                }
            }
            else{
                if(value == "." && !operation) {display +='.'}
                else if(value =='.'){
                    let v = display.split(operation)
                    v[1] += '.'
                    display = v[0] + operation + v[1]
                }

                if(value == "&lt;"){
                    console.log(display)
                    display = display.substring(0,display.length - 1)
                }


                if(!isNaN(Number(display)) && value != "AC" && value != '.' && value !='&lt;'){
                    display += value
                    operation = value;
                    console.log(operation)
                }
            }
        }
        if(display == "") display = 0
        currentdisplay.innerHTML = display
        
    })
});

