const { ObjectId } = require('mongodb');
const {Schema,model} = require('mongoose');

const reactionSchema = new Schema({
    reactionId:{
        id:Schema.Types.ObjectId,
        // default:new ObjectId
    },
    reactionBody:{
        type:String,
        required:true,
        max:280
    },
    username:{
        type:String,
        required:true
    
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
},{
    toJSON:true
})

const reaction = model("reaction",reactionSchema);

module.exports = reaction;