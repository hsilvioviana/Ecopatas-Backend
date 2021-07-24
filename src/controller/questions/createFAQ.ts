import { Request, Response } from "express"
import { createFAQBusiness } from "../../business/questions/createFAQBusiness"
import { createFAQ_DTO } from "../../model/questions/createFAQModels"


export const createFAQ = async (req: Request, res: Response) : Promise<void> => {

    try {

        const { question, answer } = req.body

        const input: createFAQ_DTO = { question, answer }

        await createFAQBusiness(input)

        res.status(200).send({ message: "FAQ criada com sucesso" })
    }
    catch (error) {

        res.status(400).send({ error: error.message })
    }
}
