
var workDay = [[0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0], // создает массив возможных смен
               [0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0], 
               [0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1], 
               [0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1]];

var month = [31,28,31,30,31,30,31,31,30,31,30,31], // устанавливает число дней в каждом месяце
    monthName = ["JANUARY", "FEBUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULE", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"],
	monthNameRU = ["ЯНВАРЯ", "ФЕВРАЛЯ", "МАРТА", "АПРЕЛЯ", "МАЯ", "ИНЮНЯ", "ИЮЛЯ", "АВГУСТА", "СЕНТЯБРЯ", "ОКТЯБРЯ", "НОЯБРЯ", "ДЕКАБРЯ"],
    week = ["", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"],
    weekFull = ["ВОСКРЕСЕНЬЕ", "ПОНЕДЕЛЬНИК", "ВТОРНИК", "СРЕДА", "ЧЕТВЕРГ", "ПЯТНИЦА", "СУББОТА", "Ошибка"],
    newDate = new Date(), // создает переменную с датой
    today = newDate.getDate(),
    monthСurrent = newDate.getMonth(), // берет актульный месяц из даты
    currentYear = newDate.getFullYear(),//Берет актуальный год
    weekDay = new Date(currentYear, monthСurrent, 1).getDay(),// Определяет день недели
    getDocument = document,
    welcomeDate = currentYear+" "+monthName[monthСurrent];

////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var cookies = {};
          var cookieUser = document.cookie;
              cookieUser = cookieUser.split("; ");
                   for(var i = 0; i<cookieUser.length; i++){

                       var cookie = cookieUser[i];
                       var p = cookie.indexOf("=");
                       var name = cookie.substring(0,p);
                       var value = cookie.substring(p+1);
                     //value = decodeURIComponent(value);
                           cookies[name] = value;
                       var oneYear = cookies.year,
                           oneMonth = cookies.month-1,
                           userWork = cookies.smena;
                   }

 if(cookies['name']){ 

          
          var createCalendar = document.getElementById("calendar");
          createCalendar.onclick = monthNext;
          startPage();
}else{

     startPage();
}  


//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////


function startPage(){
       console.log(weekFull[newDate.getDay()])
          var getCalendar = document.getElementById("calendar");                                        

             getCalendar.innerHTML =    '<div id = "startweekday"><p>' + weekFull[newDate.getDay()] + '</p></div>\
                                         <div id = "startday"><p>' + today + '</p></div>\
                                         <div id = "startmonth"><p>' + monthNameRU[monthСurrent] + '</p></div>';  

}

function nextMonth(step){
    if(step){
         if(monthСurrent!=11){
            monthСurrent +=1;
         }else {
            monthСurrent = 0;
            currentYear += 1;
         }
            weekDay = new Date(currentYear, monthСurrent, 1).getDay();
            welcomeDate = currentYear+" "+monthName[monthСurrent];
            monthNext();
       }else if (!step){
          if (monthСurrent!=0){
            monthСurrent -=1;
          }else {
            monthСurrent =11;
            currentYear -=1;
          }
            weekDay = new Date(currentYear, monthСurrent, 1).getDay();
            welcomeDate = currentYear+" "+monthName[monthСurrent];
            monthBack();

    }

}


////////////////////////////////////////////////////////////////////////////////
////////////Создание календаря с возвратом назад////////////////////////////////
//////////////////////////////////////////////////////////////////////////////// 
function monthBack(){
                   oneMonth-=1;  

                    if(oneMonth<0){
                                oneYear--;
                                oneMonth=11;
                              }                                                    
                     var x = workDay[userWork][3];                                
                     var y = workDay[userWork][4];                             
                           
                             
                            if (workDay[0][month[monthСurrent]]==y&&workDay[0][month[monthСurrent]-1]==x) {
                                  
                                  userWork=0;
                                  
                            }else if(workDay[1][month[monthСurrent]]==y&&workDay[1][month[monthСurrent]-1]==x){
                                  
                                  userWork=1;
                                  

                            }else if(workDay[2][month[monthСurrent]]==y&&workDay[2][month[monthСurrent]-1]==x){

                                  userWork=2;
                                  
                            }else if(workDay[3][month[monthСurrent]]==y&&workDay[3][month[monthСurrent]-1]==x){
                                  
                                  userWork=3;
                                  
                            }        


writeInTable();

}
  

function InputData(){
	var day;
	var b;
	var claaaassName;
	var form;
	var input;
	
	this.clickCalendar = function(){
        b = this.id;
		console.log(b)
		day = this.innerHTML;
		claaaassName = this.className;
		
		form = document.getElementById('calendarinput');
		input = form.getElementsByTagName('input');
		form.style = "display : block";
		
		
	

	}
	
	this.sendData = function(){
		           console.log(b)
		         console.log(document.getElementById(b).className = "notWorkDay")
	}
	
	
	
	
	
	
}
var d = new InputData();
 
	
	
	
	
	
	



function seendData(event){ 
	             var id = event.currentTarget
		           console.log(id.id)
		       
	             console.log(document.querySelector(id.id).innerHTML = "notWorkDay")  
	}
/*function inputData(value){
        var takeDay = this.innerHTML;
	    var className = this.className;
	    var form = document.getElementById('calendarinput');
	    var input = form.getElementsByTagName('input');
	        form.style = "display : block";
	if(value!=1&&value!=0){
		
		        if(className == "workDay"){
	               input[0].disabled = false;
		           input[1].checked = true;;
		 
	            }else if(className == "notWorkDay"){
		           input[0].disabled = true;
		           input[2].checked = true;;
	            }
	
	}else{
		
		        if(value ==0){

			        input[0].disabled = true;

		        }else if(value == 1){
			        input[0].disabled = false;

		        }
	}
		
	    // getInputDataForm.getElementsByTagName('h2')[1].innerHTML=takeDay+" "+monthNameRU[monthСurrent];
	 
	 
}
*/

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
function monthNext(){

              f = (currentYear*12 + monthСurrent) - (oneYear*12+oneMonth);                    //высчитывает разницу между последней   сохраненной датой программы и актуальной датой
              for(var i=1; i<=f; i++){                                                        //если даты  отличаются то
                   oneMonth+=1;                                                               //запускается цикл
                   var weekDaySecond = new Date(oneYear, oneMonth, 1);                
                   weekDaySecond.setDate(0);                                                  //возвращает предыдущий месяц с последней датой   
                   lastDay =  weekDaySecond.getDate();                                        //берет дату из возвращенного месяца и присваивает переменной
                                                                
                   var x = workDay[userWork][lastDay];                                        //
                   var y = workDay[userWork][lastDay-=1];                                     //
                            if(oneMonth>11){
                                oneYear++;
                                oneMonth=0;
                              }
                              
                              if(y==1&&x==0){
                                userWork=2;
                              }else if(y==0&&x==0){
                                userWork=1;
                              }else if(y==0&&x==1){
                                userWork=0;
                              }else if(y==1&&x==1){
                                userWork=3;
                              }         
              }
            
   
writeInTable();

}



function writeInTable(){
	console.time("first")
 ////////////////////////////////////////////////////////////////////////////////
 ///Устанавливаем день недели с которого пойдет построение календаря/////////////     
 ////////////////////////////////////////////////////////////////////////////////
  var pointBeginCalendar;
       if(weekDay==0){
                 pointBeginCalendar=6;
       }else{
                 pointBeginCalendar=weekDay;
       
            } 
console.log(pointBeginCalendar)
 
 //////////////////////////////////////////////////////////////////////////////////////////////////////////////
 ///////////////////////////////////////////Вставка  кнопок пролистывания месяцев//////////////////////////////
 //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var getCalendar = document.getElementById("calendar"); 
	    getCalendar.innerHTML = ""; 
	    var divMonthcontrol = document.createElement('div');
	    divMonthcontrol.id = "monthcontrol";
        divMonthcontrol.innerHTML = "<table>\
	                          <tr>\
	                          <td colspan='2' id = 'previousmonth' type='button' value='Сергей' onclick='nextMonth(0)'></td>\
                              <td colspan='3' id='date'>" + welcomeDate + "</td>\
                              <td colspan='2' id = 'nextmonth' type='button' value='Александр' onclick='nextMonth(1)'></td>\
	                           </tr >\
                               <tr id='weekDay'>\
	                            <td>ПН</td><td>ВТ</td><td>СР</td><td>ЧТ</td><td>ПТ</td><td>СБ</td><td>ВС</td>\
	                          </table>";                                                             
        getCalendar.appendChild(divMonthcontrol);
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
 ///////////////////////////////////////////Создание и вставка клаендаря////////////////////////////////////////
 //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        var divCalendarBody = document.createElement('div');
	        divCalendarBody.id = "calendarbody";
                                                                                                // берет елемент с ID calendarbody
                                                                   // очищает место вставки календаря
        var newTable = document.createElement("table");                                     // создает тег <table>
        var dayInMonth=cell=1;  
        for(k=1; k<=6; k++){                                                                   // запускается цикл создания тега <tr>
          
              var newTr = document.createElement("tr");                                    // создает тег <tr>
                 for(z= 1; z<=7; z++, cell++){                                                 // запускает цикл создания тега <td>     
                    switch(true){
                      case (cell>=pointBeginCalendar&&dayInMonth<=month[monthСurrent]):           // при выполнении условия ячейки заполняются днями 
                                    
                            var newTd = document.createElement("td");
                            newTd.innerHTML = dayInMonth;
							if(dayInMonth==today) newTd.id = "today";      // когда день счетчика совпадает с сегодняшенй датой эта дата меняет размер шрифта         
						    newTd.id = "day"+dayInMonth;
                            newTd.addEventListener('click', d.clickCalendar);      
                                  
                            
                                  if(workDay[userWork][dayInMonth]){                           // проверяется условие если в массиве смен день рабочий
                                        newTd.className = "workDay";                          // то присваивается класс рабочего дня
									    
									   
                                  }else{
                                        newTd.className = "notWorkDay";                       //если не рабочий 
									    
									   
                                  } 
                           dayInMonth++ 
                           break;

                      default:
                            var newTd = document.createElement("td");                      //если ни одно условие выше не выполнено создает пустые ячейки
                     }
                     
                     newTr.appendChild(newTd);
            }
              newTable.appendChild(newTr);
        }

       divCalendarBody.appendChild(newTable);
       getCalendar.appendChild(divCalendarBody);
	console.timeEnd("first")
 
}  
