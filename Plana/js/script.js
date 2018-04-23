



var time = [10000,80000,10000,40000,10000,40000,10000,80000,1000];
var step  = 0;
var audio = new Audio(); 
	audio.src = "audio/bom.mp3"; 

function timer(){
    
	if(time[step]){
		sound()
		document.body.style.background
		setTimeout(timer, time[step]);
	if (step % 2 == 0){
		document.body.style.backgroundImage = "url(image/image" + step + ".png)";
	}
		step++;
	
	}
}

function sound() {
 
  audio.src = "audio/bom.mp3"; 
  audio.autoplay = true;
}