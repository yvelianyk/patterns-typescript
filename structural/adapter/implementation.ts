namespace AdapterPattern {

    // =============================================================
    // TWO CLASSES WHICH WORKS ONLY WITH EACH OTHER.
    // It can be some library or third-party code
    // =============================================================
    export class RoundHole {

        private radius: number;

        constructor(radius) {
            this.radius = radius;
        }

        getRadius(): number {
            return this.radius;
        }

        // MAIN METHOD WHICH SHOULD WORK
        fits(roundPeg: TargetInterface) {
            return this.getRadius() >= roundPeg.getRadius();
        }

    }

    export class RoundPeg implements TargetInterface {
        private radius: number;

        constructor(radius) {
            this.radius = radius;
        }

        getRadius(): number {
            return this.radius;
        }
    }

    // Specific interface used by the client code. In our case main thing is RoundHole
    // But in future we can create new adapters which implements this interface
    export interface TargetInterface {
        getRadius(): number;
    }

    // WE SHOULD MAKE INSTANCE OF THIS CLASS COMPATIBLE WITH ROUND HOLES:
    export class SquarePeg {
        private width: number;

        constructor(width) {
            this.width = width;
        }

        getSquare() {
            return Math.pow(this.width, 2);
        }

        getWidth() {
            return this.width;
        }
    }

    // AND HERE WE GO: ADAPTER FOR SQUARE PEGS
    export class SquarePegAdapter implements TargetInterface {

        private squarePeg: SquarePeg;

        constructor(squarePeg: SquarePeg) {
            this.squarePeg = squarePeg;
        }

        // THE MAIN ADAPTER METHOD FOR CALCULATING
        // INTERNAL RADIUS OF ROUND WHICH SQUARE PEG SHOULD FIT
        getRadius(): number {
            const squareWidth = this.squarePeg.getWidth();
            const sumOfPowSides = Math.pow(squareWidth, 2) * 2;
            return Math.sqrt(sumOfPowSides);
        }

    }

}
