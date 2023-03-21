const express = require("express");
// const cors = require("cors");
const app = express();
const userRouter = require("./routes/userRoute");
const invoiceRouter = require("./routes/invoiceRoute");
// const postRouter = require("./routes/postRoute");
// const queryRouter = require("./routes/queryRoute");
// const passwordRoute = require("./routes/passwordResetRoute");
// const historyRoute = require("./routes/historyRoute");
// const { auth } = require("./middleware/auth");
// const path = require("path");
app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/invoice", invoiceRouter);
// app.use(cors());

// app.use(express.static(buildPath));
// // app.use(bodyParser.urlencoded({ extended: true }));
// app.use("/api/v1/posts", postRouter);
// app.use("/api/v1/query", queryRouter);
// app.use("/api/reset-password", passwordRoute);
// app.use("/api/v1/history", historyRoute);

module.exports = app;
