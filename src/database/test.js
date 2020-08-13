const dataBase = require('./db')
const createProffy = require('./createProffy')

dataBase.then(async (db) => {
    // Insert data
    proffyValue = {
        name: "Allan Kildare",
        avatar: "https://avatars3.githubusercontent.com/u/50001206?s=460&u=8194e2477b75429a95469c3df3544fefb5709e2a&v=4",
        whatsapp: "2112345678",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    }

    classValue = {
        subject: 1,
        cost: "20"
        // o proffy_id virá pelo banco de dados
    }

    classScheduleValues = [
        // class_id virá pelo banco de dados, após cadastrarmos a class
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
    
    // await createProffy(db, { proffyValue, classValue, classScheduleValues })

    // Consultar os dados inseridos

    // todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys") // * means ALL
    // console.log(selectedProffys)

    // consultar as classes de um determinado professor
    // e trazer junto os dados do professor
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 5;
    `)
    // console.log(selectClassesAndProffys)

    // o horário que pessoa trabalha
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "1"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to >= "520"
    `)

    console.log(selectClassesSchedules)
})