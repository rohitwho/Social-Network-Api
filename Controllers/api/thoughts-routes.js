const thoughts = require('../../Models/thought')
const router = require('express').Router();





router.get('/', async (req, res) => {
    try {
        const getThoughts = await thoughts.find();
        res.status(200).json(getThoughts)

    } catch (err) {
        console.error(err)
    }
})



router.get('/:thoughtId', async (req, res) => {
    try {
        const getById = await thoughts.findOne({ _id: req.params.thoughtId })

        if (!getById) {
            return res.status(404).json({ message: 'No Thoughts with that ID' });
        }
        res.status(200).json(getById)
    } catch (err) {
        console.error(err)
    }
})

router.post('/', async (req, res) => {
    try {
        const createThoughts = await thoughts.create(req.body);
        res.status(200).json(createThoughts)



    } catch (err) {
        console.error(err)
    }
})




module.exports = router;