const totalSpace = document.createElement('div')
totalSpace.className = "firstContainer"
document.body.appendChild(totalSpace);

const btnSetting = document.querySelector('button#settings')

btnSetting.addEventListener('click', () => {
    let popUp = prompt ("Choose a number from 0 to 100");
    if (popUp > 0 && popUp <= 100) {
    document.querySelectorAll('div.row').forEach(element => {
        totalSpace.removeChild(element);
    });
    buildGrid(popUp);
    addListener();
    } else {
        alert("Votre nombre doit être compris entre 0 et 100")
    };
});


function buildGrid (numb) {

    let numberOfSquarePerSide = numb;

    for(let j = 0; j < numberOfSquarePerSide; j++){
    const containerRow = document.createElement('div');
    containerRow.className = "row";
    totalSpace.appendChild(containerRow);

        for (let i = 0; i < numberOfSquarePerSide; i++){
            const containerColonne = document.createElement('div')
            containerColonne.className = "case";
            containerRow.appendChild(containerColonne);
        }               
    }
}

function addListener (){
     document.querySelectorAll('div.case').forEach(item =>            
            item.addEventListener("mouseover", () => {
                let randomColor = (Math.floor(Math.random()*0xFFFFFF)).toString(16);
                item.style.background = "#" +randomColor;
            })
        );
}

buildGrid(16);
addListener();
     