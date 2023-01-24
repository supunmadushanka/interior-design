import { Role } from "./role";

export class User {
    id!: number;
    userName!: string;
    password!: string;
    token!: string;
    role!: Role;
}