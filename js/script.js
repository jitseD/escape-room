 
let currentDPR = window.devicePixelRatio;

const init=()=>{
    setInterval(() => {
        const newDPR = window.devicePixelRatio;
        if (newDPR !== currentDPR) {
            location.reload();
        }
        currentDPR = newDPR;
    }, 1000);
}

init();
