function toPreview() {
    let input = document.getElementById("source").value
    let preview = document.getElementById("preview")
    
    preview.innerHTML = marked(input)

    
}