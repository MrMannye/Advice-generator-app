const spanAdviceId = document.querySelector('#adviceId');
const spanAdviceText = document.querySelector('#advice-text');

fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(res => {
        const AdviceObj = res.slip;
        spanAdviceId.innerText = `${AdviceObj.id}`
        spanAdviceText.innerText = `"${AdviceObj.advice}"`
    })
    .catch(error => {
        console.log(error)
    })

async function getAdvice(){
    await fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(res => {
        const AdviceObj = res.slip;
        spanAdviceId.innerText = `${AdviceObj.id}`
        spanAdviceText.innerText = `"${AdviceObj.advice}"`
    })
    .catch(error => {
        console.log(error)
    })
}