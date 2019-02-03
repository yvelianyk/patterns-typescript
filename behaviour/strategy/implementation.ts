namespace StrategyPattern {

    /**
     * Strategy interface
     */
    export interface PaymentStrategy {
        execute(amountOfMoney: number);
    }

    /**
     * Context of payment executor - not depends of any specific payment strategy
     */
    export class PaymentContext {
        private paymentStrategy: PaymentStrategy;

        setPaymentContext(paymentStrategy: PaymentStrategy) {
            this.paymentStrategy = paymentStrategy;
        }

        processPayment(amountOfMoney: number) {
            this.paymentStrategy.execute(amountOfMoney);
        }
    }

    // ==========================================================
    // CONCRETE PAYMENT STRATEGIES:
    // ==========================================================

    export class PaypalStrategy implements PaymentStrategy {

        execute(amountOfMoney) {
            console.log(`EXECUTING PAYPAL PAYMENT ${amountOfMoney}`);
        }

    }

    export class SwissBankStrategy implements PaymentStrategy {

        execute(amountOfMoney) {
            console.log(`EXECUTING SWISS BANK PAYMENT ${amountOfMoney}`);
        }

    }

    export class AmericaBankStrategy implements PaymentStrategy {

        execute(amountOfMoney) {
            console.log(`EXECUTING AMERICA BANK PAYMENT ${amountOfMoney}`);
        }

    }


}
