export default function decorate(block) {
    // Create wrapper columns
    const leftCol = document.createElement('div');
    leftCol.classList.add('left-col');
  
    const rightCol = document.createElement('div');
    rightCol.classList.add('right-col');
  
    // Assume authors use a 2-column table in Docs
    const rows = Array.from(block.children[0].children); // first row's cells
  
    if (rows[0]) {
      leftCol.append(...rows[0].children);
    }
  
    if (rows[1]) {
      const highlight = document.createElement('div');
      highlight.classList.add('highlight-box');
      highlight.append(...rows[1].children);
      rightCol.append(highlight);
    }
  
    block.innerHTML = '';
    block.append(leftCol, rightCol);
  }
  