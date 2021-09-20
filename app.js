


const toggleNavBar = ()=>{
    $('.navRight').toggleClass('showNavRight')
    $('.line1').toggleClass('open')
    $('.line2').toggleClass('open')
    $('.line3').toggleClass('open')
}
$('.burgerBtn').click(()=>{toggleNavBar()})









// navigation bar scrolling -START-


$('.home').click(()=>{
    $(".sec1")[0].scrollIntoView({
        behavior: "smooth", // or "auto" or "instant"
        block: "end" // or "end"
    });
    toggleNavBar()
})



$('.services').click(()=>{
    $(".sec2-title")[0].scrollIntoView({
        behavior: "smooth", // or "auto" or "instant"
        block: "start"
    });
    toggleNavBar()
})




$('.contact').click(()=>{
    $(".sec4")[0].scrollIntoView({
        behavior: "smooth", // or "auto" or "instant"
        block: "end" // or "end"
    });
    toggleNavBar()
})
$('.sec1-btn').click(()=>{
    $(".sec4")[0].scrollIntoView({
        behavior: "smooth", // or "auto" or "instant"
        block: "end" // or "end"
    });
    // toggleNavBar()
})

$('.projects').click(()=>{
    $(".sec3")[0].scrollIntoView({
        behavior: "smooth", // or "auto" or "instant"
        block: "end" // or "end"
    });
    toggleNavBar()
})


// navigation bar scrolling -END-