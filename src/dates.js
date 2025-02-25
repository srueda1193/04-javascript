export const myDate = new Date();

const now = new Date();
console.log(now);
console.log(new Date("November 12, 2021"));
console.log(new Date(2012, 10, 25, 10, 43, 20));
// año, mes, dia, hora, minutos, segundos
// mes: 0-11
console.log(new Date(2021, 10, 25)); // año, mes, dia



console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.toISOString());
console.log(now.getTime());

const nowTime = new Date();
console.log(nowTime.setTime(1739840777695))
console.log(nowTime.getTimezoneOffset());


const day1 = new Date(2021, 10, 25);
const day2 = new Date(2024, 5, 25);

const calcNumOfdays = (d1, d2) =>
    Math.abs(d1 - d2) / (1000 * 60 * 60 * 24);

const days = calcNumOfdays(day1, day2);
console.log(days);

const myFunction = () => {
    console.log("Este es mi primer set time out");
}

setTimeout(myFunction, 3000);



console.log("Estoy desppues del setTime Out");


const timer = document.getElementById("timer");
const counting = () => {

    if(+timer.innerText >= 10){
        clearInterval(interval);
    }
    timer.innerText = Number(timer.innerText) + 1;
};
let interval;
export const onClickInterval = () => {
    console.log('Estoy entrando')
    if(!interval){
        interval = setInterval(counting, 1000);
    }
}


const makeClick = event => console.log(event)