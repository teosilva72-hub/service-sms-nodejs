export interface User {
  id?:number
  name?:string,
  last_name?:string,
  email?:string,
  password:string,
  sex?:string,
  birth?:string,
  deleted?:boolean,
  photo?:string,
  date_login?:Date,
  lat:any,
  lng:any,
  position:any,
  id_user:any
}
