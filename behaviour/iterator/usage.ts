/// <reference path="implementation.ts" />
namespace IteratorPattern {
    export namespace Demo {

        export function show() : void {
            const numbers = [1,3,4,6,7,8,9,5,3,4];
            const numbersCollection = new IteratorPattern.Numbers(numbers);
            const numbersIterator = numbersCollection.createIterator();

            while (numbersIterator.hasNext()) {
                console.log(numbersIterator.next());
            }
        }

    }
}
