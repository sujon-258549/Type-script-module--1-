"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
{
    const createPromice = () => {
        return new Promise(((resolve, reject) => {
            const data = 'hellow I,m Data';
            if (data) {
                resolve(data);
            }
            else {
                reject("fail to lode data");
            }
        }));
    };
    const collCreatePromice = () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield createPromice();
        // console.log(result)
        return result;
    });
    collCreatePromice();
    // prumise use must be use type 
    const useJsonPlaceholder = () => __awaiter(void 0, void 0, void 0, function* () {
        const resoponse = yield fetch('https://jsonplaceholder.typicode.com/todos/1');
        const result2 = yield resoponse.json();
        return result2;
    });
    const logPostUser = () => __awaiter(void 0, void 0, void 0, function* () {
        const postUser = yield useJsonPlaceholder();
        console.log(postUser);
    });
    logPostUser();
    // const useJsonPlaceholder = async (): Promise<Usertype> => {
    //     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    //     const result: Usertype = await response.json();
    //     return result;
    // };
    // // Use async function to log the resolved data
    // const logPostUser = async () => {
    //     const postUser = await useJsonPlaceholder();
    //     console.log(postUser);
    // };
    // logPostUser();
    // 
}
