function generateMarkdown(data) {
  return `
  # ${data.project_title}

  ${genrateBadges(data.badges)}

  ## Project Detail 
  ${data.description}

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
  }).join(' ')}
  `;
}

module.exports = generateMarkdown;
