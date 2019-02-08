/// <reference path="implementation.ts" />
namespace BuilderPattern {
    export namespace Demo {

        export function show() : void {
            const carBuilder = new BuilderPattern.CarBuilder();
            const carManualBuilder = new BuilderPattern.CarManualBuilder();
            const director = new BuilderPattern.Director(carBuilder);

            // CONCRETE BUILDERS IN ACTION:
            const familyCar: BuilderPattern.Car = director.createFamilyCar();
            console.log('FAMILY CAR: ', familyCar);

            director.setBuilder(carManualBuilder);
            const familyCarManual: BuilderPattern.CarManual = director.createFamilyCar();
            console.log('FAMILY CAR MANUAL: ', familyCarManual);

            director.setBuilder(carBuilder);
            const sportCar: BuilderPattern.Car = director.createSportCar();
            console.log('SPORT CAR: ', sportCar);

            director.setBuilder(carManualBuilder);
            const sportCarManual: BuilderPattern.CarManual = director.createSportCar();
            console.log('SPORT CAR MANUAL: ', sportCarManual);

        }

    }
}
