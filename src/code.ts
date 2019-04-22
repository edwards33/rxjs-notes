import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { interval } from 'rxjs';
import 'rxjs/add/operator/skipUntil';

const addItem = (val:any) => {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}

const firstObservable = Observable.create((data:any) => {
    var i = 1
    setInterval(() => {
       data.next(i++)
    }, 500)
});

const secondObservable = new Subject;

setTimeout(() => {
    secondObservable.next('Hi from Second Observable')
}, 3000)

const newObserver = firstObservable.skipUntil(secondObservable)

newObserver.subscribe((val:any) => addItem(val))



