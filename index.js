function showTime(){
   const date = new Date();
   h =date.getHours();
   m =date.getMinutes();
   s =date.getSeconds();
  
   session ='AM';

   if (h==  0) {
       h=12
   }

   if (h >=13) {
       h =h-12 ;
       session='PM'
   }

  s= (s<10)?s= '0'+s :s;
  m= (m<10)?m= '0'+m :m;
  h= (h<10)?h= '0'+h :h;
   

    time =   `${h}:${m}:${s} ${session}`;

   document.querySelector('.clock').textContent= time;
   document.querySelector('.clock').innerText= time;    
  
    setTimeout(showTime, 1000);
    
}

showTime();