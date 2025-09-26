export default function decorate(block) {
    const cells = Array.from(block.querySelectorAll('tr:nth-child(2) td'));
  
    if (!cells.length) return;
  
    const leftCol = document.createElement('div');
    leftCol.classList.add('left-col');
  
    const rightCol = document.createElement('div');
    rightCol.classList.add('right-col');
  
    // LEFT: video
    if (cells[0]) {
      const urlText = cells[0].textContent.trim();
      if (urlText.includes('youtube.com')) {
        const videoId = new URL(urlText).searchParams.get('v');
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
  
    // RIGHT: text
    if (cells[1]) {
      const highlight = document.createElement('div');
      highlight.classList.add('highlight-box');
      highlight.innerHTML = cells[1].innerHTML;
      rightCol.appendChild(highlight);
    }
  
    block.innerHTML = '';
    block.append(leftCol, rightCol);
  }
  