export const checkMemoryUsage = () => {
    const used = process.memoryUsage();
    const heapUsed = used.heapUsed / 1024 / 1024;
    const heapTotal = used.heapTotal / 1024 / 1024;
    console.log(`Heap Used: ${heapUsed.toFixed(2)} MB`);
    console.log(`Heap Total: ${heapTotal.toFixed(2)} MB`);

    if (heapUsed > 100) { // Example threshold of 100 MB
        console.warn('Memory usage is high!');
    }
};