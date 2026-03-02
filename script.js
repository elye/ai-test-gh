document.getElementById('greet').addEventListener('click', function(){
  alert('Hello, world!');
  console.log('Hello, world!');
});

var dtBtn = document.getElementById('open-datetime');
if(dtBtn){
  dtBtn.addEventListener('click', function(){
    window.location.href = 'datetime.html';
  });
}
