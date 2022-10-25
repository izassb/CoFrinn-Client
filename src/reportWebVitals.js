const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
<<<<<<< HEAD
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
=======
    import('web-vitals').then(({
      getCLS, getFID, getFCP, getLCP, getTTFB,
    }) => {
>>>>>>> 83864e8a99ce75fe8ccb49cedd808a6f8b605c53
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
