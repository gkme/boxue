function calcPageHeight(doc) {
    var cHeight = Math.max(doc.body.clientHeight, doc.documentElement.clientHeight)
    var sHeight = Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight)
    var height  = Math.max(cHeight, sHeight)
    return height
}
window.onload = function() {
    var doc = document
    var height = calcPageHeight(doc)
    var myifr = doc.getElementById('myifr')
    if (myifr) {
        myifr.src = 'http://localhost:3000/a.html?height=' + height
        // console.log(doc.documentElement.scrollHeight)     
    }
};