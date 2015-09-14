<?php

/**
 * Page alter.
 */
function flockstate_page_alter($page) {
	$mobileoptimized = array(
		'#type' => 'html_tag',
		'#tag' => 'meta',
		'#attributes' => array(
		'name' =>  'MobileOptimized',
		'content' =>  'width'
		)
	);
	$handheldfriendly = array(
		'#type' => 'html_tag',
		'#tag' => 'meta',
		'#attributes' => array(
		'name' =>  'HandheldFriendly',
		'content' =>  'true'
		)
	);
	$viewport = array(
		'#type' => 'html_tag',
		'#tag' => 'meta',
		'#attributes' => array(
		'name' =>  'viewport',
		'content' =>  'width=device-width, initial-scale=1'
		)
	);
	drupal_add_html_head($mobileoptimized, 'MobileOptimized');
	drupal_add_html_head($handheldfriendly, 'HandheldFriendly');
	drupal_add_html_head($viewport, 'viewport');
}

/**
 * Preprocess variables for html.tpl.php
 */
function flockstate_preprocess_html(&$variables) {
	/**
	 * Add IE8 Support
	 */
	drupal_add_css(path_to_theme() . '/css/ie8.css', array('group' => CSS_THEME, 'browsers' => array('IE' => '(lt IE 9)', '!IE' => FALSE), 'preprocess' => FALSE));

	/**
	* Add Javascript for enable/disable Bootstrap 3 Javascript
	*/
	if (theme_get_setting('bootstrap_js_include', 'flockstate')) {
	drupal_add_js(drupal_get_path('theme', 'flockstate') . '/bootstrap/js/bootstrap.min.js');
	}
	//EOF:Javascript

	/**
	* Add Javascript for enable/disable scrollTop action
	*/
	if (theme_get_setting('scrolltop_display', 'flockstate')) {

		drupal_add_js('jQuery(document).ready(function($) {
		$(window).scroll(function() {
			if($(this).scrollTop() != 0) {
				$("#toTop").fadeIn();
			} else {
				$("#toTop").fadeOut();
			}
		});

		$("#toTop").click(function() {
			$("body,html").animate({scrollTop:0},800);
		});

		});',
		array('type' => 'inline', 'scope' => 'header'));
	}
	//EOF:Javascript
}

/**
 * Override or insert variables into the html template.
 */
function flockstate_process_html(&$vars) {
	// Hook into color.module
	if (module_exists('color')) {
	_color_html_alter($vars);
	}
}

/**
 * Preprocess variables for page template.
 */
function flockstate_preprocess_page(&$vars) {

	/**
	 * insert variables into page template.
	 */
	if($vars['page']['sidebar_first'] && $vars['page']['sidebar_second']) {
		$vars['sidebar_grid_class'] = 'col-md-3';
		$vars['main_grid_class'] = 'col-md-6';
	} elseif ($vars['page']['sidebar_first'] || $vars['page']['sidebar_second']) {
		$vars['sidebar_grid_class'] = 'col-md-4';
		$vars['main_grid_class'] = 'col-md-8';
	} else {
		$vars['main_grid_class'] = 'col-md-12';
	}

	if($vars['page']['header_top_left'] && $vars['page']['header_top_right']) {
		$vars['header_top_left_grid_class'] = 'col-md-8';
		$vars['header_top_right_grid_class'] = 'col-md-4';
	} elseif ($vars['page']['header_top_right'] || $vars['page']['header_top_left']) {
		$vars['header_top_left_grid_class'] = 'col-md-12';
		$vars['header_top_right_grid_class'] = 'col-md-12';
	}

	/**
	 * Add Javascript
	 */
	if($vars['page']['pre_header_first'] || $vars['page']['pre_header_second'] || $vars['page']['pre_header_third']) {
	drupal_add_js('
	function hidePreHeader(){
	jQuery(".toggle-control").html("<a href=\"javascript:showPreHeader()\"><span class=\"glyphicon glyphicon-plus\"></span></a>");
	jQuery("#pre-header-inside").slideUp("fast");
	}

	function showPreHeader() {
	jQuery(".toggle-control").html("<a href=\"javascript:hidePreHeader()\"><span class=\"glyphicon glyphicon-minus\"></span></a>");
	jQuery("#pre-header-inside").slideDown("fast");
	}
	',
	array('type' => 'inline', 'scope' => 'footer', 'weight' => 3));
	}
	//EOF:Javascript
}

/**
 * Override or insert variables into the page template.
 */
function flockstate_process_page(&$variables) {
  // Hook into color.module.
  if (module_exists('color')) {
    _color_page_alter($variables);
  }
}

/**
 * Preprocess variables for block.tpl.php
 */
function flockstate_preprocess_block(&$variables) {
	$variables['classes_array'][]='clearfix';
}

/**
 * Override theme_breadrumb().
 *
 * Print breadcrumbs as a list, with separators.
 */
function flockstate_breadcrumb($variables) {
	$breadcrumb = $variables['breadcrumb'];

	if (!empty($breadcrumb)) {
		$breadcrumb[] = drupal_get_title();
		$breadcrumbs = '<ol class="breadcrumb">';

		$count = count($breadcrumb) - 1;
		foreach ($breadcrumb as $key => $value) {
		$breadcrumbs .= '<li>' . $value . '</li>';
		}
		$breadcrumbs .= '</ol>';

		return $breadcrumbs;
	}
}

/**
 * Search block form alter.
 */
function flockstate_form_alter(&$form, &$form_state, $form_id) {
	if ($form_id == 'search_block_form') {
	    unset($form['search_block_form']['#title']);
	    $form['search_block_form']['#title_display'] = 'invisible';
		$form_default = t('Search this website...');
	    $form['search_block_form']['#default_value'] = $form_default;

		$form['actions']['submit']['#attributes']['value'][] = '';

	 	$form['search_block_form']['#attributes'] = array('onblur' => "if (this.value == '') {this.value = '{$form_default}';}", 'onfocus' => "if (this.value == '{$form_default}') {this.value = '';}" );
	}
}

/**
function flockstate_date_combo($variables) {
  return theme('form_element', $variables);
}
**/

function flockstate_preprocess_views_table(&$vars) {
  $vars['classes_array'][] = 'table table-striped table-hover table-bordered';
}

// function flockstate_theme()  {
//   return array(
//     'date_ical_icon' => array(
//       'arguments' => array('url'),
//       ),
//     );
// }
// function flockstate_date_ical_icon($url)  {
//   $image = theme('image', array(
//                           'path' => drupal_get_path('theme', 'flockstate') . '/images/calendar.png',
//                           'alt' => $url['tooltip'],
//                           'title' => $url['tooltip'])
//             );
//   if ($image) {
//     return l(t('!image', array('!image' => $image)), $url['url'], array('html' => TRUE), '.Add to your calendar');
//   }
// }

function flockstate_entityreference_view_widget_widget($variables) {
  $widget = $variables['widget'];
  $settings = $widget['add_more']['#ervw_settings'];
  $order_class = drupal_html_class($settings['element'] . '-delta-order');
  $required = !empty($settings['instance']['required']) ? theme('form_required_marker', $variables) : '';

  $header = array(
    array(
      'data' => '<label>' . t('!title !required', array('!title' => $widget['#title'], '!required' => $required)) . "</label>",
      'colspan' => 2,
      'class' => array('field-label'),
    ),
  );
  if ($settings['field']['cardinality'] !== '1') {
    $header[] = array(
      'data' => t('Order'),
      'class' => array('tabledrag-hide'),
    );
  }
  $rows = array();

  // Sort items according to '_weight' (needed when the form comes back after
  // preview or failed validation)
  $items = array();
  foreach (element_children($widget) as $key) {
    if ($key === 'add_more') {
      $add_more_button = &$widget[$key];
    }
    else {
      $items[] = &$widget[$key];
    }
  }
  usort($items, '_field_sort_items_value_helper');

  // Add the items as table rows.
  foreach ($items as $item) {
    $item['_weight']['#attributes']['class'] = array($order_class);
    $delta_element = drupal_render($item['_weight']);
    $cells = array(
      array('data' => '', 'class' => array('field-multiple-drag')),
      drupal_render($item),
    );
    if ($settings['field']['cardinality'] !== '1') {
      $cells[] = array('data' => $delta_element, 'class' => array('delta-order'));
    }
    $rows[] = array(
      'data' => $cells,
      'class' => array('draggable'),
    );
  }

  if (empty($rows)) {
    $rows[][] = array(
      'data' => t('Click the button below to select a list of people.'),
      'colspan' => '3',
    );
  }
 
  $output = '<div class="form-item">';
  $form_errors = form_get_errors();
  $classes = array('field-multiple-table');

  // Add an error class to the table in case of error.
  if (isset($form_errors[$settings['element']])) {
    $classes[] = 'error';
  }

  $output .= theme('table', array(
    'header' => $header,
    'rows' => $rows,
    'attributes' => array(
      'id' => $settings['table_id'],
      'class' => $classes,
    ),
  ));
  $output .= $widget['#description'] ? '<div class="description">' . $widget['#description'] . '</div>' : '';
  $output .= '<div class="clearfix">' . drupal_render($add_more_button) . '</div>';
  $output .= '</div>';

  if ($settings['field']['cardinality'] !== '1') {
    drupal_add_tabledrag($settings['table_id'], 'order', 'sibling', $order_class);
  }

  return $output;
}
