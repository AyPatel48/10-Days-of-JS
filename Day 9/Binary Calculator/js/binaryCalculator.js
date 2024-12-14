function zero(){
    const btn = document.getElementById("btn0")
    btn.onclick = function(){
        document.getElementById("res").value += '0'
    }
}

function one(){
  const btn = document.getElementById("btn1")
  btn.onclick = function(){
      document.getElementById("res").value += '1'
  }
}
    

function add(){
    const btn = document.getElementById("btnSum")
    btn.onclick = function(){
        document.getElementById("res").value += '+'
    }
}
function subtract(){
    const btn= document.getElementById("btnSub")
    btn.onclick = function(){
        document.getElementById("res").value += '-'
    }
}
function multiply(){
    const btn= document.getElementById("btnMul")
    btn.onclick = function(){
        document.getElementById("res").value += '*'
    }
}
function divide(){
    const btn = document.getElementById("btnDiv")
    btn.onclick = function(){
        document.getElementById("res").value += '/'
    }
}

function clear(){
    const btn = document.getElementById("btnClr")
    btn.onclick = function(){
        document.getElementById("res").value = ''
    }
}

function equals(){
  const btn = document.getElementById("btnEql")
  btn.onclick = function(){
      const res_elm = document.getElementById("res")
      var res = res_elm.value
      var operator = res.includes('+') ? '+' : res.includes('-') ? '-' : res.includes('*') ? '*' : 
          res.includes('/') ? '/' : '';
      var res_arr = res.split(operator)
      var divisor = res_arr[0]
      var divider = res_arr[1]

      switch(operator){
          case '+':
              res_elm.value = dec2bin(parseInt(divisor, 2) + parseInt(divider, 2))
              break;
          case '-':
              res_elm.value = dec2bin(parseInt(divisor, 2) - parseInt(divider, 2))
              break;
          case '*':
              res_elm.value = dec2bin(parseInt(divisor, 2) * parseInt(divider, 2))
              break;
          case '/':
              res_elm.value = dec2bin(parseInt(divisor, 2) / parseInt(divider, 2))
              break;
          default:
              res_elm.value = ''
      }
  }
}
  
function dec2bin(dec){
  if(dec >= 0){
      return dec.toString(2)
  }
  return (dec >>> 0).toString(2);
}

zero();
one();
add()
subtract()
multiply()
divide()
clear()
equals()

