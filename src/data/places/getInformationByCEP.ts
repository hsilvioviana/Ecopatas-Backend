import { cep } from "../../model/places/globalModels"
import { connection } from "../connection"


export const getInformationByCEP = async (cep: string) : Promise<cep> => {

    const result = await connection.raw(`SELECT * FROM CEPs WHERE cep = "${cep}"`)

    return result[0][0]
}