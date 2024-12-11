
setTimeout(() => {
    var count = 250;
    var defaults = {
        origin: { y: 0.5 }
    };

    function fire(particleRatio, opts) {
        confetti({
            ...defaults,
            ...opts,
            ticks: 400,
            particleCount: Math.floor(count * particleRatio)
        });
    }

    fire(0.25, {
        spread: 26,
        startVelocity: 55,
    });
    fire(0.2, {
        spread: 60,
    });
    fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 45,
    });

    // you should  only initialize a canvas once, so save this function
    // we'll save it to the canvas itself for the purpose of this demo


}, 1800);

// Background canvas

var bgc = document.getElementById('background-canvas')
var load_bar = document.querySelector('.progress')
var load_text = document.querySelector('.loadingg')

setTimeout(() => {
    load_text.style.opacity = 1
}, 2000);


document.addEventListener('click', () => {
    load_text.innerText = 'Enjoy your day!'
})

setTimeout(() => {
    bgc.style.backgroundColor = '#CAF4FF'
    load_bar.style.opacity = 0
    load_text.style.opacity = 0
}, 7000);

setTimeout(() => {
    bgc.style.backgroundColor = 'rgb(255, 211, 219)'
    bgc.style.transition = '15s'
}, 19000);

bgc.width = window.innerWidth
bgc.height = window.innerHeight

var c = bgc.getContext('2d')
let y = window.innerHeight + 200

let osuArr = []
let osuArr2 = []
let osuArr3 = []

for (let i = 0; i < 100; i++) {
    setTimeout(() => {
        osuArr.push(new cir((Math.random() - 0.2) * window.innerWidth, y, 3, 300))
    }, Math.random() * 500000);
}

for (let i = 0; i < 200; i++) {
    setTimeout(() => {
        osuArr2.push(new cir((Math.random() - 0.2) * window.innerWidth, y, 2, 200))
    }, Math.random() * 500000);
}

for (let i = 0; i < 300; i++) {
    setTimeout(() => {
        osuArr3.push(new cir((Math.random() - 0.2) * window.innerWidth, y, 1, 100))
    }, Math.random() * 500000);
}

function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, innerWidth, innerHeight)
    for (let i = 0; i < osuArr.length; i++) {
        osuArr[i].update()
    }
    for (let i = 0; i < osuArr2.length; i++) {
        osuArr2[i].update()
    }
    for (let i = 0; i < osuArr3.length; i++) {
        osuArr3[i].update()
    }
}
animate()

function cir(x, y, ysp, r) {
    this.x = x;
    this.y = y;
    this.ysp = ysp;
    this.r = r;
    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        c.fillStyle = "rgba(255, 255, 255, 0.3)";
        c.fill();
    }
    this.update = function () {
        this.x += 0.5
        this.y -= this.ysp
        this.draw();
    }
}
// Line?

sb = document.getElementById('skyblu')

setTimeout(() => {
    sb.play()
    sb.volume = 0.4
}, 7000);

let body = document.getElementById('lmao')


for (let i = 0; i < 100; i++) {
    setTimeout(() => {
        createNote(Math.random() * window.innerWidth)
    }, Math.round(Math.random() * 500000));
}

function createNote(x, r) {
    let image = document.createElement('img')
    image.src = './assets/note.png'
    image.style.left = `${x}px`
    image.style.transform = `rotate(${Math.floor(Math.random() * 359)}deg)`
    image.id = 'note'

    body.appendChild(image)

    setTimeout(() => {
        body.removeChild(image)
    }, 10000);
}
