const express = require("express");
const router = express.Router();

const student_controller = require("../controllers/myagents");


router.get("/add", student_controller.add);
router.post("/add", student_controller.create);

router.get("/all", student_controller.all);
router.get("/:id", student_controller.details);
router.get("/update/:id", student_controller.update);
router.post("/update/:id", student_controller.updateStudent);
router.get("/delete/:id", student_controller.delete);


module.exports = router;
