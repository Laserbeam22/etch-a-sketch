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
  console.log(createDivs(256));