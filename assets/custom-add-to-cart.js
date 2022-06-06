var $drawer = $('.cart-drawer'),
    globalTimer;

$('[data-add-to-cart]').on('click', function(e) {
  e.preventDefault();

  var form = $(this).closest('form'),
      form_serialized = form.serializeArray();

  if (form.find('[type="file"]').length){
    return;
  }

  var form_object = {};

  $.map(form_serialized, function(val, i){
    form_object[val.name] = val.value;
  });

  ajaxAddItem(form_object);
});

var ajaxAddItem = function(data) {
  $.ajax({
    type: 'POST',
    url: '/cart/add.js',
    dataType: 'json',
    data: data,
    success: addSuccess,
    complete: updateHeaderTotal
  });
}

var updateHeaderTotal = function() {
  $.getJSON('/cart.js')
      .done(function(cart) {
        var newTotal = slate.Currency.formatMoney(cart.total_price, theme.moneyFormat);
        $('.cartCost').html("(<span class='money'>" + newTotal + "</span>)").removeClass('hidden-count');

        var newCnt = cart.item_count;
        $('.cartCnt').html(newCnt).removeClass('hidden-count');
      });
}

var addSuccess = function(product){
  productObject = {
    product_title: product.product_title,
    product_image: product.image,
    variant: product.variant_title == 'Default Title' ? false : product.variant_title,
    quantity: product.quantity,
    price: slate.Currency.formatMoney(product.price, theme.moneyFormat)
  }

  // Popover should be just below header
  var topPosition =  $('.site-header').outerHeight() + $('.info-bar').outerHeight();
  $drawer.attr('style','');

  // If it is sticky, just put it at the header height with position: fixed
  if ( $('.header__wrapper').hasClass('header--sticky') ) {
    var topPosition =  $('.site-header ').outerHeight();
    $drawer.css( 'top', topPosition );
  } else if ( $(window).scrollTop() > topPosition ){
    // header is not visible pin to top
    $drawer.css( 'top', 0 );
    $drawer.css( 'z-index', '2000' );
  }
  else {
    // otherwise positon: absolute below header
    // or at top if scrolled below header
    topPosition = Math.max( $(window).scrollTop() , topPosition);
    $drawer.css( 'position', 'absolute' );
    $drawer.css( 'top', topPosition );
  }

  $drawer.addClass( 'is-visible' );
  popdown();
}

var popdown = function() {
  clearTimeout(globalTimer);
  globalTimer = setTimeout(function(){
    $drawer.removeClass( 'is-visible' ).removeClass( 'has-errors' );
  }, 5000);
}

$drawer.on( 'click', '.close', function() {
  $drawer.removeClass( 'is-visible' ).removeClass( 'has-errors' );
});