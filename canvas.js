var canvasOffset = 0;

window.addEventListener('load', () => {
    console.log("window loaded");
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    const settingsBar = document.querySelector("#settingsbar");

    // resize html canvas element
    canvasOffset = settingsBar.offsetHeight;
    canvas.height = window.innerHeight-canvasOffset;
    canvas.width = window.innerWidth;

    // ctx.strokeStyle = "cyan"


    // variables
    let painting = false;

    function startPosition(e){
        painting = true;
        draw(e);
    }

    function endPosition(){
        painting = false;
        ctx.beginPath();
    }

    function draw(e){
        if(!painting) return;

        ctx.lineWidth = 10;
        ctx.lineCap = 'round';

        ctx.lineTo(e.clientX, e.clientY-canvasOffset);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY-canvasOffset);
    }

    // event listeners
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', endPosition);
    canvas.addEventListener('mousemove', draw);
});


// ensure the canvas get resized if we change the window size
window.addEventListener('resize', () => {
    // resize html canvas element
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
});

function changePenToRed(){
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");
    ctx.strokeStyle = "red"
}

function changePenToBlue(){
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");
    ctx.strokeStyle = "blue"
}