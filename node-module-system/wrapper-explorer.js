
console.log("filename from explorer", __filename);

console.log("dirname from explorer", __dirname);

module.exports.greet=function(name){
    console.log(`Hello ${name}`);
};
