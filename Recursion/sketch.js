// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let depth = 0;
let radius = 400;
let ellipse = [
  x: width / 2,
  y: height / 2
];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
}

function mouseClicked() {
  depth++;
}

function circleStuff(point, degree) {
  ellipse(point.x, point.y, radius, radius)
}

function getMidpoint(spot) {
  let theMidpoint = {
    x: spot.x - radius,
    y: spot.y
  };
  return theMidpoint;
}












let triangleVertices = [
  {x: 400, y: 100},
  {x: 100, y: 600},
  {x: 700, y: 600}
];

let depth = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  sierpinski(triangleVertices, depth);
}

function mouseClicked() {
  depth++;
}

function sierpinski(points, degree) {
  triangle(points[0].x, points[0].y,
           points[1].x, points[1].y,
           points[2].x, points[2].y);

  if (degree > 0) {
    sierpinski([points[0],
               getMidpoint(points[0], points[1]),
               getMidpoint(points[0], points[2])],
               degree - 1);
    sierpinski([points[1],
               getMidpoint(points[0], points[1]),
               getMidpoint(points[1], points[2])],
               degree - 1);
    sierpinski([points[2],
               getMidpoint(points[0], points[2]),
               getMidpoint(points[1], points[2])],
               degree - 1);
  }   
}


function getMidpoint(point1, point2) {
  let xDiff = point1.x + point2.x;
  let yDiff = point1.y + point2.y;
  let theMidpoint = {
    x: xDiff/2,
    y: yDiff/2
  };
  return theMidpoint;
}


//     To Do:

// Chem:
//  - SDS

// Math:
//  - Practice Assignments

// ELA:

// Comp Sci:
