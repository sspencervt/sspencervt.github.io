var image1 = new Image()
image1.src = "autumnwoods.jpg"
var image2 = new Image()
image2.src = "oceanscape.jpg"
var step = 1

let test = document.getElementById("slide")
console.log(test + " test")
console.log(document.getElementById("slide") + "doc")


function slideit() {

   
//    test.setAttribute("src", "image" + step + ".src")
    // .setAttribute = eval("image" + step + ".src")
    if (step < 2) {
        step++
    } else {
        step = 1
    }
    setTimeout("slideit()", 500)
}
slideit()

