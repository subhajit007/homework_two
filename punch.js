window.onload = function() {
	// body...
	var circles = document.getElementsByClassName('hole');
	var player = {
		point:0,		
		misses:0
	}
	var score= document.getElementById("score");
	// 1s after laod mole appears in random hole
function assignMole(){
	var circle= circles[Math.floor(Math.random()*circles.length)];
	circle.style.backgroundImage = "url(mole-clip-art-clipart-cartoon-mole-8699.png)";
	circle.hasMole =true;

}
setInterval(assignMole, 1000);

for (var i = 0; i < circles.length; i++) {
    circles[i].addEventListener('click', function() {
    	console.log(this); 
        if (this.hasMole === true) {
            this.hasMole = false;
            player.point++;
            this.style.backgroundImage = "url(cartoon_gun_small.gif)";
            this.style.backgroundColor = "burlywood";
            score.innerHTML = "Score: " + player.point;
        }
    })
}
	//if palyer clicks on that mole he faints and player get a point
	// else he goes back

}