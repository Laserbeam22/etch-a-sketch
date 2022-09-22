//Takes a number parameter & loops for creating new divs 

function createDivs(num) {
  for (i = 0; i < num; i++) {
    const singleDiv = document.createElement('div');
    singleDiv.classList.add('singleDiv');
    container.appendChild(singleDiv);

    document.querySelectorAll('.singleDiv').forEach(item => {
      item.addEventListener('mouseenter', event => {
        event.target.style.backgroundColor = 'rgb(70, 150, 231)';
      })
    })
  }
}


btn.addEventListener('click', function (e) {
  
  let num = getNum();

  function getNum() {

    let input = prompt("Choose a number from 3-100 for sketch dimensions.");
    let notString = parseInt(input);
    let squared = notString*notString;
    
    if (Number.isInteger(notString) == true && notString >= 3 && notString <=100) {
        return squared;
    } else {
        return("Error. Please choose a number from 3-100.");
    }
  }
  createDivs(num);
});



//console.log(createDivs(num));


