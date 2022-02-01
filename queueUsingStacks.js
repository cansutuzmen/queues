//Hackerrank - Queue using two stacks

class Queue {
  constructor() {
    this.first = [];
    this.last = [];
  }

  enqueue(value) {
    const length = this.first.length;
    for (let i = 0; i < length; i++) {
      this.last.push(this.first.pop());
    }
    this.last.push(value);
    return this;
  }

  dequeue() {
    const length = this.last.length;
    for (let i = 0; i < length; i++) {
      this.first.push(this.last.pop());
    }
    this.first.pop();
    return this;
  }
  
  peek() {
    if (this.last.length > 0) {
      return this.last[0];
    }
    return this.first[this.first.length - 1];
  }
}

function processData(input) {
    const data = input.split('\n');
    const queue = new Queue();
    
    for(let i = 0; i < data.length; i++){
        const operation = data[i].charAt(0) + data[i].charAt(1);

        if(operation === '1 '){
            const opArr = data[i].split(' ');
            const value = opArr[1];
            queue.enqueue(value); 
        }
        
        if(operation === '2'){
            queue.dequeue();
        }
        
        if(operation === '3'){
            console.log(queue.peek());
        }
    } 
} 
