const Bootcamp = require('../Models/bootcamp');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');
// @desc   Get all bootcamps
// @route  GET  /api/v1/bootcamps
// @access Public

exports.getBootcamps = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.find();

  res
    .status(200)
    .json({ success: true, count: bootcamp.length, data: bootcamp });
});

// @desc   Get a bootcamp
// @route  GET  /api/v1/bootcamps/:id
// @access Public

exports.getBootcamp = asyncHandler(async (req, res, next) => {
  const Id = req.params.id;
  const bootcamp = await Bootcamp.findById(Id);

  if (!bootcamp) {
    //   return res.status(400).json({ success: false });
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: bootcamp });
});

// @desc   Create a bootcamps
// @route  POST  /api/v1/bootcamps
// @access Private

exports.createBootcamps = asyncHandler(async (req, res, next) => {
  const boot = await Bootcamp.create(req.body);
  res.status(201).json({ success: true, data: boot });
});

// @desc   update a bootcamp
// @route  PUT  /api/v1/bootcamps/:id
// @access Private

exports.updateBootcamp = asyncHandler(async (req, res, next) => {
  const Id = req.params.id;
  const bootcamp = await Bootcamp.findByIdAndUpdate(Id, req.body, {
    new: true,
    runValidators: true,
  });
  return next(
    new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
  );

  res.status(200).json({ success: true, data: bootcamp });
});

// @desc   Delete a bootcamp
// @route  DELETE  /api/v1/bootcamps/:id
// @access Private

exports.deleteBootcamp = asyncHandler(async (req, res, next) => {
  const Id = req.params.id;
  const bootcamp = await Bootcamp.findByIdAndDelete(Id);
  return next(
    new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
  );

  res.status(200).json({ success: true, data: {} });
});
