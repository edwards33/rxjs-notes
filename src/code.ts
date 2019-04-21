import { AsyncSubject } from 'rxjs/AsyncSubject';

const addItem = (val:any) => {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}

const subject = new AsyncSubject()

subject.subscribe(
    data => addItem('First Observer: ' + data),
    () => addItem('First Observer Completed')
)

var i = 1;
var int = setInterval(() => subject.next(i++), 100);

setTimeout(() => {
  const secondObserver = subject.subscribe(
    data => addItem('Second Observer: ' + data)
  )
  subject.complete()
}, 500);

