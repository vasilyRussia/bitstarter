var a;
console.time('Timer');
console.error(process.argv);
a = 100;
console.log('There are %d arguments in the command line', process.argv.length);
console.timeEnd('Timer');
console.log('%d', a);
