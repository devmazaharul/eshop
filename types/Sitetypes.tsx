export interface loginProp{
    email:string,
    password:string
}

export interface Productprop{
    src:string,
    title:string,
    rating:number
    price:number,
    discount:number
    desc:string
}

export interface NewArivarProp{
    name:string
    id:number
    price:number
}

export interface productcartprop{
    name:string
    getQuery:string
}