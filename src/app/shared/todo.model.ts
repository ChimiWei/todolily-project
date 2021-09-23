export class Todo {

    constructor(
        public id: number,
        public text: string,
        public period: string,
        public day: string,
        public urgent: boolean,
        public completed: boolean = false
    ) 
    {}        

}