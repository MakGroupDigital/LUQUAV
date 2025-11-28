// This file is no longer used by the actions.ts file, but is kept for potential future use.
import * as React from 'react';

interface ContactEmailTemplateProps {
  title: string;
  data: Record<string, any>;
}

export const ContactEmailTemplate: React.FC<Readonly<ContactEmailTemplateProps>> = ({
  title,
  data,
}) => (
  <div>
    <h1>{title}</h1>
    <p>Un nouveau message a été reçu :</p>
    <table border={1} cellPadding={5} cellSpacing={0} style={{ borderCollapse: 'collapse', width: '100%' }}>
      <tbody>
        {Object.entries(data).map(([key, value]) => {
           // Do not display file objects in the email
           if (typeof value === 'object' && value instanceof File) {
            return null;
           }
           const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
           return (
            <tr key={key}>
              <td style={{ fontWeight: 'bold', textTransform: 'capitalize', border: '1px solid #ddd', padding: '8px' }}>{formattedKey}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                {Array.isArray(value) ? value.join(', ') : (value?.toString() || 'N/A')}
              </td>
            </tr>
           )
        })}
      </tbody>
    </table>
  </div>
);
