function save() {
  
  const tdeeDisplay = document.getElementById('b')
  const imcDisplay = document.getElementById('a')
  
  var peso = document.getElementById('peso').value;
  var altura = document.getElementById('altura').value;
  var idade = document.getElementById('idade').value;
  var sexo = document.getElementById('sexo').value;
  
  console.log(peso)
  console.log(altura)
  console.log(idade)
  console.log(sexo)
  
  var altura2= altura/100
  var tdee;
  var imc = peso / (altura2*altura2)
  if(sexo <2) {
  tdee = 66 + (13.7 * peso) + (5*altura) - (6.8 * idade)
  }
  else{
    tdee = 655 + (9.6 * peso) + (1.8 * altura) - (4.7*idade)
  }
  
  console.log(tdee)
  console.log(imc)
  imcDisplay.innerText(imc)
  tdeeDisplay.innerText(tdee)

  const result =  
  document.getElementById("result")


  }