function generateMarkdown(data) {
  return `
  # Project Title 
  ${data.project_title}

  ## Project Detail 
  ${data.description}

  ## Project Detail 
  ${data.description}

  ## Table Of Content
  ${tableOfContent(data.table_of_content)}
  
  ###  Installation Required 
  ${data.installation}

  # Usage 
  ${data.usage}

  ## License information: 
  ${data.license}

  ## Contributors: 
  ${data.contributing}

  ## Tests 
  ${data.tests}

  ## Questions 
  ${data.questions}
  `
}

function tableOfContent (data)
{
  return '* ' + data.split(',').join('\n * ');
}

// function badges(confirmBadge)
// {
// if inquirer.prompt(confirmBadge)
// {
//   (https://img.shields.io/github/contributors/badges/shields)

// })

module.exports = generateMarkdown;
