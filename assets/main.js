$(document).ready(function(){
    setTimeout(function(){
        $('#loading').css('display', 'none');
        $('#flip-off').append('<iframe id="iframe" width="420" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" frameborder="0" allowfullscreen></iframe>')
        $('#flip-off').css('display', 'block');
        // document.getElementById('iframe').contentWindow.document.getElementById('buttonId').click()
        // $('#flip-off').find('iframe').click(function(){
        //     console.log('click');
        // });
    }, 1000);
});
