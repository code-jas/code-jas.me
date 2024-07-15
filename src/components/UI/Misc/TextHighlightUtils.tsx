import React from 'react';
import { Highlight } from './TextHighlight';

function replaceHighlightPlaceholders(text: string) {
   const parts = text.split(/(<span class='highlight.*?<\/span>)/g);
   return parts.map((part, index) => {
      if (part.startsWith("<span class='highlight")) {
         const match = part.match(/>(.*?)<\/span>/);
         const content = match ? match[1] : '';
         return <Highlight key={index}>{content}</Highlight>;
      }
      return part;
   });
}

export { replaceHighlightPlaceholders };
