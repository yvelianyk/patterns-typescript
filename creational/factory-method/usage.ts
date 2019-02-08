/// <reference path="implementation.ts" />
namespace FactoryMethodPattern {
    export namespace Demo {

        export class Client {

            mainFlow() {

                console.log('PROCESS PAYPAL PAYMENT STARTING...');
                this.processPayment(new FactoryMethodPattern.PayPalPaymentCreator(), 100);

                console.log('PROCESS BANK OF AMERICA PAYMENT STARTING...');
                this.processPayment(new FactoryMethodPattern.BankOfAmericaPaymentCreator(), 200);

            }

            /**
             * Business logic which works only with abstractions
             */
            private processPayment(paymentCreator: FactoryMethodPattern.PaymentCreator, amountOfMoney: number) {
                paymentCreator.commonProcessPayment(amountOfMoney);
            }

        }

        export function show() : void {
            const client = new Client();
            client.mainFlow();
        }

    }
}
