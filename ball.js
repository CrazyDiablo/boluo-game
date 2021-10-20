const Ball = () => {
    let image = imageFromPath('ball.jpg')
    let o = {
        image: image,
        x: 100,
        y: 100,
        speedX: 10,
        speedY: 10,
        fired: false
    }
    o.fire = () => {
        o.fired = true
    }
    o.move = () => {
        if (o.fired) {
            if (o.x < 0 || o.x > 400) {
                o.speedX *= -1
            }
            if (o.y < 0 || o.y > 300) {
                o.speedY *= -1
            }
            o.x += o.speedX
            o.y += o.speedY
        }
    }
    o.反弹 = () => {
        o.speedY *= -1
    }
    return o
}
