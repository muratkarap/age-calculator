let year_birth=document.getElementById("birthday");
console.log(year_birth.value);
let years_calculate=document.getElementsByClassName("table_years")[0];
console.log(years_calculate.innerText);
year_birth.addEventListener("click",()=>{
    let year=new Date().getFullYear()-new Date(year_birth.value).getFullYear();
years_calculate.addEventListener("change",()=>{
    years_calculate+=year;
})
})