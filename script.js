const units = prompt('Length of each side?');
document.documentElement.style.setProperty('--units',units);
const gridContainer = document.querySelector('.gridContainer');
for (let i = 0; i < units ** 2; i++) {
    let div = document.createElement('div');
    div.className = 'grid'
    gridContainer.appendChild(div);
}

/*
const units = prompt("Length of each side?")
document.documentElement.style.setProperty('--units', units);
const gridContainer = document.querySelector('gridContainer');
for (let i = 0; i < units; i++) {
    let div = document.createElement('div');
    div.className = 'grid';
    div.innerHTML = i;
    gridContainer.appendChild(div);
}
*/

gridContainer.addEventListener('mouseover', function(e) {
    let hoveredDiv = e.target;
    hoveredDiv.className = 'coloredDiv';
});


const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    const resetDiv = document.querySelectorAll('.coloredDiv')
    resetDiv.forEach(function(div){
        div.classList.replace('coloredDiv', 'grid');
    })
})


