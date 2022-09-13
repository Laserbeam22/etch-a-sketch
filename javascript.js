//Takes a number parameter & loops for creating new divs 

function createDivs(num) {
    
    const container = document.querySelector('#container');


    for (let i = 0; i < num; i++) {
        singleDiv = document.createElement('div');
        container.appendChild(singleDiv);
        singleDiv.style.cssText = 'background: pink; border: solid #000000';
        
    }
    return singleDiv;
}

console.log(createDivs(256));