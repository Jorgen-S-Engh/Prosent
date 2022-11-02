const body = document.querySelector("body");
const results = document.querySelector(".find-percent-results");
const btnCalcProcent = document.querySelector(".btn-calc-prosent");
const calcExplainer = document.querySelector(".calc-explainer");
const alertSuccess = document.querySelector(".alert-success");
const darkMode = document.querySelector(".btn-dark");

btnCalcProcent.addEventListener("click", calcProcent)

function calcProcent () {

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



