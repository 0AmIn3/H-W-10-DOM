







let y = document.querySelector('.y')
let u = document.querySelector('.u')
let r = document.querySelector('.r')
let e = document.querySelector('.e')
let c = document.querySelector('.c')
let g = document.querySelector('.g')
let h = document.querySelector('.h')
let s = document.querySelector('.s')
let d = document.querySelector('.d')
let x = document.querySelector('.x')
let j = document.querySelector('.j')
let stick_1 = document.querySelector('.stick-1')
let stick_2 = document.querySelector('.stick-2')
let mal = document.querySelector('.mal')
let chto_eto = document.querySelector('.chto_eto')
let toshka = document.querySelector('.toshka')
let pod_toshka = document.querySelector('.pod_toshka')
let sred = document.querySelector('.sred')
let big = document.querySelector('.big')


// let music = {
//     y: "./audio/crash-Y.mp3",
//     u: "./audio/ride-U.mp3",
//     r: "./audio/hihat-R.mp3",
//     e: "./audio/hihat-open-E.mp3",
//     c: "./audio/hihat-foot-C.mp3",
//     g: "./audio/tom1-G.mp3",
//     h: "./audio/tom2-H.mp3",
//     s: "./audio/share-drum-S.mp3",
//     d: "./audio/share-stick-D.mp3",
//     x: "./audio/bass-X.mp3",
//     j: "./audio/floor-tom-J.mp3",
// }


window.addEventListener('keydown', (event) => {
    console.log(event.keyCode);

    // if(event.key === music[event.key] != undefined){
    //     audio.src = music[event.key]
    //     audio.play()
    // }

    if (event.keyCode === 89) {
        y.play()
        stick_1.style.top = '16px'
        stick_1.style.left = '213px'
        stick_1.style.transform = 'rotate(-25deg)'
        stick_1.style.animation = 'stickOne 0.1s 1 ease'
        sred.style.animation = 'sred 1s 1 ease'
        setTimeout(() => {
            stick_1.style.animation = 'none'
            sred.style.animation = 'none'
        }, 1000);

    } if (event.keyCode === 85) {
        u.play()
        stick_2.style.top = '42px'
        stick_2.style.left = '440px'
        stick_2.style.transform = 'rotate(36deg)'
        stick_2.style.animation = 'stickTwo 0.1s 1 ease'
        big.style.animation = 'big 2s 1 ease'
        setTimeout(() => {
            stick_2.style.animation = 'none'
            big.style.animation = 'none'
        }, 2000);
    } else if (event.keyCode === 82) {
        r.play()
        stick_1.style.top = '44px'
        stick_1.style.left = '122px'
        stick_1.style.transform = 'rotate(329deg)'
        stick_1.style.animation = 'stickOne_2 0.1s 1 ease'
        mal.style.top = '48px'
        chto_eto.style.transform = 'rotate(0deg)'
        setTimeout(() => {
            stick_1.style.animation = 'none'
        }, 100);

    } else if (event.keyCode === 69) {
        e.play()
        stick_1.style.top = '44px'
        stick_1.style.left = '122px'
        stick_1.style.transform = 'rotate(329deg)'
        stick_1.style.animation = 'stickOne_2 0.1s 1 ease'
        mal.style.top = '43px'
        chto_eto.style.transform = 'rotate(353deg)'
        mal.style.animation = 'mal 0.1s 1 ease'

        setTimeout(() => {
            stick_1.style.animation = 'none'
            mal.style.animation = 'none'
            
        }, 100);

    } else if (event.keyCode === 67) {
        c.play()
        mal.style.top = '43px'
        chto_eto.style.transform = 'rotate(353deg)'
        setTimeout(() => {
            mal.style.top = '48px'
            chto_eto.style.transform = 'rotate(0deg)'

        }, 100);
    } else if (event.keyCode === 71) {
        g.play()
        stick_1.style.top = '52px'
        stick_1.style.left = '261px'
        stick_1.style.transform = 'rotate(-25deg)'
        stick_1.style.animation = 'stickOne 0.1s 1 ease'
        setTimeout(() => {
            stick_1.style.animation = 'none'
        }, 100);
    } else if (event.keyCode === 72) {
        h.play()
        stick_2.style.top = '52px'
        stick_2.style.left = '324px'
        stick_2.style.transform = 'rotate(36deg)'
        stick_2.style.animation = 'stickTwo 0.1s 1 ease'
        setTimeout(() => {
            stick_2.style.animation = 'none'
        }, 100);
    } else if (event.keyCode === 83) {
        s.play()
        stick_1.style.top = '123px'
        stick_1.style.left = '160px'
        stick_1.style.transform = 'rotate(339deg)'
        stick_1.style.animation = 'stickOne 0.1s 1 ease'
        setTimeout(() => {
            stick_1.style.animation = 'none'
        }, 100);
    } else if (event.keyCode === 68) {
        d.play()
        stick_1.style.top = '140px'
        stick_1.style.left = '168px'
        stick_1.style.transform = 'rotate(339deg)'
        stick_1.style.animation = 'stickOne 0.1s 1 ease'
        setTimeout(() => {
            stick_1.style.animation = 'none'
        }, 100);
    } else if (event.keyCode === 88) {
        x.play()
        toshka.style.bottom = '135px'

        toshka.style.transform = 'rotateX(20deg)'
        pod_toshka.style.transform = 'rotateX(20deg)'
        setTimeout(() => {
            toshka.style.transform = 'rotateX(0deg)'
            pod_toshka.style.transform = 'rotateX(0deg)'
            toshka.style.bottom = '140px'

        }, 100);
    } else if (event.keyCode === 74) {
        j.play()
        stick_2.style.top = '130px'
        stick_2.style.left = '419px'
        stick_2.style.transform = 'rotate(36deg)'
        stick_2.style.animation = 'stickTwo 0.1s 1 ease'
        setTimeout(() => {
            stick_2.style.animation = 'none'
        }, 100);
    }

})