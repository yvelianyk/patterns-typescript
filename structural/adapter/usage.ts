/// <reference path="implementation.ts" />
namespace AdapterPattern {
    export namespace Demo {

        export function show() : void {

            const roundHole = new AdapterPattern.RoundHole(10);
            const roundPeg = new AdapterPattern.RoundPeg(9);
            console.log('IS FITS: ', roundHole.fits(roundPeg));// SHOULD FIT

            const roundHole2 = new AdapterPattern.RoundHole(10);
            const roundPeg2 = new AdapterPattern.RoundPeg(11);
            console.log('IS FITS: ', roundHole2.fits(roundPeg2));// SHOULD NOT FIT

            const roundHole3 = new AdapterPattern.RoundHole(15);
            const roundPeg3 = new AdapterPattern.RoundPeg(14);
            console.log('IS FITS: ', roundHole3.fits(roundPeg3));// SHOULD FIT

            const roundHole4 = new AdapterPattern.RoundHole(10);
            const squarePeg4 = new AdapterPattern.SquarePeg(7);
            // roundHole4.fits(squarePeg4); // ERROR OF COMPILATION

            // ADAPTER WORKS:
            const roundHole5 = new AdapterPattern.RoundHole(10);
            const squarePeg5 = new AdapterPattern.SquarePegAdapter(squarePeg4);

            console.log('IS FITS SQUARE PEG: ', roundHole5.fits(squarePeg5)); // SHOULD FIT

        }

    }
}
