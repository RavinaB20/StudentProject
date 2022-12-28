
var students=require('../data/student.json');

exports.getAll=function (req, res){
res.send(students);
};