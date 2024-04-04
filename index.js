
const input = document.getElementById('button');

function clickAlert() {
  alert('I was clicked!');
}

input.addEventListener('click', clickAlert);

const myButton = document.getElementById("myButton");

myButton.addEventListener("click", function() {
    alert('I was clicked!'); 
    

});
input.addEventListener('click', clickAlert);
function addingEventListener() {
    const myButton = document.getElementById("button");

    myButton.addEventListener("click", function() {
      
    });
}
