const express = require("express");
const reqLogger = require("./middleware/reqLogger");
const taskRoutes = require("./routes/taskRoutes");
const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(reqLogger);
app.use("/api/v1/tasks", taskRoutes);


app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});

app.listen(port, (err) => {
    if (err) {
        return console.log('Something bad happened', err);
    }
    console.log(`Server is listening on ${port}`);
});



module.exports = app;