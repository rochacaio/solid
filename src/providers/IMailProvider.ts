interface Iadress{
    email:string;
    name:string;
}
export interface IMessage{
    to:Iadress;
    from:Iadress;
    subject:string;
    body:string;
}

export interface IMailProvider{
    sendMail(message: IMessage):Promise<void>;
}