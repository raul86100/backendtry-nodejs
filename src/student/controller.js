const pool = require("../../db");
const queries = require("./quries");
const getStudent = (req, res) => {
  pool.query(queries.getall, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
}
const getbyid = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getbyid, [id], (error, result) => {

    if (error) throw error;
    res.status(201).json(result.rows);

  });
}
const add = (req, res) => {
  
  const { name, email, age, dob } = req.body;
  
  
   pool.query(queries.add, [name, email, age, dob], (error, result) => {
    if (error) throw error;
     res.status(200).send("inserted");
  })
}
const del=(req,res)=>{
  const email=req.params.id;
  pool.query(queries.del,[email],(error,result)=>{
    if (error) throw error;
    res.status(200).send("deleted");
  })
}
const update=(req,res)=>{
const id=parseInt(req.params.id);
const {name}=req.body;
pool.query(queries.update,[name,id],(error,result)=>{
  if(error) throw error;
  res.status(200).send("updated");
})
}
module.exports = {
  getStudent, getbyid, add,del,update
};