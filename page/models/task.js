const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    
    Nom_juego:{
        type: String,
        required: true
    },
    Des_juego:{
        type: String
    },
    Genr_juego:{
        type: String
    },
    Plat_juego:{
        type: String
    },
    Num_juego:{
        type: String
    },
    Anio_juego:{
        type: String
    },
    Leng_juego:{
        type: String
    },
    Log_juego:{
        type: Number
    },
    Valo_juego:{
        type: Number
    }
    
})

module.exports = mongoose.model('Prueba', TaskSchema);