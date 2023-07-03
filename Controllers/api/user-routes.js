const { MongoError } = require('mongodb');
const uuser = require('../../Models/user');
const router = require('express').Router()


router.get('/', async (req, res) => {
    try {

        const getUsers = await uuser.find();
        res.status(200).json(getUsers)
    } catch (err) {
        console.log(err)
    }

})



router.get('/:userId', async (req, res) => {

    try {

        const getById = await uuser.findOne({ _id: req.params.userId });

        if (!getById) {
            return res.status(404).json({ message: 'No user with that ID' });
        }
        res.status(200).json(getById)
    }

    catch (err) {
        console.error(err);
    }

})




router.post('/',async(req,res)=>{
    try{


        const postUser = await uuser.create(req.body);
        res.status(200).json(postUser)
    }catch(err){
        console.error(err)
    }
})

module.exports = router;