// Dados
const proffys = [
    {
        name: "Victor Polito", 
        avatar: "https://avatars1.githubusercontent.com/u/58451041?s=460&u=c07419b4e8bfa6d0410f335d7546530bec28d920&v=4", 
        whatsapp: "33999999915", 
        bio: "Entusiasta das melhores tecnologias web avançadas. Gosta de explodir CPUs e mudar o estilo de vida das pessoas por meio de aplicações", 
        subject: "Web", 
        cost: "20.00", 
        weekday: [2, 4], 
        time_from: [720], 
        time_to: [2500]
    },
    {
        name: "Melissa Stinguel", 
        avatar: "https://scontent.fcnf1-1.fna.fbcdn.net/v/t1.0-9/15219638_1219531724789901_3312405569071574638_n.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_ohc=iaNS8DJSegQAX8GOrMG&_nc_ht=scontent.fcnf1-1.fna&oh=c19c8e4353d5b6431804b4563ce1c1cc&oe=5F51ED81", 
        whatsapp: "27879182398", 
        bio: "Entusiasta das melhores tecnologias web avançadas. Gosta de explodir CPUs e mudar o estilo de vida das pessoas por meio de aplicações", 
        subject: "Web", 
        cost: "35.00", 
        weekday: [0, 2, 4], 
        time_from: [720], 
        time_to: [2500]
    }
]

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

// Funcionalidades

function getSubject(subjectNumber){
    const arrayPosition = +subjectNumber - 1
    return subjects[position]
}

function pageLanding(req, res){
    return res.render("index.html")
}

function pageStudy(req, res){
    const filters = req.query
    return res.render("study.html", {proffys , filters, subjects, weekdays})
}

function pageGiveClasses(req, res){
    const data = req.query

    // [name, avatar, bio, ...]
    //se tiver dados
    const isNotEmpty = Object.keys(data).length > 0
    if (isNotEmpty) {

        data.subject = getSubject(data.subject)

        // adicionar dados a lista de proffys
        proffys.push(data)

        return res.redirect("/study")
    }

    // se nao, mostrar a pagina
    return res.render("give-classes.html", {subjects, weekdays})
}

// Servidor
const express = require('express')
const server = express()

// configurar nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true, 
})

// Inicio de configuracao do servidor
server
// configurar arquivos estático (css, scripts, imagens)
.use(express.static("public"))
// rotas de aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
// start do servidor
.listen(5500)
