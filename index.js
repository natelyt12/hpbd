
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

    var conLeft = document.getElementById('confetti-left');
    var conRight = document.getElementById('confetti-right');

    confess(conLeft, -0.3, 20)
    confess(conRight, 1.3, 160)

    function confess(name, dir, angle) {
        name.confetti = name.confetti || confetti.create(name, { resize: true });

        name.confetti({
            spread: 90,
            origin: { y: 0.5, x: dir },
            particleCount: 500,
            angle: angle,
            ticks: 400,
            startVelocity: 80
        });
    }
    // you should  only initialize a canvas once, so save this function
    // we'll save it to the canvas itself for the purpose of this demo


}, 1800);
