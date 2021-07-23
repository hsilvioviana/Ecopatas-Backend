import { Router } from "express"
import { createPickupPoint } from "../controller/places/createPickupPoint"
import { getPickupPoints } from "../controller/places/getPickupPoints"


export const placesRouter = Router()

placesRouter.get("/pickup", getPickupPoints)
placesRouter.post("/create/pickup", createPickupPoint)
