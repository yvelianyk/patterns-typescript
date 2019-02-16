namespace FacadePattern {

    /**
     * Some complex library
     */
    export namespace ComplexVideoLibrary {

        export class VideoFile {
            private name: string;
            private codecType: string;

            constructor(name) {
                this.name = name;
                this.codecType = this.initCodecType();
            }

            getCodecType() {
                return this.codecType;
            }

            getName() {
                return this.name;
            }

            private initCodecType() {
                const nameParts = this.name.split('.');
                return nameParts.pop();
            }

        }

        export interface Codec {
            type: string;
        }

        export class MPEG4Codec implements Codec {
            type = 'mp4';
        }

        export class AVICodec implements Codec {
            type = 'avi';
        }

        export class CodecFactory {
            static getCodec(file: VideoFile) {
                const codecType = file.getCodecType();

                switch (codecType) {
                    case 'avi' :
                        console.log('Codec Factory: extract AVI...');
                        return new AVICodec();
                    case 'mp4' :
                        console.log('Codec Factory: extract MPEG4...');
                        return new MPEG4Codec();
                }
            }
        }

        export class BitRateReader {
            static read(file: VideoFile, codec: Codec) {
                console.log('BitRateReader: reading file...');
                // do some operations using codec and file
            }

            static convert(buffer, destinationCodec: Codec) {
                console.log(`Convert file and writing file to ${destinationCodec.type} ...`);
            }
        }

    }

    /**
     * Hide all complex operations of converting video files in Facade
     * USE FACADE INSTEAD OF USING SOME LIBRARY DIRECTLY IN CLIENT CODE
     * IF LIBRARY WOULD BE CHANGED CLIENT CODE WOULD NOT BE TOUCHED DUE
     * TO WORKING WITH FACADE. AND ONLY FACADE WILL BE CHANGED
     */
    export class VideoConversionFacade {

        private filePath: string;
        private destFormat: string;
        private destCodec: ComplexVideoLibrary.Codec;

        constructor(filePath: string, destFormat: string) {
            this.filePath = filePath;
            this.destFormat = destFormat;
        }

        /**
         * Complex method
         */
        convertVideoFile() {

            console.log('CONVERSION STARTED: ============================================');

            const sourceFile = new ComplexVideoLibrary.VideoFile(this.filePath);
            const sourceCodec = ComplexVideoLibrary.CodecFactory.getCodec(sourceFile);

            switch (this.destFormat) {
                case 'avi' :
                    this.destCodec = new ComplexVideoLibrary.AVICodec();
                    break;
                case 'mp4' :
                    this.destCodec = new ComplexVideoLibrary.MPEG4Codec();
                    break;
            }

            const buffer = ComplexVideoLibrary.BitRateReader.read(sourceFile, sourceCodec);

            const result = ComplexVideoLibrary.BitRateReader.convert(buffer, this.destCodec);

            console.log('CONVERSION COMPLETED: ============================================');

            return result;

        }

    }

}
