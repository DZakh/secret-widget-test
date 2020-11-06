
define([], function () {
  return {
    initLead(token) {
//       console.warn('WIDGET initLead with token: ', token);

//       return () => {
//         console.warn('WIDGET initLead destroyed');
//       };
      return new Promise(resolve => {
        console.warn('WIDGET initLead with token: ', token);
        
        resolve(() => {
          console.warn('WIDGET initLead destroyed'); 
        })
      }
    },
    registerWidgetsBarSlot(el) {
      console.warn('WIDGET registerWidgetsBarSlot');

      return () => {
        console.warn('WIDGET registerWidgetsBarSlot destroyed');
      };
    },
  };
});
