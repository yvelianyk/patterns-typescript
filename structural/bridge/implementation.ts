namespace BridgePattern {

    /**
     * Abstract interface for implementors(It's device in our case)
     */
    export interface Device {
        isEnabled(): boolean;

        enable();

        disable();

        getVolume(): number;

        setVolume(percent: number);

        getChannel(): number;

        setChannel(channel: number);

        printStatus();

    }

    export class Radio implements Device {

        private on: boolean = false;
        private channel: number = 1;
        private volume: number = 30;

        disable() {
            this.on = false;
        }

        enable() {
            this.on = true;
        }

        getChannel(): number {
            return this.channel;
        }

        getVolume(): number {
            return this.volume;
        }

        isEnabled(): boolean {
            return this.on;
        }

        printStatus() {
            console.log("------------------------------------");
            console.log("| I'm radio.");
            console.log("| I'm " + (this.on ? "enabled" : "disabled"));
            console.log("| Current volume is " + this.volume + "%");
            console.log("| Current channel is " + this.channel);
            console.log("------------------------------------\n");
        }

        setChannel(channel: number) {
            this.channel = channel;
        }

        setVolume(volume: number) {
            if (volume > 100) {
                this.volume = 100;
            } else if (volume < 0) {
                this.volume = 0;
            } else {
                this.volume = volume;
            }
        }
    }

    export class TV implements Device {

        private on: boolean = false;
        private channel: number = 1;
        private volume: number = 30;

        disable() {
            this.on = false;
        }

        enable() {
            this.on = true;
        }

        getChannel(): number {
            return this.channel;
        }

        getVolume(): number {
            return this.volume;
        }

        isEnabled(): boolean {
            return this.on;
        }

        printStatus() {
            console.log("------------------------------------");
            console.log("| I'm TV.");
            console.log("| I'm " + (this.on ? "enabled" : "disabled"));
            console.log("| Current volume is " + this.volume + "%");
            console.log("| Current channel is " + this.channel);
            console.log("------------------------------------\n");
        }

        setChannel(channel: number) {
            this.channel = channel;
        }

        setVolume(volume: number) {
            if (volume > 100) {
                this.volume = 100;
            } else if (volume < 0) {
                this.volume = 0;
            } else {
                this.volume = volume;
            }
        }


    }

    /**
     * Abstract interface for abstraction(It's remote in our case)
     */
    export interface Remote {
        power();

        volumeDown();

        volumeUp();

        channelDown();

        channelUp();
    }

    /**
     * Works with abstractions only
     */
    export class BasicRemote implements Remote {

        protected device: Device;

        constructor(device: Device) {
            this.device = device;
        }

        channelDown() {
            console.log("Remote: channel down");
            this.device.setChannel(this.device.getChannel() - 1);
        }

        channelUp() {
            console.log("Remote: channel up");
            this.device.setChannel(this.device.getChannel() + 1);
        }

        power() {
            console.log("Remote: power toggle");
            if (this.device.isEnabled()) {
                this.device.disable();
            } else {
                this.device.enable();
            }
        }

        volumeDown() {
            console.log("Remote: volume down");
            this.device.setVolume(this.device.getVolume() - 10);
        }

        volumeUp() {
            console.log("Remote: volume up");
            this.device.setVolume(this.device.getVolume() + 10);

        }

    }

    export class AdvancedRemote extends BasicRemote {

        constructor(device: Device) {
            super(device);
        }

        mute() {
            console.log('Advanced remote: mute');
            this.device.setVolume(0);
        }
    }
}
