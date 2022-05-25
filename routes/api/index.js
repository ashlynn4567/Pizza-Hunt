// imports
const router = require("express").Router();
const pizzaRoutes = require("./pizza-routes");

// add prefix of "/pizzas" to routes created in "pizza-routes.js"
router.use(pizzaRoutes);

// exports
module.exports = router;