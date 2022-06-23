// imports
const router = require("express").Router();
const {
    getAllPizza,
    getPizzaById,
    createPizza,
    updatePizza,
    deletePizza
} = require("../../controllers/pizza-controller");

// get all pizzas and create a pizza at /api/pizzas
router
    .route("/")
    .get(getAllPizza)
    .post(createPizza);

// get ONE, update, and delete a pizza at /api/pizzas/:id
router
    .route("/:id")
    .get(getPizzaById)
    .put(updatePizza)
    .delete(deletePizza);

// exports
module.exports = router;