// src/app/_not-found/page.js or page.tsx
export async function generateMetadata() {
   return {
      title: 'Page Not Found',
      description: 'This is a custom 404 page.',
   };
}

export const viewport = 'width=device-width, initial-scale=1'; // Add this export

export default function NotFound() {
   return (
      <div>
         <h1>404 - Page Not Found</h1>
      </div>
   );
}
