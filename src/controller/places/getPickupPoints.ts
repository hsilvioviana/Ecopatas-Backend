import { Request, Response } from "express"
import { getPickupPointsBusiness } from "../../business/places/getPickupPointsBusiness"
import { pickupPoints } from "../../model/places/getPickupPointsModels"


export const getPickupPoints = async (req: Request, res: Response) : Promise<void> => {

    try {

        const pickupPoints: pickupPoints = await getPickupPointsBusiness()

        res.status(200).send({ pickupPoints })
    }
    catch (error) {

        res.status(400).send({ error: error.message })
    }
}
