const { MongoError } = require('mongodb');
const uuser = require('../../Models/user');
const router = require('express').Router()


router.get('/', async (req, res) => {
    try {

        const getUsers = await uuser.find(
            // {$push:{
            //     thoughts:req.params.
            // }}
        );
        res.status(200).json(getUsers)
    } catch (err) {
        console.log(err)
    }

})


//Get By User Id
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


//Delete by user id
router.delete('/:userId', async (req, res) => {
    try {
        const delUser = await uuser.findOneAndDelete({ _id: req.params.userId })
        if (!delUser) {
            return res.statusCode().json({ message: "Cant find this user " })
        }
        res.status(200).json({ message: 'User Sucessfully deleted' })
    } catch (err) {
        console.error(err)
    }
})


// Delete friend by users userId
router.delete('/:userId/friends/:friendId', async (req, res) => {
    try {
        const delFriend = await uuser.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId } },
            { new: true }
        );

        if (!delFriend) {
            return res.status(404).json({ message: "Can't find this user" });
        }

        res.status(200).json({ message: 'Friend successfully deleted' });
    } catch (err) {
        console.error(err);
    }
});

// Add Friend by Users UserId
router.post('/:userId/friends/:friendId', async (req, res) => {
    try {
        const addFriend = await uuser.findOneAndUpdate(
            {_id: req.params.userId },
             { $push: { friends: req.params.friendId }},
              { new: true}
        )
        res.status(200).json(addFriend)
    } catch (err) {
        console.error(err)
    }
})



// Create user
router.post('/', async (req, res) => {
    try {


        const postUser = await uuser.create(req.body);
        res.status(200).json(postUser)
    } catch (err) {
        console.error(err)
    }
});



module.exports = router;