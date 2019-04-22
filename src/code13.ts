import { Observable } from 'rxjs/Observable';
import { merge } from 'rxjs/observable/merge';

const addItem = (val:any) => {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}

const observable = Observable.create((observable:any) => {
  observable.next('Hi from first observable!!!')
});

const secondObservable = Observable.create((observable:any) => {
  observable.next('Hi from second observable!!!')
});

const newObservable = merge(observable, secondObservable)

newObservable.subscribe((val:any) => addItem(val))

