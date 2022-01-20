const clock = document.querySelector(".x-masTime");

function getClock(){
    const today = new Date().getTime(); //현재시간
    const xMas = new Date('2022/12/25 00:00:00').getTime(); //22년 크리스마스날
    // const xMas = new Date(2022, 11, 25, 10, 00, 00, 0).getTime(); 숫자는 0~11 즉11은 12월
    const dDay = xMas - today; //크리스마스날에서 현재시간 빼기 d-day count
    
    const dayCount = Math.floor(dDay / (1000 * 60 * 60 * 24));
    const hourCount = String(Math.floor((dDay % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
    const minuteCount = String(Math.floor((dDay % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
    const secondCount = String(Math.floor((dDay % (1000 * 60)) / 1000)).padStart(2, "0");

    clock.innerText = `${dayCount}d ${hourCount}h ${minuteCount}m ${secondCount}s`;
}

getClock() //바로 실행
setInterval(getClock, 1000); //(1000ms = 1초, 즉 1초마다 갱신)

function createSnow(){
    const el = document.createElement("div");
    el.classList.add('snow');
    el.style.marginLeft = randomPosition() + 'px';
    document.body.appendChild(el);
}
function randomPosition(){
    return Math.floor(Math.random() * window.innerWidth);
}
for (let i = 0; i < 300; i++) {
    createSnow();
}
