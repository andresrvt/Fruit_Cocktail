$("#aparece").ready(function(){
    $("#aparece").scroll(function(){
        $("h1").animate({
            left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px'
        });
    });
});