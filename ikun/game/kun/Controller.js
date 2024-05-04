// Controls
document.onkeydown = function (ev) {
    switch (ev.code) {
        case "Space":
            jump()
            break

        case "KeyW":
            jump()
            break

        case "KeyA":
            left()
            break

        case "KeyD":
            right()
            break

        case "ArrowUp":
            jump()
            break

        case "ArrowLeft":
            left()
            break

        case "ArrowRight":
            right()
            break
    }
}