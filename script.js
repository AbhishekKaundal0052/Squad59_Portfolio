// let welcome = document.getElementById("welcome")
// window.addEventListener('scroll', () => {
//     let value = window.scrollY;
//     text.style.marginTop = value * 2.5 +'px';
// }
// );
const blur = document.getElementById("info")
var click  = 0
function toggle() {
    if (click === 0){
        blur.style.filter = "blur(15px)"
        click = 1
    }
    else if(click === 1){
        blur.style.filter = "blur(0px)"
        click = 0
    }
    
}
    var popup = document.getElementsByClassName("popuptext")
    function information(){
    
}

