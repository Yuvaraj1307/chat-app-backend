type TMessage = {
    uid: string;
    senderUid: string;
    receiverUid: string;
    content: string;
    timestamp: Date;
}

type TUser = {
    uid: string;
    firstName: string;
    middleName: NullableString;
    lastName: string;
    emailId: string;
    phoneNumber: string;
    timestamp: Date;
}