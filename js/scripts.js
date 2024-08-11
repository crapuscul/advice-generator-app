const apiUrl = 'https://api.adviceslip.com/advice';
const diceEl= document.querySelector('.dice');
const outputElement = document.querySelector('.advice')
const outputElementId = document.querySelector('.advice-id');

diceEl.addEventListener('click', () =>{
    // Make a GET request
fetch(apiUrl)
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
 
})
.then(data => {
outputElement.textContent = JSON.stringify(data.slip.advice);
outputElementId.textContent = `ADVICE #${JSON.stringify(data.slip.id)}`;


  console.log(data.slip.id, data.slip.advice);
})
.catch(error => {
  console.error('Error:', error);
});
})

