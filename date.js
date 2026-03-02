function updateDateTime(){
  const el = document.getElementById('datetime');
  if(!el) return;
  const now = new Date();
  const dateStr = now.toLocaleDateString();
  const timeStr = now.toLocaleTimeString();
  el.textContent = dateStr + ' — ' + timeStr;
}

updateDateTime();
setInterval(updateDateTime, 1000);
