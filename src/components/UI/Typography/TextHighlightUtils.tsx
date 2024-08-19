import React from 'react';
import Highlight from './Highlight';

function replaceHighlightPlaceholders(text: string) {
   const parts = text.split(/(\*\*highlight\*\*.*?\*\*highlight\*\*)/g);
   return parts.map((part, index) => {
      if (part.startsWith('**highlight**') && part.endsWith('**highlight**')) {
         const content = part.slice(13, -13); // Extract the content between the **highlight** markers
         return <Highlight key={index}>{content}</Highlight>;
      }
      return part;
   });
}

export { replaceHighlightPlaceholders };
