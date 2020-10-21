/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class = "nav">
        <h3 class = "italic"><a class = "blue" href='index.html'> Code 1 : Section B </a></h3>
        <ul class= "menu"> 
          <li> <a href = 'https://parsonsdt.github.io/code-1-2020' >Course Site </a></li>
          <li >
            <div class="dropdown">
              <button class="dropbtn">Lectures</button>
              <div class="dropdown-content">
                <a href="week1.html"> Week 1</a>
                <a href="week2.html"> Week 2</a>
                <a href="week3.html"> Week 3</a>
                <a href="week4.html"> Week 4</a>
                <a href="week5.html"> Week 5</a>
                <a href="week6.html"> Week 6</a>
                <a href="week8.html"> Week 8</a>
              </div>
            </div>
          </li> 
          <li> <a href = 'https://editor.p5js.org/snavc270/sketches'> Code Examples</a> </li>
          <li> <a href = 'https://code1group.slack.com'>Slack</a> </li>
        </ul> 
      </div>
  `
  }
}

var colors = new Array(
  [138, 247, 228],
  [253, 203, 252],
  [198, 189, 234],
  [72, 173, 241]
  );

var step = 0;
//color table indices for: 
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0,1,2,3];

//transition speed
var gradientSpeed = 0.002;

function updateGradient()
{
  
  if ( $===undefined ) return;
  
var c0_0 = colors[colorIndices[0]];
var c0_1 = colors[colorIndices[1]];
var c1_0 = colors[colorIndices[2]];
var c1_1 = colors[colorIndices[3]];

var istep = 1 - step;
var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
var color1 = "rgb("+r1+","+g1+","+b1+")";

var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
var color2 = "rgb("+r2+","+g2+","+b2+")";

 $('.gradient').css({
   background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
  
  step += gradientSpeed;
  if ( step >= 1 )
  {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];
    
    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    
  }
}

setInterval(updateGradient,10);

customElements.define('main-header', Header);