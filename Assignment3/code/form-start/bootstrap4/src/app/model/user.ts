import { EmailValidator } from '@angular/forms';

export class User {
    constructor(
        public mailAddress:EmailValidator,
        public subscription:string,
        public password:string,
    ) {
    }
}