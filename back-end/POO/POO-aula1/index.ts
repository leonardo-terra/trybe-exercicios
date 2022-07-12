class Television {
  brand: string;
  size: number;
  resolution: number;
  connections: number;
  connectedTo: string;

  constructor(
    brand: string,
    size: number,
    resolution: number,
    connections: number,
  ) {
    console.log('Creating TV');
    this.brand = brand;
    this.size = size;
    this.resolution = resolution;
    this.connections = connections;
  }

  turnOn() {
    console.log('Brand: ', this.brand);
    console.log('Size: ', this.size);
    console.log('Resolution: ,', this.resolution);
    console.log('Connections: ', this.connections);
  }
}

const sala = new Television('Samsung', 55, 4000, 3);

sala.turnOn();
