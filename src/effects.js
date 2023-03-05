let body = document.querySelector('body');
let pciBlock = document.querySelector('.pic_block');
let laya = document.querySelector('.laya');
let btns = document.querySelector('.buttons');
let space = document.querySelector('.space');
let login = document.querySelector('.log');
let form = document.querySelector('.formcontainer');



pciBlock.addEventListener("mouseover", show);
pciBlock.addEventListener("mouseout", hide);
btns.addEventListener("mouseover", show);
btns.addEventListener("mouseout", hide);
login.addEventListener("click", showform);
//form.addEventListener("click", hideform);

function show()
{
    btns.style.display = "block";
    pciBlock.style.filter = "blur(2px)";
    pciBlock.style.transition = "0.01s";
    pciBlock.style.opacity = "0.95";
    pciBlock.style.backgroundColor = "grey";
}
function hide()
{
    btns.style.display = "none";
    pciBlock.style.filter = "blur(0px)";
    pciBlock.style.transition = "0.1s";
    pciBlock.style.opacity = "1"; 
}
function showform()
{
    form.style.display = "block";
}
function hideform()
{
    form.style.display = "none";
}