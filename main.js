const LinksSociaLMedia = {
  github: 'Brendin7',
  instagram: 'brendinfn',
  facebook: 'brendocosta',
  twitter: 'bcgod7',
  youtube: 'UCY-5PBVUE7jfZXbeM2ILn9g'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `htpps://${social}.com/${LinksSociaLMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSociaLMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userLogin.textContent = data.login
      userImage.src = data.avatar_url
    })
}

getGitHubProfileInfos()
