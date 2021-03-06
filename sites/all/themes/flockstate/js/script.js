(function($) {

    Drupal.behaviors.myBehavior = {
        attach: function(context, settings) {


            jQuery('div.views-exposed-widget').hover(function() {
                    jQuery('div.description', this).slideDown(250);
                }, function() {
                    jQuery('div.description', this).slideUp(250);
                }).find('div.description')
                .hide();

       jQuery('input.form-text').add('textarea.form-textarea').blur(function() {
            var value = $.trim( $(this).val() );
            $(this).val( value );
        });
         
         jQuery('.page-ministry-report table').add('.page-church-report table').add('.page-group-report table').add('.view-id-summary_of_guests table').footable();

            jQuery('.page-chart .page-header').append('<i class="fa fa-bar-chart-o"></i>');
            jQuery('.block-views h2').eq(0).append(' <i class="fa fa-filter"></i>');
            jQuery('#block-views-categories-block-1 h2').add('#block-views-categories-block-2 h2').append(' <i class="fa fa-tag"></i>');
         
            jQuery("a[href*='sample.csv']").text('Download Sample Template').prepend('<i class="fa fa-file"></i> ');

            jQuery('#block-block-1 h2').append('<i class="fa fa-calendar"></i>');

            jQuery(".node a[href*='comment-form']").attr('title', 'Add Comments');

            jQuery('.tabledrag-toggle-weight-wrapper').hide();

            //import template link
            jQuery('.item-list ul li a[href*="template"]').prepend('<i class="fa fa-cloud-download"></i> ');

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
            jQuery('<span class="description">Enable repeat checkbox to see recurrent date on Yealy calendar</span>')
                .appendTo('#edit-field-birthday-prospects');
            jQuery('<span class="description">Enable repeat checkbox to see recurrent date on Yearly Calendar</span>')
                .appendTo('#edit-field-birthday');
            jQuery('<span class="description">Enable repeat checkbox to see recurrent date on Yearly Calendar</span>')
                .appendTo('#edit-field-hwaf');

if(location.hostname != "flockstate.com"){
  jQuery('.flockme').hide();
    }
    
    //Account expired alert
if(location.href == "http://flockstate.dev/%3Cfront%3E"){
  alert("Your FlockState account has expired. RENEW NOW for continued use. Thank you");
        }

// Navigation Tooltips
jQuery('li#menu-1437-1 a[href="#"]').eq(0).addClass('protip').attr('data-pt-title', 'Add People');

jQuery('li#menu-1480-1 a[href="#"]').eq(0).addClass('protip').attr('data-pt-title', 'Add Reports');

jQuery('li#menu-9943-1 a[href="#"]').eq(0).addClass('protip').attr('data-pt-title', 'View Lists');

jQuery('li#menu-10138-1 a[href="#"]').addClass('protip').attr('data-pt-title', 'Birthdays And Anniversaries');

jQuery('li#menu-9981-1 a[href="#"]').addClass('protip').attr('data-pt-title', 'Charts Of Records');

jQuery('li#menu-10632-1 a').addClass('protip').attr('data-pt-title', 'User Guide');

jQuery('li#menu-2329-1 a').addClass('protip').attr('data-pt-title', 'Contact us for support');


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
jQuery('input#edit-field-memail-und-0-email')
   .add('input#edit-field-memail-und-1-email')
   .Setcase({caseValue : 'lower'});
//Capitalize first word as user input
//usage
// jQuery('input#edit-field-surname-und-0-value')
// .add('input#edit-field-name-und-0-value')
// .add('input#edit-field-role-und-0-value')
// .add('input#edit-field-group-name-und-0-value')
// .add('input#edit-field-class-und-0-value')
// .add('input#edit-field-member-occupation-und-0-value')
// .add('input#edit-field-address-und-0-value')
// .add('input#edit-field-church-und-0-value')
// .keyup(function() {
//    toUpper(this);
// });


// //function
// function toUpper(obj) {
//   var mystring = obj.value;
//   var sp = mystring.split(' ');
//   var wl=0;
//   var f ,r;
//   var word = new Array();
//   for (i = 0 ; i < sp.length ; i ++ ) {
//     f = sp[i].substring(0,1).toUpperCase();
//     r = sp[i].substring(1).toLowerCase();
//     word[i] = f+r;
//   }
//   newstring = word.join(' ');
//   obj.value = newstring;
//   return true;
// }


jQuery('#edit-field-tel-no-und-0-value').on('blur', function() {
    var $this = $(this),
        currentValue = $this.val();

    if (this.value.indexOf('2340') === 0) {
    	$this.val(currentValue.replace('2340', ''));
    }
});

jQuery('#edit-field-tel-no-und-0-value').on('blur', function() {
    var $this = $(this),
        currentValue = $this.val();

    if (this.value.indexOf('234') === 0) {
    	$this.val(currentValue.replace('234', ''));
    }
});

jQuery('#edit-field-tel-no-und-0-value').on('blur', function() {
    var $this = $(this),
        currentValue = $this.val();

    if (this.value.indexOf('0') === 0) {
    	$this.val(currentValue.replace('0', ''));
    }
});

jQuery('#edit-field-tel-no-und-1-value').on('blur', function() {
    var $this = $(this),
        currentValue = $this.val();

    if (this.value.indexOf('2340') === 0) {
    	$this.val(currentValue.replace('2340', ''));
    }
});

jQuery('#edit-field-tel-no-und-1-value').on('blur', function() {
    var $this = $(this),
        currentValue = $this.val();

    if (this.value.indexOf('234') === 0) {
    	$this.val(currentValue.replace('234', ''));
    }
});

jQuery('#edit-field-tel-no-und-1-value').on('blur', function() {
    var $this = $(this),
        currentValue = $this.val();

    if (this.value.indexOf('0') === 0) {
    	$this.val(currentValue.replace('0', ''));
    }
});

$.protip({
});

jQuery('#edit-name-1').addClass('protip').attr(
  "data-pt-title",'Enter the number of times present or absent to search for'
  );
  
  jQuery('#edit-date-filter-1-value-datepicker-popup-1').addClass('protip').
    attr('data-pt-title', 'Select date the guest first came to church');

jQuery('td.views-field-privatemsg-link a').addClass('protip')
.attr('data-pt-title', 'Send email about the follow up of this guest');

jQuery('div#edit-field-new-member-value-wrapper label').addClass('protip').
    attr('data-pt-title', 'Select Yes to view new members i.e. visitors moved to members');

//jQuery('#edit-field-tel-no-und-1-value').add('#edit-field-tel-no-und-0-value').attr('maxLength', 10);




        }
    };
})(jQuery);
