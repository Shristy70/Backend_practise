const stuInfo = (req,res)=>{
    res.send("<h1>hello this is info page</h1>");
}
const stuResult = (req,res)=>{
    res.send("<h1>hello this is result page</h1>");
}
const stuFees = (req,res)=>{
    res.send("<h1>hello this is fees page</h1>");
}
module.exports = {
    stuInfo,
    stuResult,
    stuFees

}