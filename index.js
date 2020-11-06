
define([], function () {
  return {
    initLead(token) {
      // VERSION 1
      // console.warn('WIDGET initLead with token: ', token);

      // return () => {
      //   console.warn('WIDGET initLead destroyed');
      // };
      // VERSION 2
      return new Promise((resolve) => {
        console.warn('WIDGET initLead with token: ', token);

        setTimeout(() => {
          resolve(() => {
            console.warn('WIDGET initLead destroyed');
          });
        }, 3000);
      });
      // VERSION 3
      // console.warn('WIDGET initLead with token: ', token);
    },
    registerWidgetsBarSlot(el) {
      console.warn('WIDGET registerWidgetsBarSlot');

      return () => {
        console.warn('WIDGET registerWidgetsBarSlot destroyed');
      };
    },
  };
});
