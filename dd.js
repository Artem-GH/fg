let change;
let start;
let content;
document.onmousedown = function(e) {
  if(e.target.classList.value == 'col' || e.target.classList.value == 'content'){
    document.body.style.cursor ="move";
    document.body.style.userSelect = 'none';
    start = e.clientX;
    content = document.getElementById('content');
    change = 1;
  }
}
document.onmouseup = function(e){
  change = 0;
  document.body.style.cursor ="default";
  document.body.style.userSelect = 'auto';
}
document.onmousemove = function(e){
  if(change == 1) content.scrollLeft = content.scrollLeft + ((e.clientX - start)/10);
}
