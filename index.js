
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
