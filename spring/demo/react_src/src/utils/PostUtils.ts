import { Constants } from "./Constants";

export function justPost(action: string) {
    let form = document.createElement('form');
    form.method = 'post';
    form.action = `${Constants.ENV}${action}`
    document.body.appendChild(form);
    form.submit();
}