const path = require('path');
const fs = require('fs');

let jsonFile = {
    read: function () {
        return JSON.parse(fs.readFileSync(path.join(__dirname, '../database/articlesInfo.json'), 'utf-8'));
    },

    write: function(tareas){
        fs.writeFileSync(this.archivo, JSON.stringify(tareas, null, ' '));
        // JSON.stringify() transforma el array a JSON
        // fs.writeFileSync()para escribir el JSON obtenido a el archivo
    },

    guardarTarea: function(tarea){//Se recibe objeto
        let tareas = this.leer(); //Array
        tareas.push(tarea);
        this.escribirJSON(tareas);
    },

    filtrarPorEstado: function(estado){
        let tareas = this.leer();

        let tareasFiltradas = tareas.filter(tarea =>{
            return tarea.estado === estado
        })

        return tareasFiltradas;      
    }
}

module.exports = jsonFile;