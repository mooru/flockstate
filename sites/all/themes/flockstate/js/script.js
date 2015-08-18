(function($) {
  Drupal.behaviors.myBehavior = {
        attach: function(context, settings) {


            jQuery('div.views-exposed-widget').hover(function() {
                    jQuery('div.description', this).slideDown(250);
                }, function() {
                    jQuery('div.description', this).slideUp(250);
                }).find('div.description')
                .hide();
jQuery('.view-ministry-service-report table').add('.page-church-report table').footable();
jQuery('input.form-text').add('textarea.form-textarea').blur(function() {
            var value = $.trim( $(this).val() );
            $(this).val( value );
        });

            jQuery('.page-chart .page-header').append('<i class="fa fa-bar-chart-o"></i>');
            jQuery('.block-views h2').eq(0).append(' <i class="fa fa-filter"></i>');
            jQuery('#block-views-categories-block-1 h2').add('#block-views-categories-block-2 h2').append(' <i class="fa fa-tag"></i>');

            jQuery("a[href*='sample.csv']").addClass('btn btn-primary btn-lg').text('Download Sample Template').prepend('<i class="fa fa-file"></i> ');

            jQuery('#block-block-1 h2').append('<i class="fa fa-calendar"></i>');

            jQuery(".node a[href*='comment-form']").attr('title', 'Add Comments');

            jQuery('.tabledrag-toggle-weight-wrapper').hide();

            //import template link
            jQuery('.item-list ul li a[href*="template"]').addClass("btn-primary btn-lg btn").prepend('<i class="fa fa-cloud-download"></i> ');

            //ical button
            jQuery('.ical-icon img').removeAttr('src');
            jQuery('.ical-icon').text('Subscribe to calendar').prepend('<i class="fa fa-calendar"></i> ');

            jQuery('#edit-keys-wrapper label').append('<i class="fa fa-search"></i>');


            //XLS PNG
            var xls = jQuery('.feed-icon a[href*="xls"] img');
            xls.attr({
                'data-toggle': 'tooltip',
                'data-placement': 'bottom',
                'title': 'Download Records In XLS'
            });

            //Text PNG
            var txt = jQuery('.feed-icon a[href*="txt"] img');
            txt.attr({
                'data-toggle': 'tooltip',
                'data-placement': 'right',
                'title': 'Download Phone Numbers'
            });
            xls.tooltip();
            txt.tooltip();


            jQuery('#node-641 footer').remove();

            //Videos
            jQuery(".video-container").fitVids();

            jQuery('.node-pricing #tablefield-0').addClass('table table-hover table-striped table-bordered');

            jQuery('.form-item-date-filter-min label').add('#views-exposed-form-visitors-attendance-page .views-widget-filter-date_filter label').add('#views-exposed-form-attendance-page .views-widget-filter-date_filter label').add('.form-item-date-filter-max label').add('#views-exposed-form-new-members-page .views-widget-filter-date_filter_1 label').add('.form-item-date-filter-1-min label').add('.form-item-date-filter-min label').add('.form-item-date-filter-1-min label').add('.form-item-date-filter-1-max label').append(' <i class="fa fa-calendar"></i>');

            jQuery('.marker').addClass('label label-info');

            jQuery('#edit-keys').attr({
                'data-toggle': 'tooltip',
                'data-placement': 'top'
            });
            jQuery('#edit-keys').tooltip();

            jQuery('.view-id-attendance .field-name-of-member a').attr({
                'data-toggle': 'tooltip',
                'data-placement': 'top',
                'title': 'Add comments'
            });
            jQuery('.view-id-attendance .field-name-of-member a').tooltip();

            jQuery('a[href*="delete?"]').attr({
                'data-toggle': 'tooltip',
                'data-placement': 'top',
                'title': 'Delete Record'
            });
            jQuery('a[href*="edit?"]').attr({
                'data-toggle': 'tooltip',
                'data-placement': 'top',
                'title': 'Edit Record'
            });
            jQuery('.views-field-delete-node a').tooltip();
            jQuery('.views-field-edit-node a').tooltip();
            jQuery('.views-field-nid a').tooltip();
            jQuery('.views-field-nid-1 a').tooltip();


            jQuery('a[href*="#comment-form"]').attr('title', 'Add comments, prayer requests, needs, reasons for absence and any other necessary information');
            jQuery('a[href*="#comment-form"]').tooltip();
            jQuery('#views-form-members-page .views-field-comments-link a').tooltip();
            jQuery("a[href*='#comment-form']").attr({
                'data-toggle': 'tooltip',
                'data-placement': 'top'
            });
            jQuery('#views-form-new-members-page .views-field-comments-link a').tooltip();

            jQuery.fn.cleardefault = function() {
                return this.focus(function() {
                    if (this.value == this.defaultValue) {
                        this.value = "";
                    }
                }).blur(function() {
                    if (!this.value.length) {
                        this.value = this.defaultValue;
                    }
                });
            };
            jQuery(".date-clear").cleardefault();

            jQuery('.badge').tooltip();

               // Repeat field placeholder
            jQuery('#edit-field-birthday-und-0-rrule-count-child')
                .add('#edit-field-wedding-anniversary-und-0-rrule-count-child')
                .add('#edit-field-hwaf-und-0-rrule-count-child')
                .add('#edit-field-birthday-prospects-und-0-rrule-count-child')
                .attr('value', 100);

            //Birthday repeat field
            jQuery('#edit-field-birthday-und-0-rrule-freq option[value="WEEKLY"]').attr('selected', null);
            jQuery('#edit-field-birthday-und-0-rrule-freq option[value="YEARLY"]').attr('selected', 'selected');

            jQuery('#edit-field-birthday-und-0-rrule-yearly').css('display', 'block');
            jQuery('#edit-field-birthday-und-0-rrule-weekly').css('display', 'none');
            jQuery('#edit-field-birthday-und-0-rrule-freq option[value="DAILY"]')
                .add('#edit-field-birthday-und-0-rrule-freq option[value="WEEKLY"]')
                .add('#edit-field-birthday-und-0-rrule-freq option[value="MONTHLY"]')
                .remove();

            jQuery('#edit_field_birthday_und_0_rrule_freq_chosen li.active-result')
                .eq(1).removeClass('result-selected');
            jQuery('#edit_field_birthday_und_0_rrule_freq_chosen li.active-result')
                .eq(3).addClass('result-selected');


            //Wedding Anniversary date repeat field
            jQuery('#edit-field-wedding-anniversary-und-0-rrule-freq option[value="WEEKLY"]').attr('selected', null);
            jQuery('#edit-field-wedding-anniversary-und-0-rrule-freq option[value="YEARLY"]').attr('selected', 'selected');

            jQuery('#edit-field-wedding-anniversary-und-0-rrule-yearly').css('display', 'block');
            jQuery('#edit-field-wedding-anniversary-und-0-rrule-weekly').css('display', 'none');
            jQuery('#edit-field-wedding-anniversary-und-0-rrule-freq option[value="DAILY"]')
                .add('#edit-field-wedding-anniversary-und-0-rrule-freq option[value="WEEKLY"]')
                .add('#edit-field-wedding-anniversary-und-0-rrule-freq option[value="MONTHLY"]')
                .remove();

            jQuery('#edit_field_wedding_anniversary_und_0_rrule_freq_chosen li.active-result')
                .eq(1).removeClass('result-selected');
            jQuery('#edit_field_wedding_anniversary_und_0_rrule_freq_chosen li.active-result')
                .eq(3).addClass('result-selected');

        //Wedding Anniversary date repeat field for members
            jQuery('#edit-field-hwaf-und-0-rrule-freq option[value="WEEKLY"]').attr('selected', null);
            jQuery('#edit-field-hwaf-und-0-rrule-freq option[value="YEARLY"]').attr('selected', 'selected');

            jQuery('#edit-field-hwaf-und-0-rrule-yearly').css('display', 'block');
            jQuery('#edit-field-hwaf-und-0-rrule-weekly').css('display', 'none');
            jQuery('#edit-field-hwaf-und-0-rrule-freq option[value="DAILY"]')
                .add('#edit-field-hwaf-und-0-rrule-freq option[value="WEEKLY"]')
                .add('#edit-field-hwaf-und-0-rrule-freq option[value="MONTHLY"]')
                .remove();

            jQuery('#edit_field_hwaf_und_0_rrule_freq_chosen li.active-result')
                .eq(1).removeClass('result-selected');
            jQuery('#edit_field_hwaf_und_0_rrule_freq_chosen li.active-result')
                .eq(3).addClass('result-selected');



            //Prospects date repeat field
            jQuery('#edit-field-birthday-prospects-und-0-rrule-freq option[value="WEEKLY"]').attr('selected', null);
            jQuery('#edit-field-birthday-prospects-und-0-rrule-freq option[value="YEARLY"]').attr('selected', 'selected');

            jQuery('#edit-field-birthday-prospects-und-0-rrule-yearly').css('display', 'block');
            jQuery('#edit-field-birthday-prospects-und-0-rrule-weekly').css('display', 'none');
            jQuery('#edit-field-birthday-prospects-und-0-rrule-freq option[value="DAILY"]')
                .add('#edit-field-birthday-prospects-und-0-rrule-freq option[value="WEEKLY"]')
                .add('#edit-field-birthday-prospects-und-0-rrule-freq option[value="MONTHLY"]')
                .remove();

            jQuery('#edit_field_birthday_prospects_und_0_rrule_freq_chosen li.active-result')
                .eq(1).removeClass('result-selected');
            jQuery('#edit_field_birthday_prospects_und_0_rrule_freq_chosen li.active-result')
                .eq(3).addClass('result-selected');

            //Descriptions
            jQuery('<span class="description">Enable repeat checkbox to see recurrent date on <a href="#">yealy calendar</a></span>')
                .appendTo('#edit-field-birthday-prospects');
            jQuery('<span class="description">Enable repeat checkbox to see recurrent date on <a href="../../calendar/month">Yearly Calendar</a></span>')
                .appendTo('#edit-field-birthday');
            jQuery('<span class="description">Enable repeat checkbox to see recurrent date on <a href="../../calendar-wedding-anniversary">Yearly Calendar</a></span>')
                .appendTo('#edit-field-wedding-anniversary');

if(location.hostname != "flockstate.com"){
  jQuery('.flockme').hide();
    }

jQuery('li#menu-1437-1 a[href="#"]').eq(0).addClass('simptip-fade').addClass('simptip-position-right').addClass('simptip-info').addClass('simptip-smooth').attr('data-tooltip', 'Add records to database');

jQuery('li#menu-1480-1 a[href="#"]').eq(0).addClass('simptip-position-right').addClass('simptip-info').addClass('simptip-smooth').attr('data-tooltip','Add service and attendance report');

jQuery('li#menu-9943-1 a[href="#"]').eq(0).addClass('simptip-position-right').addClass('simptip-info').addClass('simptip-smooth').attr('data-tooltip','View Lists Of Content');

jQuery('li#menu-10138-1 a[href="#"]').addClass('simptip-position-right').addClass('simptip-info').addClass('simptip-smooth').attr('data-tooltip','View birthdays and anniversaries');

jQuery('li#menu-9981-1 a').addClass('simptip-position-right').addClass('simptip-info').addClass('simptip-smooth').attr('data-tooltip','Charts and graphs of records');

jQuery('li#menu-10206-1 a').addClass('simptip-position-right').addClass('simptip-info').addClass('simptip-smooth').attr('data-tooltip','Documentation');

jQuery('li#menu-6225-1 a').addClass('simptip-position-right').addClass('simptip-info').addClass('simptip-smooth').attr('data-tooltip','Frequently Asked Questions');

jQuery('li#menu-2329-1 a').addClass('simptip-position-right').addClass('simptip-info').addClass('simptip-smooth').attr('data-tooltip','Contact us for support');

 jQuery('.tabs ul.primary').addClass('nav nav-tabs');
    jQuery('.tabs ul.primary li').attr('role', 'presentation');

jQuery('.addmail').attr('title', 'Add Email')
                    jQuery('.addmail').tooltip();
                    jQuery('.addfone').tooltip();
  $('a.goback').click(function(){
        parent.history.back();
        return false;
    });

        jQuery('#searchbox').keyup(function(){
                var searchterm = jQuery('input#searchbox').val();
                jQuery('table').trigger('footable_filter', {filter: searchterm});
        });




        }
    };
})(jQuery);
