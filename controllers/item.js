const Item = require('../models/Item')
const asyncHandler = require('../middleware/async')

// @desc      create a item
// @route     POST /api/v1/items
// @access    Public
exports.addItem = asyncHandler(async (req, res, next) => {
    const item = await Item.create(req.body);

    res.status(201).json({
      success:true,
      data: item
    })    
})

// @desc      Find a item
// @route     POST /api/v1/items
// @access    Public
exports.getItem = asyncHandler(async (req, res, next) => {
    let id = req.params.id
    const item = await Item.findOne({HSN :id});

    if(!item){
        res.status(400).json({success : false, message : "Not Found"})
    }

    res.status(201).json({
      success:true,
      data: item
    })    
})

// @desc      Find a item
// @route     POST /api/v1/items
// @access    Public
exports.getItem = asyncHandler(async (req, res, next) => {
    let id = req.params.id
    const item = await Item.findOne({HSN :id});

    if(!item){
        res.status(400).json({success : false, message : "Not Found"})
    }

    res.status(201).json({
      success:true,
      data: item
    })    
})

// @desc      Update a item
// @route     PUT /api/v1/items
// @access    Public
exports.updateItem = asyncHandler(async (req, res, next) => {
    let id = req.params.id

    const item = await Item.findOneAndUpdate({HSN :id},req.body,{
        new:true,
        validators: true
      })

    if(!item){
        res.status(400).json({success : false, message : "Not Found"})
    }

    res.status(201).json({
      success:true,
      data: item
    })    
})


// @desc      Update a item
// @route     PUT /api/v1/items
// @access    Public
exports.deleteItem = asyncHandler(async (req, res, next) => {
    let id = req.params.id
   
    const item = await Item.findOneAndDelete({HSN :id})

    if(!item){
        res.status(400).json({success : false, message : "Not Found"})
    }

    res.status(201).json({
      success:true,
      message: "item deleted"
    })    
})