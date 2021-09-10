
import '../../sass/main.scss';


const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const startBtn = document.querySelector('[data-action="start"]')

const stopBtn = document.querySelector('[data-action="stop"]')


let timeoutId = null;

startBtn.addEventListener('click', onStartBtnClick)
stopBtn.addEventListener('click', onStopBtnClick)



stopBtndisable()



function onStartBtnClick () {
  startBtndisable(),
  stopBtnanable(),
  timeoutId = setInterval(() => {
        document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
   
  }, 1000);
   
}

function onStopBtnClick () {
  startBtnanable(),
  stopBtndisable (),
  clearInterval(timeoutId)
}


  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  function stopBtndisable (){
    stopBtn.setAttribute("disabled", true);
  }
  
  function stopBtnanable (){
    stopBtn.removeAttribute("disabled");
  }
  
  
  function startBtndisable (){
    startBtn.setAttribute("disabled", true);
  }
  
  function startBtnanable (){
    startBtn.removeAttribute("disabled");
  }