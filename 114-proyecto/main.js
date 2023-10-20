hanx=0
hany=0
handx=0
handy=0
function preload(){
    leftGlove=loadImage("https://i.postimg.cc/90FvcBY4/CARVE-GLOVES-EVERGLADE-BACK-1024x.webp")
    rightGlove=loadImage("https://i.postimg.cc/c4zVNwgH/47230-5924-IOB-Gloves-Scrub-unisex-03-602-dark-mud-front.webp")
    }
function setup(){
Canvas=createCanvas(600, 600)
Canvas.center()
Video=createCapture(VIDEO)
Video.hide()
poseNet=ml5.poseNet(Video, modelLoaded)
poseNet.on("pose", gotResults)
}
function modelLoaded(){
    console.log("Modelo_cargado")
}
function gotResults(results){
    if ( results.length  > 0){
console.log(results)
hanx= results[0].pose.rightWrist.x-20
hany= results[0].pose.rightWrist.y-20
handx= results[0].pose.leftWrist.x-20
handy= results[0].pose.leftWrist.y-20
    }
    
}
function draw(){
image(Video, 0, 0, 600, 600)
image(rightGlove, hanx, hany, 100, 100 )
image(leftGlove, handx, handy, 100, 100)
}
