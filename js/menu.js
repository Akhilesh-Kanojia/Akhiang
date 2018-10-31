// JavaScript Document

'use strict';

$(document).ready(function () {
	var nav_ul_html = $('nav > ul').html();
	$('#dl-menu > ul.dl-menu').html(nav_ul_html);

	$("nav ul li > a, .circ_hover").click(function (e) {
		$("nav ul li > a, .circ_hover").removeClass("active");
		$(this).addClass("active");
		e.preventDefault();
		var selector = $(this).attr("href");

		$('html, body').animate({
			scrollTop: $(selector).offset().top - $('header').outerHeight()
		}, 1000);

	});
	set_equal_children_height();
	myMap();

	
	$('body').click(function () {
		dlmenu_obj._closeMenu();
	});
	
	var contact_form = $('.container > .map_wrapper > .contact_wrapper > .contact_form');
	$('.container > .map_wrapper > .contact_wrapper > h2').click(function () {
		if (contact_form.is(':animated'))
			return;

		contact_form.slideToggle(1000, 'easeInOutQuint');
	});

	var owl = $('.owl-carousel');
	owl.owlCarousel({
		autoPlay: 3000,
		items: 1,
		loop: true,
		autoplayTimeout: 5000,
		autoplay: true,
		dots: true,
		dotsEach: true,
		nav: true,
		navText: []
	});
	
	var dlmenu_obj = $('#dl-menu').dlmenu().data('dlmenu');

  $(window).resize(function() {
	$('body').addClass('no_transition');
    set_all_height();
	$('body').removeClass('no_transition');
  });
	
});

$(window).load(function () {
	$('#loader').css('display', 'none');
	set_all_height();
});

function set_all_height() {
	var header_height = $('header').outerHeight();
	$('.container').css("margin-top", header_height + "px");

	var footer_height = $('footer').outerHeight();
	$('.container').css("margin-bottom", footer_height + "px");

	set_equal_children_height();
}

function myMap() {
	var myCenter = new google.maps.LatLng(52.1725148, -0.6195144);
	var mapCanvas = document.getElementById("map");
	var mapOptions = {
		center: myCenter,
		zoom: 5,
		zoomControlOptions: {
			position: google.maps.ControlPosition.LEFT_BOTTOM
		},
		streetViewControlOptions: {
			position: google.maps.ControlPosition.LEFT_BOTTOM
		},
		styles: [{
			"elementType": "geometry",
			"stylers": [{
				"color": "#eeeeee"
			}]
		}, {
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#523735"
			}]
		}, {
			"elementType": "labels.text.stroke",
			"stylers": [{
				"color": "#f5f1e6"
			}]
		}, {
			"featureType": "administrative",
			"elementType": "geometry.stroke",
			"stylers": [{
				"color": "#c9b2a6"
			}]
		}, {
			"featureType": "administrative.land_parcel",
			"elementType": "geometry.stroke",
			"stylers": [{
				"color": "#dcd2be"
			}]
		}, {
			"featureType": "administrative.land_parcel",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#ae9e90"
			}]
		}, {
			"featureType": "landscape.natural",
			"elementType": "geometry",
			"stylers": [{
				"color": "#dfd2ae"
			}]
		}, {
			"featureType": "poi",
			"elementType": "geometry",
			"stylers": [{
				"color": "#dfd2ae"
			}]
		}, {
			"featureType": "poi",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#93817c"
			}]
		}, {
			"featureType": "poi.park",
			"elementType": "geometry.fill",
			"stylers": [{
				"color": "#a5b076"
			}]
		}, {
			"featureType": "poi.park",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#447530"
			}]
		}, {
			"featureType": "road",
			"elementType": "geometry",
			"stylers": [{
				"color": "#f5f1e6"
			}]
		}, {
			"featureType": "road.arterial",
			"elementType": "geometry",
			"stylers": [{
				"color": "#fdfcf8"
			}]
		}, {
			"featureType": "road.highway",
			"elementType": "geometry",
			"stylers": [{
				"color": "#f8c967"
			}]
		}, {
			"featureType": "road.highway",
			"elementType": "geometry.stroke",
			"stylers": [{
				"color": "#e9bc62"
			}]
		}, {
			"featureType": "road.highway.controlled_access",
			"elementType": "geometry",
			"stylers": [{
				"color": "#e98d58"
			}]
		}, {
			"featureType": "road.highway.controlled_access",
			"elementType": "geometry.stroke",
			"stylers": [{
				"color": "#db8555"
			}]
		}, {
			"featureType": "road.local",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#806b63"
			}]
		}, {
			"featureType": "transit.line",
			"elementType": "geometry",
			"stylers": [{
				"color": "#dfd2ae"
			}]
		}, {
			"featureType": "transit.line",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#8f7d77"
			}]
		}, {
			"featureType": "transit.line",
			"elementType": "labels.text.stroke",
			"stylers": [{
				"color": "#ebe3cd"
			}]
		}, {
			"featureType": "transit.station",
			"elementType": "geometry",
			"stylers": [{
				"color": "#dfd2ae"
			}]
		}, {
			"featureType": "water",
			"elementType": "geometry.fill",
			"stylers": [{
				"color": "#b9d3c2"
			}]
		}, {
			"featureType": "water",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#92998d"
			}]
		}]
	};
	var map = new google.maps.Map(mapCanvas, mapOptions);
	var marker = new google.maps.Marker({
		position: myCenter,
		icon: 'images/Map-Marker-Flag.png'
	});
	marker.setMap(map);
	
	
}

var set_equal_children_height = function (content_wrapper) {
	if (content_wrapper == undefined)
		content_wrapper = $('body');

	content_wrapper.find('[data-equal_children_height]').each(function (index, element) {
		var $this = $(this),
			children_selector = $this.attr('data-equal_children_height'),
			childrens = $this.children(':not(.hidden)'),
			same_offset_top_children = [],
			previous_children_offset_top = null,
			min_height,
			max_height = [],
			cur_array_index = null;

		childrens.each(function (index, element) {
			var cur_children = $(this),
				cur_main_children_el = children_selector == '.' ? cur_children : cur_children.find(children_selector),
				cur_main_children_el_height,
				cur_children_offset_top;

			cur_main_children_el.css('height', '');

			min_height = cur_main_children_el.outerHeight();

			cur_main_children_el.css('height', 'auto');

			cur_main_children_el_height = cur_main_children_el.outerHeight();

			cur_children_offset_top = cur_children.offset().top;

			if (cur_main_children_el_height < min_height)
				cur_main_children_el_height = min_height;

			if (previous_children_offset_top !== null && previous_children_offset_top != cur_children_offset_top) {
				same_offset_top_children[cur_array_index].css('height', max_height[cur_array_index] + 'px');
				cur_children_offset_top = cur_children.offset().top;
			}

			if (previous_children_offset_top !== null && previous_children_offset_top == cur_children_offset_top) {
				same_offset_top_children[cur_array_index] = same_offset_top_children[cur_array_index].add(cur_main_children_el);
			} else {
				same_offset_top_children.push(cur_main_children_el);
				max_height.push(0);
				cur_array_index = same_offset_top_children.length - 1;
			}

			if (max_height[cur_array_index] < cur_main_children_el_height)
				max_height[cur_array_index] = cur_main_children_el_height;

			previous_children_offset_top = cur_children_offset_top;
		});

		same_offset_top_children[cur_array_index].css('height', (max_height[cur_array_index] + 1) + 'px');
	});

};
