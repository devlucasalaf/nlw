const express = require('express')
const server = express()
const { pageGiveClasses, pageLanding, pageStudy, saveClasses, pageSucessProffy } = require('./pages')

//configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
  express: server,
  noCache: true, //cash é guardar em memória (aqui não está)
})

server
  //receber os dados do req.body
  .use(express.urlencoded({ extended: true }))
  //configurar arquivos estáticos (css, scripts, imagens)
  .use(express.static("public"))
  //rotas da aplicação
  .get('/success-proffy', pageSucessProffy)
  .get('/', pageLanding)
  .get('/study', pageStudy)
  .get('/give-classes', pageGiveClasses)
  .post('/save-class', saveClasses)
  .listen(5500)


