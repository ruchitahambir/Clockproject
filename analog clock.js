setInterval(() => 
{
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);
   let nav = 0;
   let clicked = null;
   let events = localStorage.getItem('events');

   const calendar = document.getElementById('calendar');
   const weekdays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

   function load()
   {
    const dt = new Date();

    const day = dt.setDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();

    const daysInMonth = new Date(year, month + 1, 0).getDate();
   }
   load();