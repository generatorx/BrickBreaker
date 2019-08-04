 const onload = ()=> {

	const game = ()=> {

		const btnClick = ()=> {
			const scoreBoard = document.querySelector('.scoreBoard');
			const lives = document.querySelector('.lives');
			const home = document.querySelector('.home');
			const homeBtn = document.querySelector('.home button');
			const introScreen = document.querySelector('.intro');
			const introBtn = document.querySelector('.intro button');
			const borderScreen = document.querySelector('.border');
			const tuts = document.querySelector('.tuts');

			introBtn.addEventListener('click', ()=>{
				introScreen.classList.add('fadeOut');
				borderScreen.classList.add('fadeIn');
				scoreBoard.classList.add('fadeIn');
				lives.classList.add('fadeIn');
				home.classList.add('fadeIn');
				tuts.classList.add('fadeIn');
				ballLaunch();
			});


			homeBtn.addEventListener('click', ()=>{
				window.location.reload(false);
			});
		

	//When user press space
	const ballLaunch = ()=> {	
		document.body.onkeydown = function(e) {
 			if (e.keyCode == 32) {
			var ball = document.querySelector('.ball');
			const tuts = document.querySelector('.tuts');
			var y = 16;
			var x = 628;
			
			tuts.style.opacity="0";
			tuts.style.transition = "0.5s ease";


		//Bounce the ball
		function moveUp () {
			var up = setTimeout(moveUp, 1);
			if (y < 458) {
				y+=2;
				x++;
				ball.style.left = x + "px";
				ball.style.bottom = y + "px";
			} else {
				clearTimeout(up);
				moveDown();
				return;
			}
			function moveDown () {
				var down = setTimeout(moveDown, 1);
			if (y > -3 && x < 1257) {
				y-=2;
				x++;
				ball.style.bottom = y + "px";
				ball.style.left = x + "px";

			} else {
				clearTimeout(down);
				moveRight();
				return;
				}
			};

			function moveRight () {
				var right = setTimeout(moveRight, 1);
			if (x < 1257 && y < 458) {
				x+=3;
				y++;
				ball.style.left = x + "px";
				ball.style.bottom = y + "px";
			} else {
				clearTimeout(right);
				moveLeft();	
				return;
				}
			};

			function moveLeft() {
				var left = setTimeout(moveLeft, 1);
			if (x > 0 && y < 458) {
				y++;
				x-=4;
				ball.style.left = x + "px";
				ball.style.bottom = y + "px";
			} else {
				clearTimeout(left);
				moveDLeft();
				return;
			}
			};

			function moveDLeft(){
				var dleft = setTimeout(moveDLeft, 1);
			if (x > 0 && y > -3) {
				y-=2;
				x-=4;
				ball.style.left = x + "px";
				ball.style.bottom = y + "px";
			} else {
				clearTimeout(dleft);
				moveURight();
				return;
			}
			};

			function moveURight() {
				var uRight = setTimeout(moveURight, 1);
			if (x < 1257 && y < 458) {
				x++;
				y+=4;
				ball.style.left = x + "px";
				ball.style.bottom = y + "px";
			} else {
				clearTimeout(uRight);
				moveDRight();
				return;
			}
			};

			function moveDRight() {
				var dRight = setTimeout(moveDRight);
			if (x < 1257 && y > -3) {
				x+=2;
				y-=2;
				ball.style.left = x + "px";
				ball.style.bottom = y + "px";
			} else {
				clearTimeout(dRight);
				moveUp();
				return;
			}
			};

		};
		moveUp();

		};
	};
};
		

};

const paddleControl = ()=> {
			document.body.onkeydown = function(e) {
				if (e.keyCode == 37) {
					//Move the paddle 
				function paddleLeft () {
					var paddle = document.querySelector('.tile');
					var p = 592;
					if (p > 0) {
						p = p-3;
						paddle.style.left = p + "px";
					}
				};
				paddleLeft();
				}; 
			};
};	

paddleControl();
btnClick();


};
game();

}; 
onload();