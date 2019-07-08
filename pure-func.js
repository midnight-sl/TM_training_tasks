 function  pure(str){
       let convertedString = str.split('-').reverse().join(',');
       return convertedString;
    }

    console.log(pure('11-15-1944'));
}
