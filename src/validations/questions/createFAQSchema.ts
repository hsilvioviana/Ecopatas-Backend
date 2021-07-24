import * as yup from "yup"


export const createFAQSchema = yup.object({

    question: yup.string()
    .min(3, "A pergunta deve ter no mínimo 3 caracteres")
    .max(255, "A pergunta deve ter no máximo 255 caracteres")
    .required("A pergunta é obrigatória")
    .typeError("A pergunta deve ser string"),
    answer: yup.string()
    .min(3, "A resposta deve ter no mínimo 3 caracteres")
    .max(1000, "A resposta deve ter no máximo 1000 caracteres")
    .required("A resposta é obrigatória")
    .typeError("A resposta deve ser string")
})
