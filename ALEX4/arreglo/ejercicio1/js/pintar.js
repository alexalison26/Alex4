
for (let index = 4; index < 9; index++) {
    let table = document.getElementById(`table${index}`)
    let letter = index - 4

    for (let index1 = 0; index1 < 5; index1++) {
        let cell = table.children[1].children[index1].children[letter]

        cell.classList.add(`table-dark`, 'border-dark')
    }
}
