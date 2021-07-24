import { Request, Response } from "express"
import { contactUsBusiness } from "../../business/questions/contactUsBusiness"
import { contactUsDTO } from "../../model/questions/contactUsModels"


export const contactUs = async (req: Request, res: Response) : Promise<void> => {

    try {

        const { name, email, message } = req.body

        const input: contactUsDTO = { name, email, message }

        await contactUsBusiness(input)

        res.status(200).send({ message: "Mensagem enviada com sucesso" })
    }
    catch (error) {

        res.status(400).send({ error: error.message })
    }
}
