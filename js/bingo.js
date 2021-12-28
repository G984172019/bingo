result.style.display = "none";
remainbutton.style.display = "none";
// num.style.display = "none";
// startbutton.style.display = "none";
// stopbutton.style.display = "none";
let number = Array(75);
for(i=0;i < 75;i++){
  number[i] = i+1;
}
let size = 75;
let roulette;
let a;
let ok = 0;
const drum = new Audio('sound/drum.mp3');
const cymbal = new Audio('sound/cymbal.mp3');

function check() {
  checkbutton.style.display = "none";
  num.style.display = "none";
  startbutton.style.display = "none";
  stopbutton.style.display = "none";
  result.style.display = "inline-block";
  remainbutton.style.display = "inline-block";
}

function remain() {
  result.style.display = "none";
  remainbutton.style.display = "none";
  num.style.display = "inline-block";
  // num.style.margin = "auto";
  startbutton.style.display = "inline-block";
  stopbutton.style.display = "inline-block";
  checkbutton.style.display = "inline-block";
}

function start(){
  if(ok == 0){
    roulette = setInterval(function(){
      drum.play();
      drum.loop = true;
      a = Math.floor(Math.random()*size);
      num.textContent = number[a];
      console.log("a:"+a);
      console.log("number:"+number[a]);
    }, 100);
    ok = 1;
  }
}

function stop(){
  // let a = Math.floor(Math.random()*size);
  // num.textContent = number[a];
  // console.log("a:"+a);
  // console.log("number:"+number[a]);
  if(ok == 1){
    if(roulette) {
      clearInterval(roulette);
      drum.pause();
      cymbal.play();
    }
    let n = number[a]-1;
    console.log("n:"+n);
    let p = n%15+1;
    console.log("p:"+p);
    let table = document.getElementById("t"+p);
    console.log("table:"+table);
    let c = Math.floor(n/15);
    console.log("c:"+c);
    let child = table.children[c];
    console.log("child:"+child);
    child.textContent = number[a];
    delete number[a];
    number = number.filter(Boolean);
    size = size - 1;
    if(c == 0){
      num.style.color = 'blue';
    }else if(c == 1){
      num.style.color = 'red';
    }else if(c == 2){
      num.style.color = 'green';
    }else if(c == 3){
      num.style.color = 'pink';
    }else if(c == 4){
      num.style.color = 'orange';
    }

    console.log("number.length:"+number.length);
    console.log("size:"+size);
  }
  ok = 0;
}
