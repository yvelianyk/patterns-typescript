namespace IteratorPattern {
    export interface Iterator {
        next(): any;
        hasNext(): boolean;
    }

    export interface Collection {
        createIterator(): Iterator;
    }

    export class NumberIterator implements Iterator {
        private collection: any[] = [];
        private position: number = 0;

        constructor(collection: any[]) {
            this.collection = collection;
        }

        public next(): any {
            const result = this.collection[this.position];
            this.position++;
            return result;
        }

        public hasNext(): boolean {
            return this.position < this.collection.length;
        }
    }

    export class Numbers implements Collection {
        private collection: number[] = [];

        constructor(collection: number[]) {
            this.collection = collection;
        }

        public createIterator(): Iterator {
            return new NumberIterator(this.collection);
        }
    }
}
