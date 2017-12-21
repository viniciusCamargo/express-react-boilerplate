const express = require('express')
const app = express()
const path = require('path')
const compression = require('compression')

const l = console.log.bind(this)

app.use(compression())

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  const initialState = JSON.stringify({
    users: require('./data.json')
  })

  res.render('index', { initialState, pageTitle: 'Home' })
})


const port = process.env.PORT || 3003
app.listen(port, () => l(`http://localhost:${port}`))
