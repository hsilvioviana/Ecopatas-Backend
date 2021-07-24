import { faq } from "../../model/questions/globalModels"
import { connection } from "../connection"


export const selectFAQs = async () : Promise<faq[]> => {

    const result = await connection.raw(`SELECT * FROM FAQs`)

    return result[0][0]
}
