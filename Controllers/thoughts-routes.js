const thoughts = require('../Models/thought')
const uuser = require("../Models/user")



const thoughtControllers={

    async  findThoughts  (req, res)  {
        try {
            const getThoughts = await thoughts.find();
            res.status(200).json(getThoughts)
    
        } catch (err) {
            console.error(err)
        }
    },
    // get thoughts by Id
    async thoughtById (req, res) {
        try {
            const getById = await thoughts.findOne({ _id: req.params.thoughtId })
    
            if (!getById) {
                return res.status(404).json({ message: 'No Thoughts found with that ID' });
            }
            res.status(200).json(getById)
        } catch (err) {
            console.error(err)
        }
    },

async updateThought(req,res){
try{

    const updated = await thoughts.findByIdAndUpdate(
        {_id :req .params.thoughtId},
        {$set : req.body},
        {runValidators:true,new:true}

    )
    if(!updated){
        return res.status(404).json({message:"No Thoughts found '"} )
    }
    res.status(200).json({message:"Thought have been updated"})
}catch(err){
    console.log(err)
}
},



    
    // delete thoughts by id
    async delThought(req, res) {
        try {
            const delThought = await thoughts.findOneAndDelete({ _id: req.params.thoughtId })
            if (!delThought) {
                return res.status().json({ message: "Can not find this thought " })
            }
            res.status(200).json({ message: 'Thought Sucessfully deleted' })
        } catch (err) {
            console.error(err)
        }
    },
    // post reaction
     async postReaction(req, res)  {
        try {
            const addReaction = await thoughts.findOneAndUpdate(
    
                { _id: req.params.thoughtId },
                {
                    $push: {
                        reactions: req.body
                    }
                },
                { new: true }
            )
            res.status(200).json(addReaction)
    
        } catch (err) {
            console.error(err)
        }
    },
    
    async delReaction(req, res) {
        try {
            const thought = await thoughts.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: { _id: req.params.reactionsId } } },
                { new: true }
            );
    
            if (!thought) {
                return res.status(500).json({ message: "Thought or reaction does not exist" });
            }
    
            res.status(200).json({ message: "Reaction deleted", thought });
        } catch (err) {
            console.error(err);
        }
    },
    async createThought(req,res){
        try{
            const createThoughts = await thoughts.create(req.body);

            res.status(200).json(createThoughts)






        }catch(err){
            console.log(err)
        }
    },
    
    // post new thoughts
   async postThought(req, res){
       try {
            
            const user = await uuser.findOneAndUpdate(  { _id: req.params.userId },
                { $push: { thoughts: req.params.thoughtId } },
                { new: true })

if(!user){
    return res.status(404).json({message:"Thought not found"})
}

            res.status(200).json({message:"A new thought have been added"})
    
    
    
        } catch (err) {
            console.error(err)
        }
    }
    




}




module.exports = thoughtControllers;