/// <reference path="implementation.ts" />
namespace DecoratorPattern {
    export namespace Demo {

        export function show() : void {

            const fileContent = 'Some File Content Text';
            const plainDataSource = new DecoratorPattern.FileDataSource('file.txt');

            // Decorate plain data source!!!
            // Decorator has the same interface as object which should be decorated
            // so we can work it as with original object in other places of application
            const encryptedCompressedDataSource = new DecoratorPattern.CompressionDecorator(
                new DecoratorPattern.EncryptionDecorator(
                    new DecoratorPattern.FileDataSource('file.txt')
                )
            );

            console.log('SOURCE TEXT: ', fileContent);// TODO: remove it

            encryptedCompressedDataSource.writeData(fileContent);

            console.log('ENCRYPTED: ============================');// TODO: remove it
            console.log(plainDataSource.readData());// TODO: remove it

            console.log('DECRYPTED: ============================');// TODO: remove it
            console.log(encryptedCompressedDataSource.readData());// TODO: remove it

        }

    }
}
