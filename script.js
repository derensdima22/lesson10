// Задача 1
// 1.Создайте h2 c текстом "События"
// 2.Создайте блок div размером 400px на 400px
// 3.Создайте над блоком текст с отображением координат по примеру X: 150 Y: 120
// 4.Добавьте внизу блока еще один текст с содержанием "Координаты внутри блока:
// х 180, у 200"
// 5.При движении мышки над блоком должны обновляться данные о расположении
//  курсора и отображаться координаты в тексте над блоком соответственно
// осям х и у по отношению к странице
// 6.Внизу должны отображаться текущие координаты по x и y, но по
//  отношению блока
(function work1() {
  const work1 = document.querySelector(".work1");
  const h2 = document.createElement("h2");
  const divBlock = document.createElement("div");
  const bodyXY = document.createElement("div");
  const nivText = document.createElement("div");
  h2.innerHTML = "События";
  nivText.innerHTML = "Координаты внутри блока:";
  bodyXY.innerHTML = "Координаты Body:";

  divBlock.style.width = "400px";
  divBlock.style.height = "400px";
  divBlock.style.border = "2px solid #000";

  document.body.addEventListener("mousemove", (event) => {
    bodyXY.innerHTML = `Координаты Body: X:${event.x}   Y:${event.y}`;
  });
  divBlock.addEventListener("mousemove", (event) => {
    nivText.innerHTML = `Координаты внутри блока: X:${event.offsetX}   Y:${event.offsetY}`;
  });
  work1.append(h2, bodyXY, divBlock, nivText);
})();

// Задача 2
// Создайте h2 c текущим временем, к примеру " Время: 13:34:45";
// Примените setInterval для отображения времени каждую секунду,
// чтобы были идущие чаcы
// Создайте кнопки Start и Stop
// Навесьте обработчики события на клик.
// При клике на Stop время должно остановиться
// При клике на Start время должно продолжить свой ход (скачек времени,
// это нормально)
function work2() {
  const work2 = document.querySelector(".work2");
  const startTime = document.createElement("button");
  const stopTime = document.createElement("button");
  const myDate = document.createElement("h2");
  let clock = setInterval(interval, 1000);

  startTime.classList.add("startTime");
  startTime.innerHTML = "Start";
  stopTime.classList.add("stopTime");
  stopTime.innerHTML = "Stop";

  function interval() {
    myDate.innerHTML = new Date().toTimeString().replace(/ .*/, "");
  }
  stopTime.addEventListener("click", () => {
    clearInterval(clock);
  });
  startTime.addEventListener(
    "click",
    () => (clock = setInterval(interval, 1000))
  );

  work2.append(myDate, startTime, stopTime);
}
work2();

