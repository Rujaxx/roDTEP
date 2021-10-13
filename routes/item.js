const express = require('express')

const { addItem , getItem , updateItem , deleteItem} = require('../controllers/item')

const router = express.Router()

router.route('/').post(addItem)

router.route('/:id').get(getItem).patch(updateItem).delete(deleteItem)

module.exports = router