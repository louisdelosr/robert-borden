function fisherYates( myArray ) {
  var i = myArray.length;
  if ( i == 0 ) return false;
  while ( --i ) {
     var j = Math.floor( Math.random() * ( i + 1 ) );
     var tempi = myArray[i];
     var tempj = myArray[j];
     myArray[i] = tempj;
     myArray[j] = tempi;
   }
}

function randomifyQuestions(){
var container  = document.getElementById('randomize-questions');
var divs = [];

for(var i = 0, c = container.getElementsByTagName('div'); i < c.length; i++){
divs[i] = c[i];
}

// randomify div array
fisherYates(divs);

// remove children from container
while(container.firstChild)container.removeChild(container.firstChild);

for(var i = 0, len = divs.length; i < len; i++){
container.appendChild(divs[i]);
}
// done
}

function randomifyq1(){
var container  = document.getElementById('options1');
var divs = [];

for(var i = 0, c = container.getElementsByTagName('li'); i < c.length; i++){
divs[i] = c[i];
}

// randomify div array
fisherYates(divs);

// remove children from container
while(container.firstChild)container.removeChild(container.firstChild);

for(var i = 0, len = divs.length; i < len; i++){
container.appendChild(divs[i]);
}
// done
}

function randomifyq2(){
var container  = document.getElementById('options2');
var divs = [];

for(var i = 0, c = container.getElementsByTagName('li'); i < c.length; i++){
divs[i] = c[i];
}

// randomify div array
fisherYates(divs);

// remove children from container
while(container.firstChild)container.removeChild(container.firstChild);

for(var i = 0, len = divs.length; i < len; i++){
container.appendChild(divs[i]);
}
// done
}

function randomifyq3(){
var container  = document.getElementById('options3');
var divs = [];

for(var i = 0, c = container.getElementsByTagName('li'); i < c.length; i++){
divs[i] = c[i];
}

// randomify div array
fisherYates(divs);

// remove children from container
while(container.firstChild)container.removeChild(container.firstChild);

for(var i = 0, len = divs.length; i < len; i++){
container.appendChild(divs[i]);
}
// done
}

function randomifyq4(){
var container  = document.getElementById('options4');
var divs = [];

for(var i = 0, c = container.getElementsByTagName('li'); i < c.length; i++){
divs[i] = c[i];
}

// randomify div array
fisherYates(divs);

// remove children from container
while(container.firstChild)container.removeChild(container.firstChild);

for(var i = 0, len = divs.length; i < len; i++){
container.appendChild(divs[i]);
}
// done
}

function randomifyq5(){
var container  = document.getElementById('options5');
var divs = [];

for(var i = 0, c = container.getElementsByTagName('li'); i < c.length; i++){
divs[i] = c[i];
}

// randomify div array
fisherYates(divs);

// remove children from container
while(container.firstChild)container.removeChild(container.firstChild);

for(var i = 0, len = divs.length; i < len; i++){
container.appendChild(divs[i]);
}
// done
}

function randomifyq6(){
var container  = document.getElementById('options6');
var divs = [];

for(var i = 0, c = container.getElementsByTagName('li'); i < c.length; i++){
divs[i] = c[i];
}

// randomify div array
fisherYates(divs);

// remove children from container
while(container.firstChild)container.removeChild(container.firstChild);

for(var i = 0, len = divs.length; i < len; i++){
container.appendChild(divs[i]);
}
// done
}

function randomifyq7(){
var container  = document.getElementById('options7');
var divs = [];

for(var i = 0, c = container.getElementsByTagName('li'); i < c.length; i++){
divs[i] = c[i];
}

// randomify div array
fisherYates(divs);

// remove children from container
while(container.firstChild)container.removeChild(container.firstChild);

for(var i = 0, len = divs.length; i < len; i++){
container.appendChild(divs[i]);
}
// done
}

function randomifyq8(){
var container  = document.getElementById('options8');
var divs = [];

for(var i = 0, c = container.getElementsByTagName('li'); i < c.length; i++){
divs[i] = c[i];
}

// randomify div array
fisherYates(divs);

// remove children from container
while(container.firstChild)container.removeChild(container.firstChild);

for(var i = 0, len = divs.length; i < len; i++){
container.appendChild(divs[i]);
}
// done
}

function randomifyq9(){
var container  = document.getElementById('options9');
var divs = [];

for(var i = 0, c = container.getElementsByTagName('li'); i < c.length; i++){
divs[i] = c[i];
}

// randomify div array
fisherYates(divs);

// remove children from container
while(container.firstChild)container.removeChild(container.firstChild);

for(var i = 0, len = divs.length; i < len; i++){
container.appendChild(divs[i]);
}
// done
}

function randomifyq10(){
var container  = document.getElementById('options10');
var divs = [];

for(var i = 0, c = container.getElementsByTagName('li'); i < c.length; i++){
divs[i] = c[i];
}

// randomify div array
fisherYates(divs);

// remove children from container
while(container.firstChild)container.removeChild(container.firstChild);

for(var i = 0, len = divs.length; i < len; i++){
container.appendChild(divs[i]);
}
// done
}

function randomifyq11(){
var container  = document.getElementById('options11');
var divs = [];

for(var i = 0, c = container.getElementsByTagName('li'); i < c.length; i++){
divs[i] = c[i];
}

// randomify div array
fisherYates(divs);

// remove children from container
while(container.firstChild)container.removeChild(container.firstChild);

for(var i = 0, len = divs.length; i < len; i++){
container.appendChild(divs[i]);
}
// done
}

function randomifyq12(){
var container  = document.getElementById('options12');
var divs = [];

for(var i = 0, c = container.getElementsByTagName('li'); i < c.length; i++){
divs[i] = c[i];
}

// randomify div array
fisherYates(divs);

// remove children from container
while(container.firstChild)container.removeChild(container.firstChild);

for(var i = 0, len = divs.length; i < len; i++){
container.appendChild(divs[i]);
}
// done
}