import React from "react";
import ReactDOM from "react-dom";
import {Alert, AlertContainer} from "react-bs-notifier";

const dismissFunc = () => {
  const holder = document.getElementById('notifications-holder');
  holder.removeChild(holder.childNodes[0]);
}

export const createNotification = (headline = '', text = '', type = 'info') => {
  let alertComponent = (
    <AlertContainer>
      <Alert 
        headline={headline} 
        type={type}
        timeout={4000}
        onDismiss={dismissFunc}
      >
        {text}
      </Alert>
    </AlertContainer>
  );

  return ReactDOM.render(alertComponent, document.getElementById('notifications-holder'));
} 