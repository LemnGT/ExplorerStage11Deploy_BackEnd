require("dotenv/config");
require("express-async-errors");

const AppError = require("./utils/AppError");
const database = require("./database/sqlite");
const express = require("express");
const routes = require("./routes");
const uploadConfig = require("./configs/upload");
const cors = require("cors");
const app = express();

database();

app.use(express.json());
app.use(cors());

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER));

app.use(routes);

app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }

  console.error(error);

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`Server is running on Port: ${PORT}`));
