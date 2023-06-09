<?php
get_header();
if ( have_posts() ) : while ( have_posts() ) : the_post();
get_template_part('./entries/entry.php');
comments_template();
endwhile; endif;
get_template_part( 'nav', 'below' );
get_footer();