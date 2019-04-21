import { Observable } from 'rxjs/Observable';

const addItem = (val:any) => {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}

const observable = Observable.create((observer:any) => {
    observer.next('Hi there!!!')
    observer.next('Do you have any question?')
    observer.complete()
    observer.next('This will not appear')
});

observable.subscribe(
    (val:any) => addItem(val),
    (err:any) => addItem(err),
    () => addItem('Done')
);


