const skillTree = document.getElementById('skillTree');

const skills = [
  {
    id: 1,
    title: 'Skill 1',
    description: 'Description of Skill 1',
    unlocked: true,
  },
  {
    id: 2,
    title: 'Skill 2',
    description: 'Description of Skill 2',
    unlocked: false,
  },
  {
    id: 3,
    title: 'Skill 3',
    description: 'Description of Skill 3',
    unlocked: false,
  },
  {
    id: 4,
    title: 'Skill 4',
    description: 'Description of Skill 4',
    unlocked: false,
  },
];

skills.forEach(skill => {
  const skillNode = document.createElement('div');
  skillNode.classList.add('skillNode');
  if (!skill.unlocked) {
    skillNode.classList.add('locked');
  }

  const title = document.createElement('h3');
  title.textContent = skill.title;

  const description = document.createElement('p');
  description.textContent = skill.description;

  skillNode.appendChild(title);
  skillNode.appendChild(description);

  skillTree.appendChild(skillNode);
});
