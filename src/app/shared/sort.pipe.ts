import { PipeTransform, Pipe } from '@angular/core';
import { Todo } from './todo.model';

@Pipe({
    name: 'sort',
    pure: false
})
export class SortPipe implements PipeTransform {
    
    transform(todo: Todo[], callback: (a: Todo, b: Todo) => number): Todo[] {
        if (!todo || !callback) {
            return todo;
        }
        return todo.sort(callback);
    }
}