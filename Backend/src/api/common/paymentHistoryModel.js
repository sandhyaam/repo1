import mongoose from 'mongoose'

const historySchema = new mongoose.Schema({
    htno:{
        type: String
    },
    newpayment:{
        type:String
    },
    date:{
        type:String
    }
},
{
    timestamps:true
})

const paymentHistory=mongoose.model('payments',historySchema)

export default paymentHistory;