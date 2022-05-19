window.onload = function(){
    let x = document.querySelector("#myTopnav");
    let y = document.querySelector(".slider");
    let z = document.querySelector(".request");
    document.querySelector("#menu").onclick = function(){
         x.classList.toggle('resp');
         y.classList.toggle('dissapear');
         z.classList.toggle('responsive');
    }
}