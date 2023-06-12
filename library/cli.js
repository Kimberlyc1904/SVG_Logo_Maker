const inquire = require('inquirer');
const {writeFile} = require('fs/promises')
// import SVG, circle , triangle, square
const questions = [
    {
        type: 'input',
        message: 'Enter up to 3 characters of text',
        name: 'text',
    },
    {
        type: 'input',
        message: 'Enter text color',
        name: 'color',
    },
    {
        type: 'list',
        mesaage: 'Select a shape',
        name: 'shape',
        choices: ['circle','triangle','square'],
    },
    {
        type: 'input',
        message: 'select a shape color',
        name: 'shapeColor',
    }
];
class CLI {
    run(){
        return inquire.prompt(questions)
        .then((answers) =>
        createSVG(answers)
        )  
    }
};

function createSVG (answers) { 

    let shape;
            switch (answers.shapeType) {
              case "circle":
               shape = new Circle();
               break;

            case "square":
               shape = new Square();
               break;

            case "triangle":
               shape = new Triangle();
               break;
        }
    };
module.exports = CLI

        // shape.setColor(answers.shapeColor);

        // const svg = new SVG()
        // call setText and setShape methods and pass text, text color and shape
        // return writeFile(pass name of the file, svg.render())