import { Request, Response } from "express"
import { getSimplePickupPointsBusiness } from "../../business/places/getSimplePickupPointsBusiness"
import { pickupPoint } from "../../model/places/globalModels"


export const getSimplePickupPoints = async (req: Request, res: Response) : Promise<void> => {

    try {

        const pickupPoints: pickupPoint[]= await getSimplePickupPointsBusiness()

        res.status(200).send({ pickupPoints })
    }
    catch (error) {

        res.status(400).send({ error: error.message })
    }
}
