import { contactUsDTO } from "../../model/questions/contactUsModels"
import { transporter } from "../../services/transporter"
import { contactUsSchema } from "../../validations/questions/contactUsSchema"


export const contactUsBusiness = async (input: contactUsDTO) : Promise<void> => {

    try {

        await contactUsSchema.validate(input)

        const name = `<h2>${input.name}</h2>`

        const email = `<h4>${input.email}</h4>`

        const message = `<p>${input.message}</p>`

        transporter.sendMail({
            
            from: `<${process.env.NODEMAILER_USER}>`,
            to: process.env.CONTACT_US_RECEIVER,
            subject: "Nova Mensagem",
            html: `${name} ${email} ${message}`
        })
    }
    catch (error) {

        throw new Error(error.message)
    }
}
