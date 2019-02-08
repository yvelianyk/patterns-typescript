/**
 * Factory method pattern
 * Example the same as in strategy pattern
 */
namespace FactoryMethodPattern {

    /**
     * Common payment processor interface
     */
    export interface PaymentProcessor {
        executePayment(amountOfMoney: number);
    }

    export abstract class PaymentCreator {

        abstract factoryMethod(): PaymentProcessor;

        /**
         * Also note that, despite its name, the PaymentCreator's primary
         * responsibility is not creating payment processors. Usually, it contains some
         * core business logic that relies on Payment Processors objects, returned by the
         * factory method. Subclasses can indirectly change that business logic
         * by overriding the factory method and returning a different type of
         * product from it.
         */
        commonProcessPayment(amountOfMoney: number) {
            const paymentProcessor = this.factoryMethod();

            let result = paymentProcessor.executePayment(amountOfMoney);

            // some common business logic for all payment processors
            const taxAmount = 100;
            result += taxAmount;

            console.log(`COMMON METHOD ADD 100$ TAXES: ${result}$`);
            return result;

        }

    }

    // ========================================================================
    // CONCRETE PROCESSORS(PRODUCTS) AND CREATOR CLASSES:
    // ========================================================================
    // ========================================================================
    // PAYPAL CLASSES:
    // ========================================================================

    export class PayPalPaymentProcessor implements PaymentProcessor {

        executePayment(amountOfMoney: number) {
            console.log(`EXECUTE PAYPAL PAYMENT: ${amountOfMoney}$`);
            return amountOfMoney;
        }

    }

    export class PayPalPaymentCreator extends PaymentCreator {

        factoryMethod(): PaymentProcessor {
            return new PayPalPaymentProcessor();
        }

    }

    // ========================================================================
    // BANK OF AMERICA CLASSES:
    // ========================================================================

    export class BankOfAmericaPaymentProcessor implements PaymentProcessor {

        executePayment(amountOfMoney: number) {
            console.log(`EXECUTE BANK OF AMERICA PAYMENT: ${amountOfMoney}$`);
            return amountOfMoney;
        }

    }

    export class BankOfAmericaPaymentCreator extends PaymentCreator {

        factoryMethod(): PaymentProcessor {
            return new BankOfAmericaPaymentProcessor();
        }

    }

}
