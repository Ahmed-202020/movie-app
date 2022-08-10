export interface Auth {}

export interface Register {
  first_name: string ,
  last_name: string ,
  email: string ,
  password: string ,
  age:number | string
}
export interface Login {
  email: string ,
  password: string
}
