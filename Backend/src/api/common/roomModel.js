import mongoose from 'mongoose'

const roomSchema = new mongoose.Schema({
    roomno:{
        type: String
    },
    total:{
        type:String
    },
    vacancies:{
        type: Number
    }
    
},
{
    timestamps:true
})

const Rooms=mongoose.model('rooms',roomSchema)

export default Rooms;