getData('url', data => {
  getMoreData('url2/'+ data.id, (moreData) => {
    getEvenMoreData(
      'url3' + moreData.id, 
      (evenMoreData) => { /* do something*/ }
    );
  });
});















