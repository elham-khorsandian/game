
const question1 = document.getElementById("question1");
const deutsche = document.getElementById("deutsche");
const commerz = document.getElementById("commerz");
const question2 = document.getElementById("question2");
const frankfurt = document.getElementById("frankfurt");
const berlin = document.getElementById("berlin");
const submit = document.getElementById("submit")
const refresh = document.getElementById("refresh");
let score = 0

deutsche.addEventListener("click", () => {
    deutsche.textContent = "correct"
    score +=1  
    deutsche.style.color = "green"
});
commerz.addEventListener("click", () => {
    commerz.textContent = "wrong" 
    commerz.style.color = "red"
});

frankfurt.addEventListener("click" , () =>{
    frankfurt.textContent = "correct"
    score +=1
    frankfurt.style.color = "green"
})
berlin.addEventListener("click", () => {
    berlin.textContent = "wrong" 
    berlin.style.color = "red"
});

submit.addEventListener("click" , () => {
    submit.textContent = ("Your score is = " + score)
})

refresh.addEventListener('click' , () => {
    deutsche.textContent = "Deutsche Bank"
    deutsche.style.color = "black"
    commerz.textContent = "Commerz Bank" 
    commerz.style.color = "black"
    frankfurt.textContent = "Frankfurt"
    frankfurt.style.color = "black"
    berlin.textContent = "Berlin" 
    berlin.style.color = "Black"


    score = 0

})




