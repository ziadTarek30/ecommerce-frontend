export interface ILoginInfo {
    email: string,
    password: string
}

export interface ILoginRes {
    message: string,
    data: string // token
}

export interface ITokenInfo {
    _id: string,
    name: string,
    role: string,
    exp: number
}