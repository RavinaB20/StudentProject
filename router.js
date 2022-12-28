var studentController=require('./controllers/studentcontroller');
module.exports=function(app){

    app.route('/students')
       .get(studentController.getAll)
}