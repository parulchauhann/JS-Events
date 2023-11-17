// challenge 1
function toPrintName() {
    let elementSpan = document.getElementById('user');
    let printName = 'Parul';
    elementSpan.innerHTML = printName;
  }
  window.onload = toPrintName;
  
  // challenge 2
  let buttonClick = document.getElementById('btn-click');
  let body = document.body;
  buttonClick.onclick = () => {
    body.style.backgroundColor = 'skyblue';
  };
  
  // challenge 3
  function makeSentence() {
    let button2 = document.getElementById('build-button');
  
    var noun = document.getElementById('noun').value;
    var verb = document.getElementById('verb').value;
    var adverb = document.getElementById('adverb').value;
  
    var sentence = noun + " " + verb + " " + adverb;
  
    document.getElementById('statement').innerText = sentence;
  }
  document.getElementById('build-button').addEventListener('click', makeSentence);
  
  
  // challenge 4.1 
  let grandparent = document.getElementById("grandparent")
  let parent = document.getElementById("parent")
  let child = document.getElementById("child")
  
  grandparent.addEventListener('click', function(){
    console.log("Grandparent clicked")
  })
  
  parent.addEventListener('click', function(){
    console.log("Parent clicked")
  })
  
  child.addEventListener('click', function(){
    console.log("Child clicked")
  })
  
  // challenge 4.2
  grandparent.addEventListener('click', function(){
    console.log("Grandparent clicked")
  }, {capture: true}) 
  parent.addEventListener('click', function(){
    console.log("Parent clicked")
  }, {capture: true})
  
  child.addEventListener('click', function(){
    console.log("Child clicked")
  }, {capture: true})
  
  
  // challenge 5
  document.getElementById("category").addEventListener('click', categoryDelegation);
  function categoryDelegation (event){
    if (event.target.id === "blazers"){
      console.log("blazers")
    }
  }
  