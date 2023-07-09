 
 const router = require('express').Router()
 
 
 const {
    findThoughts,
    thoughtById,
    delThought,
    createThought,
    updateThought,
    postReaction,
    delReaction,
    postThought
 } = require('../../Controllers/thoughts-routes')



 router.route('/').get(findThoughts).post(createThought);
 router.route('/:userId/new/:thoughtId').post(postThought);
 router.route('/:thoughtId').get(thoughtById).delete(delThought).put(updateThought);



 router.route("/:thoughtId/reactions").post(postReaction);
 router.route("/:thoughtId/reaction/:reactionsId").delete(delReaction)



 module.exports = router