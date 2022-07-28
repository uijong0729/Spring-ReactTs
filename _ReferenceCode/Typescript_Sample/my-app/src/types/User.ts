export type User = {
    name: string;
    hobbies?: Array<String>; //취미가 없을수도 있으니 null허용
}