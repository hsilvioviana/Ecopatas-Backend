import { faq } from "../../model/questions/globalModels"
import { connection } from "../connection"


export const selectFAQs = async () : Promise<faq[]> => {

    const result = await connection.raw(`SELECT id, question, answer FROM FAQs ORDER BY createdAt`)

    return result[0]
}
