let c, n, r, a, t, cslider, aslider, ang, checkbox, ato;
function setup() {
  createCanvas(windowWidth, windowHeight);
  n = 1;
  ang = 137.5;
  aslider = createSlider(1, 360, 137.5, 1);
  let v = width - 20;
  aslider.position(10, 40);
  aslider.style('width', v.toString() + 'px');
  a = n * degrees(ang);
  cslider = createSlider(1, 50, 10);
  cslider.position(10, 20);
  cslider.style('width', '80px');
  r = c * sqrt(n);
  t = createSlider(10, 2000, 250);
  t.position(10, 5);
  t.style('width', '80px');
  checkbox = createCheckbox('auto', false);
  checkbox.changed(toggleAuto);
  checkbox.position(10, 60);
  checkbox.style('color', '#fff');
  ato = false;
  colorMode(HSB);
}

function draw() {
  background(0);
  total = t.value();
  c = cslider.value();
  if (!ato){
    ang = aslider.value();
  }else{
    ang += 0.000001;
  }
  while(n < total){
    push();
    translate(width/2, height/2);
    x = r * cos(a);
    y = r * sin(a);
    let d = dist(x, y, 0, 0);
    d *= 5;
    let col = 0;
    col = floor(map(col, 0, d, 10, 255));
    fill(col, 255, 255);
    ellipseMode(CENTER);
    ellipse(x, y, 20);
    pop();
    n++;
    r = c * sqrt(n);
    a = n * degrees(ang);
  }
  n = 0;
}
function toggleAuto(){
  if (!ato){
    ato = true;
  }else{
    ato = false;
    let v = ang;
    aslider.value('v');
  }
}
