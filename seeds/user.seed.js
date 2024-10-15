

const mongoose = require('mongoose');


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
    address: 'Avenida de Orovilla 44, Madrid, 28041, Spain',
    picture:'',
    linkedinUrl: 'https://www.linkedin.com/in/nikita-vasiljevs/',
    education: [
      {
        institution: 'UpgradeHub',
        area: 'Full Stack Development',
        startDate: '25/09/2022',
        endDate: '05/05/2023',
        location: 'Madrid',
      },
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
        institution: 'Adams - Training Center',
        area: 'SQL Basics',
        duration: '25/09/2022',
        location: 'Madrid'
      }
    ],
    jobExperience: [
      {
        company: 'Starlims',
        position: 'Technical Support Specialist',
        jobDesc: 'Managing and resolving Level 1 and Level 2 technical incidents, ensuring all tickets are reviewed and resolved within the established SLAs',
        startDate: '01/05/2024',
        endDate: '01/11/2024',
        location: 'Madrid',
      },
      {
        company: 'StubHub International',
        position: 'QA Tester',
        jobDesc: 'Developing test plans for the web and native applications. Reporting and documenting bugs using Jira. Creating automated E2E tests with Selenium Grid (Web Driver IO).',
        startDate: '01/01/2024',
        endDate: '26/04/2024',
        location: 'Madrid',
      },
      {
        company: 'StubHub Internation',
        position: 'Technical Incident Analyst',
        jobDesc: 'Receiving, analyzing, and documenting bugs reported by stakeholders. Coordinating with Product and Development teams to escalate, prioritize, and ensure timely resolution.',
        startDate: '01/01/2024',
        endDate: '26/04/2024',
        location: 'Madrid',
      }
    ]
  }
];

console.log(DB_URL);

const userDocuments = userList.map(user => new User(user));


mongoose
  .connect( DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
  .then(async () => {

    const allUsers = await User.find();
		
	
    if (allUsers.length) {
      await User.collection.drop(); 
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {

		await User.insertMany(userDocuments);
	})
  .catch((err) => console.log(`Error creating data: ${err}`))

  .finally(() => mongoose.disconnect());