const thoughts = require('../Models/thought')
const router = require('express').Router();


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
                return res.status(404).json({ message: 'No Thoughts with that ID' });
            }
            res.status(200).json(getById)
        } catch (err) {
            console.error(err)
        }
    },
    
    // delete thoughts by id
    async delThought(req, res) {
        try {
            const delThought = await thoughts.findOneAndDelete({ _id: req.params.thoughtId })
            if (!delThought) {
                return res.status().json({ message: "Cant find this user " })
            }
            res.status(200).json({ message: 'thought Sucessfully deleted' })
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
    
            const delReaction = await thoughts.findOneAndDelete(
                {_id:req.params.thoughtId},
                {$pull:{reaction: req.params.reactionsId}},
                {
                    new:true
                }
    
            )
    
            if (!delReaction) {
                return res.status(500).json({ message: "Rection Does not exist" })
            }
            res.status(200).json({ message: "deleted "})
        } catch (err) {
            console.error(err)
        }
    },
    // post new thoughts
   async postThought(req, res){
        try {
            const createThoughts = await thoughts.create(req.body);
            res.status(200).json(createThoughts)
    
    
    
        } catch (err) {
            console.error(err)
        }
    }
    




}






module.exports = thoughtControllers;