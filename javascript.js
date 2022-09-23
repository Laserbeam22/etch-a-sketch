//Takes a number parameter & loops for creating new divs 

function createDivs(num) {
  for (i = 0; i < num; i++) {
    const singleDiv = document.createElement('div');
    singleDiv.classList.add('singleDiv');
    container.appendChild(singleDiv);

    /*document.querySelectorAll('.singleDiv').forEach(item => {
      item.addEventListener('mouseenter', event => {
        event.target.style.backgroundColor = 'rgb(70, 150, 231)';
      })
    })*/
  }
}

btn.addEventListener('click', function (e) {
  //resets child div amount to new given number 
  container.replaceChildren();

  let num = getNum();

  function getNum() {

    let input = prompt("Choose a number from 5-100 for the grid height/width.");
    let notString = parseFloat(input);
    let squared = notString*notString;
    const grid = document.getElementById('container');
    //repeatNumber = notString;
    
    if (Number.isInteger(notString) !== true || notString < 4 || notString > 100) {
      alert("Error. Please choose a number from 4-100.");  
    } else if (Number.isInteger(notString) == true) {
      grid.style.setProperty('--repeatNumber', notString);
      return squared;
    }
  }
  createDivs(num);
});