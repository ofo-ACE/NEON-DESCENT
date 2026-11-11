const canvas =document.getElementById("game");
const ctx = canvas.getContext("2d");

// PLAYER DATA
const player = {
    x:460,
    y:250,
    size:24,
    speed:220

};
 
// ENEMY DATA
const enemy = {
    x: 150,
    y: 150,
    size: 24,
    speed: 100
};
// KEYBOARD INPUT 
const keys =new Set();
 
addEventListener("keydown",(event)=>{
    keys.add(event.key.toLowerCase());
});

//UPDATE PLAYER 
function update(dt) {
    if (keys.has("w") || keys.has("arrowup")){
        player.y -= player.speed * dt;
    }

if (keys.has("s")|| keys.has ("arrowdown")){
    player.y += player.speed    * dt;

}
 if(keys.has("d")|| keys.has("arrowright")) {
    player.x+=player.speed * dt;
 }

 player.x = Math.max(0, Math.min(canvas.width - player.size, player.x));
 player.y = Math.max(0, Math.min(canvas.height - player.size, player.y));
}

// DRAW GAME 
function draw() {
    ctx.fillstyle ="#090916";
    ctx.fillRect(0,0,canvas.width,canvas.height);


// GRIND 
ctx.strokeStyle = "#24204a";

for ( let x = 0; x < canvas.width; x += 40) {
    ctx.beginPath();
    ctx.moveTo(x,0);
    ctx.lineTo(x, canvas.height);
    ctx.strokeStyle();

}

for (let y = 0; y < cqanvas.height; y+=40 ){
    ctx.beginPath();
    ctx.moveTo(0,y);
    ctx.lineTo(canvas.width, y);
    ctx.strokeStyle();
}
 //PLAYER
 ctx.shadowBlur =18;
 ctx.shadowColor = "#00ffe1";
 ctx.fillstyle = "#00ffe1";
 ctx.fillRect(player.x, player.y, player.size, player.size);
 ctx.shadowBlur= 0;
}
//ENEMY
 ctx.shadowBlur = 18;
 ctx.shadowColor ="#ff1744";
 ctx.fillstyle = "#ff1744";
 ctx.fillRect(enemy.x, enemy.y, enemy.size, enemy.size);
 ctx.shadowBlur =0
 

// GAME LOOP
let lastTime =0;

function gameLoop(timestamp) {
    const dt =Math.min((timestamp - lastTime) / 1000, 0.1);
    lastTime =timestamp;

    update(dt);
    draw();

    requestAnimationFrame(gameLoop);
}
 requestAnimationFrame(gameLoop);

