import { pickupPointCreator } from "../../model/places/createPickupPointsModels"
import { connection } from "../connection"


export const insertPickupPoint = async (input: pickupPointCreator) : Promise<void> => {

    await connection.raw(`INSERT INTO PickupPoints VALUES 
    ("${input.id}", "${input.name}", "${input.cep}", "${input.neighborhood}", "${input.street}",
    "${input.number}", "${input.schedule}", "${input.latitude}", "${input.longitude}", CURDATE(), CURDATE())`)
}
