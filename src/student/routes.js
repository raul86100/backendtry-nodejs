const { Router }=require('express');
const controller=require('./controller');

const router=Router();
router.get('/',controller.getStudent);
router.get('/getbyid/:id',controller.getbyid);
router.post('/add',controller.add);
router.delete('/delete/:id',controller.del);
router.put('/update/:id',controller.update);
module.exports=router;