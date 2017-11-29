const print = (stars, header) => {
    console.log("*".repeat(stars));
    console.log(header);
    console.log("*".repeat(stars));
};

if (require.main == module) {
    console.log(process.argv);
    print (process.argv[2], process.argv[3])
} else {
    module.exports = print;
}