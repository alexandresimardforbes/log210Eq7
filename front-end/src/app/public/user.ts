export class User {
    public password: string = '';
    public password_confirmation: string = '';
    public email: string = '';
    public first_name: string = '';
    public last_name: string = '';
    public id: number;
    public disable: boolean;
    public user_type: Role

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

export enum Role {
    director = 1,
    coordonator = 2,
    assistantCoordonator = 3,
    intervenant = 4
}
