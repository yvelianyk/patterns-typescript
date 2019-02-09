namespace SingletonPattern {

    export class Singleton {
        private static singleton: Singleton;

        static getInstance() {
            if (!Singleton.singleton) {
                Singleton.singleton = new Singleton();
            }
            return Singleton.singleton;
        }
    }

}
