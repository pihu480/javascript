let a = [2,312,123,3,12,23,12,12,0098,546]
var largest = 0
var i = 0
while (i<=a.length){
  if (a[i]>largest){
    largest = a[i]
  }
    i++
}
console.log (largest)