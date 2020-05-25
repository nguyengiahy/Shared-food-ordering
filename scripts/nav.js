function init() {
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll("a")
    const actives = document.querySelectorAll(".nav-item")
    const menuLength = menuItem.length;
    for (let i = 0; i < actives.length; i++) {
        if (menuItem[i].href === currentLocation) {
            actives[i - 1].classList.add("active");
        }

    }
}
window.onload = init;