import mongoose from "mongoose";

const driveschema=new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    time:{
        type:Date,
        required:true
    },
    image:{
        type:String,
        required:true
    },

},{
    timestamps:true
})

const Drive=mongoose.model('Drive',driveschema);

export default Drive