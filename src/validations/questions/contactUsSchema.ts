import * as yup from "yup"


export const contactUsSchema = yup.object({

    name: yup.string()
    .min(3, "O nome deve ter no mínimo 3 caracteres")
    .max(64, "O nome deve ter no máximo 64 caracteres")
    .required("O nome é obrigatório")
    .typeError("O nome deve ser string"),
    email: yup.string()
    .email("O email deve estar em um formato válido")
    .min(3, "O email deve ter no mínimo 3 caracteres")
    .max(64, "O email deve ter no máximo 64 caracteres")
    .required("O email é obrigatório")
    .typeError("O email deve ser string"),
    message: yup.string()
    .min(3, "A mensagem deve ter no mínimo 3 caracteres")
    .max(2000, "A mensagem deve ter no máximo 2000 caracteres")
    .required("A mensagem é obrigatória")
    .typeError("A mensagem deve ser string"),
})
