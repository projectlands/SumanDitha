$.ajax(setting).done(function (datas) {
    const data = datas.feed.entry
    var data_guest = ''
    for (var i = data.length - 1; i >= 0; i--) {
        data_guest += '<div class="inlineContainer"></div><span class="other" style="color: white;">' + data[i].gsx$nama.$t + ' | <strong>' + data[i].gsx$kehadiran.$t + '</strong></span><img class="inlineIcon" src="https://pngimage.net/wp-content/uploads/2018/05/cuore-emoji-png-4.png"><div class="otherBubble other">' + data[i].gsx$ucapan.$t + '</div>'
        console.log(data[i])
    }
    $('.bwrapper-default').append(data_guest)
    const tVote = document.querySelector('.total-vote')
    var att = document.createAttribute("data-to")
    att.value = data.length
    tVote.setAttributeNode(att)
    console.log(data.length)
})