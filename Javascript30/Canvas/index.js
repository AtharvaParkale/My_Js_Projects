const canvas = document.querySelector('#draw');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.strokeStyle = '#BADASS';
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth=20;

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    let hue=0;

    function draw(e) {
      if (!isDrawing) {
        return;
      }

      console.log(e);
      ctx.strokeStyle=`hsl(${hue},100%,50%)`
      ctx.beginPath();
      //Start From
      ctx.moveTo(lastX,lastY);
      //Go to
      ctx.lineTo(e.offsetX,e.offsetY);
      ctx.stroke();
      //Update the lastX and LastY;
      lastX=e.offsetX;
      lastY=e.offsetY;
      //Increasing the hue 
      hue++;

    }

    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mousedown', (e) => {
      isDrawing = true;
      lastX=e.offsetX;
      lastY=e.offsetY;
    });


    canvas.addEventListener('mouseup', () => isDrawing = false);
    canvas.addEventListener('mouseout', () => isDrawing = false);