var ids=[];
var pass=[];
var valid=false;
var currentun;
load();

function login(){
	var id=document.getElementById('t1').value;
	var password=document.getElementById('t2').value;
	for(let i in ids){
		if(id===ids[i] && password===pass[i]){
			currentun=id;
			save()
			valid = true;
            break;
		}
	}
	 if (valid) {
        
         window.location="wellcome.html";
    }else{
    	alert("Something went wrong !! Register First")
    }    
}

function save() {
	//This will convert my Object array into a String
    localStorage.username = JSON.stringify(ids) 
    localStorage.password = JSON.stringify(pass)
    localStorage.currentun = JSON.stringify(currentun)
}

function load() {
	//This will convert string into object
    ids = JSON.parse(localStorage.username) 
    pass = JSON.parse(localStorage.password)   
}


function register(){

    var id=document.getElementById('text1').value;
	var password=document.getElementById('text2').value;
    if((id !== '') && (password !== '')) {
    ids.push(id);
    pass.push(password);
    save();
    window.location="login.html"
}else{
    alert("please chose correct Username and Password")
}
}