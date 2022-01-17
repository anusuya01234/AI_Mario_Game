function preload() {
	mario_gameover = loadSound("gameover.wav");//e..load the game over the music file
	mario_jump = loadSound("jump.wav");//a...load the jumping music file
	mario_coin = loadSound("coin.wav");//c...load the collect coin music file
	mario_kick = loadSound("kick.wav");//g..load the mario killing enemy music file
	mario_die = loadSound("mariodie.wav");//i..load the mario dying music file 
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');

	instializeInSetup(mario);
	
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);

}

function modelLoaded() {
	console.log('Model Loaded!');
  }

  function gotPoses(results)
  {
	if(results.length > 0)
	{
	  console.log(results);
	  noseX = results[0].pose.nose.x;
	  noseY = results[0].pose.nose.y;
	}
  }
   
function draw() {
	game();
}






