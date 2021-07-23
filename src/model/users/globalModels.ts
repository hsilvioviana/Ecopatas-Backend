export enum USER_ROLES {

    ADMIN = "ADMIN"
 }
 
export type authenticationData = {

    id: string,
    role: USER_ROLES
}

export type userAuthentication = {

    name: string,
    email: string
}
 
export type authentication = {
 
    user: userAuthentication,
    token: string
}

export type user = {

    id: string,
    name: string,
    email: string,
    password: string,
    role: USER_ROLES,
    createdAt: Date,
    updatedAt: Date
}
