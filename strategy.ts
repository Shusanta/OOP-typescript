/**
 * Interface for driving strategies.
 */
interface DrivingStrategy {
    drive(): string;
}

/**
 * Concrete driving strategy: City Driving.
 */
class CityDrivingStrategy implements DrivingStrategy {
    public drive(): string {
        return "Driving at a moderate speed, observing traffic lights and pedestrians.";
    }
}

/**
 * Concrete driving strategy: Highway Driving.
 */
class HighwayDrivingStrategy implements DrivingStrategy {
    public drive(): string {
        return "Driving at a high speed, observing lane discipline.";
    }
}

/**
 * Concrete driving strategy: OffRoad Driving.
 */
class OffRoadDrivingStrategy implements DrivingStrategy {
    public drive(): string {
        return "Driving carefully, avoiding potholes and rough patches.";
    }
}

/**
 * StrategyCar class which will apply the driving strategies.
 */
class StrategyCar {
    private strategy: DrivingStrategy;

    constructor(strategy: DrivingStrategy) {
        this.strategy = strategy;
    }

    public setStrategy(strategy: DrivingStrategy) {
        this.strategy = strategy;
    }

    public applyDrivingStrategy(): void {
        console.log(`StrategyCar: ${this.strategy.drive()}`);
    }
}

// Example usage:

const sedan = new StrategyCar(new CityDrivingStrategy());

console.log('Sedan: Applying city driving strategy.');
sedan.applyDrivingStrategy();

console.log('');

console.log('Sedan: Switching to highway driving strategy.');
sedan.setStrategy(new HighwayDrivingStrategy());
sedan.applyDrivingStrategy();

console.log('');

const suv = new StrategyCar(new OffRoadDrivingStrategy());

console.log('SUV: Applying off-road driving strategy.');
suv.applyDrivingStrategy();
