//   #################################
//  ##### ⭐ Emoji Scroll TOP 	#####
// #################################
const inTop = document.createElement("div");
// tags and css for html
inTop.innerHTML = `<style>.in_top{position:fixed;right:40px;bottom:35px;width:30px;height:30px;opacity:0;filter:alpha(opacity=50);cursor:pointer;display:none; padding:.5em;z-index:5}.in_top{opacity:1;filter:alpha(opacity=100)}.in_top span{display:block;font-size:2rem}@media (max-width:575px){.in_top{width:30px;height:30px;bottom:35px;right:40px;top:unset;opacity:1;z-index:5}.in_top span{margin-top:0;font-size:2rem}}</style><div class="in_top"><span>⏫</span></div>`;
document.body.appendChild(inTop);
// options
var bottom_position = 0;
var flag_bottom = false;
var flag_animate = false;
// Use
$(document).ready(function () {
	// Scroll options
	$(".in_top").click(function (){ flag_animate=true; if (flag_bottom){ $("body,html").animate({ scrollTop: bottom_position}, 700, function (){ flag_animate=false}); flag_bottom=false; $(".in_top span").html("⏫")} else{ $("body,html").animate({ scrollTop: 0}, 700, function (){ flag_animate=false}); bottom_position=$(window).scrollTop(); flag_bottom=false; $(".in_top span").html("⏫")}});
	$(window).scroll(function (){ var countScroll=$(window).scrollTop(); if (countScroll >300 && !flag_animate){ $(".in_top").show(); if (!flag_bottom){ flag_bottom=false; $(".in_top span").html("⏫");}} else{ if (!flag_bottom){ $(".in_top").hide();}}});
	// scroll smooth
	function scrollNav(){ $('.toc-list-contents a').click(function (){ $('html, body').stop().animate({ scrollTop: $($(this).attr('href')).offset().top - 70}, 700); return false;});}
	scrollNav();
	$("span a").on('click', function(event){ if (this.hash !==""){ event.preventDefault(); var hash=this.hash; $('html, body').animate({ scrollTop: $(hash).offset().top - 60}, 800, function(){ window.location.hash=hash;});}});
});
//   #################################
//  ##### 			⭐ End 				#####
// #################################

// $(document).ready(function () {
					
// 					function includeFrame(url) {
// 						var iframe = document.createElement("iframe");
// 						iframe.src = url;
// 						document.getElementsByClassName("iframe")[0].appendChild(iframe);
// 					}

// 					function includeStyle(href) {
// 						var css = document.createElement('link');
// 						css.rel = "stylesheet";
// 						css.href = href;
// 						document.head.appendChild(css);
// 					}

// 					function includeScript(url) {
// 						var js = document.createElement('script');
// 						js.src = url;
// 						document.body.appendChild(js);
// 					}

// 					setTimeout(() => {
// 						includeFrame("https://url");
// 						includeStyle("/css/style.css");
// 						includeScript("/js/all.js")
// 						includeScript("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js")
// 						includeScript("https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js")
// 						includeScript("https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js")
// 						includeScript("https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.1/js/mdb.min.js")
// 					}, 3000);

// 				});

// 			 	function lazy(href) {
// 					//  CSS
// 					var css = document.createElement('link');
// 					css.rel = "stylesheet";
// 					css.href = href;
// 					document.head.appendChild(css);
					
// 					}
// 					lazy('assets/css/style.css');