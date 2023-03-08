let switchBtn = document.querySelectorAll('.work ul li');
let imgs = document.querySelectorAll('.work .row .col');
console.log(switchBtn,imgs);
switchBtn.forEach((li)=>{
    li.addEventListener("click" , removeActive);
    li.addEventListener("click" , manageImgs);

});
function removeActive() {
    switchBtn.forEach((li) => {
      li.classList.remove("active");
      this.classList.add("active");
    });
  }
  
  // Manage Imgs
  function manageImgs() {
    imgs.forEach((img) => {
      img.style.display = "none";
    });
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
      el.style.display = "block";
    });
  }