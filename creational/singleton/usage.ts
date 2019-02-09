/// <reference path="implementation.ts" />
namespace SingletonPattern {
    export namespace Demo {

        export function show() : void {
            const singleton = SingletonPattern.Singleton.getInstance();

            const singleton2 = SingletonPattern.Singleton.getInstance();

            if (singleton === singleton2) {
                console.log('THE SAME INSTANCES');
            } else {
                console.log('SINGLETON IS NOT WORKING PROPERLY');
            }

        }

    }
}
