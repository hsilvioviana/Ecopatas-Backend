import { Request, Response } from "express"
import { getFAQsBusiness } from "../../business/questions/getFAQsBusiness"
import { faq } from "../../model/questions/globalModels"


export const getFAQs = async (req: Request, res: Response) : Promise<void> => {

    try {

        const faqs: faq[] = await getFAQsBusiness()

        res.status(200).send({ faqs })
    }
    catch (error) {

        res.status(400).send({ error: error.message })
    }
}
