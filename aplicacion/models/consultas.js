const pool = require('../utils/base_de_datos');
const TABLA_ALUMNO = "alumno";
const TABLA_ALUMNO_MATERIA = "alumno_materia";
const TABLA_CARRERA = "carrera";
const TABLA_MATERIAS = "materias";

//cosnt get = async()=>{
  //  const query = select
//}

const create = async(obj) =>{
    try{
        const query = "INSERT INTO ?? SET ?";
        const params = [TABLA_ALUMNO, obj];
        return await pool.query(query, params);
    }
    catch(e){
        console.log(e);
    }
}
const getNumCarrera = async()=>{
    try{
        const query = "SELECT nom_carrera, nro_carrera FROM ??";
        const params = [TABLA_CARRERA];
        return await pool.query(query, params);

    }catch(e){
        console.log(e);
    }
}
const subjet = async()=>{
    try{
     const query = "SELECT materia FROM ??";
     const params = [TABLA_MATERIAS];
     return await pool.query(query, params);
    } catch(e){
        console.log(e)
    }
}


const getIn = async(obj)=>{
    try{
        const query = "INSERT INTO ?? SET ?";
        const params = [TABLA_ALUMNO, obj];
        return await pool.query(query, params);
    }
    catch(e){
        console.log(e);
    }
}


module.exports = {create, getNumCarrera, subjet, getIn};    