import { createTable } from "./classification.js";

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

const calculateImc = (weight, height) => {
    if (!verifyData(weight, height)) {
        return null;
    }

    return Number(weight) / Math.pow(Number(height), 2);
}

function verifyData(weight, height) {
    if (weight.trim() === "" || height.trim() === "") {
        return false;
    }

    return Number.isFinite(Number(weight)) && Number.isFinite(Number(height));
}

function defineStatus(imc) {
    switch (true) {
        case imc < 18.5:
            resultImc.classList.add("low");
            statusImc.classList.add("low");
            return "Magreza";
        case imc <= 24.9:
            resultImc.classList.add("good");
            statusImc.classList.add("good");
            return "Normal";
        case imc <= 29.9:
            resultImc.classList.add("low");
            statusImc.classList.add("low");
            return "Sobrepeso";
        case imc <= 39.9:
            resultImc.classList.add("medium");
            statusImc.classList.add("medium");
            return "Obesidade";
        case imc >= 40:
            resultImc.classList.add("high");
            statusImc.classList.add("high");
            return "Obesidade Grave";
        default:
            resultImc.textContent = "";
            return "Valor inválido";
    }
}

createTable();

/*EVENTOS*/
clearBtn.addEventListener("click", () => {
    weightInput.value = "";
    heightInput.value = "";
});

calculateBtn.addEventListener("click", () => {
    const imc = calculateImc(weightInput.value, heightInput.value);

    if (imc === null) {
        alert("Informe valores válidos.");
        return;
    }

    toggleScreens();
    resultImc.textContent = imc.toFixed(2);
    statusImc.textContent = defineStatus(imc);
});

backBtn.addEventListener("click", () => {
    resultImc.classList = "";
    statusImc.classList = "";
    toggleScreens();
});
