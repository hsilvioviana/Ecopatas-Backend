import { Router } from "express"
import { createFAQ } from "../controller/questions/createFAQ"
import { getFAQs } from "../controller/questions/getFAQs"


export const questionsRouter = Router()

questionsRouter.get("/faqs", getFAQs)
questionsRouter.post("/create/faq", createFAQ)
