
export const TypeList = (): void => {
    // boolean
    let bool: boolean = true;

    // number
    let num: number = 0;

    // string
    let str: string = "B";

    // array
    let arr1: Array<number> = [0, 1, 2];
    let arr2: number[] = [0, 1, 2];

    // tuple
    let tuple: [number, string] = [0, "value"];

    // any : any형은 사용하는 의미가 없기 때문에 비추천
    let any1: any = false;

    // void
    const funcA = (): void => {
        const test: string = "test";
    }

    // null
    let null1: null = null;

    // undefined
    let undefined1: undefined = undefined;

    // object
    let obj1: object = {};
    let obj2: { id: number, name: string } = { id: 1, name: "name" };
}
