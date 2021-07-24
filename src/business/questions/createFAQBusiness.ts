import { insertFAQ } from "../../data/questions/insertFAQ"
import { createFAQ_DTO, FAQ_Creator } from "../../model/questions/createFAQModels"
import { USER_ROLES } from "../../model/users/globalModels"
import { getTokenData } from "../../services/authenticator"
import { generateId } from "../../services/idGenerator"
import { createFAQSchema } from "../../validations/questions/createFAQSchema"


export const createFAQBusiness = async (input: createFAQ_DTO) : Promise<void> => {

    try {

        await createFAQSchema.validate(input)

        const user = getTokenData(input.token)

        if (user.role !== USER_ROLES.ADMIN) {

            throw new Error("Você não tem permissão para fazer essa ação")
        }

        const newFAQ: FAQ_Creator = {

            id: generateId(),
            question: input.question,
            answer: input.answer
        }

        await insertFAQ(newFAQ)
    }
    catch (error) {

        throw new Error(error.message)
    }
}