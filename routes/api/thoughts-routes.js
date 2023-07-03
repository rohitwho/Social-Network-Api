 
 const router = require('express').Router()
 
 
 const {
    findThoughts,
    thoughtById,
    delThought,
    postReaction,
    delReaction,
    postThought
 } = require('../../Controllers/thoughts-routes')



 router.route('/').get(findThoughts);
 router.route('/:thoughtId').get(thoughtById);
 router.route('/:thoughtId').delete(delThought);
 router.route('/').post(postThought)

 router.route("/:thoughtId/reactions").get(postReaction);
 router.route("/:thoughtId/reaction/:reactionsId").delete(delReaction)



 module.exports = router