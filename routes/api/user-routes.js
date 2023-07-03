const router = require('express').Router();


const {getUsers,
    userById,
    delById,
    updateUser,
    delFriend,
    addFriend,
    createUser,
} = require('../../Controllers/user-routes')

router.route("/").get(getUsers)
router.route("/:userId").get(userById)
router.route("/:userId").delete(delById)
router.route("/").post(createUser)
router.route("/:userId").put(updateUser)




router.route("/:userId/friends/:friendId").post(addFriend)
router.route("/:userId/friends/:friendId").post(delFriend)




module.exports = router;