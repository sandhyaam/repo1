import mongoose from 'mongoose'

const StudentSchema = new mongoose.Schema({
    htno:{
        type: String,
        unique:true
    },
    name:{
        type: String
    },
    fathername:{
        type: String
    },
    branch:{
        type: String
    },
    roomno:{
        
        type: String
    },
    phone:{
        type: String
    },
    emailid:{
        type: String
    },
    password:{
        type:String
    },
    address:{
        type: String
    },
    totalfee:{
        
        type: String
    },
    paidamount:{
        type: String
    },
    due:{
        type: String
    },
    date:{
        type: String
    },
    image:{
        type:String
    }
},
{
    timestamps:true
})

const studentModel=mongoose.model('students',StudentSchema)

export default studentModel;