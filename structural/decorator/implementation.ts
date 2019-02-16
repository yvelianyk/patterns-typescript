const fs = require('fs');
const path = require('path');

namespace DecoratorPattern {

    export const crypto = require('crypto');
    const algorithm = 'aes-256-cbc';
    // @ts-ignore
    const key = crypto.randomBytes(32);
    // @ts-ignore
    const iv = crypto.randomBytes(16);

    /**
     * Common interface for common component and decorators
     */
    export interface DataSource {
        writeData(data: string): void;

        readData(): string;
    }

    /**
     * Class which should be decorated
     */
    export class FileDataSource implements DataSource {

        // It is file name
        private sourceName: string;

        constructor(name: string) {
            this.sourceName = name;
        }

        readData(): string {
            return fs.readFileSync(path.join('./', this.sourceName));
        }

        writeData(data: string): void {
            fs.writeFileSync(path.join('./', this.sourceName), data, {encode: 'UTF8'})
        }
    }

    export abstract class DataSourceDecorator implements DataSource {

        private dataSourceWrapee: DataSource;

        constructor(dataSourceWrapee) {
            this.dataSourceWrapee = dataSourceWrapee;
        }

        readData(): string {
            return this.dataSourceWrapee.readData();
        }

        writeData(data: string): void {
            return this.dataSourceWrapee.writeData(data);
        }

    }

    export class EncryptionDecorator extends DataSourceDecorator {

        constructor(dataSource: DataSource) {
            super(dataSource)
        }

        readData(): string {
            return this.decryptData(super.readData());
        }

        writeData(data: string): void {
            super.writeData(this.encryptData(data));
        }

        // Encrypt data
        private encryptData(text: string): string {
            // @ts-ignore
            let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
            // @ts-ignore
            let encrypted = cipher.update(text);
            // @ts-ignore
            encrypted = Buffer.concat([encrypted, cipher.final()]);
            // @ts-ignore
            return JSON.stringify({iv: iv.toString('hex'), encryptedData: encrypted.toString('hex')});
        }

        // Decrypt data
        private decryptData(text: string): string {
            text = JSON.parse(text);
            // @ts-ignore
            let iv = Buffer.from(text.iv, 'hex');
            // @ts-ignore
            let encryptedText = Buffer.from(text.encryptedData, 'hex');
            // @ts-ignore
            let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
            let decrypted = decipher.update(encryptedText);
            // @ts-ignore
            decrypted = Buffer.concat([decrypted, decipher.final()]);
            return decrypted.toString();
        }
    }

    export class CompressionDecorator extends DataSourceDecorator {
        constructor(dataSource: DataSource) {
            super(dataSource)
        }

        readData(): string {
            return this.decompressData(super.readData());
        }

        writeData(data: string): void {
            super.writeData(this.compressData(data));
        }

        // Compress data(emulation)
        private compressData(data: string): string {
            return encodeURIComponent(data);
        }

        // Decompress data(emulation)
        private decompressData(data: string): string {
            return decodeURIComponent(data);
        }
    }

}
