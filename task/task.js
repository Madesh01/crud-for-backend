

const router=require("express").Router();

router.get("/",(req,res)=>{
    res.send("api is called");
});

const data=[
    {
        id:1,
        Taskname:"Edli" ,
        Description:"Edli prepare for tiffen",
        Status:"complete"},
        {
            id:2,
            Taskname:"carrot",
            Description:" carrot is multivitamin fruit its A orange color vegetable ",
            Status:"incomplete"
        },
        {
            id:3,
            Taskname:"Dosa" ,
            Description:"Edli prepare for tiffen",
            Status:"complete"},
            {
                id:4,
                Taskname:"tamoto",
                Description:"its A red color vegetable ",
                Status:"incomplete"
            },
    
]

router.get("/taskdata",(req,res)=>{
    res.json(data);
});


router.get("/task/:id",(req,res)=>{
    const taskid =parseInt(req.params.id);
    const task =data.find((item)=>{
        return item.id===taskid
    });
  
    if (task) {
      res.json(data);
    } else {
      res.status(404).json({ message: ' Sorry task not found' });
    }
});

router.post("/create",(req,res)=>{
    const newTask =req.body;
    newTask.id=data.length+1;
    data.push(newTask);

    res.json(newTask)
});
router.put('/update/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const taskIndex = data.findIndex(t => t.id === taskId);
  
    if (taskIndex !== -1) {
      data[taskIndex] = { ...data[taskIndex], ...req.body };
      return res.json(data[taskIndex]);
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
  });



   router.delete("/delete/:id",(req,res)=>{

    const Id =req.params.id;
    const result = data.filter((item)=>item.id!==Id)
    res.json({message:"tasks deleted succesfully"})
   });

module.exports= router;