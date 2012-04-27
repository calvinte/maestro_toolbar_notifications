/**
 * @file
 * Replaces the admin/notifications toolbar text
 * with the currnet number of maestro notifications
 */

(function ($) {
  $(document).ready(function(){
    $('#toolbar-link-admin-notifications').html(
      Drupal.settings.maestro_toolbar_notifications.notification
    );
  });
}(jQuery));
