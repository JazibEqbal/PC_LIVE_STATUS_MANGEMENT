const express = require("express");
const router = express.Router();
const {getAllPC, updatePC }= require('../controllers/pcController')

router.route("/allPcs").get(getAllPC);
router.route("/update/:id").put(updatePC);


module.exports = router;
