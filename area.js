const baseAndHeight=document.querySelectorAll(".side")
const checkBtn=document.querySelector(".btn")
const areaOutput=document.querySelector(".output")

function sideProductCalc(b,h){
    const sideProduct=(b*h);
    return sideProduct;
}

function calculateArea(){
    const sideProduct=sideProductCalc(Number(baseAndHeight[0].value),Number(baseAndHeight[1].value))
    const areaOfTriangle=sideProduct *(Number (0.5))
    // console.log(areaOfTriangle)

    areaOutput.innerText="The Area of Triangle is: "+areaOfTriangle +"cm square"
}


checkBtn.addEventListener("click",calculateArea)