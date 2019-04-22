import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const addItem = (val:any) => {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}

Observable.create((observer:any) => {
    observer.next('Hi there!!!')
})
.map((val:any) => val.toUpperCase())
.subscribe((val:any) => addItem(val))

