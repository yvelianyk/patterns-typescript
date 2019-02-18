/// <reference path="implementation.ts" />
namespace BridgePattern {
    export namespace Demo {

        export function show() : void {
            testDevice(new BridgePattern.Radio());
            testDevice(new BridgePattern.TV());
        }
        
        function testDevice(device: BridgePattern.Device) {
            console.log('Test with basic remote...');
            const basicRemote = new BridgePattern.BasicRemote(device);
            basicRemote.power();
            basicRemote.volumeUp();
            device.printStatus();

            console.log('Test with advanced remote...');
            const advancedRemote = new BridgePattern.AdvancedRemote(device);
            advancedRemote.mute();
            device.printStatus();
        }

    }
}
