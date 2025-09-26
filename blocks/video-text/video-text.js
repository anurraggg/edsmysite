export default function decorate(block) {
    // Split into columns
    const leftCol = document.createElement('div');
    leftCol.classList.add('left-col');
  
    const rightCol = document.createElement('div');
    rightCol.classList.add('right-col');
  
    // Grab the first row's cells
    const cells = Array.from(block.children[0].children);
  
    // Left column → video
    if (cells[0]) {
      const link = cells[0].querySelector('a') || cells[0].querySelector('p');
  
      if (link && link.textContent.includes('youtube.com')) {
        const url = new URL(link.textContent.trim());
        const videoId = url.searchParams.get('v');
        const iframe = document.createElement('iframe');
  
        iframe.width = '560';
        iframe.height = '315';
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
        iframe.title = 'YouTube video player';
        iframe.frameBorder = '0';
        iframe.allow =
          'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;
  
        leftCol.appendChild(iframe);
      }
    }
  
    // Right column → text
    if (cells[1]) {
      const highlight = document.createElement('div');
      highlight.classList.add('highlight-box');
      highlight.append(...cells[1].children);
      rightCol.append(highlight);
    }
  
    block.innerHTML = '';
    block.append(leftCol, rightCol);
  }
  