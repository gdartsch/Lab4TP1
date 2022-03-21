async function ingresar(){
    var usuario = document.getElementById('usuario').value;
    var pass = document.getElementById('clave').value;
    var mensaje = 
        'HTTP://168.194.207.98:8081/tp/login.php?user='+
        usuario + 
        '&pass=' + 
        pass;
    
        console.log(mensaje);
        
    var asd = fetch(mensaje);
    asd.then(Response => Response.json())
    .then(data => {
        console.log(data);
    }).catch(error => console.error(error));
}