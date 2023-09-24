import React, { useState, useEffect, useRef } from 'react';

const AltSlashPopup = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const popupRef = useRef(null);

  const handleKeyDown = (e) => {
    // Check if the key combination is "Alt + /" (KeyCode for Slash is 191)
    if (e.altKey && e.keyCode === 191) {
      setPopupVisible(true);
    }else if (e.keyCode === 27) { // 27 is the KeyCode for the "Escape" key
      setPopupVisible(false);
    }
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  const handleDocumentClick = (e) => {
    // Check if the click target is not within the popup
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      setPopupVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleDocumentClick);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  }, []);

  return (
    <div className={`alt-slash-popup ${isPopupVisible ? 'visible' : ''}`}>
      <div className="popup-content" ref={popupRef}>
        {/* <button className="close-button" onClick={handleClosePopup}>
          Close
        </button> */}
        <iframe
	src="https://dongsiqie-gpt35.hf.space"
  style={{ borderRadius: '10px' }}
  width="850"
	height="450"
></iframe>  
      </div>
    </div>
  );
};

export default AltSlashPopup;
