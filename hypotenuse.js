const sides = document.querySelectorAll(".side");
const btn = document.querySelector(".btn");
const output = document.querySelector(".output");


function calculateSumOfSqrs(a,b){
    const sumOfSqr=a*a + b*b;
    return sumOfSqr

}


function calculateHypotenuse() {

    const sumOfSqr=calculateSumOfSqrs(Number(sides[0].value),
    Number(sides[1].value))
    const hypoLength=Math.sqrt(sumOfSqr);
    console.log(hypoLength)
    output.innerText="The length of hypotenuse is "+ hypoLength
}

btn.addEventListener("click", calculateHypotenuse);
