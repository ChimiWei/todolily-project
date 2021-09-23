import { PipeTransform, Pipe } from '@angular/core';
import { Todo } from './todo.model';

@Pipe({
    name: 'callback',
    pure: false
})
export class CallbackPipe implements PipeTransform {
    
    transform(todo: Todo[], callback: (t: Todo, period: string) => boolean, period: string): Todo[] {
        if (!todo || !callback || !period) {
            return todo;
        }
        return todo.filter(t => callback(t, period));
    }
}