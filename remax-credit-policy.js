(function installRemaxCreditPolicy() {
  const suppressRechargeModal = () => undefined;

  Object.defineProperty(globalThis, '__127hubShowInsufficientCreditsModal', {
    configurable: true,
    get: () => suppressRechargeModal,
    set: () => undefined
  });
})();