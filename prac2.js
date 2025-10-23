 let mi =document.querySelector("#btn")
 mi.addEventListener("click",function(){
    let a = Number(document.querySelector("#iii").value);
    let b = Number(document.querySelector("#ii1").value);
    let answ = a+b;
    document.querySelector("#pa").innerText = answ;
});