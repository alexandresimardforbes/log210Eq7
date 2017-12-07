export class User {
    public password: string = '';
    public password_confirmation: string = '';
    public email: string = '';
    public first_name: string = '';
    public last_name: string = '';
    public address: string = '';
    public id: number;
    public disable: boolean;
    public user_type: Role
    public organisme_id: number = 1;
    public diplomas_attributes: Array<Diploma> = [];
    public phone_c: string = '';
    public phone_m: string = '';
    public phone_b: string = '';

    constructor(password, email, firstName, lastName, id, user_type = Role.intervenant, disable = false)
    {
        this.password = password;
        this.email = email;
        this.first_name = firstName;
        this.last_name = lastName;
        this.id = id;
        this.disable = disable;
        this.user_type = user_type;
    }

    static createEmpty()
    {
        return new User('', '', '', '', 55);
    }
}

export class Diploma {
  public name: string = '';
  public date: string = '';
}

export enum Role {
    director = 1,
    coordonator = 2,
    assistantCoordonator = 3,
    intervenant = 4
}
