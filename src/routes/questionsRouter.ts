import { Router } from "express"
import { contactUs } from "../controller/questions/contactUs"
import { createFAQ } from "../controller/questions/createFAQ"
import { getFAQs } from "../controller/questions/getFAQs"


export const questionsRouter = Router()

questionsRouter.get("/faqs", getFAQs)
questionsRouter.post("/create/faq", createFAQ)
questionsRouter.post("/contact", contactUs)
