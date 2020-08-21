const subjects = [
    "Ambiental",
    "Artes",
    "Biologia",
    "Ciências",
    "Física",
    "Educação física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
    "Web",
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

function getSubject(subjectNumber){
    const arrayPosition = +subjectNumber - 1
    return subjects[position]
}

function convertHoursToMinutes(time){
    const [hour, minutes] = time.split(":")
    return Number((hour * 60) + minutes)
}

module.exports = {
    subjects,
    weekdays,
    getSubject
}