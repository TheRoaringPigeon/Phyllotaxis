float c, n, r, a, ang;
int total;
void setup(){
 size(displayWidth, displayHeight);
 n = 1;
 ang = 137.5;
 a = n * degrees(ang);
 c = 10;
 r = (float)c * (float)(Math.sqrt(n));
 colorMode(HSB);
 total = 500;
}

void draw(){
  background(0);
  ang += 0.00001;
  while ( n < total){
   push();
   translate(width/2, height/2);
   float x = r * cos(a);
   float y = r * sin(a);
   float d = dist(x, y, 0, 0);
   d *= 5;
   int col = 0;
   col = floor(map(col, 0, d, 10, 255));
   fill(col, 255, 255);
   ellipseMode(CENTER);
   ellipse(x, y, 20, 20);
   pop();
   n++;
   r = (float)c * (float)(Math.sqrt(n));
   a = n * degrees(ang);
  }
  n = 0;
}
