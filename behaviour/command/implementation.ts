namespace CommandPattern {

    export interface Command {
        execute(): void;
    }

    /**
     * Simple command without receiver
     */
    export class SimpleCommand implements Command {

        private payload: string;

        constructor(payload) {
            this.payload = payload;
        }

        execute(): void {
            console.log(`THIS IS SIMPLE COMMAND, PAYLOAD: ${this.payload}`);
        }

    }

    export class ComplexCommand implements Command {

        private receiver: Receiver;
        private messageA: string;
        private messageB: string;

        constructor(receiver: Receiver, messageA, messageB) {
            this.receiver = receiver;
            this.messageA = messageA;
            this.messageB = messageB;
        }

        /**
         * Delegate some logic into receiver
         */
        execute(): void {
            console.log('Complex command: delegate to the receiver');
            this.receiver.doSomethingA(this.messageA);
            this.receiver.doSomethingB(this.messageB);
        }

    }

    /**
     * This class contains some business logic - its highest level of abstraction
     * It is not strictly depends on Invoker
     */
    export class Receiver {

        doSomethingA(messageA: string) {
            console.log(`RECEIVER DO SOMETHING: ${messageA}`);
        }

        doSomethingB(messageB: string) {
            console.log(`RECEIVER DO SOMETHING: ${messageB}`);
        }

    }

    /**
     * This class does not know about some concrete commands
     * It just associate some operations with commands.
     * Also, you can dynamically change commands in Invoker.
     * It works WITH ABSTRACT COMMANDS
     */
    export class Invoker {
        private startCommand: Command;
        private finishCommand: Command;

        setOnStartCommand(command: Command) {
            this.startCommand = command;
        }

        setOnFinishCommand(command: Command) {
            this.finishCommand = command;
        }


        /**
         * The Invoker does not depend on concrete command or receiver classes.
         * The Invoker passes a request to a receiver indirectly, by executing a
         * command.
         */
        doSomeImportant() {

            console.log('Invoker started work...');
            this.startCommand.execute();

            // SOME OTHER IMPORTANT STUFF....

            console.log('Invoker finishing work...');
            this.finishCommand.execute();
        }

    }

}
