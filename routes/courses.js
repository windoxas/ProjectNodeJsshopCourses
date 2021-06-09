const {Router} = require('express')
const Courses = require('../models/module')

const router = Router()

router.get('/', async (req, res) =>{
  const courses  = await  Courses.getAll()
    res.render('courses',{
        title:"Курсы",
        isCourse:true,
        courses
      })
})


router.get('/:id/edit', async (req, res) => {
  const courses  = await  Courses.getById(req.params.id)
  res.render('courses-edit',{
      title:`Редактировать ${courses.title}`,
      courses
    })
})


router.post('/edit', async (req,res) => {
  await Courses.update(req.body)
  res.redirect('/courses')
})

router.get('/:id', async (req, res) => {
  const course  = await  Courses.getById(req.params.id)
  res.render('course',{
      title:`Курс ${course.title}`,
      course
    })
})

module.exports = router