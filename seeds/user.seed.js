// Archivo character.seed.js

const mongoose = require('mongoose');

// Imporatmos el modelo Pet en este nuevo archivo.
const User = require('../models/User');
const { DB_URL } = require('../utils/db.js')

const userList = [
  {
    name: 'Nikita',
    surname:'Vasiljevs Voroziscev',
    dni:'',
    age: 33,
    nationality: 'Spain',
    phoneNumber:'622529583',
    email: 'nikitavasiljevs@gmail.com',
    picture:'',
    education: [
      {
        institution: 'Universidad de Salamanca',
        area: 'History of Art',
        startDate: '01/01/2009',
        endDate: '01/01/2015',
        location: 'Salamanca',
      },
      {
        institution: 'Mikhail Lomonosov Secondary School',
        area: '',
        startDate: '01/01/1996',
        endDate: '30/05/2009',
        location: 'Riga',
      }
    ],
    courses: [
      {
        institution: 'UpgradeHub',
        area: 'Full Stack Development',
        startDate: '25/09/2022',
        endDate: '05/05/2023',
        location: 'Madrid',
      }
    ],
    jobExperience: [
      {
        company: 'Starlims',
        position: 'Technical Support Specialist',
        startDate: '01/05/2024',
        endDate: '01/11/2024',
        location: 'Madrid',
      },
      {
        company: 'StubHub International',
        position: 'QA Tester',
        startDate: '01/01/2024',
        endDate: '26/04/2024',
        location: 'Madrid',
      },
      {
        company: 'StubHub Internation',
        position: 'Technical Support Specialist',
        startDate: '01/01/2024',
        endDate: '26/04/2024',
        location: 'Madrid',
      }
    ]
  }
];

console.log(DB_URL);

const userDocuments = userList.map(user => new User(user));

// En este caso, nos conectaremos de nuevo a nuestra base de datos
// pero nos desconectaremos tras insertar los documentos
mongoose
  .connect( DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
  .then(async () => {
		// Utilizando Character.find() obtendremos un array con todos los personajes de la db
    const allUsers = await User.find();
		
		// Si existen personajes previamente, dropearemos la colección
    if (allUsers.length) {
      await User.collection.drop(); //La función drop borra la colección
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
		// Una vez vaciada la db de los personajes, usaremos el array characterDocuments
		// para llenar nuestra base de datos con todas los personajes.
		await User.insertMany(userDocuments);
	})
  .catch((err) => console.log(`Error creating data: ${err}`))
	// Por último nos desconectaremos de la DB.
  .finally(() => mongoose.disconnect());