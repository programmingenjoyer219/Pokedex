import mongoose from "mongoose";
import express from "express";
import cors from "cors";


const port = 3000;
const app = express();
const { Schema, model } = mongoose;

// Function to convert a string to title case.
function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

// Middleware
app.use(express.urlencoded({ extended: true }));
// Enable Cross-Origin-Resource-Sharing
app.use(cors({
    origin: 'http://localhost:5173'
}));

// Connection
mongoose.connect("mongodb://localhost:27017/pokedex");

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to MongoDB');
});

// Schema setup
const pokemonSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        english: {
            type: String,
            required: true
        },
        japanese: {
            type: String,
            required: true
        },
        chinese: {
            type: String,
            required: true
        },
        french: {
            type: String,
            required: true
        }
    },
    type: {
        type: [String],
        required: true
    },
    base: {
        HP: {
            type: Number,
            required: true
        },
        Attack: {
            type: Number,
            required: true
        },
        Defense: {
            type: Number,
            required: true
        },
        "Sp. Attack": {
            type: Number,
            required: true
        },
        "Sp. Defense": {
            type: Number,
            required: true
        },
        Speed: {
            type: Number,
            required: true
        }
    },
    species: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    evolution: {
        next: [
            [{
                type: String
            }]
        ]
    },
    profile: {
        height: {
            type: String,
            required: true
        },
        weight: {
            type: String,
            required: true
        },
        egg: {
            type: [String],
            required: true
        },
        ability: [
            [{
                type: String
            }]
        ],
        gender: {
            type: String,
            required: true
        }
    },
    image: {
        sprite: {
            type: String,
            required: true
        },
        thumbnail: {
            type: String,
            required: true
        },
        hires: {
            type: String,
            required: true
        }
    }
});

const Pokemon = model('Pokemon', pokemonSchema);

// Route -> http://localhost:3000/pokemon/all
app.get("/pokemon/all", async (req, res) => {
    // let randomId = Math.ceil(Math.random() * 898);
    let allPokemons = await Pokemon.find({});
    res.send(allPokemons);
});

// Route -> http://localhost:3000/pokemonType/:name
app.get("/pokemonType/:name", async (req, res) => {
    let typeName = toTitleCase(req.params.name);
    let requiredPokemons = await Pokemon.find({ type: { $elemMatch: { $eq: typeName } } });
    res.send(requiredPokemons);
});

// Route -> http://localhost:3000/pokemonName/:name
app.get("/pokemonName/:name", async (req, res) => {
    let pokemonName = req.params.name.toLowerCase();
    let requiredPokemons = await Pokemon.find({ "name.english": { $regex: pokemonName, $options: 'i' } });
    res.send(requiredPokemons);
});

// Listening...
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});