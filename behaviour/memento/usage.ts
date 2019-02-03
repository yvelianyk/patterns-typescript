/// <reference path="implementation.ts" />
namespace MementoPattern {
    export namespace Demo {

        export function show() : void {
            const editorOriginator: EditorOriginator = new EditorOriginator({
                editorText: 'Inital Editor Text',
                editorTextColor: 'Initial Text Color'
            });

            const careTaker: CareTaker = new CareTaker(editorOriginator);

            // ======================================================================
            // MAKE EDITOR ACTIONS: create backups before changes
            // ======================================================================

            careTaker.backup();
            editorOriginator.makeSomeEditorOperation({
                editorText: 'Change Text 1',
                editorTextColor: 'Change Text 1'
            });

            careTaker.backup();
            editorOriginator.makeSomeEditorOperation({
                editorText: 'Change Text 2',
                editorTextColor: 'Change Text 2'
            });

            careTaker.backup();
            editorOriginator.makeSomeEditorOperation({
                editorText: 'Change Text 3',
                editorTextColor: 'Change Text 3'
            });

            careTaker.showHistory();

            careTaker.undo();
            careTaker.undo();

        }
    }
}
