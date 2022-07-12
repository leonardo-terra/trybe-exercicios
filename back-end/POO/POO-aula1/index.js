var Television = /** @class */ (function () {
    function Television(brand, size, resolution, connections) {
        console.log('Creating TV');
        this.brand = brand;
        this.size = size;
        this.resolution = resolution;
        this.connections = connections;
    }
    Television.prototype.turnOn = function () {
        console.log('Brand: ', this.brand);
        console.log('Size: ', this.size);
        console.log('Resolution: ,', this.resolution);
        console.log('Connections: ', this.connections);
    };
    return Television;
}());
var sala = new Television('Samsung', 55, 4000, 3);
sala.turnOn();
