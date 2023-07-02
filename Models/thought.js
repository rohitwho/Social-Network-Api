const {Schema,model} = require('mongoose');


const thoughtsSchema = new Schema({
    thoughtText:{
        type:String,
        Required:true,
        minLength:1,
        maxLength:280
    },
    createdAt:{
       type:Date,
       default:Date.now 
    },
    username:{
        type:String,
        required:true
    },
    reactions:[{

    }]
},{
    toJSON:{
        virtuals:true
    }
})
 const thoughts = model("thoughts",thoughtsSchema);

 module.exports = thoughts;