import { selectPickupPoints } from "../../data/places/selectPickupsPoints"
import { pickupPoint } from "../../model/places/globalModels"


export const getSimplePickupPointsBusiness = async () : Promise<pickupPoint[]> => {

    try {

        const pickupPoints = await selectPickupPoints()

        return pickupPoints
    }
    catch(error) {

        throw new Error(error.message)
    }
}
