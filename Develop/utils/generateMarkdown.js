// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === null || license === ""){
    return ``;
  }
  else{
    let licenseResult = `![GitHub License](https://shields.io/badge/license-${license}-brightgreen)`;
    return `${licenseResult}`;
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT'){
    return `https://choosealicense.com/licenses/mit/`;
  }
  else if (license === 'Apache2.0'){
    return `https://choosealicense.com/licenses/apache-2.0/`;
  }
  else if (license === 'GPLv3'){
    return `https://choosealicense.com/licenses/gpl-3.0/`;
  }
  else if (license === 'Mozilla Public License2.0'){
    return `https://choosealicense.com/licenses/mpl-2.0/`;
  }
  else if (license === 'The Unlisence'){
    return `https://choosealicense.com/licenses/unlicense/`;
  }
  else{
    return ``;
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === null || license === ""){
    return ``;
  }
  else {
    return `* This application is licensed under : ${renderLicenseBadge(license)}
   * Click the link for the detailed license information: ${renderLicenseLink(license)}`;
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description :
  ${data.description}

  ## Table of contents :
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [Test](#test)
  * [Questions](#questions)

  ## Installation
  Install necessary Dependencies using the following command :
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}

  ## Contributors
  ${data.contributor}

  ## Test
  ${data.test}

  ## Questions
  * GitHub Username : ${data.username}
  * Email: ${data.email}
  * GitHub profile : https://github.com/${data.username}  
  
  `;
}

module.exports = generateMarkdown;

