const express=require("express");
const { check } = require("express-validator");
const categoryController = require("../controller/categoryController");
const router=express.Router();
router.get('/',categoryController.getAllCategory);
router.get('/:cid',categoryController.getCategoryById);

router.post('/',
    [
        check('name').not().isEmpty()
    ]
    , categoryController.createCategory
);
router.delete('/:cid', categoryController.deleteCategoryById);
router.patch('/:cid',
[
    check('name').not().isEmpty()
]
,categoryController.updateCategoryById);
module.exports=router;