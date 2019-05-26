
var express=require('express');
var app=express();

app.set("view engine","ejs");
app.set("views", __dirname +"/views");
app.set("view options",{layout:false});

const employees=[
    {
        empID:101,
        empName:"King Kochhar" ,
        empDesignation:"Software Developer" ,
        empLocation:"New Delhi" ,
        empSalary:50000
    } ,

    {
        empID:102,
        empName:"John Smith" ,
        empDesignation:"Software Tester" ,
        empLocation:"Mumbai" ,
        empSalary:40000
    } ,

    {
        empID:103,
        empName:"Gautam Smith" ,
        empDesignation:"Database Administratorr" ,
        empLocation:"Bangalore" ,
        empSalary:35000
    } 
]

app.get('/', function(req,res){
    res.render('app1',{
        message: "Hello World" ,
        people: ["King Kochhar" , "John Smith" , "Sarah","Gautam Bhala"] ,
        data: [
            {id: 101,name: "King Kochhar"} ,
            {id: 102,name: "John Smith"} ,
            {id: 103,name: "Sarah"}
        ]
    });
})

app.get('/home',function(req,res){
    res.render('pages/home');
})

app.get('/about',function(req,res){
    res.render('pages/about');
})

app.get('/employees',function(req,res){
    res.render('pages/employees' ,{
        employees:employees
    });
})

app.get('/employee/:id' , function(req,res){
    const emp=employees.filter((emp) => {
        return emp.empID == req.params.id
    })[0]
    res.render('pages/employee',{
        empID:emp.empID,
        empName:emp.empName ,
        empDesignation:emp.empDesignation ,
        empLocation:emp.empLocation ,
        empSalary:emp.empSalary
    })
})

app.listen(5000,function(){
    console.log("mode server is running at 5000.")
});