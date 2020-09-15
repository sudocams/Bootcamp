// @desc   Get all bootcamps
// @route  GET  /api/v1/bootcamps
// @access Public

exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'show all bootcamps' });
};

// @desc   Get a bootcamp
// @route  GET  /api/v1/bootcamps/:id
// @access Public

exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `gets one bootcamp ${request.params.id}` });
};

// @desc   Create a bootcamps
// @route  POST  /api/v1/bootcamps
// @access Private

exports.createBootcamps = (req, res, next) => {
  res.status(201).json({ success: true, msg: 'posts a bootcamp' });
};

// @desc   update a bootcamp
// @route  PUT  /api/v1/bootcamps/:id
// @access Private

exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `update a bootcamp ${request.params.id}` });
};

// @desc   Delete a bootcamp
// @route  DELETE  /api/v1/bootcamps/:id
// @access Private

exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `delete bootcamp ${req.params.id}` });
};
