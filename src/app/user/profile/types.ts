export interface IChangePasswordFormValues {
    oldPassword: string,
    newPassword: string,
    confirmPassword: string,
};

export interface IChangeNewEmailValues {
    email : string
};

export interface IOtpValues {
    otp : string
};

export interface IProfileInfoValues {
    userName: string,
    address: string,
    zipcode: string,
    profileImage: File | null,
    country: string,
    state: string,
    city: string,
};

export interface IUserInfo {
    _id: string;
    name: string;
    email: string;
    address: string;
    zipcode: string;
    profileimage: string | null;
    country: string;
    state: string;
    city: string;
}