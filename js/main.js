
$('.menu-btn').click(function(e)
{

	$('nav').toggle();
	e.preventDefault();
})

// $(document).ready(function()
// {
// 	$(window).on('resize', function()
// 	{
		
// 	});
// });

function reappear() 
{
	document.getElementById('hideMe').style.visibility='hidden';
}