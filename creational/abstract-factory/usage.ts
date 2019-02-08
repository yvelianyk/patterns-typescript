/// <reference path="implementation.ts" />
namespace AbstractFactoryPattern {
    export namespace Demo {

        /**
         * Application is working only with ABSTRACT classes
         */
        class Application {

            private guiFactory: AbstractFactoryPattern.GUIFactory;

            private loginButton: AbstractFactoryPattern.Button;
            private signupButton: AbstractFactoryPattern.Button;

            private loginCheckbox: AbstractFactoryPattern.CheckBox;
            private signupChecbox: AbstractFactoryPattern.CheckBox;

            constructor(guiFactory: AbstractFactoryPattern.GUIFactory) {
                this.guiFactory = guiFactory;
            }

            buildUI() {
                this.loginButton = this.guiFactory.createButton('Login');
                this.signupButton = this.guiFactory.createButton('Signup');
                this.loginCheckbox = this.guiFactory.createCheckbox('Login');
                this.signupChecbox = this.guiFactory.createCheckbox('Signup');
                return this;
            }

            paint() {
                this.loginButton.paintButton();
                this.signupButton.paintButton();
                this.loginCheckbox.paintCheckbox();
                this.signupChecbox.paintCheckbox();
            }

        }

        class ApplicationConfigurator {
            static getApplicationGUIFactory(OS: string) {
                switch (OS) {
                    case 'Windows':
                        return new AbstractFactoryPattern.WindowsFactory();
                    case 'Linux':
                        return new AbstractFactoryPattern.LinuxFactory();
                }
            }
        }


        export function show(): void {

            // ONLY FOR EXAMPLE. IN THE REAL APP ITS ONLY ONE OS)
            const OSSystems = ['Windows', 'Linux'];

            OSSystems.forEach(OS => {
                console.log(`OS: ${OS} ===================`);
                const guiFactory: AbstractFactoryPattern.GUIFactory = ApplicationConfigurator.getApplicationGUIFactory(OS);

                const application = new Application(guiFactory);

                application.buildUI().paint();

            })

        }

    }
}
