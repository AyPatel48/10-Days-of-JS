function rotate(){
    btn1 = document.getElementById("btn1")
    btn2 = document.getElementById("btn2")
    btn3 = document.getElementById("btn3")
    btn4 = document.getElementById("btn4")
    btn5 = document.getElementById("btn5")
    btn6 = document.getElementById("btn6")
    btn7 = document.getElementById("btn7")
    btn8 = document.getElementById("btn8")
    btn9 = document.getElementById("btn9")
    
    content1 = btn1.innerHTML
    content2 = btn2.innerHTML
    content3 = btn3.innerHTML
    content4 = btn4.innerHTML
    content5 = btn5.innerHTML
    content6 = btn6.innerHTML
    content7 = btn7.innerHTML
    content8 = btn8.innerHTML
    content9 = btn9.innerHTML
    
    btn1.innerHTML = content4
    btn2.innerHTML = content1
    btn3.innerHTML = content2
    btn4.innerHTML = content7
    btn6.innerHTML = content3
    btn7.innerHTML = content8
    btn8.innerHTML = content9
    btn9.innerHTML = content6
}