import { Router } from "express"
import { createPickupPoint } from "../controller/places/createPickupPoint"


export const placesRouter = Router()

placesRouter.post("/create/pickup", createPickupPoint)
