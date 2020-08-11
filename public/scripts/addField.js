//procurar botão
document.querySelector('#add-time')
  //quando clicar no botão chama o cloneField
  .addEventListener('click', cloneField)


//executar uma ação
function cloneField() {
  //duplicar os campos. Que campos?
  const newFieldContainer = document.querySelector('#second-schedule-div').cloneNode(true)


  //pegar os campos que deseja limpar. que campos?
  const fields = newFieldContainer.querySelectorAll('input')

  //para cada campo, limpar
  fields.forEach(field => {
    field.value = ''
  });

  //colocar na página: onde?
  document.querySelector('#schedule-items').appendChild(newFieldContainer)
}



