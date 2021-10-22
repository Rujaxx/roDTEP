const express = require('express')

const { addItem , getItem,  getItems , updateItem , deleteItem , calculate} = require('../controllers/item')

const router = express.Router()

router.route('/').post(addItem).get(getItems)

router.route('/:id').get(getItem).patch(updateItem).delete(deleteItem)

router.route('/calculate/:id').get(calculate)

module.exports = router