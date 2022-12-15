// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license = 'Apache License 2.0'){
    return `\n[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`;
  } 
  else if(license = `GNU General Public License v3.0`) {
    return `\n[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`;
  } 
  else if(license = `MIT License`) {
    return `\n[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
  } 
  else if(license = `BSD 2-Clause Simplified License`) {
    return `\n[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]`;
  } 
  else if(license = `BSD 3-Clause New or Revised License`) {
    return `\n[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]`;
  } 
  else if(license = `Boost Software License 1.0`) {
    return `\n[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`;
  } 
  else if(license = `Creative Commons Zero v1.0 Universal`) {
    return `\n[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)]`;
  } 
  else if(license = `Eclipse Public License 2.0`) {
    return `\n[![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)]`;
  } 
  else if(license = `GNU Affero General Public License v3.0`) {
    return `\n[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]`;
  } 
  else if(license = `GNU General Public License v2.0`) {
    return `\n[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]`;
  } 
  else if(license = `GNU Lesser General Public License v2.1`) {
    return `\n[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v2.1-blue.svg)]`;
  } 
  else if(license = `Mozilla Public License 2.0`) {
    return `\n[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`;
  } 
  else if(license = `The Unlicense`) {
    return `\n[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license = 'Apache License 2.0'){
    return `\n(https://opensource.org/licenses/Apache-2.0)`;
  } 
  else if(license = `GNU General Public License v3.0`) {
    return `\n(https://www.gnu.org/licenses/gpl-3.0)`;
  } 
  else if(license = `MIT License`) {
    return `\n(https://opensource.org/licenses/MIT)`;
  } 
  else if(license = `BSD 2-Clause Simplified License`) {
    return `\n(https://opensource.org/licenses/BSD-2-Clause)`;
  } 
  else if(license = `BSD 3-Clause New or Revised License`) {
    return `\n(https://opensource.org/licenses/BSD-3-Clause)`;
  } 
  else if(license = `Boost Software License 1.0`) {
    return `\n(https://www.boost.org/LICENSE_1_0.txt)`;
  } 
  else if(license = `Creative Commons Zero v1.0 Universal`) {
    return `\n(http://creativecommons.org/publicdomain/zero/1.0/)`;
  } 
  else if(license = `Eclipse Public License 2.0`) {
    return `\n(https://opensource.org/licenses/EPL-2.0)`;
  } 
  else if(license = `GNU Affero General Public License v3.0`) {
    return `\n(https://www.gnu.org/licenses/gpl-3.0)`;
  } 
  else if(license = `GNU General Public License v2.0`) {
    return `\n(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
  } 
  else if(license = `GNU Lesser General Public License v2.1`) {
    return `\n(https://www.gnu.org/licenses/lgpl-2.1)`;
  } 
  else if(license = `Mozilla Public License 2.0`) {
    return `\n(https://opensource.org/licenses/MPL-2.0)`;
  } 
  else if(license = `The Unlicense`) {
    return `\n(http://unlicense.org/)`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === ``){
    return ``;
  }else {
    return `\n##License\n\n${renderLicenseBadge(license)}  ${renderLicenseLink(license)}`;
  }
}

function generateMarkdown(data) {


  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [GitHub](#github)
- [Email](#email)

## Installation


## Usage


## Contributing


## Tests


## License


## GitHub


## Email


`;
}

module.exports = generateMarkdown;
