var root = document.documentElement;
document.addEventListener('mousedown', (e) => {
  var el = e.target;
  var x = (e.clientX - el.offsetLeft) / el.offsetWidth;
  var y = (e.clientY - el.offsetTop) / el.offsetHeight;
  root.style.setProperty('--ripple-x', x);
  root.style.setProperty('--ripple-y', y);
});
