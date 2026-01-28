var openText = 'View Ordering Information';

$(document).ready(function () {
	$('#ordering').hide();
	$('#order-link a').html(openText);
	$('.sem').each(function () {
		var cont = '<a href="&#109;&#097;&#105;&#108;&#116;&#111;:&#106;&#107;&#064;&#114;&#097;&#100;&#105;&#111;&#111;&#098;&#108;&#105;&#103;&#097;&#116;&#111;&#046;&#099;&#111;&#109;" title="E-mail Johan">' + $(this).html() + '</a>';
		$(this).html(cont);
	});
	$('#order-link').each(function () {
		var cont = '<a href="#">' + openText + '</a>';
		$(this).html(cont);
		$(this).children('a').click(function () {
			$(this).toggleClass("close");
			if ($(this).hasClass('close')) {
				$('#order-link a').html('Close Ordering Information');
				$('#ordering').slideDown('fast');
			}
			else {
				$('#order-link a').html(openText);
				$('#ordering').slideUp('fast');
			}
			return false;
		});
	});
});
