// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  #[![License](https://img.shields.io/${data.license}/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)
  
  - *[Description](#Description)*
  - *[Installation](#Install)*
  - *[Instruction](#Instruction)*
  - *[contributing](#contribution)*
  - *[Usage](#usage)*
  - *[License](#License)*
  - *[Testing](#test)*
  - *[Contact](#contact)*



  ## Description
   **What was your motivation for this project?**
   **what problem does it resolve?**
   **what can be learned from this project?**

  *${data.description}*
 
  ## Installation
  **steps to install this project!**

  *${data.install}*
 
  ## Instructions
   **Instructions for use of this project!**

  *${data.intructions}*
  
  ## Contributing
  *${data.contribution}*
  
  ## Usage
   **How will this project be used?**

  *${data.usage}*
  
  ## License
   **License for this project!**

  *${data.license}*
  
  ## Testing
  *${data.test}*
  
  ## Contact
   *Contact informations!*

   Github: (${data.contact}) https://github.com/${data.contact}
`;
}

module.exports = generateMarkdown;
