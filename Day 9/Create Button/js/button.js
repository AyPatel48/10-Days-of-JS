function increment(){
    const btn = document.getElementById("btn")
    let curr = parseInt(btn.innerHTML)
    btn.innerHTML = curr + 1
}