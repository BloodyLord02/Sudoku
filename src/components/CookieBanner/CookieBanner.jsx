import CookieConsent from 'react-cookie-consent';

/**
 * Компонент для отримання згоди на використання cookies відповідно до GDPR
 *
 * @component
 * @returns {JSX.Element} Cookie consent banner
 *
 * @example
 * <CookieBanner />
 */
function CookieBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Прийняти все"
      declineButtonText="Відхилити"
      enableDeclineButton
      cookieName="Cookie1"
      expires={365}
      containerClasses="cookie-consent-container"
      contentClasses="cookie-content"
      buttonClasses="cookie-button"
      declineButtonClasses="cookie-decline-button"
    >
      <div>
        <strong>Налаштування файлів cookie</strong>
        <p>
          Ми використовуємо файли cookie, щоб покращити ваш досвід. Це включає аналітику, персоналізацію та рекламу відповідно до GDPR.
        </p>
      </div>
    </CookieConsent>
  );
}

export default CookieBanner;
