
document.getElementById("blog-btn").addEventListener("click", function () {
  window.location.href="blog.html"
})





const changeColor1 = document.getElementById('color-card-1');
changeColor1.addEventListener('mouseover', function() {
  //  another way to generate random number  const randomColor = Math.floor(Math.random()*16777215).toString(16); 
   changeColor1.style.backgroundColor =    'rgb('+Math.random()*255+
     ','+Math.random()*255+','
     +Math.random()*255+')';
     changeColor1.addEventListener ('mouseout', function() {
      changeColor1.style.backgroundColor = 'white';
});
   
 });




const changeColor2 = document.getElementById('color-card-2');
changeColor2.addEventListener('mouseover', function() {
   const randomColor = Math.floor(Math.random()*16777215).toString(16); 
   changeColor2.style.backgroundColor = "#" + randomColor; 
   changeColor2.addEventListener ('mouseout', function() {
    changeColor2.style.backgroundColor = 'white';
});
   
 });
const changeColor3 = document.getElementById('color-card-3');
changeColor3.addEventListener('mouseover', function() {
   const randomColor = Math.floor(Math.random()*16777215).toString(16); 
   changeColor3.style.backgroundColor = "#" + randomColor; 
   changeColor3.addEventListener ('mouseout', function() {
    changeColor3.style.backgroundColor = 'white';
});
   
 });
const changeColor4 = document.getElementById('color-card-4');
changeColor4.addEventListener('mouseover', function() {
   const randomColor = Math.floor(Math.random()*16777215).toString(16); 
   changeColor4.style.backgroundColor = "#" + randomColor; 
   changeColor4.addEventListener ('mouseout', function() {
   changeColor4.style.backgroundColor = 'white';
  
});
   
 });
const changeColor5 = document.getElementById('color-card-5');
changeColor5.addEventListener('mouseover', function() {
   const randomColor = Math.floor(Math.random()*16777215).toString(16); 
   changeColor5.style.backgroundColor = "#" + randomColor; 
   changeColor5.addEventListener ('mouseout', function() {
   changeColor5.style.backgroundColor = 'white';
});
   
 });
const changeColor6 = document.getElementById('color-card-6');
changeColor6.addEventListener('mouseover', function() {
   const randomColor = Math.floor(Math.random()*16777215).toString(16); 
   changeColor6.style.backgroundColor = "#" + randomColor; 
   changeColor6.addEventListener ('mouseout', function() {
   changeColor6.style.backgroundColor = 'white';
});
   
 });



let serial=0;


//  for 1st  card
document.getElementById("btn-first").addEventListener("click", function () {

  serial+=1;
  const firstCardTitle=document.getElementById("triangle").innerText;
  const firstCardCalculationData1=document.getElementById("triangle-input1").value;
  const firstCardCalculationData2=document.getElementById("triangle-input2").value;
  const firstCardCalculationData3=document.getElementById("triangle-input3").innerText;

  // using rhombus formula area= 0.5*d1*d2

  const firstArea=parseFloat(firstCardCalculationData1)*parseFloat(firstCardCalculationData2)*parseFloat(firstCardCalculationData3);

  console.log(firstCardCalculationData1,firstCardCalculationData2, firstCardCalculationData3,firstArea);
 


  

  if(isNaN(firstCardCalculationData1 || firstCardCalculationData2)){
      alert("please enter a valid amount");
  
      return;
  }
  
if (firstCardCalculationData1,firstCardCalculationData2.trim() === "") {
  alert("please enter a valid amount");
  return;

}

  displayTheData(firstCardTitle,firstArea)

})


// second card
document.getElementById("btn-second").addEventListener("click", function () {

  serial+=1;
  const secondCardTitle=document.getElementById("rectangle").innerText;
  const secondCardCalculationData1=document.getElementById("rectangle-input1").value;
  const secondCardCalculationData2=document.getElementById("rectangle-input2").value;

  // using rhombus formula area= 0.5*d1*d2

  const secondArea=parseFloat(secondCardCalculationData1)*parseFloat(secondCardCalculationData2);
  console.log(secondCardTitle,secondCardCalculationData1,secondCardCalculationData2,secondArea);
 


  

  if(isNaN(secondCardCalculationData1 || secondCardCalculationData2)){
      alert("please enter a valid amount");
      return;
  }
  
if (secondCardCalculationData1,secondCardCalculationData2.trim() === "") {
  alert("please enter a valid amount");
  return;

}

  displayTheData(secondCardTitle,secondArea)

})






  // for third card
  document.getElementById("btn-third").addEventListener("click", function () {
        
//    get the data  from html using id
serial+=1;

    const thirdCardTitle=document.getElementById("third-card-title").innerText;
    
    
    const thirdCardCalculationData=document.getElementById("third-card-calculation-data").innerText;
  

    const thirdCardCalculationData1=document.getElementById("third-card-data-1").innerText;
   
    const thirdCardCalculationData2=document.getElementById("third-card-data-2").innerText;
    //  area calculation of  a 	Parallelogram 
    const area=parseFloat( thirdCardCalculationData1)* parseFloat(thirdCardCalculationData2) 
 
displayTheData(thirdCardTitle,area);

    

  });


     
  //  creating object from browser with event
//  for 4th card
      document.getElementById("btn-fourth").addEventListener("click", function (e) {

        serial+=1;

        const fourthCardTitle=e.target.parentNode.parentNode.children[0].innerText;
        const fourthCardCalculationData1=e.target.parentNode.parentNode.children[2].children[1].innerText;
        const fourthCardCalculationData2=e.target.parentNode.parentNode.children[2].children[3].innerText;

        // using rhombus formula area= 0.5*d1*d2
        const formulaValue=e.target.parentNode.parentNode.children[1].children[0].innerText;
        const fourthArea= parseFloat(formulaValue)*parseFloat(fourthCardCalculationData1)*parseFloat(fourthCardCalculationData2);

        displayTheData(fourthCardTitle,fourthArea)
      
      })
     
//  for 5th card 
      document.getElementById("btn-fifth").addEventListener("click", function (e) {

        serial+=1;
        const fifthCardTitle=e.target.parentNode.parentNode.children[0].innerText;
        const fifthCardCalculationData1=e.target.parentNode.parentNode.children[2].children[0].innerText;
        const fifthCardCalculationData2=e.target.parentNode.parentNode.children[2].children[1].innerText;

        //using pentagon formula   area= 0.5*p*b
        const formulaValue=e.target.parentNode.parentNode.children[1].children[0].innerText;
        const fifthArea= parseFloat(formulaValue)*parseFloat(fifthCardCalculationData1)*parseFloat(fifthCardCalculationData2);

       console.log(fifthCardTitle,fifthCardCalculationData1,fifthCardCalculationData2,formulaValue,fifthArea)
        displayTheData(fifthCardTitle,fifthArea)
      
      });

      //  for sixth card

      document.getElementById("btn-sixth").addEventListener("click", function (e) {

        serial+=1;

        const sixthCardTitle=e.target.parentNode.parentNode.children[0].innerText;
        const sixthCardCalculationData1=e.target.parentNode.parentNode.children[2].children[0].innerText;
        const sixthCardCalculationData2=e.target.parentNode.parentNode.children[2].children[1].innerText;

        // using Ellipse formula area= 3.1416*a*b
        const formulaValue=e.target.parentNode.parentNode.children[1].children[0].innerText;
        const sixthArea= parseFloat(formulaValue)*parseFloat(sixthCardCalculationData1)*parseFloat(sixthCardCalculationData2);

       console.log(sixthCardTitle,sixthCardCalculationData1,sixthCardCalculationData2,formulaValue,sixthArea)
        displayTheData(sixthCardTitle,sixthArea)
      
      });
     












      
      
   


   // show the data 
    function displayTheData(CardTitle,resultCard){
      unit = "cm²"


   
    
    
    const container=document.getElementById("table-container");
    const tr= document.createElement("tr");
    tr.innerHTML = 

    `
    <td> ${serial}</td>
  
      <td>${CardTitle}</td>
      
      <td>${resultCard} ${unit}</td>
      <td><button class="btn btn-call btn-sm border-none bg-sky-500"> Convert M<sup>2</sup></button></td>
 `;
      
    








  container.appendChild(tr);

    
  
    
    };
  
   