<?php
/**
 * Plugin Name: Crimson Taxonomy Terms List Block
 * Description: Displays a list of a post terms for a selected taxonomy.
 * Plugin URI: https://www.ulisesfreitas.com/crimson-taxonomy-terms-list-block
 * Version: 1.1.2
 * Author: ulisesfreitas
 * Author URI: https://www.ulisesfreitas.com
 * Text Domain: crimson-taxonomy-terms-list-block
 * Domain path: /languages
 * License: GPLv2 or later (license.txt)
 * Requires PHP: 7.4
 * Requires at least: 5.8
 */

namespace TaxonomyBlock;

/**
 * Plugin initialization.
 */
function init() {
	include_once plugin_dir_path( __FILE__ ) . '/inc/block.php';

	add_action( 'plugins_loaded', __NAMESPACE__ . '\\load_text_domain', 50 );

	Block\init();
}

/**
 * Load the plugin text domain
 */
function load_text_domain() {
	load_plugin_textdomain( 'crimson-taxonomy-terms-list-block', false, plugin_basename( dirname( __FILE__ ) ) . '/languages' );
}

/**
 * Retrieve the plugin URL.
 *
 * @return string
 */
function plugin_url(): string {
	return plugin_dir_url( __FILE__ );
}

/**
 * Retrieve the plugin absolute path.
 *
 * @return string
 */
function plugin_dir(): string {
	return plugin_dir_path( __FILE__ );
}

init();
