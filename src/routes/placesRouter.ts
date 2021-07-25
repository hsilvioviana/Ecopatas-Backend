import { Router } from "express"
import { createPickupPoint } from "../controller/places/createPickupPoint"
import { getOrganizedPickupPoints } from "../controller/places/getOrganizedPickupPoints"
import { getSimplePickupPoints } from "../controller/places/getSimplePickupPoints"


export const placesRouter = Router()

placesRouter.get("/simple/pickup", getSimplePickupPoints)
placesRouter.get("/organized/pickup", getOrganizedPickupPoints)
placesRouter.post("/create/pickup", createPickupPoint)
