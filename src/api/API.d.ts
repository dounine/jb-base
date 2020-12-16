declare namespace API {
    export enum Code {
        ok = "ok",
        fail = "fail"
    }
    export enum UserStatus {
        normal = "normal",
        locked = "locked",
        inactive = "inactive"
    }
    export interface UserInfo {
        phone: string;
        email: string;
        avatar: string;
        access: string;
        status: UserStatus;
    }
    export interface UserInfoData {
        data?: UserInfo;
        code: string;
    }
}