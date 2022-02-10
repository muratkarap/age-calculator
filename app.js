 let birthday=document.getElementById("birthday");

 let years= document.getElementsByClassName("table_years")[0];

 let months = document.getElementsByClassName("table_months")[0];
 
 let days = document.getElementsByClassName("table_days")[0];
 
 let hours = document.getElementsByClassName("table_hours")[0];
 
 let minutes = document.getElementsByClassName("table_minutes")[0];
 
 let seconds = document.getElementsByClassName("table_seconds")[0];
 
 let image=document.getElementsByClassName("image")[0];

 birthday.addEventListener("change",()=>{

    let age_year= new Date().getFullYear() - new Date(birthday.value).getFullYear();
    
    let age_month= new Date().getMonth() - new Date(birthday.value).getMonth();
    
    let age_day= new Date().getDay() - new Date(birthday.value).getDay();
   
    let age_hour= new Date().getHours() - new Date(birthday.value).getHours();

    let age_minutes= new Date().getMinutes() - new Date(birthday.value).getMinutes();

    let age_seconds= new Date().getSeconds() - new Date(birthday.value).getSeconds();

    if (age_day < 0) {age_day+=31, age_month--}
    if (age_month < 0) {age_month+=12, age_year--}

    years.innerText=(age_year+"").padStart(2,"0");
    
    months.innerText=(age_month+"").padStart(2,"0");
    
    days.innerText=(age_day+"").padStart(2,"0");
    
    hours.innerText=(age_hour+"").padStart(2,"0");

    minutes.innerText=(age_minutes+"").padStart(2,"0");

    seconds.innerText=(age_seconds+"").padStart(2,"0");

    image.style.display="none"
;    
    
    






 })