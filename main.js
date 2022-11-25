// nose significa nariz e no código abaixo você terá 
//que definir a posição que o nariz aparecerá inicialmente

noseX=???;
???;

//utilize o código 'loadImage' para carregar a imagem do nariz
function preload() {
  clown_nose = ???('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}


function setup() {
    //utilize o código 'createCanvas' para criar um canva
  canvas = ???(300, 300);
  canvas.center();
  // Utilize o cpodigo 'createCapture' para criar uma tela de camera
  video = ???(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x-15;
    noseY = results[0].pose.nose.y-15;
  }
}

function draw() {

    // adicione o código 'video' para que a tela de vídeo fique de modo constante 
  image(video, 0, 0, 300, 300);
  image(clown_nose, noseX, noseY, 30, 30);
}

function ???(){    //Nome da função que acontece quando o botão de captura foi clicado
  ???('myFilterImage.png'); // Utilize o código 'save' para salvar a imagem
}
