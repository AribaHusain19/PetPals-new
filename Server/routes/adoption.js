const express = require('express');
const adoptionController = require('../controllers/adoptionController');

const router= express.Router();

router.post("/create",adoptionController.create);

router.get("/all",adoptionController.getAll);

router.get("/get/:id",adoptionController.getOne);

router.put("/update/:id",adoptionController.update);

router.delete("/delete/:id",adoptionController.delete);

module.exports= router;