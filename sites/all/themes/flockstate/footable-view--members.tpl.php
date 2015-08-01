<?php
/**
 * @file
 * Template to display a view as a table.
 *
 * - $title : The title of this group of rows.  May be empty.
 * - $header: An array of header labels keyed by field id.
 * - $header_classes: An array of header classes keyed by field id.
 * - $fields: An array of CSS IDs to use for each field id.
 * - $classes: A class or classes to apply to the table, based on settings.
 * - $row_classes: An array of classes to apply to each row, indexed by row
 *   number. This matches the index in $rows.
 * - $rows: An array of row items. Each row is an array of content.
 *   $rows are keyed by row number, fields within rows are keyed by field ID.
 * - $field_classes: An array of classes to apply to each field, indexed by
 *   field id, then row number. This matches the index in $rows.
 * @ingroup views_templates
 */
?>
<div class="dcount">
<?php
global $pager_page_array, $pager_total, $pager_limits;
$from = ($view->query->pager->current_page * $view->query->pager->options['items_per_page']) + 1;
$to = $from + count($view->result) - 1;
$total = $view->total_rows;
if($total > 0){
if ($total <= $to) {
print 'Showing '.$total.'';
}
else
{
print 'Showing '.$from.' - '.$to.' out of '.$view->total_rows.'';
}
}
?>
</div>
<table <?php if ($classes): print 'class="'. $classes . '" '; endif; ?><?php print $attributes; ?>>
  <?php if (!empty($title)) : ?>
    <caption><?php print $title; ?></caption>
  <?php endif; ?>
  <?php if (!empty($header)) : ?>
    <thead>
      <tr>
        <?php foreach ($header as $field => $label): ?>
          <th <?php if (!empty($data_class[$field])): print 'data-class="'. $data_class[$field] . '" '; endif; ?><?php if (!empty($data_hide[$field])): print 'data-hide="'. $data_hide[$field] . '" '; endif; ?><?php if ($header_classes[$field]): print 'class="'. $header_classes[$field] . '" '; endif; ?>>
            <?php print $label; ?>
          </th>
        <?php endforeach; ?>
      </tr>
    </thead>
  <?php endif; ?>
  <tbody>
    <?php foreach ($rows as $row_count => $row): ?>
      <tr <?php if ($row_classes[$row_count]): print 'class="' . implode(' ', $row_classes[$row_count]) .'"';  endif; ?>>
        <?php foreach ($row as $field => $content): ?>
          <td <?php if ($field_classes[$field][$row_count]): print 'class="'. $field_classes[$field][$row_count] . '" '; endif; ?><?php print drupal_attributes($field_attributes[$field][$row_count]); ?>>
            <?php print $content; ?>
          </td>
        <?php endforeach; ?>
      </tr>
    <?php endforeach; ?>
  </tbody>
</table>