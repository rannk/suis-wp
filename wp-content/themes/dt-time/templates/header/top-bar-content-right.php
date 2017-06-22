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
////////////////////
// Top Bar text //
////////////////////

$top_text = of_get_option('top_bar-text', '');
if ( $top_text ) :
    ?>

    <div class="wf-float-right">
        <?php echo wpautop($top_text); ?>
    </div>

<?php endif; // top text