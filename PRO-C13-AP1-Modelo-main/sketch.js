var input,heading;


function setup() 
{
  createCanvas(400, 400);
  background(178,255,102);
 
  input = createInput();
  input.position(5,60);

  heading = createElement('h4', 'Insira uma letra:');
  heading.position(5,20);


}

function draw() {
const value = input.value();

switch(value){
  case 'a':
    console.log("É uma vogal!");
     break;

  case 'e':
    console.log("É uma vogal!");
    break;

  case 'i':
      console.log("É uma vogal!");
      break;

  case 'o':
    console.log("É uma vogal!");
    break;

  case 'u':
    console.log("É uma vogal!");
    break;

    default:
      console.log("Sua letra não é uma vogal, insira outra para continuar");
}
  
}

