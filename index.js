


  // for third card
  document.getElementById("btn-third").addEventListener("click", function () {
        
//    get the data  from html using id
   
    const thirdCardTitle=document.getElementById("third-card-title").innerText;
    
    
    const thirdCardCalculationData=document.getElementById("third-card-calculation-data").innerText;
  

    const thirdCardCalculationData1=document.getElementById("third-card-data-1").innerText;
   
    const thirdCardCalculationData2=document.getElementById("third-card-data-2").innerText;
    //  area calculation of  a 	Parallelogram 
    const area=parseFloat( thirdCardCalculationData1)* parseFloat(thirdCardCalculationData2) 
 
displayTheData(thirdCardTitle,area);

    

  });
  // const FirstCard= document.getElementById("first-field").value;
    // console.log("first-cardTitle");
    // console.log("triangle");
    // const tableContainer=document.getElementById("table-container");
    // const tr=document.createElement("tr");
    // tr.innerHTML = 
    // '<td>1</td>'
    // '<td>Triangle</td>'
    // '<td>${12cm²}</td>'
    // '<td><button>${Convert to m²}</button></td>'
    // ;
    //   tableContainer.appendChild(tr);


     
  //  creating object from browser with event

      document.getElementById("btn-fourth").addEventListener("click", function (e) {
        const fourthCardTitle=e.target.parentNode.parentNode.children[0].innerText;
        const fourthCardCalculationData1=e.target.parentNode.parentNode.children[2].children[1].innerText;
        const fourthCardCalculationData2=e.target.parentNode.parentNode.children[2].children[3].innerText;

        // using rhombus formula area= 0.5*d1*d2
        const formulaValue=e.target.parentNode.parentNode.children[1].children[0].innerText;
        const fourthArea= parseFloat(formulaValue)*parseFloat(fourthCardCalculationData1)*parseFloat(fourthCardCalculationData2);

        displayTheData(fourthCardTitle,fourthArea)
      
      })
     

      document.getElementById("btn-fifth").addEventListener("click", function (e) {
        const fifthCardTitle=e.target.parentNode.parentNode.children[0].innerText;
        const fifthCardCalculationData1=e.target.parentNode.parentNode.children[2].children[0].innerText;
        const fifthCardCalculationData2=e.target.parentNode.parentNode.children[2].children[1].innerText;

        // using rhombus formula area= 0.5*d1*d2
        const formulaValue=e.target.parentNode.parentNode.children[1].children[0].innerText;
        const fifthArea= parseFloat(formulaValue)*parseFloat(fifthCardCalculationData1)*parseFloat(fifthCardCalculationData2);

       console.log(fifthCardTitle,fifthCardCalculationData1,fifthCardCalculationData2,formulaValue,fifthArea)
        displayTheData(fifthCardTitle,fifthArea)
      
      });
      document.getElementById("btn-sixth").addEventListener("click", function (e) {
        const sixthCardTitle=e.target.parentNode.parentNode.children[0].innerText;
        const sixthCardCalculationData1=e.target.parentNode.parentNode.children[2].children[0].innerText;
        const sixthCardCalculationData2=e.target.parentNode.parentNode.children[2].children[1].innerText;

        // using rhombus formula area= 0.5*d1*d2
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
    <td> ${1}</td>
  
      <td>${CardTitle}</td>
      
      <td>${resultCard} ${unit}</td>
 `;
      
    








  container.appendChild(tr);

    
  
    
    };
   