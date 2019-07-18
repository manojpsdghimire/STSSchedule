function clock(){

var today = new Date();

var hour = today.getHours();
var day = today.getDay()


var Onclock1, Onclock2, Onclock3, help;
var day;

switch (new Date().getDay()) {
    case 0:
       day = "Sunday";
		if ( hour >= 11  && hour < 13) {
        Onclock1 = "Uki";
		Onclock2 = " ";
		Onclock3 = " ";
    } 
		else if ( hour >= 13  && hour < 15) {
        Onclock1 = "Uki";
		Onclock2 = "Pranish";
		Onclock3 = "";
    } 
	else if ( hour >= 15  && hour < 17) {
        Onclock1 = "Sopa";
		Onclock2 = "Pranish";
		Onclock3 = "";
    } 
	else if ( hour >= 17  && hour < 20) {
        Onclock1 = "Sopa";
		Onclock2 = "";
		Onclock3 = "";
    } 
	else {
        Onclock1 = "We are currently closed!";
		Onclock2 = "  ";
	    Onclock3 = "  ";
    }
        break;
	
    case 1:
         day = "Monday";
		if ( hour >= 8  && hour < 9) {
        Onclock1 = "Nick Watson";
		Onclock2 = " ";
		Onclock3 = " ";
    } 
		else if ( hour >= 9  && hour < 11) {
        Onclock1 = "Manoj";
		Onclock2 = "Paul";
		Onclock3 = " ";
    } 
	else if ( hour >= 11  && hour < 13) {
        Onclock1 = "Manoj";
		Onclock2 = "Pranish";
		Onclock3 = "Saurav";
    } 
	else if ( hour >= 13  && hour < 14) {
        Onclock1 = "Pranish";
		Onclock2 = "Ian";
		Onclock3 = "Paul ";
    } 
	else if ( hour >= 14  && hour < 15) {
        Onclock1 = "Paul";
		Onclock2 = "Ian "; 
		Onclock3 = "  "; 
    } 
	else if ( hour >= 15  && hour < 16) {
        Onclock1 = "Nick Watson";
		Onclock2 = " "; 
		Onclock3 = " ";
	
    } 
	else if ( hour >= 16  && hour < 18) {
        Onclock1 = "Sopa";
		Onclock2 = "Uki";
	    Onclock3 = "  ";
    } 
	else if ( hour >= 18  && hour < 20) {
        Onclock1 = "Sopa";
		Onclock2 = "Saurav";
	    Onclock3 = "  ";
    } 
	else {
        Onclock1 = "We are currently closed!";
		Onclock2 = "  ";
	    Onclock3 = "  ";
    }
        break;
		
    case 2:
        day = "Tuesday";
		if ( hour >= 8  && hour < 9) {
        Onclock1 = "Nick Watson";
		Onclock2 = " ";
		Onclock3 = " ";
    } 
		else if ( hour >= 9  && hour < 11) {
        Onclock1 = "Manoj";
		Onclock2 = "Ian";
		Onclock3 = " ";
    } 
	else if ( hour >= 11  && hour < 13) {
        Onclock1 = "Manoj";
		Onclock2 = "Ian";
		Onclock3 = "Saurav";
    } 
	else if ( hour >= 13  && hour < 16) {
        Onclock1 = " Nick Watson";
		Onclock2 = " ";
		Onclock3 = " ";
    } 
	else if ( hour >= 16  && hour < 18) {
       
		Onclock1 = "saurav";
		Onclock2 = "Pranish "; 
		Onclock3 = "Sopa"; 
    } 
	else if ( hour >= 18  && hour < 19) {
        Onclock1 = "Saurav ";
		Onclock2 = "Sopa"; 
		Onclock3 = "";
	
    } 
	else if ( hour >= 19  && hour < 20) {
        Onclock1 = "Sopa";
		Onclock2 = " ";
	    Onclock3 = "  ";
    } 
	else {
        Onclock1 = "We are currently closed!";
		Onclock2 = "  ";
	    Onclock3 = "  ";
    }
        break;
		
		
    case 3:
          day = "Wednesday";
		if ( hour >= 8  && hour < 9) {
        Onclock1 = "Nick Watson";
		Onclock2 = " ";
		Onclock3 = " ";
    } 
		else if ( hour >= 9  && hour < 11) {
        Onclock1 = "Manoj";
		Onclock2 = "Paul";
		Onclock3 = " ";
    } 
	else if ( hour >= 11  && hour < 13) {
        Onclock1 = "Manoj";
		Onclock2 = "Pranish";
		Onclock3 = "";
    } 
	else if ( hour >= 13  && hour < 15) {
        Onclock1 = "Pranish";
		Onclock2 = "Ian";
		Onclock3 = "Paul ";
    } 
	else if ( hour >= 15  && hour < 16) {
        Onclock1 = "Pranish";
		Onclock2 = " "; 
		Onclock3 = "  "; 
    } 
	else if ( hour >= 16  && hour < 17) {
        Onclock1 = "Uki";
		Onclock2 = " "; 
		Onclock3 = " ";
	
    } 
	else if ( hour >= 17  && hour < 20) {
        Onclock1 = "Uki";
		Onclock2 = "Sopa";
	    Onclock3 = "  ";
    } 
	else {
        Onclock1 = "We are currently closed!";
		Onclock2 = "  ";
	    Onclock3 = "  ";
    }

        break;
		
		
    case 4:
	   day = "Thursday";
		if ( hour >= 8  && hour < 9) {
        Onclock1 = "Nick Watson";
		Onclock2 = " ";
		Onclock3 = " ";
    } 
		else if ( hour >= 9  && hour < 11) {
        Onclock1 = "Manoj";
		Onclock2 = "Ian";
		Onclock3 = " ";
    } 
	else if ( hour >= 11  && hour < 13) {
        Onclock1 = "Manoj";
		Onclock2 = "Ian";
		Onclock3 = "Saurav";
    } 
	else if ( hour >= 13  && hour < 15) {
        Onclock1 = " Nick Watson";
		Onclock2 = " ";
		Onclock3 = " ";
    } 
	else if ( hour >= 15  && hour < 16) {
       
		Onclock1 = "saurav";
		Onclock2 = "Pranish "; 
		Onclock3 = "  "; 
    } 
	else if ( hour >= 16  && hour < 17) {
        Onclock1 = "Saurav ";
		Onclock2 = "Pranish "; 
		Onclock3 = "Sopa ";
	
    } 
	else if ( hour >= 17  && hour < 20) {
        Onclock1 = "Sopa";
		Onclock2 = " ";
	    Onclock3 = "  ";
    } 
	else {
        Onclock1 = "We are currently closed!";
		Onclock2 = "  ";
	    Onclock3 = "  ";
    }
        break;

   case 5:
        day = "Friday";
       	if ( hour >= 8  && hour < 9) {
        Onclock1 = "Nick Watson";
		Onclock2 = " ";
		Onclock3 = " ";
    } 
		else if ( hour >= 9  && hour < 11) {
        Onclock1 = "Manoj";
		Onclock2 = "Uki";
		Onclock3 = "Paul ";
    } 
	else if ( hour >= 11  && hour < 13) {
        Onclock1 = "Manoj";
		Onclock2 = "Pranish";
		Onclock3 = "Paul";
    } 
	else if ( hour >= 13  && hour < 15) {
        Onclock1 = "Ian";
		Onclock2 = "Pranish";
		Onclock3 = "Paul";
    } 
	else if ( hour >= 15  && hour < 16) {
       
		Onclock1 = "Ian";
		Onclock2 = "Paul"; 
		Onclock3 = "  "; 
    } 
	else if ( hour >= 16  && hour < 17) {
        Onclock1 = "Ian";
		Onclock2 = "Uki"; 
		Onclock3 = "Paul";
	
    } 
	else if ( hour >= 17  && hour < 20) {
        Onclock1 = "Uki";
		Onclock2 = "Saurav";
	    Onclock3 = "  ";
    } 
	else {
        Onclock1 = "We are currently closed!";
		Onclock2 = "  ";
	    Onclock3 = "  ";
    }
        break;
		
		
    case 6:
        day = "Saturday";
		if ( hour >= 10  && hour < 14) {
        Onclock1 = "Ian";
		Onclock2 = "Paul ";
		Onclock3 = " ";
    } 
		else if ( hour >= 14  && hour < 18) {
        Onclock1 = "Uki";
		Onclock2 = "Saurav";
		Onclock3 = "";
    } 
	else {
        Onclock1 = "We are currently closed!";
		Onclock2 = "  ";
	    Onclock3 = "  ";
    }
		break;
		
	default:
		break;
	
}

document.getElementById("clock1").innerHTML = Onclock1; 
document.getElementById("clock2").innerHTML = Onclock2; 
document.getElementById("clock3").innerHTML = Onclock3; 

var days;
switch (new Date().getDay()) {
	
    case 1:
         day = "Monday";
		if ( hour >= 8  && hour < 10) {
        Help = "Arani";
    }
		else if ( hour >= 10  && hour < 12) {
         Help = "Blake";
    }
	else if ( hour >= 12  && hour < 13) {
        Help = "Arani";
    }
	else if ( hour >= 13  && hour < 15) {
        Help = "Chyanne";
    }
	else if ( hour >= 15  && hour < 18) {
        Help = "Emil";
    }
	else {
       
    }
        break;
		
    case 2:
               day = "Tuesday";
		if ( hour >= 10  && hour < 12) {
        Help = "Blake";
    }
		else if ( hour >= 12  && hour < 13) {
       Help = "Arani";
    }
	else if ( hour >= 13  && hour < 16) {
        Help = "Chandan";
    }
	else if ( hour >= 16  && hour < 18) {
        Help = "Emil";
    }

	else {
        
    }
        break;
    case 3:
               day = "Wednesday";
		if ( hour >= 8  && hour < 10) {
        Help = "Arani";
		
    }
		else if ( hour >= 10  && hour < 12) {
         Help = "Blake";
    }
	else if ( hour >= 12  && hour < 13) {
        Help = "Arani";
    }
	else if ( hour >= 13  && hour < 15) {
        Help = "Chyanne";
    }
	else if ( hour >= 15  && hour < 17) {
        Help = "Emil";
    }
	else {
       
    }
        break;
   
   
    case 4:
           day = "Thursday";
		if ( hour >= 8  && hour < 9) {
        Help = "Arani";
    }
		else if ( hour >= 11  && hour < 12) {
        Help = "Blake";
    }
	else if ( hour >= 12  && hour < 13) {
        Help = "Arani";
    }
	else if ( hour >= 13  && hour < 16) {
        Help = "Chandan";
    }
	else if ( hour >= 16  && hour < 17) {

		Help = "Arani";
    }
	
	else {
       
    }
        break;
		
    case 5:
         day = "Friday";
		if ( hour >= 8  && hour < 10) {
        Help = "Arani";
    }
		else if ( hour >= 10  && hour < 12) {
      Help = "Chandan";
    }
	else if ( hour >= 12  && hour < 15) {
        Help = "Chyanne";
    }
	else if ( hour >= 15  && hour < 18) {
       Help = "Gan";
    }
	
	else {
       
    }
		break;
    
	default:
		break;
}

document.getElementById("clock4").innerHTML = Help; 

}

setInterval('clock()', 1000);