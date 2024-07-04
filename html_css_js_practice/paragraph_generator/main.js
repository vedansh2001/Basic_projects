function getRandomLoremIpsum(length) {
    const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    const words = loremIpsum.split(" ");
    let result = "";
    let currentLength = 0;
  
    while (currentLength < length) {
      const wordIndex = Math.floor(Math.random() * words.length);
      const word = words[wordIndex];
  
      if (currentLength + 1 <= length) {
        result += word + " ";
        currentLength += 1;
      } else {
        break;
      }
    }
  
    return result.trim();
}

  
  document.getElementById('buttonDiv').addEventListener('click', function() {

    const title = document.getElementById('generatedpara');
    const p = document.getElementById('paragraph');
    const n = parseInt(p.value);
    console.log(n);

    if(isNaN(n) || n <= 0){
        alert("Please enter a valid no.");
        return;
    }
    if(n>95){
        const h = 1.5 * n;
        console.log(h);
        title.style.height = `${h}px` ;
    }

    const text = getRandomLoremIpsum(n);

    
    title.textContent = text;
  });

  