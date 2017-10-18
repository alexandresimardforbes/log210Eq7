export class User {
    public userName: string = '';
    public password: string = '';
    public email: string = '';
    public firstName: string = '';
    public lastName: string = '';
    public id: number;
    public activated: boolean;
    public role: Role

    constructor(userName, password, email, firstName, lastName, id, role = Role.coordonator, activated = true)
    {
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.activated = activated;
        this.role = role;
    }

    static createEmpty()
    {
        return new User('', '', '', '', '', 55);
    }
}

export enum Role {
    director = 1,
    coordonator = 2,
    assistantCoordonator = 3,
    intervenant = 4
}