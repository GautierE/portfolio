const handleGoBack = (router) => {
  if (
    history.length > 1 &&
    document.referrer.includes(window?.location?.host)
  ) {
    history.back();
  } else if (router.locale === "fr") {
    window.location.href = "/fr";
  } else {
    window.location.href = "/";
  }
};

export default handleGoBack;
