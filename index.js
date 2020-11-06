
define(['amocrm-sdk'], function (a) {
   console.warn('SDK', a);
  
  return {
    initLead(token) {
      // VERSION 1
      console.warn('WIDGET initLead with token: ', token);

      return () => {
        console.warn('WIDGET initLead destroyed');
      };
      // VERSION 2
      // console.warn('WIDGET initLead with token: ', token);
    },
    registerWidgetsBarSlot(el) {
      console.warn('WIDGET registerWidgetsBarSlot', el);

      return () => {
        console.warn('WIDGET registerWidgetsBarSlot destroyed');
      };
    },
  };
});
