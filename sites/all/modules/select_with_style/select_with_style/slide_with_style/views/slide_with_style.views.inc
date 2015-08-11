<?php

/**
 * @file
 * slide_with_style.views.inc
 *
 * Alterations to Views filter handlers.
 */

/**
 * Implements hook_field_views_data_alter().
 *
 * Temporarily swaps out exposed views_handler_filter_numeric filter for a
 * slider version. This function is called for every field on the system, but
 * only the fields required for the View's exposed filters will be converted.
 * @see class slide_with_style_handler_filter_numeric
 */
function slide_with_style_field_views_data_alter(&$data, $field) {
  if (!variable_get('slide_with_style_use_in_views', TRUE)) {
    return;
  }
  foreach ($data as $table_name => $table_data) {
    foreach ($table_data as $field_name => $field_data) {
      if (isset($field_data['filter']['handler'])) {
        $handler = &$data[$table_name][$field_name]['filter']['handler'];
        // is_a() used this way requires PHP 5.3.9. Hence the suppression of
        // error and the poor-man's textual check for suspected subclasses.
        if (@is_a($handler, 'views_handler_filter_numeric', TRUE) || strpos($handler, 'handler_filter_numeric')
          || @is_a($handler, 'views_handler_filter_field_list', TRUE) || strpos($handler, 'handler_filter_field_list')) {
          $handler = 'slide_with_style_handler_filter_numeric';
        }
      }
    }
  }
}
