const mongoose=require('mongoose');
const Connect=async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/resumegenerator');
        console.log(`database connected`);
    }
    catch(error){
        console.log(`Error in database connection`);
    }
}
module.exports=Connect;