export class User {

  constructor(
    public username: string,
    public country: string,
    public city: string,
    public postCode: string,
    public language: string,
    public timePreference: string,
    public email: string,
    public subscribe: boolean
  ){}
}
