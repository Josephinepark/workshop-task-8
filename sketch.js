let ip;
let ip_api = 'https://api.ipify.org?format=json';
let intro, punchline;
let joke_api = 'https://v2.jokeapi.dev/joke/Christmas';
let currentTemp, dayNight;
let weather_api = 'https://api.open-meteo.com/v1/forecast?latitude=-36.8485&longitude=174.7635&current=temperature_2m,is_day&hourly=temperature_2m'

async function getIP(){
  let data = await fetch(ip_api);
  let j_data = await data.json();
  ip = j_data.ip;
}

async function getJoke(){
  let data = await fetch(joke_api)
  let j_data = await data.json();
  intro = j_data.setup;
  punchline = j_data.delivery;
}

async function getWeather(){
  let data = await fetch(weather_api);
  let j_data = await data.json();
  currentTemp = j_data.current.temperature_2m;
  dayNight = j_data.current.is_day;
}

function setup() {
  createCanvas(400, 400);
  getIP();
  getWeather();
  getJoke();
//setInterval(getJoke, 3000);
}

function draw() {
  // night = 0, day = 1
  // dayNight = 1;
  
  // night
  if(dayNight == 0){
    background(54, 57, 71);
    noStroke();
    fill(92, 70, 55);
    rect(0, 300, 400, 100);
    fill("yellow");

    textAlign(LEFT)
   // text(ip, 200, 400);
  text(intro, 30, 350);
  text("<Today's Joke>", 30, 320)
  text(punchline, 30, 380);
  text("current temperature is:" + currentTemp, 20,240);
  text("Day or night?" + dayNight, 20, 260);

  fill("yellow");
ellipse(300, 100, 40, 40);

// day
  } else {
    background(122, 206, 255);
    noStroke();
    fill(212, 169, 121);
    rect(0, 300, 400, 100);
    fill("red");

    textAlign(LEFT)
    text(intro, 30, 350);
    text("<Today's Joke>", 30, 320)
    text(punchline, 30, 380);
  text("current temperature is:" + currentTemp, 20,240);
  text("Day or night?" + dayNight, 20, 260);

  fill("red");
ellipse(300, 100, 40, 40);
    

  }
}
