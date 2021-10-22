const Item = require('../models/Item')
const asyncHandler = require('../middleware/async');
const { prependOnceListener } = require('../models/Item');

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
// @route     get /api/v1/items
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
// @route     get /api/v1/items
// @access    Public
exports.getItems = asyncHandler(async (req, res, next) => {

  const item = await Item.find();

  res.status(201).json({
    success:true,
    data: item
  })    
})


// @desc      Update a item
// @route     PATCH /api/v1/items
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


// @desc      Delete a item
// @route     DELETE /api/v1/items
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

// @desc      Calculate 
// @route     GET /api/v1/items/calulate/:id
// @access    Public
exports.calculate = asyncHandler(async (req, res, next) => {
  let id = req.params.id
  const { amount , quantity} = req.body
  const item = await Item.findOne({HSN :id});
  const maxRewards = quantity * item.cap
  const rewards = (amount * (item.FOB/100)) 
  
  let result
  
  if(rewards >= maxRewards){
    result = maxRewards
  }else{
    result = rewards
  }


  res.status(201).json({
    success:true,
    data: result
  })    
})