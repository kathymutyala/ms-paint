document.addEventListener('DOMContentLoaded', function() {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  const color = document.getElementById("color");
  const brushSize = document.getElementById("lineWidth");
  const eraserSize = document.getElementById("eraserWidth"); 
  const clearCanvasButton = document.getElementById("clearCanvasButton");

  let paint = false;
  let eraserMode = false;
  
  canvas.addEventListener("mouseup", (e) => {
          paint = false;
  });

  canvas.addEventListener("mousedown", (e) => {
        paint = true;
        context.beginPath();
        context.moveTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
        context.lineWidth = eraserWidth.value == 5 ? lineWidth.value : eraserWidth.value;
        context.lineCap = 'round';
        context.strokeStyle = eraserMode ? 'whitesmoke' : color.value;
    });

  canvas.addEventListener("mousemove", (e) => {
     if (!paint) {
      return "";
     }
     context.lineTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
     context.stroke();
     
  });

  color.addEventListener("input", (e) => {
    eraserMode = false;
    context.strokeStyle = color.value;
  });

  brushSize.addEventListener("input", (e) => {
    eraserMode = false;
    context.lineWidth = brushSize.value;
  });

  eraserSize.addEventListener("input", (e) => {
    eraserMode = true;
    if (eraserMode){
    context.lineWidth = eraserSize.value;
    }
  });


  clearCanvasButton.addEventListener("click", (e) => {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });
});
