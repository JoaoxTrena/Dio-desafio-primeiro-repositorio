function getAdmins(map) {
    let admins = [];
    for([key, value] of map){
        if(value == 'Admin'){
            admins.push(key);
        }
    }
    return admins;

}

const usuarios = new Map();

usuarios.set('João', 'Admin');
usuarios.set('Márcia' , 'Admin');
usuarios.set('Pedro', 'User');
usuarios.set('Paulo', 'Admin');

console.log(getAdmins(usuarios));