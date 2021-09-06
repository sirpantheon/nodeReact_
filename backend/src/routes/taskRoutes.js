const express = require("express")
const router = express.Router();

const taskController = require("../controllers/taskController")
const taskValidator = require("../middlewares/taskValidation")
const macaddressValidation = require("../middlewares/macaddressValidation")

router.post('/', taskValidator, taskController.create)
router.put('/:id', taskValidator, taskController.update)
router.get('/:id', taskController.show)
router.delete('/:id', taskController.delete)
router.put('/:id/:devolucao', taskController.devolucao)


router.get('/filter/all', macaddressValidation, taskController.all)
router.get('/filter/late', macaddressValidation, taskController.late)
router.get('/filter/today', macaddressValidation, taskController.today)

module.exports = router