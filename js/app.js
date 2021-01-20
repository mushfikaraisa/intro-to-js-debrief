var myNumber 
myNumber = 30;

   if (typeof(myNumber) !== 'number') {
       console.log("This is not a number");
   } else if (myNumber % 3 === 0 && myNumber % 5 === 0){
       console.log('GenBuzz');
   } else if (myNumber % 3 === 0) {
    console.log('Gen');
   } else if (myNumber % 5 === 0) {
    console.log('Buzz');
   } else {
       console.log('myNumber');
   }


   let item = 'Socks';

   switch(item){
       case 'Shoes':
           console.log('The prices is $50');
           break;
       case 'Jeans':
            console.log('The prices is $25');
            break;
       case 'Hat':
           console.log('Hats are $12');
           break;
        case 'Socks':
            console.log('Socks are $2');
            break;
       default:
           console.log('Invalid Item' );
           break;
        }

   console.log(Math.floor(Math.random()*50 + 50));