const spreadshetID = "1N953wTDqsIZpkrwvCsFZxcMcihv2MalB5pTn3SzonL4"
const url = "https://spreadsheets.google.com/feeds/list/" + spreadshetID + "/od6/public/values?alt=json"
const setting = {
    "url": url,
    "method": "GET",
    "timeout": 0,
    "headers": ""
}

$.ajax(setting).done(function (datas) {
    const data = datas.feed.entry
    const finalArray = data.map(function (obj) {return obj.gsx$kehadiran.$t})
    const arrayCounts = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0)
    const tHadir = arrayCounts(finalArray, 'Tidak Hadir')
    const ragu = arrayCounts(finalArray, 'Ragu - Ragu')
    const hadir = arrayCounts(finalArray, 'Hadir')
    var data_guest = ''
    // desc ordering loop for
    for (var i = data.length - 1; i >= 0; i--) {
        data_guest += '<div class="inlineContainer cvote"></div><span class="other cvote" style="color: white;">' + data[i].gsx$nama.$t + ' | <strong>' + data[i].gsx$kehadiran.$t + '</strong></span><img class="inlineIcon cvote" src="https://pngimage.net/wp-content/uploads/2018/05/cuore-emoji-png-4.png"><div class="otherBubble other cvote">' + data[i].gsx$ucapan.$t + '</div>'
        // console.log(data[i])
    }
    const totalData = '<span id="cdefault" class="counter js-counter" data-from="0" data-speed="5000" data-to= "' + data.length + '" data-refresh-interval="10">1</span>'
    
    $('.total-vote').append(totalData)
    $('.bwrapper-default').append(data_guest)
    // $('.chart').load('chart.html')

    const datachart = {
        labels: ['Hadir', 'Ragu', 'Tidak Hadir'],
        datasets: [{
          label: 'Voting',
          data: [hadir, ragu, tHadir],
          backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(255, 26, 104, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(0, 0, 0, 0.2)'
          ]
        }]
      };
  
      // config 
      const config = {
        type: 'bar',
        data: datachart,
        options: {
          indexAxis: 'y',
          scales: {
            y: {
                grid: {
                  display: false
                },
              beginAtZero: true
            }
          }
        }
      };
  
      // render init block
      const myChart = new Chart(
        document.getElementById('myChart'),
        config
      );
   
})


const scriptURL = 'https://script.google.com/macros/s/AKfycbwz2zM5QIJFDo9kxw9mApGTP9nJkdHcW41iXmEwff6FyM6KUGY9Ripv-JT6CZl5aRbI/exec'
const form = document.forms['submit-to-google-sheet']
const btnKirim = document.querySelector('.btn-kirim')
const btnLoading = document.querySelector('.btn-loading')
const myAlert = document.querySelector('.my-alert')
const bWrapper = document.querySelector('.bwrapper-default')
const bwrapperUpdated = document.querySelector('.bwrapper-updated')

form.addEventListener('submit', e => {
    e.preventDefault()
    btnLoading.classList.toggle('d-none')
    btnKirim.classList.toggle('d-none')
    $("#myChart").remove();
    $("#boxChart").load("chart.html")
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            // console.log('Success!', response)
            btnLoading.classList.toggle('d-none')
            btnKirim.classList.toggle('d-none')
            $('.my-alert').show();
            form.reset()
            $(".cvote").remove();
            $("#cdefault").remove();
            $('.my-alert').delay(5000).fadeOut();
            $(".bwrapper-default").load("vote.html");
            // loadingtabel.classList.toggle('d-none')

        })
        .catch(error => console.error('Error!', error.message))
})

lightGallery(document.getElementById('fh5co-gallery-list'))

// mp3 player

var x = document.getElementById("myAudio"); 
var play = document.getElementById("play"); 
var stop = document.getElementById("stop"); 

function playAudio() { 
  play.style.display = "none";
  stop.style.display = "block";
  stop.style.color = "red";
  x.play(); 
} 

function pauseAudio() {
  play.style.display = "block";
  play.style.color = "rgb(0, 152, 240)";
  stop.style.display = "none";
  x.pause(); 
  x.currentTime = 0;
}