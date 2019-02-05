/// <reference path="implementation.ts" />
namespace MediatorPattern {
    export namespace Demo {

        export function show() : void {

            const componentA = new MediatorPattern.ConcreteComponentA();
            const componentB = new MediatorPattern.ConcreteComponentB();
            const mediator = new MediatorPattern.ConcreteMediator(componentA, componentB);

            componentA.sendMethod();
            componentB.sendMethod();

        }
    }
}
