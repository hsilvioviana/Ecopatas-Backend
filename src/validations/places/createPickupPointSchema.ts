import * as yup from "yup"


export const createPickupPointSchema = yup.object({

    token: yup.string()
    .min(64, "O token deve ter no mínimo 64 caracteres")
    .max(512, "O token deve ter no máximo 512 caracteres")
    .required("O token é obrigatório")
    .typeError("O token deve ser string"),
    name: yup.string()
    .min(3, "O nome do local deve ter no mínimo 3 caracteres")
    .max(64, "O nome do local deve ter no máximo 64 caracteres")
    .required("O nome do local é obrigatório")
    .typeError("O nome do local deve ser string"),
    cep: yup.string()
    .length(9, "O CEP deve ter 9 caracteres")
    .required("O CEP é obrigatório")
    .typeError("O CEP deve ser string"),
    region: yup.string()
    .min(3, "A região deve ter no mínimo 3 caracteres")
    .max(64, "A região deve ter no máximo 64 caracteres")
    .required("A região é obrigatória")
    .typeError("A região deve ser string"),
    neighborhood: yup.string()
    .min(2, "O bairro deve ter no mínimo 2 caracteres")
    .max(64, "O bairro deve ter no máximo 64 caracteres")
    .required("O bairro é obrigatório")
    .typeError("O bairro deve ser string"),
    street: yup.string()
    .min(3, "A rua deve ter no mínimo 3 caracteres")
    .max(64, "A rua deve ter no máximo 64 caracteres")
    .required("A rua é obrigatória")
    .typeError("A rua deve ser string"),
    number: yup.string()
    .min(1, "O número da rua deve ter no mínimo 1 caracteres")
    .max(16, "O número da rua deve ter no máximo 16 caracteres")
    .required("O número da rua é obrigatória")
    .typeError("O número da rua deve ser string"),
    schedule: yup.string()
    .min(3, "O horário deve ter no mínimo 3 caracteres")
    .max(255, "O horário deve ter no máximo 255 caracteres")
    .required("O horário é obrigatório")
    .typeError("O horário deve ser string")
})
