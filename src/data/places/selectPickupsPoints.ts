import { pickupPoints } from "../../model/places/getPickupPointsModels"
import { connection } from "../connection"


export const selectPickupPoints = async () : Promise<pickupPoints> => {

    const result = await connection.raw(`SELECT id, name, cep, neighborhood, street, number, schedule, status
    FROM PickupPoints
    WHERE status = "ATIVO" OR status = "PAUSADO"`)

    const pickupPoints: pickupPoints = { ativos: [], pausados: [] }

    for (let point of result[0]) {

        if (point.status === "ATIVO") {

            delete point.status
            pickupPoints.ativos.push(point)
        }
        else {

            delete point.status
            pickupPoints.pausados.push(point)
        }
    }

    return pickupPoints
}
