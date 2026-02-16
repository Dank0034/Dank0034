function createConfetti(){
   const confetti= document.createElement('div');
   confetti.className="confetti";
   confetti.style.left= Math.random() * window.innerWidth + "px";
   confetti.style.backgroundColor='hls(${Math.random() * 360}, 100%, 50%)';
   document.body.appendChild(confetti);

   setTimeout(()=> confetti.remove(), 3000);
}

setInterval(createConfetti, 200);