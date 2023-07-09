const router = require('express').Router();


const {getUsers,
    userById,
    delById,
    updateUser,
    delFriend,
    addFriend,
    createUser,
} = require('../../Controllers/user-routes')

router.route("/").get(getUsers).post(createUser)
router.route("/:userId").get(userById).put(updateUser).delete(delById)



router.route("/:userId/friends/:friendId").post(addFriend).delete(delFriend)




module.exports = router;