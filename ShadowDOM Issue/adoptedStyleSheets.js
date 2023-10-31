// const hostElement = document.querySelector('smart-ui-menu');
// const sheets = hostElement.shadowRoot.adoptedStyleSheets;
// let sheet = "";

// for (var i = 0; i < sheets.length; i++) {
//     try {
//         var subLength = sheets[i].cssRules.length;
//         for (var j = 0; j < subLength; j++) {
//             sheet = sheet+" "+sheets[i].cssRules[j].cssText;
//         };
//     } catch (error) {}
// };

// console.log(sheet)


// other solution
function addStyleToShadowDOM(shadowRoot) {
    const sheets = shadowRoot.adoptedStyleSheets;
    let sheet = "";
    for (var i = 0; i < sheets.length; i++) {
        try {
            var subLength = sheets[i].cssRules.length;
            for (var j = 0; j < subLength; j++) {
                // sheet = sheet+" "+ (sheets[i].cssRules[j].cssText).replace('host:',shadowRoot.firstChild.tagName) + " "+ sheets[i].cssRules[j].cssText;
                sheet = sheet+" "+ (sheets[i].cssRules[j].cssText).replace(':host',shadowRoot.firstChild.tagName) + " "+ sheets[i].cssRules[j].cssText;
            };
        } catch (error) {}
    };
    const styleTag = document.createElement('style');
    styleTag.textContent = `/* Add your custom CSS rule here */ \n ${sheet}`;
    shadowRoot.appendChild(styleTag);
}

// Function to recursively traverse the DOM and add styles to Shadow DOMs
function traverseAndStyleDOM(node) {
  if (node.nodeType === Node.ELEMENT_NODE) {
    // Check if the element has Shadow DOM
    if (node.shadowRoot) {
      // Add the style to the Shadow DOM
      addStyleToShadowDOM(node.shadowRoot);
    }

    // Recursively traverse child nodes
    node.childNodes.forEach(child => {
      traverseAndStyleDOM(child);
    });
  }
}

// Start traversing the entire DOM from the document body
traverseAndStyleDOM(document.body);
