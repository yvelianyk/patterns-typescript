namespace BuilderPattern {

    /**
     * Car class. Products interfaces should not have the same interface
     */
    export class Car {
        doors: number;
        engine: string;
        hasGPS: boolean;
        seats: number;
        tripComputer: string;
    }

    /**
     * Car Manual class. Products interfaces should not have the same interface
     */
    export class CarManual {
        doorsNumber: number;
        engineType: string;
        hasGPSOnBoard: boolean;
        seatsNumber: number
        tripComputerType: string;
    }

    /**
     * Abstract interface of builder
     */
    export interface Builder {
        reset();
        setSeats(number: number):Builder;
        setDoors(number: number):Builder;
        setEngine(type: string):Builder;
        setTripComputer(type: string):Builder
        setGPS():Builder;
        getResult()
    }

    export class CarBuilder implements Builder {

        private car: Car;

        constructor() {
            this.car = {} as any;
        }

        getResult(): Car {
            return this.car;
        }

        reset(): void {
            this.car = {} as any;
        }

        setDoors(number: number): Builder {
            this.car.doors = number;
            return this;
        }

        setEngine(type: string): Builder {
            this.car.engine = type;
            return this;
        }

        setGPS(): Builder {
            this.car.hasGPS = true;
            return this;
        }

        setSeats(number: number): Builder {
            this.car.seats = number;
            return this;
        }

        setTripComputer(type: string): Builder {
            this.car.tripComputer = type;
            return this;
        }

    }

    export class CarManualBuilder implements Builder {

        private carManual: CarManual;

        constructor() {
            this.carManual = {} as any;
        }

        getResult() : CarManual {
            return this.carManual;
        }

        reset(): void {
            this.carManual = {} as any;
        }

        setDoors(number: number): Builder {
            this.carManual.doorsNumber = number;
            return this;
        }

        setEngine(type: string): Builder {
            this.carManual.engineType = type;
            return this;
        }

        setGPS(): Builder {
            this.carManual.hasGPSOnBoard = true;
            return this;
        }

        setSeats(number: number): Builder {
            this.carManual.seatsNumber = number;
            return this;
        }

        setTripComputer(type: string): Builder {
            this.carManual.tripComputerType = type;
            return this;
        }

    }

    export class Director {
        private builder: Builder;

        /**
         * You can pass builder not only via constructor
         * You can do it by setter or direct by method
         * @param builder
         */
        constructor(builder: Builder) {
            this.builder = builder;
        }

        setBuilder(builder: Builder) {
            this.builder = builder;
        }

        createSportCar() {
            return this.builder
                .setDoors(3)
                .setEngine('Petrol')
                .setSeats(2)
                .setGPS()
                .setTripComputer('Intel')
                .getResult();
        }

        createFamilyCar() {
            return this.builder
                .setDoors(5)
                .setEngine('Diesel')
                .setSeats(5)
                .setTripComputer('Atmel')
                .getResult();
        }

    }

}
