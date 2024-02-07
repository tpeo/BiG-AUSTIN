// InlineSignUpForm.js
import React from 'react';

const InlineSignUpForm = () => {
  const inlineCodeHTML = `

  <div class="ctct-inline-form" data-form-id="d5b9e5f7-9420-4053-a13f-0a884308b4a3"></div>

  `;

  return (
    <div dangerouslySetInnerHTML={{ __html: inlineCodeHTML }}/>
  );
};

export default InlineSignUpForm;