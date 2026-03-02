function updateDateTime(){
  var el = document.getElementById('datetime');
  if(!el) return;
  var now = new Date();
  var date = now.toLocaleDateString();
  var time = now.toLocaleTimeString();
  el.textContent = date + ' — ' + time;
}

document.getElementById('back').addEventListener('click', function(){
  window.location.href = 'index.html';
});

updateDateTime();
setInterval(updateDateTime, 1000);
