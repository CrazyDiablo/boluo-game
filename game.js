const Game = () => {
    let canvas = document.querySelector('#id-canvas')
    let context = canvas.getContext('2d')
    let g = {
        canvas: canvas,
        context: context,
        actions: {},
        pressKeys: {},
    }

    g.drawImage = (imgObj) => {
        g.context.drawImage(imgObj.image, imgObj.x, imgObj.y)
    }

    // events
    window.addEventListener('keydown', (e) => {
        g.pressKeys[e.key] = true
    })

    window.addEventListener('keyup', (e) => {
        g.pressKeys[e.key] = false
    })
    // register events
    g.registerAction = (key, callback) => {
        g.actions[key] = callback
    }
    // timer
    window.fps = 30
    const runloop = () => {
        // events
        let actions = Object.keys(g.actions)
        for (let i = 0; i < actions.length; i++) {
            let key = actions[i]
            if (g.pressKeys[key]) {
                g.actions[key]()
            }
        }
        // update x and y
        g.update()
        // clear
        context.clearRect(0, 0, 400, 300)
        // draw
        g.draw()
        // next run loop
        setTimeout(() => {
            runloop()
        }, 1000 / fps)
    }
    setTimeout(() => {
        runloop()
    }, 1000 / fps)

    return g
}
