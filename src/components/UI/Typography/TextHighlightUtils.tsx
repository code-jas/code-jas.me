import React from 'react';
import Highlight from './Highlight';

function replaceHighlightPlaceholders(text: string) {
   const colors = ['#f24e1e', '#ff7262', '#0acf83', '#a259ff'];
   // console.log('text :d>> ', text);
   const parts = text.split(/(\*\*highlight\*\*.*?\*\*highlight\*\*)/g);
   // console.log('parts :>> ', parts);
   return parts.map((part, index) => {
      if (part.startsWith('**highlight**') && part.endsWith('**highlight**')) {
         const content = part.slice(13, -13); // Extract the content between the **highlight** markers
         // console.log('content :>> ', content);
         const backgroundColor = colors[index % colors.length]; // Cycle through colors by index
         return (
            <Highlight key={index} style={{ backgroundColor }}>
               {content}
            </Highlight>
         );
      }
      return part;
   });
}

export { replaceHighlightPlaceholders };
