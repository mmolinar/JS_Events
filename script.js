function fonctionnalite1(){
  let doc = document.querySelector('footer');
  let number = 0;

  doc.addEventListener("click", function(){ 
      console.log("clique " + number);
      number += 1;
  });
}

function fonctionnalite2(){
  let hamburger = document.getElementById('navbarHeader');
  let button = document.getElementsByClassName('navbar-toggler')[0];
  
  button.addEventListener("click", function(){ 
      hamburger.classList.toggle("collapse");   
  });
}

function fonctionnalite3(){
  let doc = document.getElementsByClassName('card-text')[0];
  let button = document.querySelectorAll('.card .btn-group button')[1];

  button.addEventListener("click", function(){ 
      doc.style.color = "red"
  });
}

function fonctionnalite4(){
  let doc = document.getElementsByClassName('card-text')[1];
  let button = document.querySelectorAll('.card .btn-group button')[3];

  button.addEventListener("click", function(){ 
      doc.style.color = doc.style.color === "green" ? "black" : "green";
  });
}

function fonctionnalite5(){
  let doc = document.querySelector('link');
  let html = document.querySelector('html');
  let button = document.getElementsByClassName('navbar')[0];
  
  button.addEventListener("dblclick", function(event){ 
      doc.href = doc.href === "" ? "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" : "";
      event.stopPropagation();
  });

  html.addEventListener("dblclick", function(){
      doc.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  });
}

fonctionnalite1();
fonctionnalite2();
fonctionnalite3();
fonctionnalite4();
fonctionnalite5();
