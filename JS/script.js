import { createTable, defineStatus } from "./classification.js";

const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");

const calculateBtn = document.querySelector("#calculate");
const clearBtn = document.querySelector("#clean");

const initial = document.querySelector("#initial");
const result = document.querySelector("#result");

const resultImc = document.querySelector("#imc-number span");
const statusImc = document.querySelector("#imc-info span");
const backBtn = document.querySelector("#back");

/*FUNÇÕES*/
function toggleScreens() {
    if (initial.classList.contains("hide")) {
        initial.classList.remove("hide");
        result.classList.add("hide");
    } else {
        result.classList.remove("hide");
        initial.classList.add("hide");
    }
}

const calculateImc = (weight, height) => Number(weight) / Math.pow(Number(height), 2);

function verifyData(value) {
    return value.replace(/[^0-9,.]/g, "");
}

createTable();

/*EVENTOS*/
[heightInput, weightInput].forEach((el) => {
    el.addEventListener("input", (e) => {
        const updatedValue = verifyData(e.target.value);
        e.target.value = updatedValue;
    })
})

clearBtn.addEventListener("click", () => {
    weightInput.value = "";
    heightInput.value = "";
});

calculateBtn.addEventListener("click", () => {
    const weight = weightInput.value.replace(",", ".");
    const height = heightInput.value.replace(",", ".");

    if(!weight || !height) {
        alert("Informe os valores necessários.");
        return;
    }

    const imc = calculateImc(weight, height);
    if(defineStatus(imc))
        toggleScreens();
});

backBtn.addEventListener("click", () => {
    resultImc.classList = "";
    statusImc.classList = "";
    toggleScreens();
});
