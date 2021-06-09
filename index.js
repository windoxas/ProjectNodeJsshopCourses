const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const homeRoutes = require('./routes/home')
const courseRoutes = require('./routes/courses')
const cardRoutes = require('./routes/card')
const addRouter = require('./routes/add')
const app = express()

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
})



app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')
app.use(express.static(path.join(__dirname, 'public')))
// <Routers>
app.use(express.urlencoded({
  extended: true
}))
app.use('/', homeRoutes)
app.use("/courses", courseRoutes)
app.use("/add", addRouter)
app.use("/card", cardRoutes)


// </Routers>

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is runing on port ${PORT}`);
})