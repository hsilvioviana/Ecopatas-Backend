export type createPickupPointDTO = {

    token: string,
    name: string,
    cep: string,
    neighborhood: string,
    street: string,
    number: string,
    schedule: string
}

export type pickupPointCreator = {

    id: string,
    name: string,
    cep: string,
    neighborhood: string,
    street: string,
    number: string,
    schedule: string,
    latitude: string,
    longitude: string
}
