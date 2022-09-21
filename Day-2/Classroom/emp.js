function add(){
    var emp={}
        emp.uname=document.fdata.uname.value
        emp.email=document.fdata.email.value
        emp.password=document.fdata.password.value
        emp.city=document.fdata.city.value
        emp.mn=document.fdata.mn.value
        console.log(emp);

    
    var data=localStorage.setItem('udata',JSON.stringify(emp))
}

function show(){
    document.getElementById('show').innerHTML=localStorage.getItem('udata')

}