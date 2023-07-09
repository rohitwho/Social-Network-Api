const {Schema,model} = require('mongoose');
const reaction = require('./reaction');


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
    reactions:[reaction]
},{
    toJSON:{
        virtuals:true
    },
    id:false

})
thoughtsSchema.virtual("reactionCount").get(function(){
    return this.reactions.length
})
 const thoughts = model("thoughts",thoughtsSchema);

 module.exports = thoughts;