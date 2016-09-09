/*
* handle the url for any get, put, post and delete request
* developer : Amila
 */
var express = require('express');
var router = express.Router();
var ControllerMap = require('../Controller/ControllerMap');
var UserTypeController = ControllerMap.UserTypeController;

/*
* indexpage path
* @req -> client request
* @res -> client response
* @next -> call back method
 */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*
 * indexpage path for user type to get all the types
 * @req -> client request
 * @res -> client response
 * @next -> call back method
 */
router.get('/userType/', function(req,res,next) {
  UserTypeController.get(res);
});
/*
 * url for insert user type by using post request
 * @req -> client request
 * @res -> client response
 * @next -> call back method
 */
router.post('/userType/', function(req, res, next) {
  UserTypeController.create(req.body, res);
});
/*
 * url for update  user type by using put request
 * @req -> client request
 * @res -> client response
 * @next -> call back method
 */
router.put('/userType/', function(req, res, next) {
  UserTypeController.update(req.body, res);
});
/*
 * url for delete  user type by using delete put request
 * @req -> client request
 * @res -> client response
 * @next -> call back method
 */
router.delete('/userType/', function(req, res,next) {
  UserTypeController.delete(req.body, res);
});
module.exports = router;
