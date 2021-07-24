import { FAQ_Creator } from "../../model/questions/createFAQModels"
import { connection } from "../connection"


export const insertFAQ = async (input: FAQ_Creator) : Promise<void> => {

    await connection.raw(`INSERT INTO FAQs VALUES 
    ("${input.id}", "${input.question}", "${input.answer}", CURDATE(), CURDATE())`)
}
