const body = document.querySelector("body");
const results = document.querySelector(".find-percent-results");
const calcExplainer = document.querySelector(".calc-explainer");
const alertSuccess = document.querySelector(".alert-success");
const darkMode = document.querySelector(".btn-dark");
// const btnCalcProcent = document.querySelector(".btn-calc-prosent");
const btnCalcProcent = document.querySelector(".btn-calc-prosent")

btnCalcProcent.addEventListener("click", calcProcent)

function calcProcent (e) {
    e.preventDefault();
    const inputPartNum = document.querySelector(".part-of-number").value;
    const inputWholeNum = document.querySelector(".whole-number").value;
    let sum = (inputPartNum / inputWholeNum *100).toFixed(2)
    results.innerHTML = `${sum}%`
    calcExplainer.innerHTML = ` ${inputPartNum} / ${inputWholeNum} * 100 = ${sum}%`
    alertSuccess.classList.remove("success_hidden")
}

darkMode.addEventListener("click", doDarkMode)

function doDarkMode () {
    body.classList.toggle("dark-mode")
}


// --------------------------- 98 Mode -----------------------------------------

const nintyeight = document.getElementById("98style");
const btn98Mode = document.querySelector(".btn-98-mode");
const footer98Mode = document.querySelector(".status-windows98-mode");
const header98Mode = document.querySelector(".header-windows98-mode");
const rmBorder = document.querySelector(".container-find-percentage")
btn98Mode.addEventListener("click", do98Mode);
let nintyeightSum = 0;

function do98Mode() {
    nintyeightSum++;
    reminder = nintyeightSum % 2;
    if (reminder === 1){
        nintyeight.disabled = undefined;
        body.classList.add("windows-mode");
        btnCalcProcent.classList.remove("btn-primary", "btn");
        rmBorder.classList.remove("rounded");
        footer98Mode.innerHTML = 
                                    `
                                    <p class="status-bar-field">Press F1 for help</p>
                                    <p class="status-bar-field">Slide 1</p>
                                    <p class="status-bar-field">CPU Usage: 14%</p>
                                    `
        header98Mode.innerHTML = 
                                    `                
                                    <div class="title-bar-controls">
                                        <button aria-label="Minimize"></button>
                                        <button aria-label="Maximize"></button>
                                        <button aria-label="Close"></button>
                                    </div>
                                    `

    }else if(reminder === 0){
        nintyeight.disabled = "disabled";
        btnCalcProcent.classList.add("btn-primary", "btn")
        footer98Mode.innerHTML = "";
        header98Mode.innerHTML = ""; 
        rmBorder.classList.add("rounded");
        body.classList.remove("windows-mode")

    }
    
}


//--------------------------Calc compounded interest ----------------


