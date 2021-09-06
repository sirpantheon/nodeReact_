const express = require("express")
const router = express.Router();

const taskController = require("../controllers/taskController")
const taskValidator = require("../middlewares/taskValidation")

router.post('/', taskValidator, taskController.create)
router.put('/:id', taskValidator, taskController.update)
router.get('/:id', taskController.show)
router.delete('/:id', taskController.delete)
router.put('/:id/:devolucao', taskController.devolucao)


router.get('/filter/all/:macaddress', taskController.all)
router.get('/filter/late/:macaddress', taskController.late)
router.get('/filter/today/:macaddress', taskController.today)

module.exports = router