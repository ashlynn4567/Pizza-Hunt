// imports
const router = require('express').Router();
const htmlRoutes = require('./html/html-routes');
const apiRoutes = require("./api");

// give prefixes to all routes in subdirectories
router.use('/', htmlRoutes);
router.use("/api", apiRoutes);

// if inelligible route is used in search bar, return a 404 error
router.use((req, res) => {
  res.status(404).send('<h1>😝 404 Error!</h1>');
});

// exports
module.exports = router;
