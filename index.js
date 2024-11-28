
let windows = document.getElementsByClassName("window");
for (let i = 0; i < windows.length; i++) {
  makeDraggable(windows[i]);
}

function makeDraggable(elem) {
  let cur_x = 0;
  let cur_y = 0;
  elem.getElementsByClassName("window_title")[0].onmousedown = mousedown;

  function mousedown(e) {
    e = e || window.event;
    e.preventDefault();
    cur_x = e.clientX;
    cur_y = e.clientY;
    elem.style.zIndex = 10;
    for (let i = 0; i < windows.length; i++) {
      if (windows[i] !== elem)
        windows[i].style.zIndex = 9;
    }
    document.onmouseup = mouseup;
    document.onmousemove = mousemove;
  }

  function mousemove(e) {
    e = e || window.event;
    e.preventDefault();
    let dx = e.clientX - cur_x;
    let dy = e.clientY - cur_y;
    cur_x = e.clientX;
    cur_y = e.clientY;
    elem.style.left = (elem.offsetLeft + dx) + "px";
    elem.style.top = (elem.offsetTop + dy) + "px";
  }

  function mouseup() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
