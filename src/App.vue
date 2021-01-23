<template>
  <div>
    <p5-vue-mirror v-model="p5codes" :hidecode="true" :enableMotion="true" class="bg"/>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    
    <div class="text">
    <h1 class="fade-in">NTHU IPTA .Est in 2018</h1>
    </div>

    <hr class="link_hr"  size="2px" align="center" width="58%" color="white">

    <router-link class="link" style="margin-left:22.5%" to="/">Home</router-link> 
    <router-link class="link" style="margin-left:5%" to="/Enroll">Enroll</router-link> 
    <router-link class="link" style="margin-left:5%" to="/Professor">Professor</router-link>   
    <router-link class="link" style="margin-left:5%" to="/Tech_Art">Tech-Art</router-link>
    <router-link class="link" style="margin-left:5%" to="/Contact">Contact</router-link>
    
    <hr class="link_hr"  size="2px" align="center" width="58%" color="white">

     <router-view></router-view>
  </div>
</template>

<script>
const codes =  `
var stars = [];

var speed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 800; i++) {
    stars[i] = new Star();
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  speed = map(mouseX, 5, width, 5, 50);
  background(0);
  translate(width / 2, height / 2);
  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}


   function Star() {
  this.x = random(-width, width);
  this.y = random(-height, height);
  this.z = random(width);
  this.pz = this.z;

  this.update = function() {
    this.z = this.z - speed;
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.pz = this.z;
    }
  };

  this.show = function() {
    fill(255);
    noStroke();

    var sx = map(this.x / this.z, 0, 1, 0, width);
    var sy = map(this.y / this.z, 0, 1, 0, height);

    var r = map(this.z, 0, width, 16, 0);
    ellipse(sx, sy, r, r);

    var px = map(this.x / this.pz, 0, 1, 0, width);
    var py = map(this.y / this.pz, 0, 1, 0, height);

    this.pz = this.z;

    stroke(255);
    line(px, py, sx, sy);
  };
}
`
export default {
  data() {
    return {
      p5codes: codes
    }
  }
}
</script>



<style>

html,body,#App{
 width: 100%;
 margin: 0;
 padding: 0;
}

iframe {
  height: 100vh;
}

.bg{
  position: fixed;
  top:0px;
  width:100%;
  height: 100vh;
  z-index: -1;
}

.text{
  font-family: Syncopate, "微軟正黑體", sans-serif;
  color: yellow;
  font-size: 40px;
  text-align: center;
}

.link_hr{
  position: relative;
}

.link{
   font-family: Syncopate, "微軟正黑體", sans-serif;
  color:white;
  font-size: 20px;
  text-decoration: none;
 
}
.link:hover{
  color: yellow;
    transition:color 1s;
    -moz-transition:color 1s;
    -webkit-transition:color 1s;
    -o-transition:color 1s;   
}



</style>
