const Paddle = () => {
    aimage = imageFromPath('paddle.jpg')
    let image = imageFromPath('paddle.jpg')
    let o = {
        image: image,
        x: 100,
        y: 250,
        speed: 10,
    }
    o.move = (x) => {
        if (x < 0) {
            x = 0
        }
        if (x > 400 - o.image.width) {
            x = 400 - o.image.width
        }
        o.x = x
    }
    o.moveLeft = () => {
        o.move(o.x - o.speed)
        // o.x -= o.speed
        // if (o.x < 0) {
        //     o.x = 0
        // }
    }
    o.moveRight = () => {
        o.move(o.x + o.speed)
        // o.x += o.speed
        // if (o.x > 400 - o.image.width) {
        //     o.x = 400 - o.image.width
        // }
    }
    o.collide = (imgObj) => {
        if (imgObj.y + imgObj.image.height > o.y) {
            if (imgObj.x > o.x && imgObj.x < o.x + o.image.width) {
                return true
            }
        }

        return false
    }
    return o
}
