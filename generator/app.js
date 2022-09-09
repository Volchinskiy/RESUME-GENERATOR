const pdf = require('pdf-creator-node');
const fs = require('fs');

const template = fs.readFileSync('layout/resume.html', 'utf8');


const options = { 
  format: 'A4',
  orientation: "portrait",
  border: "0mm",
};

const document = {
  html: template,
  data: {
    test: "test"
  },
  path: "./pdfs/resume.pdf",
};

pdf.create(document, options)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));