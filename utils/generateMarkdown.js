function generateMarkdown(data) {
  return `
  # ${data.project_title}

  ${genrateBadges(data.badges)}

  ## Project Detail 
  ${data.description}

 
  ## Table Of Content
  ${convertIntoList(data.table_of_content)}
  
  ##  Installation Required 
  ${data.installation}

  ## Usage 
  ${data.usage}

  ## License information: 
  ${data.license}

  ## Contributors: 
  ${convertIntoList(data.contributing)}

  ## Tests 
      ${data.tests}

  ## Questions 
  ${data.questions}

  ## Profile url: <${data.github_url}/${data.userName}>

  ![](${data.github_url}/${data.userName}.png?size=200)
  
  ## Repositary url <${data.github_url}/${data.userName}/${data.repositary_name}>

  ![Readme File Generator Demo](ReadmeGenerator.gif)

  `;
}

function convertIntoList(data) {
  return "* " + data.split(",").join("\n * ");
}

function genrateBadges(badges){

 return `
  ${badges.map(badge => {
    if(badge === 'Website up')
     return "[![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](http://shields.io/)";
    else if(badge === 'Website down' )
     return "[![Website cv.lbesson.qc.to](https://img.shields.io/website-up-down-green-red/http/cv.lbesson.qc.to.svg)](http://cv.lbesson.qc.to/)";
     else if (badge ==='GitHub contributors')
     return "[![GitHub contributors](https://img.shields.io/github/contributors/Naereen/StrapDown.js.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/contributors/)";
     else if (badge==='GitHub stars')
     return "[![GitHub followers](https://img.shields.io/github/followers/Naereen.svg?style=social&label=Follow&maxAge=2592000)](https://github.com/Naereen?tab=followers)";
  }).join(' ')}
  `;
}

module.exports = generateMarkdown;
