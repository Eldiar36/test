document.getElementById('slider').onmousemove = function (event) {
    document.getElementsByClassName('second')[0].style.width = event.offsetX + 'px';
};
document.getElementById('slider').onmouseleave = function (event) {
    document.getElementsByClassName('second')[0].style.width = '500px'
};
document.getElementsByClassName('slider-left').onclick = slider
 let left = 0;

function slider() {
  let sliderwrap = document.getElementsByClassName('wrapping-img');
  left = left - 150;
    sliderwrap.style.left = left + 'px'
}


