import processing.sound.*;
SoundFile player;
function setup(){
  createCanvas(400,200);
  textSize(40);//大字
  player = new SoundFile(this, "tada.mp3");
}
function draw(){//每秒60次
  let s = second();//s 增加 0..59 秒
  background(58,114,191);
  //text( 59-s, 100, 100);//59...0(減少
  text( 10 -s%11, 100, 100);
  if( 10-s%11 == 0 && !player.isPlaying() ){
    player.play();//如果有一個在播，其他不要搶進
  }  
} 
