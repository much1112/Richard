//uncomplete, need help

const { google } = require('googleapis');
const fs = require('fs');


const keyFile = 'key.json';
const key = JSON.parse(fs.readFileSync(keyFile));


const jwtClient = new google.auth.JWT(
  key.client_email,
  null,
  key.private_key,
  ['https://www.googleapis.com/auth/classroom.readonly']
);


const authPromise = jwtClient.authorize();
authPromise.then(() => {

  const classroom = google.classroom({ version: 'v1', auth: jwtClient });


  classroom.courses.list({}, (err, res) => {
    if (err) {
      console.error('Error listing courses:', err);
      return;
    }
    const { courses } = res.data;
    console.log('Courses:', courses);
  });
}).catch((err) => {
  console.error('Authentication failed:', err);
});
