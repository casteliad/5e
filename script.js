// Get all skill nodes
const skillNodes = document.querySelectorAll('.skillNode');

// Add click event listener to each skill node
skillNodes.forEach(node => {
  node.addEventListener('click', () => {
    // Check if the skill node is locked
    if (node.classList.contains('locked')) {
      alert('This skill is locked!');
    } else {
      alert('You unlocked this skill!');
    }
  });
});
