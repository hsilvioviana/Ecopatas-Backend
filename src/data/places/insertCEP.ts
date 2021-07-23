import { cepAddition } from "../../model/places/globalModels"
import { connection } from "../connection"


export const insertCEP = async (input: cepAddition) : Promise<void> => {

    await connection.raw(`INSERT INTO CEPs VALUES 
    ("${input.id}", "${input.cep}", "${input.latitude}", "${input.longitude}")`)
}
