namespace AbstractFactoryPattern {

    // ===========================================================
    // BUTTON:
    // ===========================================================

    export interface Button {
        paintButton(): void;
    }

    export class WindowsButton implements Button {

        title: string;

        constructor(title: string) {
            this.title = title;
        }

        paintButton(): void {
            console.log(`WINDOWS BUTTON PAINT ${this.title}`);
        }
    }

    export class LinuxButton implements Button {

        title: string;

        constructor(title: string) {
            this.title = title;
        }

        paintButton(): void {
            console.log(`LINUX BUTTON PAINT ${this.title}`);
        }
    }

    // ===========================================================
    // CHECKBOX:
    // ===========================================================

    export interface CheckBox {
        paintCheckbox(): void;
    }

    export class WindowsCheckBox implements CheckBox {

        title: string;

        constructor(title: string) {
            this.title = title;
        }

        paintCheckbox(): void {
            console.log(`WINDOWS CHECKBOX PAINT ${this.title}`);
        }
    }

    export class LinuxCheckBox implements CheckBox {

        title: string;

        constructor(title: string) {
            this.title = title;
        }

        paintCheckbox(): void {
            console.log(`LINUX CHECKBOX PAINT ${this.title}`);
        }
    }

    // ===========================================================
    // FACTORIES:
    // ===========================================================

    export interface GUIFactory {

        createButton(title: string): Button;

        createCheckbox(title: string): CheckBox;
    }

    export class WindowsFactory implements GUIFactory {

        createButton(title: string): Button {
            return new WindowsButton(title);
        }

        createCheckbox(title: string): CheckBox {
            return new WindowsCheckBox(title);
        }

    }

    export class LinuxFactory implements GUIFactory {

        createButton(title: string): Button {
            return new LinuxButton(title);
        }

        createCheckbox(title: string): CheckBox {
            return new LinuxCheckBox(title);
        }

    }

}
