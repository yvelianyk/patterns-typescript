/// <reference path="implementation.ts" />
namespace StrategyPattern {
    export namespace Demo {

        export function show() : void {

            // Init of specific payment strategies
            const paypalPaymentStrategy = new StrategyPattern.PaypalStrategy();
            const swissBankPaymentStrategy = new StrategyPattern.SwissBankStrategy();
            const americaBankPaymentStrategy = new StrategyPattern.AmericaBankStrategy();

            // Init of payment processor - this is the main class which executes payments
            // and consumes payment strategies
            const paymentProcessor = new StrategyPattern.PaymentContext();

            // USAGE OF PAYMENT STRATEGIES:
            // It depends on some parameters or user input
            // Also, strategies can change dynamically

            paymentProcessor.setPaymentContext(paypalPaymentStrategy);
            paymentProcessor.processPayment(100); // This method works for any strategy

            paymentProcessor.setPaymentContext(swissBankPaymentStrategy);
            paymentProcessor.processPayment(50); // This method works for any strategy

            paymentProcessor.setPaymentContext(americaBankPaymentStrategy);
            paymentProcessor.processPayment(80); // This method works for any strategy

        }
    }
}
