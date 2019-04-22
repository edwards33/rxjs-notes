import { from } from 'rxjs';
import 'rxjs/add/operator/pluck';

const addItem = (val:any) => {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}

from([
    { first: 'Edy', last: 'Garry', age: '34' },
    { first: 'Bob', last: 'Garry', age: '34' },
    { first: 'Ivo', last: 'Garry', age: '34' },
])
.pluck('first')
.subscribe((val:any) => addItem(val));

