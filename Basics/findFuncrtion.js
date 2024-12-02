let arr = ["movie","hello","why?"];
const nMissing = arr.find(name => {
    return name.includes("movie")
});
console.log(nMissing)
