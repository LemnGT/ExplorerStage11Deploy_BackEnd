const { Router } = require("express");

const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const MovieNotesController = require("../controllers/MovieNotesController");

const movieNotesRoutes = Router();

const movieController = new MovieNotesController();

movieNotesRoutes.use(ensureAuthenticated);

movieNotesRoutes.get("/:id", movieController.show);
movieNotesRoutes.post("/", movieController.create);
movieNotesRoutes.delete("/:id", movieController.delete);
movieNotesRoutes.get("/", movieController.index);

module.exports = movieNotesRoutes;
