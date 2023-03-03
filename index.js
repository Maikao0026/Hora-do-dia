function carregar(){
  const msg = window.document.getElementById('msg');
  const imagem = window.document.getElementById('imagem');
  const data = new Date();
  const horas = data.getHours()
  const minutos = data.getMinutes()
  msg.innerText = `agora são ${horas}h${minutos}`
  
  if (horas>4 && horas<12) {
    //BOM DIA!
    document.getElementsByTagName('h1')[0].innerText ='BOM DIA!';
    imagem.src = "./resources/pexels-aliaksei-semirski-14458378.jpg";
    window.document.body.style.background = "#DEC6AE";
  }else if (horas<=4 || horas>=18){
    //BOA NOITE!
    document.getElementsByTagName('h1')[0].innerText ='BOA NOITE!'
    imagem.src = "./resources/pexels-eberhard-grossgasteiger-2098427.jpg";
    window.document.body.style.background = "#222E3C";
  }else{
    // BOA TARDE!
    imagem.src = "./resources/pexels-thuong-d-12810433.jpg";
    window.document.body.style.background = "#EDA954";
    document.getElementsByTagName("h1")[0].innerText = "BOA TARDE!";
  }
};
  

 