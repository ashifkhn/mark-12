const input=document.querySelectorAll(".angle-input")
const checkBtn=document.querySelector(".check-btn")
const output=document.querySelector(".output")


function angleSum(angle1,angle2,angle3){
    const sumOfAngles=angle1+angle2+angle3
    // console.log(sumOfAngles)
    return sumOfAngles;
}


function isTriangle(){
    sumOfAngles=angleSum(Number(input[0].value),Number(input[1].value),Number(input[2].value))
    if(sumOfAngles===180){
        output.innerText="Its a triangle"
    }else{
        output.innerText="Its not a triangle"
    }
}


checkBtn.addEventListener("click",isTriangle)