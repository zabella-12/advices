const teste = document.querySelector("p")

fetch('https://api.adviceslip.com/advice').then(response => {
    response.json().then(data => {
        const recommendation = data.slip
        teste.innerHTML = `${recommendation.advice}`;
    })
}) 

