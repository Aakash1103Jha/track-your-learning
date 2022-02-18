const router = require("express").Router()
const {
	onAddCourse,
	onEditCourseById,
	onDeleteCourseById,
	updateIsCompletedById,
} = require("../controllers/Course.controller")

router.post("/add", onAddCourse)
router.put("/edit/:courseId", onEditCourseById)
router.delete("/delete/:courseId", onDeleteCourseById)
router.post("/update/:courseId", updateIsCompletedById)

module.exports = router
