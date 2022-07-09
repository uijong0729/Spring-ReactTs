import { atom } from "recoil";

// https://www.npmjs.com/package/recoil
export const userState = atom({
    key: "userState",
    default: { isAdmin: false }
});
