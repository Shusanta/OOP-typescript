interface CarBuilder {
    setColor(color: string): void;
    setDoors(doors: number): void;
    setEngine(engine: string): void;
    getCar(): Car;
}

class SportCarBuilder implements CarBuilder {
    private car: Car;

    constructor() {
        this.reset();
    }

    reset(): void {
        this.car = new Car();
    }

    setColor(color: string): void {
        this.car.color = color;
    }

    setDoors(doors: number): void {
        this.car.doors = doors;
    }

    setEngine(engine: string): void {
        this.car.engine = engine;
    }

    getCar(): Car {
        const result = this.car;
        this.reset();
        return result;
    }
}

class Car {
    color?: string;
    doors?: number;
    engine?: string;

    describe(): string {
        return `A ${this.color} car with ${this.doors} doors and a ${this.engine} engine.`;
    }
}

class CarDirector {
    private builder: CarBuilder;

    setBuilder(builder: CarBuilder): void {
        this.builder = builder;
    }

    buildSedan(): void {
        this.builder.setColor('Blue');
        this.builder.setDoors(4);
        this.builder.setEngine('V6');
    }

    buildSportsCar(): void {
        this.builder.setColor('Red');
        this.builder.setDoors(2)
        this.builder.setEngine('V8');
    }
}

function clientCode(director: CarDirector) {
    const builder = new SportCarBuilder();
    director.setBuilder(builder);

    console.log('Building Sedan:');
    director.buildSedan();
    console.log(builder.getCar().describe());

    console.log('Building Sports Car:');
    director.buildSportsCar();
    console.log(builder.getCar().describe());

    // Custom car without director
    console.log('Custom Car:');
    builder.setColor('Green');
    builder.setDoors(3);
    builder.setEngine('V5');
    console.log(builder.getCar().describe());
}

const director = new CarDirector();
clientCode(director);
