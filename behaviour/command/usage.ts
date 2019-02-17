/// <reference path="implementation.ts" />
namespace CommandPattern {
    export namespace Demo {

        export function show() : void {
            const invoker = new CommandPattern.Invoker();
            const simpleCommand = new CommandPattern.SimpleCommand('Simple Command Message');

            const receiver = new CommandPattern.Receiver();
            const complexCommand = new CommandPattern.ComplexCommand(receiver, 'First Message', 'Second Message');

            // Binding commands to the invoker
            invoker.setOnStartCommand(simpleCommand);
            invoker.setOnFinishCommand(complexCommand);

            invoker.doSomeImportant();

            // WE CAN EASY REBIND COMMANDS
            // But it does not matter for Invoker. It works with abstractions
            console.log('\nAFTER REBINDING COMMANDS ===========================\n');
            invoker.setOnStartCommand(complexCommand);
            invoker.setOnFinishCommand(simpleCommand);

            invoker.doSomeImportant();

        }
    }
}
