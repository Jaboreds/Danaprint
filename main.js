var indexValue = 0;
function slideShow(){
    setTimeout(slideShow, 6000);
    var x;
    const img = document.querySelectorAll("#slide");
    for(x = 0; x < img.length; x++){
        img[x].style.display = "none";
    }
    indexValue++;
    if(indexValue > img.length){indexValue = 1}
    img[indexValue -1].style.display = "block";
}
slideShow();

l


const dateInput = document.getElementById('appointment-date');
const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;

    document.getElementById('orderform').addEventListener('submit', function (e) {
        const selectedDate = dateInput.value;
        if (!selectedDate) {
          e.preventDefault();
          alert('Please choose a valid date!');
        } else {
          alert(`Appointment successfully booked for ${selectedDate}`);
        }
      });