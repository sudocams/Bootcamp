const express = require('express');

const {
  getBootcamp,
  getBootcamps,
  createBootcamps,
  updateBootcamp,
  deleteBootcamp,
} = require('../controllers/bootcamps');

const router = express.Router();

router.route('/').get(getBootcamps).post(createBootcamps);

router
  .route('/:id')
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = router;
