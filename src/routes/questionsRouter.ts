import { Router } from "express"
import { createFAQ } from "../controller/questions/createFAQ"


export const questionsRouter = Router()

questionsRouter.post("/create/faq", createFAQ)
