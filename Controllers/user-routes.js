
const uuser = require('../Models/user');


const userControllers = {
    async getUsers(req, res) {
        try {

            const user = await uuser.find()
            res.status(200).json(user)
        } catch (err) {
            console.log(err)
            
        }

    },


    //Get By User Id
    async userById(req, res) {

        try {

            const getById = await uuser.findOne({ _id: req.params.userId }).populate('thoughts').populate('friends');

            if (!getById) {
                return res.status(404).json({ message: 'No user with that ID' });
            }
            res.status(200).json(getById)
        }

        catch (err) {
            console.error(err);
        }

    },

    async updateUser(req, res) {
try{
 
    const update = await uuser.findOneAndUpdate(

        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
    )
    if (!update) {
        return res.status(404).json({ message: 'No user updated' });
    }
    res.status(200).json(update)
}catch(err){
    console.error(err)
}
    },
    //Delete by user id
    async delById(req, res) {
        try {
            const delUser = await uuser.findOneAndDelete({ _id: req.params.userId })
            if (!delUser) {
                return res.statusCode().json({ message: "Cant find this user " })
            }
            res.status(200).json({ message: 'User Sucessfully deleted' })
        } catch (err) {
            console.error(err)
        }
    },


    // Delete friend by users userId
    async delFriend(req, res) {
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
    },

    // Add Friend by Users UserId
    async addFriend(req, res) {
        try {
            const addFriend = await uuser.findOneAndUpdate(
                { _id: req.params.userId },
                { $push: { friends: req.params.friendId } },
                { new: true }
            )
            res.status(200).json(addFriend)
        } catch (err) {
            console.error(err)
        }
    },



    // Create user
    async createUser(req, res) {
        try {


            const postUser = await uuser.create(req.body);
            res.status(200).json(postUser)
        } catch (err) {
            console.error(err)
        }
    }
}




module.exports = userControllers;