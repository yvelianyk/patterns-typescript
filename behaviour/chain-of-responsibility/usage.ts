/// <reference path="implementation.ts" />
namespace ChainOfResponsibilityPattern {
    export namespace Demo {

        export function show() : void {
            let monkeyHandler: ChainOfResponsibilityPattern.Handler,
                humanHandler: ChainOfResponsibilityPattern.Handler,
                squirrelHandler: ChainOfResponsibilityPattern.Handler,
                foods: string[];

            foods = ['Banana', 'Nuts', 'Coffee', 'Stones'];

            // CONCRETE HANDLERS INSTCANCES
            monkeyHandler = new ChainOfResponsibilityPattern.MonkeyHandler();
            humanHandler = new ChainOfResponsibilityPattern.HumanHandler();
            squirrelHandler = new ChainOfResponsibilityPattern.SquirellHandler();

            // CHAIN OF RESPONSIBILITIES:
            monkeyHandler
                .setNext(humanHandler)
                .setNext(squirrelHandler);

            foods.forEach(food => {
                console.log('======================');
                console.log(`Which of you want to eat ${food}?`);
                console.log('Answers: ');
                monkeyHandler.handle(food);
            })

        }
    }
}
