
define(['amocrm-sdk'], (initAmocrmWidgetSdk) => {
  const WidgetSdk = initAmocrmWidgetSdk();

  return {
    initLead(params) {
      console.warn('WIDGET initLead with token: ', params.token);

      return () => {
        console.warn('WIDGET initLead destroyed');
      };
    },
    registerWidgetsBarSlot(el) {
      console.warn('WIDGET registerWidgetsBarSlot');

      const contentEl = el.querySelector(
        `.${WidgetSdk.constants.GLOBAL_CLASS_NAMES.widgetBarItemContent}`
      );
      contentEl.innerHTML = 'Hello world!';

      return () => {
        console.warn('WIDGET registerWidgetsBarSlot destroyed');
      };
    },
  };
});
