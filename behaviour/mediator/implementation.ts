namespace MediatorPattern {

    export interface Mediator {
        send(sender: any, message: any): void;
    }

    export class ConcreteMediator implements Mediator {

        componentA: BaseComponent;
        componentB: BaseComponent;

        constructor(componentA: BaseComponent, componentB: BaseComponent) {
            this.componentA = componentA;
            this.componentB = componentB;

            this.componentA.setMediator(this);
            this.componentB.setMediator(this);
        }

        send(sender: BaseComponent, message: string) {
            switch (message) {
                case 'A':
                    console.log('Mediator received A message');
                    this.componentB.receiveMethod('A from mediator');
                    return;
                case 'B':
                    console.log('Mediator received B message');
                    this.componentA.receiveMethod('B from mediator');
                    return;
            }
        }

    }

    export abstract class BaseComponent {

        protected mediator: Mediator;

        constructor(mediator?: Mediator) {
            this.mediator = mediator;
        }

        setMediator(mediator: Mediator) {
            this.mediator = mediator;
        }

        abstract sendMethod()

        abstract receiveMethod(message: string)
    }

    export class ConcreteComponentA extends BaseComponent{
        sendMethod() {
            console.log('Component A call sendMethod');
            this.mediator.send(this, 'A');
        }

        receiveMethod(message: string) {
            console.log(`Component A received message ${message}`);
        }
    }

    export class ConcreteComponentB extends BaseComponent {
        sendMethod() {
            console.log('Component B call sendMethod');
            this.mediator.send(this, 'B');
        }

        receiveMethod(message: string) {
            console.log(`Component B received message ${message}`);
        }
    }

}
