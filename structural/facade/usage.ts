/// <reference path="implementation.ts" />
namespace FacadePattern {
    export namespace Demo {

        export function show() : void {

            // HIDE COMPLEX LOGIC IN ONE METHOD OR CLASS
            const converter = new FacadePattern.VideoConversionFacade('./some-video-file.avi', 'mp4');
            converter.convertVideoFile();

        }

    }
}
