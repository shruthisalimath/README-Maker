# README-Maker-NodeJs
    This is a command-line application that dynamically generates a professional README.md file from a user's input using the Inquirer package.
## User Story

AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project


## Acceptance Criteria

GIVEN a command-line application that accepts user input
1. WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
2. WHEN I enter my project title
THEN this is displayed as the title of the README
3. WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
4. WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
5. WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
6. WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
7. WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README

## Installation

1. Install NODE.js to run this application
2. Create a .gitignore file and include node_modules/ and .DS_Store/ so that your node_modules directory isn't tracked or uploaded to GitHub. Be sure to create your .gitignore file before installing any npm dependencies.
3. Make sure that your repo includes a package.json with the required dependencies. You can create one by running npm init when you first set up the project, before installing any dependencies.
4. Run command npm i inquirer@verson8.2.4 from the integrated terminal to install inquirer.js package dependency.
5. The application will be invoked by using the following command: node index.js

## Usage 

1. With the application invoked, you'll be prompted to answer a series of questions from the command line to generate a README.md for your project.
2. Each question will pertain to a specific section of the README file you're creating. The questions for this application are located in the index.js file of this repository.
3. Enter after answering each question to continue to the next prompt. When all the prompts are completed, a README.md file will automatically generate inside the explorer window of your project's repository.
4. Open the GenerateReadMe.md file to view the results. You should now have a high-quality README file to use as a template for all your projects.
5. Your README should be written in standard Markdown format with the title of your project listed at the top of the page. A License Badge should be displayed below the title of your project. Your README file should also contain a table of contents that corresponds to the headers for each section: Description, Installation, Usage, license, Contributors, Tests, Questions.

## Resources 
[Professional README Guide](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)

[Shields IO](https://shields.io/category/license)

[Choose a license](https://choosealicense.com/)
    

## URL Submittion
1. A walkthrough video demonstration.

2. The URL of the GitHub repository.

## ScreenShot of a Sample README.md file generated from the application.
[Professional README Generator]()




    

    
   





