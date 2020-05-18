var k = 0, c = 0, f = 0;


function celsiuspara(){
  c = parseInt(document.getElementById('celsius').value, 10);
  k = c+273; //Celsius para Kelvin
  f = 1.8*c+32; //Celsius para Fahrenheit
  if (isNaN(k) || isNaN(f)) {
    document.getElementById("kelvin").value = '';
    document.getElementById("fahren").value = '';
  }else{
    document.getElementById("kelvin").value = k;
    document.getElementById("fahren").value = f.toFixed(2);
  }
}

function kelvinpara(){
  k = parseInt(document.getElementById('kelvin').value, 10);
  c = k-273; //Kelvin para Celsius
  f = ((k-273)*1.8)+32; //Kelvin para Fahrenheit
  if (isNaN(c) || isNaN(f)) {
    document.getElementById("celsius").value = '';
    document.getElementById("fahren").value = '';
  }else{
    document.getElementById("celsius").value = c;
    document.getElementById("fahren").value = f.toFixed(2);
  }
}

function fahrenheitpara(){
  f = parseInt(document.getElementById('fahren').value, 10);
  c = (f-32)*(5/9); //Fahrenheit para Celsius
  k = (f-32)*(5/9)+273; //Fahrenheit para Kelvin
  if (isNaN(c) || isNaN(k)) {
    document.getElementById("celsius").value = '';
    document.getElementById("kelvin").value = '';
  }else{
    document.getElementById("celsius").value = c.toFixed(2);
    document.getElementById("kelvin").value = k.toFixed(2);
  }
}
