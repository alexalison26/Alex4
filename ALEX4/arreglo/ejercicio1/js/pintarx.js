
let table2 = document.getElementById('table2')

for (let iter1 = 0; iter1 < 3; iter1++) {
    for (let iter2 = 0; iter2 < 3; iter2++) {
        if (iter1 == iter2 || iter1 + iter2 == 2) {
            table2.children.nums.children[iter1].cells[iter2].classList.add('table-dark')
        } else {
            ;
        }
    }
}

for (let iter1 = 2; iter1 < 5; iter1++) {
    for (let iter2 = 0; iter2 < 3; iter2++) {
        if (iter1 + iter2 == (iter2 + 1) * 2 || iter1 + iter2 == 4) {
            table2.children.nums.children[iter1].cells[iter2].classList.add('table-dark')
        } else {
            ;
        }
    }
}
for (let iter1 = 0; iter1 < 3; iter1++) {
    for (let iter2 = 2; iter2 < 5; iter2++) {
        if (iter1 + iter2 == (iter1 + 1) * 2 || iter1 + iter2 == 4) {
            table2.children.nums.children[iter1].cells[iter2].classList.add('table-dark')
        } else {
            ;
        }
    }
}

let table3 = document.getElementById('table3')

for (let iter1 = 0; iter1 < 5; iter1++) {
    for (let iter2 = 0; iter2 < 5; iter2++) {
        if (iter1 == iter2|| iter1 + iter2 == 4){
            table3.children.nums.children[iter1].cells[iter2].classList.add('table-dark')
        } else {
            ;
        }
    }
}

