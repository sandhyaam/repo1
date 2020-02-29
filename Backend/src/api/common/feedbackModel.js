import mongoose from 'mongoose'

const feedbackSchema = new mongoose.Schema({
    htno:{
        type: String
    },
    feedback:{
        type: String
    }
},
{
    timestamps:true
})

const feedbacksModel=mongoose.model('feedbacks',feedbackSchema)

export default feedbacksModel;