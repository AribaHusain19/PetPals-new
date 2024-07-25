const mongoose = require('mongoose');

const AdoptionSchema = new mongoose.Schema(
    {
        FirstName:{
            type:String,
            required:true,
        },
        LastName:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
        },
        address:{
            type:String,
            required:true,
        },
        phone:{
            type:String,
            required:true,
        },
        pet:
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Pet',
            
        }
    },{
        timestamps:true,
    }
);

module.exports = Adoption = mongoose.model('Adoption',AdoptionSchema);