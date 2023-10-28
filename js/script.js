
let currentDPR = window.devicePixelRatio;

const pages = ['', 'room1.html', 'room2.html', 'room3.html', 'room4.html', 'code.html']

const keyDownHandle = e => {
    const currentPath = window.location.pathname;
    const currentPage = currentPath.replace('/00-escaperoom/', '');
    const currentIndex = pages.indexOf(currentPage);

    if (e.key === 'ArrowLeft') {
        window.location.href = pages[currentIndex - 1];
    } else if (e.key === 'ArrowRight' && currentIndex != 0 && currentIndex != pages.length - 1) {
        window.location.href = pages[currentIndex + 1];
    }
}

const init = () => {
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