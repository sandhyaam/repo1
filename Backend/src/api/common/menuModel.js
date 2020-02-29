import mongoose from 'mongoose'

const menuSchema = new mongoose.Schema({
    day:{
        type: String,
        unique:true
    },
    breakfast:{
        type: String
  
    },
    lunch:{
        type: String
  
    },
    dinner:{
        type: String
  
    }
},
{
    timestamps:true
})

const menuModel=mongoose.model('menus',menuSchema)

export default menuModel;