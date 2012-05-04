/**
 * @file
 * Replaces the admin/notifications toolbar text
 * with the currnet number of maestro notifications
 */

(function ($) {
  Drupal.behaviors.maestro_toolbar_notifications = {
    attach: function(context, settings) {
      if (typeof(Drupal.settings.maestro_toolbar_notifications.notification) !== 'undefined') {
        $('#toolbar-link-admin-notifications', context).html(
          Drupal.settings.maestro_toolbar_notifications.notification
        );
      }
    }
  }
}(jQuery));
