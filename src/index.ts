import { app } from "./controller/app"
import { placesRouter } from "./routes/placesRouter"
import { questionsRouter } from "./routes/questionsRouter"
import { usersRouter } from "./routes/usersRouter"


app.use("/users", usersRouter)
app.use("/places", placesRouter)
app.use("/questions", questionsRouter)
