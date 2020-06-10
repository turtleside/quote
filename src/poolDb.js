import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

// Ces options sont recommandées par mLab pour une connexion à la base
let options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };

//URL de notre base
let urlmongo = "mongodb+srv://wonk:xcVUyflDb2sDfJn6@cluster0-5uang.gcp.mongodb.net/scada?retryWrites=true&w=majority";


// Nous connectons l'API à notre base de données
mongoose.connect(urlmongo, options);

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erreur lors de la connexion'));
db.once('open', function (){
    console.log("Connexion à la base OK");
});

export default db;

