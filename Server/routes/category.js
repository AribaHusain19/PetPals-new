const express= require('express');
const categoryController= require("../controllers/categoryController");

const router= express.Router();


//router for get all
router.get("/all",categoryController.getAll);

//router for get one
router.get("/get/:id",categoryController.getOne);

//router for create.
router.post("/create",categoryController.create);

//router for update.
router.put("/update/:id",categoryController.update);

//router for delete
router.delete("/delete/:id",categoryController.delete);
module.exports=router;