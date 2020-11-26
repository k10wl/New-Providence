function resizeCheck(){
    const lg = innerWidth < 993;
    const md = innerWidth < 769;
    const sm = innerWidth < 577;

    if(sm){
        document.getElementById("iphone-feature__buttons").classList.add("break-out")
    } else {
        document.getElementById("iphone-feature__buttons").classList.remove("break-out")
    }

    if (lg){
        document.getElementById("plan-container").classList.remove("container")
        document.getElementById("plan-article1").classList.remove("w-75", "p-2")
        document.getElementById("plan-article2").classList.remove("w-75", "p-2")
    } else {
        document.getElementById("plan-container").classList.add("container")
        document.getElementById("plan-article1").classList.add("w-75", "p-2")
        document.getElementById("plan-article2").classList.add("w-75", "p-2")
    }

}

window.addEventListener('resize', resizeCheck)
