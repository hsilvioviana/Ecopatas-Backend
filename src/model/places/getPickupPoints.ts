export type pickupPoint = {

    id: string,
    name: string,
    cep: string,
    neighborhood: string,
    street: string,
    number: string,
    schedule: string,
}

export type pickupPoints = {

    ativos: pickupPoint[],
    pausados: pickupPoint[]
}
