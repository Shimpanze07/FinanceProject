// Дэлгэцтэй ажиллах контроллэр
var uiController = (function(){
  // Private data
  var x = 100;
  // Data encapsulation
  // Private function
  function add(y){
    return x+y
  }
  return {
    publicAdd: function(a){
      a = add(a);
      console.log('Боловсруулсан утга : ' +a);
    }
  };
})();



// Санхүүтэй ажиллах контроллэр
var financeController = (function(){

})();



// Апп холбогчконтроллэр
var appController = (function(uiController, financeController) {
  uiController.publicAdd(150);

  var cntrlAddItem = function(){
    //TODO: 1. Оруулах өгөгдлийг дэлгэцээс олж авна.
    console.log('clicked')

    


    //TODO: 2. Олж авсан өгөгдлүүдээ санхүүгийн контрэллэрт дамжуулж тэнд хадгална.
    //TODO: 3. Олж авсан өгөгдлөө вэб дээр тохирох хэсэгт нь гаргана.
    //TODO: 4. Төсвийг тооцоно
    //TODO: 5. Эцсийн үлдэгдэл тооцоог дэлгэцэнд гаргана
  }

  document.querySelector('.add__btn').addEventListener('click', function(){
    cntrlAddItem();
  });
  document.addEventListener('keypress', function(event){
    if(event.keyCode === 13 || event.which === 13){
      cntrlAddItem();
    }
    
  })

})(uiController, financeController);


