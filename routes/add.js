const {
  Router
} = require('express')
const Courses = require('../models/module')
const router = Router()

router.get('/', (req, res) => {
  res.render('add', {
    title: "Добавиты новый курсы",
    isAdd: true
  })
})


router.post('/', async (req, res) => {
  console.log(req.body);
  const courses = new Courses(req.body.title, req.body.price, req.body.img, req.body.id)
  await courses.save()

  res.redirect('/courses')
})

module.exports = router