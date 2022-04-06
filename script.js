// change text-center text-white text-uppercase'

const textCenter = document.querySelector('.text-center')


const list1 = document.querySelector('.ml-2')
// change text-center text-white text-uppercase

const listGroup = document.querySelector('.list-group')
const listGroupItem = document.querySelectorAll('.list-group-item')
// change background color
listGroup.style.backgroundColor = 'black'

// change all background the listGroupItem  to black
for (let i = 0; i < listGroupItem.length; i++) {
    listGroupItem[i].style.backgroundColor = 'black'
}
