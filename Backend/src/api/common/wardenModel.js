import mongoose from 'mongoose'

const wardenSchema = new mongoose.Schema({
   
    name:{
        type: String
    },
    emailid:{
        type: String
    },
   password:{
       type:String
   },
    age:{
        type: String
    },
  
    phone:{
        type: String
    },
    qualification:{
        type: String
    },
    gender:{
        type: String
    },
    address:{
        type: String
    },
    image:{
        type:String
    }
   
    
},
{
    timestamps:true
})

const wardenModel=mongoose.model('wardens',wardenSchema)

export default wardenModel;