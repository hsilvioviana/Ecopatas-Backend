import { Router } from "express"
import { login } from "../controller/users/login"


export const usersRouter = Router()

usersRouter.post("/login", login)
