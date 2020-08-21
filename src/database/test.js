const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    // Inserir dados

    proffyValue = {
        name: "Victor Polito",
        avatar: "https://avatars1.githubusercontent.com/u/58451041?s=460&u=c07419b4e8bfa6d0410f335d7546530bec28d920&v=4",
        whatsapp: "33999999915",
        bio: "Entusiasta das melhores tecnologias web avançadas. Gosta de explodir CPUs e mudar o estilo de vida das pessoas por meio de aplicações",
    }

    classValue = {
        subject: 1,
        cost: "20.00",
        // o proffy id virá pelo campo de dados
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }

    ]

    // await createProffy(db, {proffyValue, classValue, classSchedule})

    // Consultar os dados inseridos

    // todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    // consultar as classes de um determinado professor
    // e trazer junto os dados do professor
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)

    // console.log(selectClassesAndProffys)

    const selectClassesSchedules = await db.all(`
        SELECT classes_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300"
    `)
})