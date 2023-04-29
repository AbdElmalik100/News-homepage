let menu = document.querySelector(".menu-bar")
let closeMenu = document.querySelector(".menu-close")
let links = document.querySelector(".links")
let overlay = document.querySelector(".overlay")

function Open() {
    links.style.display = "flex"
    links.style.cssText = "transform: translateX(0);"
    closeMenu.style.cssText = "transform: translateX(0);"
    overlay.style.display = "block"
}
function Close() {
    links.style.cssText = "transform: translateX(500px);"
    closeMenu.style.cssText = "transform: translateX(500px);"
    overlay.style.display = "none"
}


menu.onclick = () => {
    Open()
}
closeMenu.onclick = () => {
    Close()
}
overlay.onclick = ()=> {
    Close ()
}

