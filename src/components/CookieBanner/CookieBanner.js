import React from "react";
import CookieConsent from "react-cookie-consent";

/**
 * Компонент CookieBanner відповідає за відображення банеру з запитом на 
 * використання cookie відповідно до GDPR.
 *
 * Параметри користувача зберігаються у cookie з іменем `Cookie2`.
 *
 * Доступні дії:
 * - Прийняти всі cookie
 * - Відхилити використання cookie
 *
 * @component
 * @example
 * <CookieBanner />
 */
function CookieBanner() {
  /**
   * Викликається, коли користувач натискає "Прийняти все".
   */
  const handleAccept = () => {
    console.log("Cookies accepted");
  };

  /**
   * Викликається, коли користувач натискає "Відхилити".
   */
  const handleDecline = () => {
    console.log("Cookies declined");
  };

  return React.createElement(
    CookieConsent,
    {
      location: "bottom",                 
      buttonText: "Прийняти все",        
      declineButtonText: "Відхилити",    
      enableDeclineButton: true,          
      cookieName: "Cookie2",   
      expires: 365,                        
      onAccept: handleAccept,              
      onDecline: handleDecline,            
      containerClasses: "cookie-consent-container", 
      contentClasses: "cookie-content",               
      buttonClasses: "cookie-button",                
      declineButtonClasses: "cookie-decline-button" 
    },
    React.createElement(
      React.Fragment,
      null,
      React.createElement(
        "strong",
        null,
        "Налаштування файлів cookie"
      ),
      React.createElement(
        "p",
        null,
        "Ми використовуємо файли cookie, щоб покращити ваш досвід. Це включає аналітику, персоналізацію та рекламу відповідно до GDPR."
      )
    )
  );
}

export default CookieBanner;