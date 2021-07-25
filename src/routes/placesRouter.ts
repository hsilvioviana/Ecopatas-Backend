import { Router } from "express"
import { createPickupPoint } from "../controller/places/createPickupPoint"
import { getOrganizedPickupPoints } from "../controller/places/getOrganizedPickupPoints"


export const placesRouter = Router()

placesRouter.get("/organized/pickup", getOrganizedPickupPoints)
placesRouter.post("/create/pickup", createPickupPoint)
