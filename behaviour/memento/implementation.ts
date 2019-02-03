namespace MementoPattern {

    /**
     * Interface of editor state(in this example it is a text editor)
     * No one knows about it except originator and memento(only private fields without direct access)
     */
    export interface EditorState {
        editorText: string;
        editorTextColor: string;
    }

    /**
     * Common memento interface
     */
    interface Memento {
        getState();
        getName();
        getDate();
    }

    /**
     * Editor originator
     * Can make operations on itself and restore its state from memento
     * Also it can save his state by creating memento
     * No one knows about details of implementation of originator
     */
    export class EditorOriginator {

        private state: EditorState;

        constructor(state: EditorState) {
            this.state = state;
        }

        makeSomeEditorOperation(state) {
            this.state = state;
            console.log(`Originator make some operation: my state is ${this.state.editorText} ${this.state.editorTextColor}`);
        }

        restore(memento: EditorMemento) {
            this.state = memento.getState();
            console.log(`Originator restore: my state is ${this.state.editorText} ${this.state.editorTextColor}`);
        }

        save() {
            return new EditorMemento(this.state);
        }

    }

    /**
     * Concrete memento of editor
     */
    export class EditorMemento implements Memento {

        private state: EditorState;
        private date: Date;

        constructor(state: EditorState) {
            this.state = state;
            this.date = new Date();
        }

        getState(): EditorState {
            return this.state;
        }

        getName() {
            return `Date: ${this.date}: ${this.state.editorText} ${this.state.editorTextColor}`
        }

        getDate() {
            return `Date: ${this.date}`
        }

    }

    /**
     * Caretaker class
     * It can backup, undo and show history of originator passed in the constructor
     */
    export class CareTaker {

        private editorOriginator: EditorOriginator;
        private mementos: EditorMemento[] = [];

        constructor(editorOriginator) {
            this.editorOriginator = editorOriginator;
        }

        backup() {
            const memento = this.editorOriginator.save();
            this.mementos.push(memento);
        }

        undo() {
            const previousMemento = this.mementos.pop();
            this.editorOriginator.restore(previousMemento);
        }

        showHistory() {
            console.log('HISTORY: ====================');
            this.mementos.forEach(memento => {
                console.log(memento.getName());
            })
        }

    }

}
