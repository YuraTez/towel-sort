
module.exports = function towelSort (arr) {

    let myarr = [];
if(!Array.isArray(arr)){
    return myarr;
}
    for (let i = 0; i < arr.length; i++) {

        if (i % 2 === 0) {
            for (let j = 0; j < arr[i].length; j++) {
                myarr.push(arr[i][j]);
            }
        } else {
            for (let k = arr[i].length-1; k >= 0; k--) {
                myarr.push(arr[i][k]);
            }
        }
    }
return myarr;
};
