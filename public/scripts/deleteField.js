
function deleteField(t) {
  t.parentNode.parentNode.parentNode.removeChild(t.parentNode.parentNode);
}

/*function deleteField() {
  const fieldFather = document.querySelector('#schedule-items')
  const fieldSon = document.querySelector('#second-schedule-div')
  fieldFather.removeChild(fieldSon)
}*/

document.querySelector('.delete-button').addEventListener('click', deleteField)