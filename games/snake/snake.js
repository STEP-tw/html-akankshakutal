const BOUNDARY = 430;
const TWENTY = 20;
let score = 0;

const addTwenty = num => num + TWENTY;
const subtractTwenty = num => num - TWENTY;
const getRandomCoOrdinate = () => Math.floor(Math.random() * 20) * TWENTY;
const getPosition = element => element["position"];
const getAction = element => element["action"];
const getCoOrdinateToChange = element => element["coOrdinateToChange"];
const moveSnake = function() {
  moveSnakeBody();
  moveSnakeHead();
};

const moveRight = () => {
  coOrdinateToChange = "y";
  action = addTwenty;
};
const moveDown = () => {
  coOrdinateToChange = "x";
  action = addTwenty;
};
const moveUp = () => {
  coOrdinateToChange = "x";
  action = subtractTwenty;
};
const moveLeft = () => {
  coOrdinateToChange = "y";
  action = subtractTwenty;
};
const getCurrentTailDetail = () => snake[snake.length - 1];

const position = { x: 0, y: 0 };
let coOrdinateToChange = "x";
let action = addTwenty;
const snakeHead = { action, coOrdinateToChange, position };
const snake = [snakeHead];

const getPositionTag = function(position) {
  return (
    "position:relative;top:" + position["x"] + "px;left:" + position["y"] + "px"
  );
};

const moveSnakeFood = function(foodPosition) {
  const food = document.getElementById("food");
  foodPosition["x"] = getRandomCoOrdinate();
  foodPosition["y"] = getRandomCoOrdinate();
  food.style = getPositionTag(foodPosition);
};

const createPart = function(action, coOrdinateToChange, position) {
  return { action, coOrdinateToChange, position };
};

const getTailDetail = function() {
  const tail = getCurrentTailDetail();
  const action = getAction(tail);
  const coOrdinateToChange = getCoOrdinateToChange(tail);
  const position = {};
  return createPart(action, coOrdinateToChange, position);
};

const addTailBody = function() {
  snake.push(getTailDetail());
};

const addTailBodyTag = function() {
  const id = snake.length;
  return "<div id='" + id + "'class='snakeBody'></div>";
};

const addTail = function() {
  const snake = document.getElementById("snake");
  snake.innerHTML = snake.innerHTML + addTailBodyTag();
  addTailBody();
};

const setSnakePartAttribute = function(id) {
  const snakePart = snake[id];
  const position = getPosition(snakePart);
  const coOrdinateToChange = getCoOrdinateToChange(snakePart);
  const bodyPart = document.getElementById(id);
  const action = getAction(snakePart);

  position[coOrdinateToChange] = action(position[coOrdinateToChange]);
  bodyPart.style = getPositionTag(position);
};

const circulateSnakePartData = function(data1, data2) {
  const position1 = getPosition(data1);
  const position2 = getPosition(data2);
  data1["action"] = getAction(data2);
  data1["coOrdinateToChange"] = getCoOrdinateToChange(data2);
  position1["x"] = position2["x"] - 40;
  position1["y"] = position2["y"];
};

const moveSnakeBody = function() {
  for (let index = snake.length - 1; index > 0; index--) {
    circulateSnakePartData(snake[index], snake[index - 1]);
    setSnakePartAttribute(index);
  }
};

const moveSnakeHead = function() {
  let head = document.getElementById(0);
  position[coOrdinateToChange] = action(position[coOrdinateToChange]);
  head.style = getPositionTag(position);
};

const moves = {
  ArrowRight: moveRight,
  ArrowDown: moveDown,
  ArrowUp: moveUp,
  ArrowLeft: moveLeft
};

const updateMove = event => {
  moves[event.key]();
};
const isSamePoint = (p1, p2) => p1["x"] == p2["x"] && p1["y"] == p2["y"];

const hasEatenFood = function(foodPosition, snakeHead) {
  const headPosition = getPosition(snakeHead);
  return isSamePoint(headPosition, foodPosition);
};

const hasTouchBody = () => {
  let headPosition = getPosition(snake[0]);
  let snakeBody = snake.slice(1).map(getPosition);
  return snakeBody.some(isSamePoint.bind(null, headPosition));
};

const hasNegativeCoOrdinate = element => element["x"] < 0 || element["y"] < 0;
const isOutOfGround = element =>
  element["x"] > BOUNDARY || element["y"] > BOUNDARY;

const isOutOfBoundary = function() {
  const headPosition = getPosition(snake[0]);
  return hasNegativeCoOrdinate(headPosition) || isOutOfGround(headPosition);
};

const hasTouchedWall = () => isOutOfBoundary();

const showEndMsg = () => {
  main.innerHTML = "<h1>GAME OVER.....!</h1>";
};

const startGame = () => {
  const foodPosition = {};
  moveSnakeFood(foodPosition);
  const runSnake = setInterval(() => {
    if (hasEatenFood(foodPosition, snakeHead)) {
      addTail();
      score += 10;
      document.getElementById("score_board").innerText = score;
      moveSnakeFood(foodPosition);
    }
    if (hasTouchedWall()) {
      showEndMsg();
      clearInterval(runSnake);
    }
    moveSnake();
  }, 100);
};

window.onload = function() {
  let startButton = document.getElementById("start");
  startButton.onclick = startGame;
  let main = document.getElementById("main");
  main.onkeydown = updateMove;
};
