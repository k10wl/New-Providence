var activator = document.getElementById("dropdown")
var object = document.getElementById("dropdowncontent")

window.addEventListener('resize', checkme);

function checkme(){

    console.log(innerWidth < 992)

    if(innerWidth < 992){
        activator.onclick = function (){
            if (object.className === "navbar-nav d-none d-lg-flex") {
                object.className += " toggle"
            } else  {
                object.className = "navbar-nav d-none d-lg-flex"
            }
        }
    } else {
        object.className = "navbar-nav d-none d-lg-flex"
        activator.onclick = null
    }
}

checkme()