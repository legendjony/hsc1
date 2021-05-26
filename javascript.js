//Binary calculator
var num=parseInt(prompt("Enter any number:"));
var base=parseInt(prompt("Enter base:"));
var temp=num;

while(temp!=0){  
    if(base!=16){
        var r=temp%base;
        temp=parseInt(temp/base);
        document.write("<bdo dir=rtl>"+r+"</bdo>");
    } 

    else{
        while(temp!=0){  
            if(base==16){
                var r=temp%16;
                temp=parseInt(temp/16);

                switch(r){
                    case 10:
                        document.write("<bdo dir=rtl>"+"A"+"</bdo>");
                        break;
                    case 11:
                        document.write("<bdo dir=rtl>"+"B"+"</bdo>");
                        break;
                    case 12:
                        document.write("<bdo dir=rtl>"+"C"+"</bdo>");
                        break;
                    case 13:
                        document.write("<bdo dir=rtl>"+"D"+"</bdo>");
                        break;
                    case 14:
                        document.write("<bdo dir=rtl>"+"E"+"</bdo>");
                        break;
                    case 15:
                        document.write("<bdo dir=rtl>"+"F"+"</bdo>");
                        break;
                    default:
                        document.write("<bdo dir=rtl>"+r+"</bdo>");
                
                }
                 
        }
        
    }
      if(r=="case10||case11||case12||case13||case14||case15"){
        document.write("<bdo dir=rtl>"+r+"</bdo>");
      }

  
}
}



