

var sec = 90; // enter time
var sec1 = sec*1000;
var sec2 = sec1/2;
var time = [10000,sec1,10000,sec2,10000,sec2,10000,sec1,1000];
var step  = 0;
var audio = new Audio(); 
	audio.src = "audio/bom.mp3"; 

function timer(){
    $('.button').css('display','none')
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