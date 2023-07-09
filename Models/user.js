const {Schema,model,Types} = require("mongoose");
const thoughts = require('./thought')


const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true
        
    },
    email:{
        type:String,
        required:[true, 'Email is Required'],
        unique:true,
        validate:{
validator: function(v){
    return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v)

}
        }
    },
    thoughts:[{
        type:Schema.Types.ObjectId,
        ref:'thoughts'

    }],
    friends:[{
        type:Schema.Types.ObjectId,
        ref:'user'
    }]
},{
    toJSON:{
        virtuals:true
    },
    id:false
}
)
userSchema.virtual('friendCount').get(function(){
    return this.friends.length
})
const uuser = model('user',userSchema);

module.exports = uuser;