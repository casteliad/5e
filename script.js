const skillTree = document.getElementById('skillTree');

fetch('data.json')
  .then(response => response.json())
  .then(json => {
    const optionalFeatures = json.optionalfeature;

    optionalFeatures.forEach(feature => {
      const featureNode = document.createElement('div');
      featureNode.classList.add('skillNode');
      featureNode.setAttribute('title', JSON.stringify(feature, null, 2));

      const title = document.createElement('h3');
      title.textContent = feature.name;

      const description = document.createElement('p');
      description.textContent = feature.entries[0];

      featureNode.appendChild(title);
      featureNode.appendChild(description);

      skillTree.appendChild(featureNode);
    });
  })
  .catch(error => {
    console.error('Error loading JSON:', error);
  });
