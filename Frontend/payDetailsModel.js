import mongoose from 'mongoose'

const payDetailsSchema = new mongoose.Schema({
    htno:{
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
    
    newpayment:{
        type:String
    },
    newdate:{
        type: String
    }
    
},
{
    timestamps:true
})

const payDetails=mongoose.model('payDetails',payDetailsSchema)

export default payDetails;