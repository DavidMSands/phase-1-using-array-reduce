const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
const reducer = (previous, current) => previous + current;

const totalBatteries = batteryBatches.reduce(reducer);
