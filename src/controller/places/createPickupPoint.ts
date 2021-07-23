import { Request, Response } from "express"
import { createPickupPointBusiness } from "../../business/places/createPickupPointBusiness"
import { createPickupPointDTO } from "../../model/places/createPickupPointsModels"


export const createPickupPoint = async (req: Request, res: Response) : Promise<void> => {

    try {

        const token = req.headers.authorization as string

        const { name, cep, neighborhood, street, number, schedule } = req.body

        const input: createPickupPointDTO = { token, name, cep, neighborhood, street, number, schedule }

        await createPickupPointBusiness(input)

        res.status(200).send({ message: "Ponto de coleta adicionado com sucesso" })
    }
    catch (error) {

        res.status(400).send({ error: error.message })
    }
}
