import { getUserByEmail } from "../../data/users/getUserByEmail"
import { authentication } from "../../model/users/globalModels"
import { loginDTO } from "../../model/users/loginModels"
import { generateToken } from "../../services/authenticator"
import { loginSchema } from "../../validations/loginSchema"
import { compare } from "../../services/hashManager"


export const loginBusiness = async (input: loginDTO) : Promise<authentication> => {

    try {

        await loginSchema.validate(input)

        const emailUser = await getUserByEmail(input.email)

        if (!emailUser) {

            throw new Error("Usuário não encontrado")
        }

        if (!await compare(input.password, emailUser.password)) {

            throw new Error("Senha inválida")
        }

        const response: authentication = {

            user: {
                name: emailUser.name,
                email: emailUser.email
            },
            token: generateToken({ id: emailUser.id, role: emailUser.role })
        }

        return response
    }
    catch (error) {

        throw new Error(error.message)
    }
}
