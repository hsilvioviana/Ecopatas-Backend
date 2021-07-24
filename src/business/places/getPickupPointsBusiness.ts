import { selectPickupPoints } from "../../data/places/selectPickupsPoints"
import { pickupPoints } from "../../model/places/getPickupPoints"


export const getPickupPointsBusiness = async () : Promise<pickupPoints> => {

    try {

        return selectPickupPoints()
    }
    catch(error) {

        throw new Error(error.message)
    }
}
