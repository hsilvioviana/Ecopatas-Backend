import { Request, Response } from "express"
import { getOrganizedPickupPointsBusiness } from "../../business/places/getOrganizedPickupPointsBusiness"


export const getOrganizedPickupPoints = async (req: Request, res: Response) : Promise<void> => {

    try {

        const pickupPoints: any = await getOrganizedPickupPointsBusiness()

        res.status(200).send({ pickupPoints })
    }
    catch (error) {

        res.status(400).send({ error: error.message })
    }
}
