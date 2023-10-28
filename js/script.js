 
let currentDPR = window.devicePixelRatio;

const pages = ['index.html', 
]

const keyDownHandle = e=>{
    if (e.key === 'ArrowLeft') {
        window.location.href = 'challenge1.html';
    } else if (e.key === 'ArrowRight') {
        window.location.href = 'challenge3.html';
    }
}

const init=()=>{
    setInterval(() => {
        const newDPR = window.devicePixelRatio;
        if (newDPR !== currentDPR) {
            location.reload();
        }
        currentDPR = newDPR;
    }, 1000);


    document.addEventListener('keydown', keyDownHandle)
}

init();