// Command Interface
interface CarCommand {
    execute(): void;
}

// Concrete Command Classes

// Command to start the car engine
class StartEngineCommand implements CarCommand {
    constructor(private car: Car) { }

    public execute(): void {
        this.car.startEngine();
    }
}

// Command to play the car radio
class PlayRadioCommand implements CarCommand {
    constructor(private car: Car) { }

    public execute(): void {
        this.car.playRadio();
    }
}

// Command to open the sunroof
class OpenSunroofCommand implements CarCommand {
    constructor(private car: Car) { }

    public execute(): void {
        this.car.openSunroof();
    }
}

// Receiver Class

class Car {
    public startEngine(): void {
        console.log('Engine started!');
    }

    public playRadio(): void {
        console.log('Radio is playing!');
    }

    public openSunroof(): void {
        console.log('Sunroof is open!');
    }
}

// Invoker Class

class CarDashboard {
    private command: CarCommand | null = null;

    public setCommand(command: CarCommand): void {
        this.command = command;
    }

    public pressButton(): void {
        if (this.command) {
            this.command.execute();
        } else {
            console.log('No command set for this button!');
        }
    }
}

// Client Code
const myCar = new Car();
const dashboard = new CarDashboard();

// Setting the start engine command to a button
dashboard.setCommand(new StartEngineCommand(myCar));
dashboard.pressButton();  // Output: Engine started!

// Setting the play radio command to a button
dashboard.setCommand(new PlayRadioCommand(myCar));
dashboard.pressButton();  // Output: Radio is playing!

// Setting the open sunroof command to a button
dashboard.setCommand(new OpenSunroofCommand(myCar));
dashboard.pressButton();  // Output: Sunroof is open!
