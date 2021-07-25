import { pickupPoint} from "../../model/places/globalModels"
import { connection } from "../connection"


export const selectPickupPoints = async () : Promise<pickupPoint[]> => {

    const result = await connection.raw(`SELECT id, name, cep, region, neighborhood, street, number, schedule
    FROM PickupPoints`)

    return result[0]
}
