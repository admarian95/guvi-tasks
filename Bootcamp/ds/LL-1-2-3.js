class Node{
    constructor(el){
        this.data = el;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head =null;
        this.size =0;

        this._addElement = this._addElement.bind(this);
        this._insertAtPos = this._insertAtPos.bind(this);
        this._delAtPos = this._delAtPos.bind(this);
        this._findMid = this._findMid.bind(this);
    }

    /*  current is the temp pointer */
    _addElement(el){
        let node = new Node(el);
        let current;
        if(this.head === null){
            this.head = node;
        }else{
            current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next=node;
        }
        this.size++;
    }

    _insertAtPos(el,pos){
        let current;
        current = this.head;
        if(pos ===1){
            let node = new Node(el);
            this.head = node;
            node.next = current;
        }else if(pos>this.size){
            this._addElement(el);
        }
        else{
            for(let i=1;i<pos-1;i++){
                current = current.next;
            }
            let node = new Node(el);
            node.next = current.next;
            current.next = node;
        }
        this.size++;
    }

    _delAtPos(pos){
        let current = this.head;
        if(pos ===1){
            this.head = this.head.next;
        }
        else{
            for(let i=1;i<pos-1;i++){
                current = current.next;
            }
            current.next = current.next.next;
        }
        this.size--;

    }
    _findMid(){
        let fastPtr = this.head;
        let slowPtr = this.head;
        while(fastPtr.next && fastPtr.next.next){
            fastPtr = fastPtr.next.next;
            slowPtr = slowPtr.next;
        }
        return slowPtr.data;
    }


}

let LL3 = new LinkedList();
LL3._addElement(2);
LL3._addElement(3);
LL3._addElement(4);
LL3._addElement(10);
LL3._insertAtPos(1,1);
LL3._insertAtPos(5,3);
LL2._delAtPos(2);
console.dir(LL3);
console.log(LL3._findMid())