import { Observable } from 'rxjs/Observable';
import * as Rx from 'rxjs';

const addItem = (val:any) => {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}

const observable = Rx.fromEvent(document, 'mousemove');

setTimeout(() => {
    const subscription = observable.subscribe(
      (val:any) => addItem(val)
    )
}, 2500);


