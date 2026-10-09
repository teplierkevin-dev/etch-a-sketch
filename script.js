const totalSpace = document.createElement('div')
totalSpace.className = "firstContainer"
document.body.appendChild(totalSpace);

for(let j = 0; j < 20; j++){
const containerRow = document.createElement('div');
containerRow.className = "row";
totalSpace.appendChild(containerRow);

    for (let i = 0; i < 20; i++){
        const containerColonne = document.createElement('div')
        containerColonne.className = "case";
        containerRow.appendChild(containerColonne);
    }
}