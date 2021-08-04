let cells = document.querySelectorAll('.cell')

let item = document.querySelector('.item')

item.addEventListener('dragstart', (e) => {
    e.target.classList.add('shadow')
    setTimeout(() => e.target.classList.add('hidden'), 0)
})

item.addEventListener('dragend', (e) => {
    e.target.classList.remove('shadow', 'hidden')
})


const onDragOver = (e) => {
    e.preventDefault()
}

const onDragEnter = (e) => {
    e.target.classList.add('hovered')
}
const onDragLeave = (e) => {
    e.target.classList.remove('hovered')
}
const onDrop = (e) => {
    e.target.appendChild(item)
    e.target.classList.remove('hovered')
}

cells.forEach((cell) => {
    cell.addEventListener('dragover', onDragOver)
    cell.addEventListener('dragleave', onDragLeave)
    cell.addEventListener('dragenter', onDragEnter)
    cell.addEventListener('drop', onDrop)
})