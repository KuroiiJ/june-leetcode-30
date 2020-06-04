/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
   
    costs.sort((a,b) => {
        return Math.abs(b[0] - b[1]) - Math.abs(a[0] - a[1])
    })
    
    let sum = 0, n = costs.length/2, a = 0, b=0
    
    for(let i = 0; i<costs.length; i++) {
        let cityA = costs[i][0], cityB = costs[i][1]
        
        if(cityA <= cityB){
            if ( a < n) {
                sum += cityA
                a++
            }
            else {
                sum += cityB
                b++
            }
        } else {
            if ( b < n) {
                sum += cityB
                b++
            }
            else {
                sum += cityA
                a++
            }
        }
    }
    return sum
}