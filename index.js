const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
  const posx = event.pageX;
  const posy = event.pageY;
  const spanEl = document.createElement("span");
  spanEl.style.top = posy + "px";
  spanEl.style.left = posx + "px";
  const size = Math.random() * 100;
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";
  bodyEl.appendChild(spanEl);
  //by opening in the browsert devtools we can see all the spans being created
  setTimeout(() => {
    spanEl.remove();
  }, 6000);
});
