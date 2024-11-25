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
    id:number
    price:number
    city:string

}


export interface productDetailsprop extends productcartprop{

    desc:string
    rating:number
    brand:string
    size:string[] | number[]
    avatar:string
    discount:number
    color:string[]
}