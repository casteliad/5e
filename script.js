fetch('skills.json')
  .then(response => response.json())
  .then(data => {
    const skillTree = document.getElementById('skillTree');

    data.skills.forEach(skill => {
      const skillNode = document.createElement('div');
      skillNode.classList.add('skillNode');
      if (skill.unlocked) {
        skillNode.classList.add('unlocked');
      } else {
        skillNode.classList.add('locked');
      }

      const title = document.createElement('h2');
      title.textContent = skill.title;

      const description = document.createElement('p');
      description.textContent = skill.description;

      skillNode.appendChild(title);
      skillNode.appendChild(description);
      skillTree.appendChild(skillNode);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
