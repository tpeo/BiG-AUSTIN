// InlineSignUpForm.js
import React from 'react';

const InlineSignUpForm = () => {
  const inlineCodeHTML = `
  <head>
  <!-- Begin Constant Contact Active Forms -->
  <script> var _ctct_m = "8766f4c8847a61c81bf06cd82f3fd1ae"; </script>
  <script id="signupScript" src="//static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js" async defer></script>
  <!-- End Constant Contact Active Forms -->
  </head>
    <footer>
      <b>hello</b>
      <div class="ctct-inline-form" data-form-id="d5b9e5f7-9420-4053-a13f-0a884308b4a3" style="width: 300px; height: 200px; z-index: 200;"></div>
    </footer>
  `;

  return (
    <div dangerouslySetInnerHTML={{ __html: inlineCodeHTML }}/>
  );
};

export default InlineSignUpForm;