
define(['amocrm-sdk'], (initAmocrmWidgetSdk) => {
  const WidgetSdk = initAmocrmWidgetSdk({
    version: '1.0.0',
  });

  return {
    initLead(params) {
      console.warn('WIDGET initLead with token: ', params.token);

      return () => {
        console.warn('WIDGET initLead destroyed');
      };
    },
    registerWidgetsBarSlot(el) {
      const sysData = WidgetSdk.methods.getModel('sys');

      console.warn('WIDGET registerWidgetsBarSlot with sys data: ', sysData);

      el.innerHTML = 'Hello world!';

      return () => {
        console.warn('WIDGET registerWidgetsBarSlot destroyed');
      };
    },
  };
});
