const getall="SELECT *FROM students";
const getbyid="SELECT *FROM students  WHERE id=$1";
const add="INSERT INTO students ( name, email, age, dob) VALUES ($1,$2,$3,$4)";
const del = "DELETE FROM students  WHERE email=$1";
const update="UPDATE students SET name=$1 WHERE id=$2";


module.exports={
    getall,getbyid,add,del,update
}