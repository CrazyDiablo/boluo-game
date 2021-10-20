// position [20, 100]
const Block = (position) => {
    let image = imageFromPath('block.jpg')
    let p = position
    let o = {
        image: image,
        x: p[0],
        y: p[1],
        w: 50,
        h: 50,
        alive: true,
        life: p[2] || 1
    }
    o.kill = () => {
        o.life -= 1
        if (o.life < 1) {
            o.alive = false
        }
    }
    o.collide = (imgObj) => {
        return o.alive && (rectIntersects(o, imgObj) || rectIntersects(imgObj, o))
    }
    return o
}
