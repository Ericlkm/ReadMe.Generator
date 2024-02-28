// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  #[![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-yellow.svg)](https://opensource.org/licenses/${data.license})
  
  ## Table of content
  - *[Description](#Description)*
  - *[Installation](#Install)*
  - *[Instruction](#Instruction)*
  - *[contributing](#contribution)*
  - *[Usage](#usage)*
  - *[License](#License)*
  - *[Testing](#test)*
  - *[Contact](#contact)*
  - *[Questions](#Qestions)*



  ## Description
   *What was your motivation for this project?*

  ${data.description}
 
  ## Installation
  *steps to install this project!*

  ${data.install}
 
  ## Instructions
   *Instructions for use of this project!*

  ${data.intructions}
  
  ## Contributing
  ${data.contribution}
  
  ## Usage
   *How will this project be used?*

  ${data.usage}
  
  ## License
   *License for this project!*
 ${data.license}
  
  ## Testing
  ${data.test}
  
  ## Contact
   *Contact informations!**

   Github: (${data.contact}) https://github.com/${data.contact}

   ## Questions
   Also if you have any questions you can send message to https://github.com/${data.contact}

`;
}

module.exports = generateMarkdown;
