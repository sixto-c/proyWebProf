var express = require('express');
var router = express.Router();
const {subjet, getIn} = require('./../models/consultas');

const getSubjet = async(req, res)=>{
    const cursos = await subjet();
    console.log(cursos)
    res.render('cursos', {cursos});;
    
}

const get = async(req, res)=>{
    const cursos = await subjet();
    console.log(cursos)
    res.render('apuntarse', {cursos});;
    
}
const apuntarse = async(req,res)=>{
    const obj = req.body;
    console.log(obj);
    const apuntado = await getIn(obj);
    console.log(apuntado);
    res.redirect('/misCursos');
}



router.get('/', getSubjet);
router.get('/apuntarse', get);
router.post('/apuntarse', apuntarse);

module.exports = router;