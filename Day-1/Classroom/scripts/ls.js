function add(){
    var data=localStorage.setItem('udata',document.fdata.uname.value)
}

function show(){
    document.getElementById('show').innerHTML=localStorage.getItem('udata')

}