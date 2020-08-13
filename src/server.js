//Servidor
const express = require('express')
const server = express()
const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require("./pages")

// configurar nunjucks (template engine)
const nunjucks = require('nunjucks')

// nunjucks configuration
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// Início e configuração do servidor
server
// receber od dados do req.body
.use(express.urlencoded({ extended: true }))
// static file configuration (css, script, images)
.use(express.static('public'))
// application routes
.get('/', pageLanding)
.get('/study', pageStudy)
.get('/give-classes', pageGiveClasses)
.post("/save-classes", saveClasses)

    
.listen(5000)