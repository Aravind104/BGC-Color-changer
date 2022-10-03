const colorChangeBtn=document.querySelector(".colorChangeButton");

colorChangeBtn.addEventListener("click",changeColor);

function changeColor(){
    document.body.style.backgroundColor = randomColor();
}

function randomColor(){
    let value="0123456789ABCDEF";
    let color="#";
    for(let i=0;i<6;i++)
    {
        color=color+value[Math.floor(Math.random()*16)];
    }
    return color;
}