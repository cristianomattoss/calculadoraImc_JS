const resultImc = document.querySelector("#imc-number span");
const statusImc = document.querySelector("#imc-info span");

const classificationsImc = [
    {
        info: "Menor que 18,5",
        min: 0,
        max: 18.49,
        classification: "Magreza",
        obesity: "0",
        class: "low"
    },
    {
        info: "Entre 18,5 e 24,9",
        min: 18.5,
        max: 24.9,
        classification: "Normal",
        obesity: "0",
        class: "good"
    },
    {
        info: "Entre 25,0 e 29,9",
        min: 25,
        max: 29.9,
        classification: "Sobrepeso",
        obesity: "I",
        class: "low"
    },
    {
        info: "Entre 30,0 e 39,9",
        min: 30,
        max: 39.9,
        classification: "Obesidade",
        obesity: "II",
        class: "medium"
    },
    {
        info: "Maior que 40,0",
        min: 40,
        max: Infinity,
        classification: "Obesidade Grave",
        obesity: "III",
        class: "high"
    }
];

export function defineStatus(imc) {
    const classification = classificationsImc.find(item => imc >= item.min && imc <= item.max);

    if (classification) {
        resultImc.textContent = imc.toFixed(2);
        statusImc.textContent = classification.classification;
        statusImc.classList.add(classification.class);
        resultImc.classList.add(classification.class);
        return true;
    }
    else {
        alert("Pelo menos um valor inválido foi inserido");
        return false;
    }
}

export function createTable() {
    const imcTable = document.querySelector("#table")
    classificationsImc.forEach((item) => {
        const div = document.createElement("div");
        div.classList.add("table-data");

        const classification = document.createElement("p");
        classification.innerText = item.classification;

        const info = document.createElement("p");
        info.innerText = item.info;

        const obesity = document.createElement("p");
        obesity.innerText = item.obesity;

        div.appendChild(info);
        div.appendChild(classification);
        div.appendChild(obesity);

        imcTable.appendChild(div);
    })
}