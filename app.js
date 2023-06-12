const containers = document.querySelectorAll('.container')
const winnerStatus = document.querySelector('.winner')

let chance = true;
let mark;
let crossPlayer = []
let circlePlayer = []

const winingCondition = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];

containers.forEach(container => {
    container.addEventListener('click', (e) => {
        if (!container.classList.contains('filled')) {
            const dataValue = e.target.getAttribute('data-value')
            if (chance) {
                mark = `<i class="fa-solid fa-xmark"></i>`
                updateCells(chance, Number(dataValue), container)
            } else {
                mark = `<i class="fa-regular fa-circle"></i>`
                updateCells(chance, Number(dataValue), container)
            }
            e.target.innerHTML = mark
            container.classList.add('filled')

            chance = !chance
        }
    });
});

function updateCells(bool, dValue, container) {
    if (bool) {
        crossPlayer.push(dValue);
        console.log('CrossPlayer:', crossPlayer)
        checkWin(crossPlayer, 'Cross', container)
    } else {
        circlePlayer.push(dValue)
        console.log('CirclePlayer:', circlePlayer)
        checkWin(circlePlayer, 'Circle', container)
    }
}

function checkWin(player, playerName, container) {
    winingCondition.forEach(win => {
        if (areAllElementsPresent(player, win)) {
            console.log(playerName + ' player')
            winnerStatus.innerText = `${playerName} player has won`
            document.querySelector('.Box').classList.add('readonly')
            containers.forEach(container => {
                container.classList.add('readonly')
            })
        }
    })
}

function areAllElementsPresent(arr1, arr2) {
    return arr2.every(element => arr1.includes(element))
}
