import { Subject } from "rxjs";

export interface SuggestedQuestions {
    id: string, 
    value: string 
}

class MessageService {

    private sendMessageSubject = new Subject<string>();
    public sendMessage$  = this.sendMessageSubject.asObservable();


    sendMessage(message: string){
        this.sendMessageSubject.next(message)
    }
}

export const messageService = new MessageService();