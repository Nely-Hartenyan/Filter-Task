 export interface IImage{
    id?:number,
    url?:string,
    filter?:string
}

export interface action{
    type:string,
    payload:string
}

export  type defaultStateType = {
    images:IImage[];
    filtered:string
}