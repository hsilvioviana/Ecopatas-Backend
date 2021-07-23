import { app } from "./controller/app"
import { placesRouter } from "./routes/placesRouter"
import { usersRouter } from "./routes/usersRouter"


app.use("/users", usersRouter)
app.use("/places", placesRouter)
