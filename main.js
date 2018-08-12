 $(function(){
 var $hieuung = $('.nhieumon').isotope({
	  itemSelector: '.motmon',
	  layoutMode: 'masonry'
	})
	  $hieuung.imagesLoaded().progress( function() {
	  $hieuung.isotope('layout');
	})


	  $('.tieudect a').click(function(event) {
	  	var danhmuc = $(this).data('danhmuc');
	  	var noidungdm = $(this).text();
	  	$('section h1').text(noidungdm);
	  	$('.tieudect a').removeClass('xanh');
	  	$(this).addClass('xanh');
	  	/*var chitiet = $(this).attr('href');*/
	  	$hieuung.isotope({filter:danhmuc})
	  	return false;
	  });

	  $('.tukhoa').keypress(function(event) {
	  	if(event.keyCode=='13'){
	  		var tukhoa1 = $(this).val();
	  		tukhoa1 = "."+tukhoa1;
	  		$hieuung.isotope({filter:tukhoa1})
	  	}

	  });
	  /*tinh chieu cao của noidungct*/
	/*  var soluongmon = $('.motkhoi').length;
	 console.log(soluongmon)
	  var docao = soluongmon*100 //120 là do cao cua motmon//
	  $('.noidungchitiet').css({'height':docao});*/
	  /*xac dinh xem mot div co ton tai hay khong*/
	  /*if($('.motmon').length){
	  	console.log('co ton tai');
	  }*/
})  
 