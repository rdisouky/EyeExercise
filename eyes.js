const balls = document.getElementsByClassName('ball');

document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

for (o = 0; o < 2; o++){
  balls[o].style.left = x;
  balls[o].style.top = y;
  balls[o].transform = 'translate(-' + x + ',-' + y + ')';
}
};
