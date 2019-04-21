import { Observable } from 'rxjs/Observable';

const addItem = (val:any) => {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}

const observable = Observable.create((observer:any) => {
    try {
      observer.next('Hi there!!!')
      observer.next('Do you have any question?')
      setInterval(() => {
        observer.next('Yes, I have...')
      }, 2000)
    } catch(err) {
      observer.error(err)
    }
});

const observer = observable.subscribe(
    (val:any) => addItem(val),
    (err:any) => addItem(err),
    () => addItem('Done')
);

setTimeout(() => {
    const secondObserver = observable.subscribe(
       (val:any) => addItem(val + ' from Second Obs.')
    );
}, 2000);
