const express=require('express');
const router= express.Router();

const Task = require('../models/task');


router.get('/', async (req, res)=>{
    const tasks = await Task.find();
    console.log(tasks)
    res.render('index', {
        tasks: tasks
    })
})

router.post('/', async (req, res)=>{
    const task = new Task(req.body)
    await task.save();
})

module.exports=router;