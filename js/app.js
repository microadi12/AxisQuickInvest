$(document).ready(
    console.log('aditya singh'),

    $('.stepperFrame2').css('display','none'),
    $('.stepperFrame3').css('display','none'),
)

var count = 0;

function increment(value) {
   
    var num = value;
     console.log(value);
     count++;
     switch(num) {
        case 1:
            return (()=>{
              $('.stepperFrame1').css('display','none')
              $('.li1').addClass('completed')
              $('.stepperFrame2').fadeIn();
              $('.stepperFrame3').css('display','none')
            })()
        case 2:
          return (()=>{
            $('.stepperFrame2').css('display','none')
            $('.li2').addClass('completed')
            $('.stepperFrame3').fadeIn();
            $('.stepperFrame1').css('display','none')
          })()
        case 3:
          return (()=>{
            $('.li3').addClass('completed')
            // $('.stepperFrame3').fadeIn();
            // console.log('aditya')
            // $('.stepperFrame2').fadeOut();
          })()
        default:
          return 
      }
  
  console.log(count);

}

function decrement(value){
  var num = value;
  console.log(value);
  count--;
  switch(num) {
     case 1:
         return (()=>{
          $('.stepperFrame2').css('display','none')
          $('.stepperFrame1').fadeIn();
          $('.stepperFrame3').css('display','none')

         })()
     case 2:
       return (()=>{
        $('.stepperFrame1').css('display','none')
        $('.stepperFrame2').fadeIn();
        $('.stepperFrame3').css('display','none')
       })()
     case 3:
       return (()=>{
       })()
     default:
       return 
   }
}
