document.addEventListener('DOMContentLoaded', () => {
    let startBtn = document.getElementById('startButton');
    let stopBtn = document.getElementById('stopButton');
    let resetBtn = document.getElementById('resetButton');

    let seconds = 0;
    let milliseconds = 0;
    let timer = false;

    startBtn.addEventListener('click', () => {
        if (!timer) { 
            timer = true;
            stopWatch();

          
            startBtn.style.display = 'none';
            stopBtn.style.display = 'inline-block';
        }
    });


    stopBtn.addEventListener('click', () => {
        if (timer) { 
            timer = false;

          
            startBtn.style.display = 'inline-block';
            stopBtn.style.display = 'none';
        }
    });

    resetBtn.addEventListener('click', () => {
        timer = false;
        seconds = 0;
        milliseconds = 0;
        document.getElementById('time').innerHTML = '00:00';

  
        startBtn.style.display = 'inline-block';
        stopBtn.style.display = 'none';
    });

    function stopWatch() {
        if (timer) {
            milliseconds++;

            if (milliseconds === 100) {
                seconds++;
                milliseconds = 0;
            }

            if (seconds === 59 && milliseconds === 0) {
                timer = false;

             
                startBtn.style.display = 'inline-block';
                stopBtn.style.display = 'none';
            }

         
            let display = `${seconds < 10 ? '0' + seconds : seconds}:${
                milliseconds < 10 ? '0' + milliseconds : milliseconds
            }`;
            document.getElementById('time').innerHTML = display;

            if (timer) {
                setTimeout(stopWatch, 10); 
            }
        }
    }

   
    stopBtn.style.display = 'none';
});
