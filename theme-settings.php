<?php

declare(strict_types=1);

/**
 * @file
 * Theme settings form for SDCTest theme.
 */

use Drupal\Core\Form\FormState;

/**
 * Implements hook_form_system_theme_settings_alter().
 */
function sdctest_form_system_theme_settings_alter(array &$form, FormState $form_state): void {

  $form['sdctest'] = [
    '#type' => 'details',
    '#title' => t('SDCTest'),
    '#open' => TRUE,
  ];

  $form['sdctest']['example'] = [
    '#type' => 'textfield',
    '#title' => t('Example'),
    '#default_value' => theme_get_setting('example'),
  ];

}
