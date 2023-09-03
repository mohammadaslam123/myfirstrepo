function calculetAge(){
     const dob =new Date(document.getElementById('dob').value)
     
     const today=new Date();
     if(isNaN(dob.getTime())){
          document.getElementById('output').innerHTML="please enter your valid date"
          return;
     }
     let age = today.getFullYear()-dob.getFullYear();
     const monthDifrence=today.getMonth()-dob.getMonth();
     if(monthDifrence<0 || (monthDifrence===0 && today.getDate()<dob.getDate())){
          age--;
     }
     document.getElementById('output').innerHTML="you are "+age+"years old"
}
console.log(age);