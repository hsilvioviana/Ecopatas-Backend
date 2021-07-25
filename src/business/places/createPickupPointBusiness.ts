import { createPickupPointDTO, pickupPointCreator } from "../../model/places/createPickupPointsModels"
import { USER_ROLES } from "../../model/users/globalModels"
import {  getTokenData } from "../../services/authenticator"
import { createPickupPointSchema } from "../../validations/places/createPickupPointSchema"
import { generateId } from "../../services/idGenerator"
import { insertPickupPoint } from "../../data/places/insertPickupPoint"


export const createPickupPointBusiness = async (input: createPickupPointDTO) : Promise<void> => {

    try {

        await createPickupPointSchema.validate(input)

        const user = getTokenData(input.token)

        if (user.role !== USER_ROLES.ADMIN) {

            throw new Error("Você não tem permissão para fazer essa ação")
        }

        const pickupPoint: pickupPointCreator = {

            id: generateId(),
            name: input.name,
            cep: input.cep,
            region: input.region,
            neighborhood: input.neighborhood,
            street: input.street,
            number: input.number,
            schedule: input.schedule,
        }

        await insertPickupPoint(pickupPoint)
    }
    catch (error) {

        throw new Error(error.message)
    }
}
