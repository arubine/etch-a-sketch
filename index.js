const sketchField = document.querySelector('.sketch-field')

function createField(numberOfRows) {
  for (i = 1; i <= numberOfRows; i++) {
    const row = document.createElement('div')
    row.setAttribute('id', `row-${i}`)
    row.classList.add('row')

    sketchField.appendChild(row)
  }
  const rowList = document.querySelectorAll('.row')
  rowList.forEach((row) => {
    for (j = 1; j <= numberOfRows; j++) {
      const cell = document.createElement('div')
      cell.classList.add('cell')
      cell.addEventListener('mouseover', (e) => {
        cell.style.cssText = 'background-color: lightblue;'
      })
      row.appendChild(cell)
    }
  })
}

createField(16)

const resizeBtn = document.querySelector('button')

resizeBtn.addEventListener('click', btnCreateField)

function clearField() {
  sketchField.innerHTML = ''
}

function btnCreateField() {
  const rowValue = +prompt(
    'How many cells you would like to see in a row? 1 - 100'
  )
  console.log(rowValue)
  console.log(Number.isInteger(rowValue))
  if (!Number.isInteger(rowValue)) {
    alert('It should be a natural number bb')
    return
  }
  if (rowValue < 1 || rowValue > 100) {
    alert('Pick a number from 1 to 100')
    return
  }
  clearField()
  createField(rowValue)
}
