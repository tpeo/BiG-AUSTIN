import React, { useState, useEffect } from 'react';

const InlineForm = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    window._ctct_m = "8766f4c8847a61c81bf06cd82f3fd1ae";

    const div = document.createElement('div');
    div.className = 'ctct-inline-form';
    div.dataset.formId = 'd5b9e5f7-9420-4053-a13f-0a884308b4a3';
    document.body.appendChild(div);

    const observer = new MutationObserver(() => {
      if (document.querySelector('.ctct-inline-form')) {
        setIsLoaded(true);
        observer.disconnect();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(div);
      window._ctct_m = null;
    };
  }, []);

  return (
    <div className="links" style={{ padding: '10px' }}>
      {isLoaded ? (
        <div className="ctct-inline-form" data-form-id="d5b9e5f7-9420-4053-a13f-0a884308b4a3" />
      ) : (
        <div>Loading Constant Contact inline form...</div>
      )}
    </div>
  );
};

export default InlineForm;