import { Subject } from 'rxjs/Subject';

const addItem = (val:any) => {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}

const subject = new Subject()

subject.subscribe(
    data => addItem('First Observer: ' + data),
    err => addItem(err),
    () => addItem('First Observer Completed')
)

subject.next('First msg has been sent');

