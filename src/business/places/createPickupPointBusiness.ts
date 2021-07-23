import { createPickupPointDTO, pickupPointCreator } from "../../model/places/createPickupPointsModels"
import { USER_ROLES } from "../../model/users/globalModels"
import {  getTokenData } from "../../services/authenticator"
import { createPickupPointSchema } from "../../validations/places/createPickupPointSchema"
import axios from "axios"
import { generateId } from "../../services/idGenerator"
import { cep, cepAddition } from "../../model/places/globalModels"
import { getInformationByCEP } from "../../data/places/getInformationByCEP"
import { insertCEP } from "../../data/places/insertCEP"
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
            neighborhood: input.neighborhood,
            street: input.street,
            number: input.number,
            schedule: input.schedule,
            latitude: "",
            longitude: ""
        }

        const cepInformation: cep = await getInformationByCEP(input.cep)

        if (cepInformation) {

            pickupPoint.latitude = cepInformation.latitude

            pickupPoint.longitude = cepInformation.longitude
        }
        else {

            const headers = { headers: { Authorization: process.env.CEP_ABERTO_TOKEN } }

            const placeInformation = await axios.get(`https://www.cepaberto.com/api/v3/cep?cep=${input.cep}`, headers)

            if (!placeInformation.data.latitude) {

                throw new Error("CEP inválido")
            }

            const newCEP: cepAddition = {

                id: generateId(),
                cep: input.cep,
                latitude: placeInformation.data.latitude,
                longitude: placeInformation.data.longitude
            }

            await insertCEP(newCEP)

            pickupPoint.latitude = placeInformation.data.latitude

            pickupPoint.longitude = placeInformation.data.longitude
        }

        await insertPickupPoint(pickupPoint)
    }
    catch (error) {

        throw new Error(error.message)
    }
}
