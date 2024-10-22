const { Router } = require("express");

const usersRoutes = require("./users.routes");
const movieNotes = require("./movie_notes.routes");
const movieTags = require("./movie_tags.routes");
const sessionsRoutes = require("./sessions.routes");

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/movie_notes", movieNotes);
routes.use("/movie_tags", movieTags);
routes.use("/sessions", sessionsRoutes);

module.exports = routes;
