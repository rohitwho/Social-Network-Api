const {Schema,model} = require('mongoose');
const reaction = require('./reaction');
const dayjs = require('dayjs')


const thoughtsSchema = new Schema({
    thoughtText:{
        type:String,
        Required:true,
        minLength:1,
        maxLength:280
    },
    createdAt:{
       type:Date,
       default:new Date(),
       get: function(date) {
        return dayjs(date).format('YYYY-MMM-DD HH:mm:ss');
      }
  
  
    },
    username:{
        type:String,
        required:true
    },
    reactions:[reaction]
},{
    toJSON:{
        virtuals:true,
        getters:true
    },
    id:false

})
thoughtsSchema.virtual("reactionCount").get(function(){
    return this.reactions.length
})
 const thoughts = model("thoughts",thoughtsSchema);

 module.exports = thoughts;
