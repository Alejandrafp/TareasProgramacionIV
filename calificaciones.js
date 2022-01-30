const fs = require('fs')
var calificaciones = JSON.parse(fs.readFileSync('alumnos.json'))
//console.log(calificaciones);


for(let i=0;i<12;i++){
    if(calificaciones[i].nota<=69){
        console.log('Datos del alumno que reprobo la asignatura')
        console.log(`-Alumno con identificacion: ${ calificaciones[i].id + ' \n-Nombre: ' + calificaciones[i].nombre + ' ' + calificaciones[i].apellido + ' \n-Nota: ' + calificaciones[i].nota}`)
        console.log('---------------------------------')
    }
    else{
        //console.log('Listado de alumnos que aprobaron')
        //console.log(`Alumno numero ${i+1}:${ calificaciones[i].nombre + ' ' +calificaciones[i].apellido + '' + calificaciones[i].nota}`)

    }

}