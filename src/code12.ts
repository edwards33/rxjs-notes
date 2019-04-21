import { ReplaySubject } from 'rxjs/ReplaySubject';

const addItem = (val:any) => {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}

//30 events in 200 ms:
const subject = new ReplaySubject(30, 200)

subject.subscribe(
    data => addItem('First Observer: ' + data),
    err => addItem(err),
    () => addItem('First Observer Completed')
)

var i = 1;
var int = setInterval(() => subject.next(i++), 100);

setTimeout(() => {
  const secondObserver = subject.subscribe(
    data => addItem('Second Observer: ' + data)
  )
}, 500);

