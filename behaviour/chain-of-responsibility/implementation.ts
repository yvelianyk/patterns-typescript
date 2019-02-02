namespace ChainOfResponsibilityPattern {

    /**
     * Abstract class of handler
     */
    export abstract class Handler {
        protected nextHandler: Handler;

        // You can add handlers via constructor
        // But in this case we do it via setNext method
        protected constructor() {}

        setNext(handler: Handler): Handler {
            this.nextHandler = handler;
            return this.nextHandler;
        }

        handle(param): any {
            if (this.nextHandler) {
                this.nextHandler.handle(param);
            } else {
                console.log(`No one not want to handle ${param}`);
            }
        }

    }

    // ==========================================================
    // CONCRETE HANDLERS:
    // ==========================================================

    export class MonkeyHandler extends Handler {
        constructor() {
            super();
        }

        handle(food) {
            if(food === 'Banana') {
                console.log(`Monkey eats ${food}`);
            } else {
                console.log(`Monkey does not eats ${food}. Next...`);
                super.handle(food);
            }
        }

    }

    export class SquirellHandler extends Handler {
        constructor() {
            super();
        }

        handle(food) {
            if(food === 'Nuts') {
                console.log(`Squirell eats ${food}`);
            } else {
                console.log(`Squirell does not eats ${food}. Next...`);
                super.handle(food);
            }
        }

    }

    export class HumanHandler extends Handler {
        constructor() {
            super();
        }

        handle(food) {
            if(food === 'Coffee') {
                console.log(`Human drinks a ${food}`);
            } else {
                console.log(`Human does not eats ${food}. Next...`);
                super.handle(food);
            }
        }

    }
}
