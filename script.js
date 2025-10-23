h1 = document.querySelector("h1");
window.addEventListener("keydown", function(det){
  if (det.key === " ") {
    h1.textContent = "space";
  }
  else{
    h1.textContent = det.key
  }
  console.log(det.key); 
})