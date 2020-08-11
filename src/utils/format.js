const subjects = [
  "Artes",
  "Biologia",
  "Ciências",
  "Educação física",
  "Física",
  "Geografia",
  "História",
  "Matemática",
  "Português",
  "Química",
]

const weekdays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
]

function getSubject(subjectNumber) {
  const arrayPosition = +subjectNumber - 1
  return subjects[arrayPosition]
}

function convertHoursToMinutes(time) {
  const separado = time.split(':')
  const total = parseInt((separado[0] * 60)) + parseInt((separado[1]))
  return total
}

module.exports = {
  subjects,
  weekdays,
  getSubject,
  convertHoursToMinutes
}