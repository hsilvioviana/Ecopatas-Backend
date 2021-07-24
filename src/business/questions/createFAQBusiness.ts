import { createFAQ_DTO } from "../../model/questions/createFAQModels"
import { createFAQSchema } from "../../validations/questions/createFAQSchema"


export const createFAQBusiness = async (input: createFAQ_DTO) : Promise<void> => {

    try {

        await createFAQSchema.validate(input)

        
    }
    catch (error) {

        throw new Error(error.message)
    }
}