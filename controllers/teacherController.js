const teacherInfo = (req ,res)=>{
    res.send("<h1>this is teacher info</h1>")
}
const teacherDepartment = (req ,res)=>{
    res.send("<h1>this is teacher department</h1>")
}
const teacherSalary = (req ,res)=>{
    res.send("<h1>this is teacher salary</h1>")
}
module.exports = {
    teacherInfo,
    teacherDepartment,
    teacherSalary
}