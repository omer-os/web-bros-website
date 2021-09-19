


const toggleNavBar = ()=>{
    $('.navRight').toggleClass('showNavRight')
    $('.line1').toggleClass('open')
    $('.line2').toggleClass('open')
    $('.line3').toggleClass('open')
}
$('.burgerBtn').click(()=>{toggleNavBar()})







// navigation bar scrolling -START-
$('.about').click(()=>{
    $(".sec2")[0].scrollIntoView({
        behavior: "smooth", // or "auto" or "instant"
        block: "start" // or "end"
    });
    toggleNavBar()
})


$('.home').click(()=>{
    $(".sec1")[0].scrollIntoView({
        behavior: "smooth", // or "auto" or "instant"
        block: "start" // or "end"
    });
    toggleNavBar()
})
// navigation bar scrolling -END-