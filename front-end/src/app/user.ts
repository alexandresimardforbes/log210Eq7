export class User {
    public userName: string = '';
    public password: string = '';
    public email: string = '';
    public firstName: string = '';
    public lastName: string = '';
    public id: number;

    constructor(userName, password, email, firstName, lastName, id)
    {
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
    }

    static createEmpty()
    {
        return new User('', '', '', '', '', 55);
    }
}
