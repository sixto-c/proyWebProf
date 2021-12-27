var express = require('express');
var router = express.Router();
const {create, getNumCarrera} = require('./../models/consultas');

const getRegistro = async(req,res)=>{
    const obj = req.body;
    const newAlu = await create(obj);
    console.log(newAlu);
    res.redirect('/cursos'); 
}
const get = async(req, res)=>{
    const numCarreras = await getNumCarrera(); 
    console.log(numCarreras);
    res.render('sing-up', {numCarreras});
    }

router.get('/', get);
router.post('/', getRegistro)


module.exports = router;
