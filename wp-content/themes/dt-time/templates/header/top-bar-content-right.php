<?php
// File Security Check
if ( ! defined( 'ABSPATH' ) ) { exit; }

////////////////////////
// Woocommerce cart //
////////////////////////

if ( dt_is_woocommerce_enabled() && of_get_option( 'general-woocommerce_show_mini_cart_in_top_bar', true ) ) {
	get_template_part('inc/mod-woocommerce/mod-woocommerce', 'mini-cart');
}


////////////////////
// Top bar menu //
////////////////////

presscore_nav_menu_list('top', 'right');
