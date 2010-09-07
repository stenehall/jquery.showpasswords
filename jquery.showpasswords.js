/*
 * Show Passwords - jQuery plugin
 * written by eighty4	
 * http://broken8.se/showpasswords
 *
 * Licensed under something...
 *
 *
 * Usage:
 *
 * Initialize the script with some options.
 ***********************************

 jQuery(document).ready(function() {
	jQuery.showpasswords();
 });

 *
 * No idea if it works on any browser except FF3.5 on OS X 10.6
 *
 *	Built for jQuery library
 *	http://jquery.com
 *
 */

jQuery.extend({

		showpasswords: function(options){

			// default configuration properties
			var defaults = {
				prefix : 'clear-',
				label: 'Show password',
				clearOnFocus: true,
			};
			options = $.extend( defaults, options );
		
			jQuery('input[type="password"]').each(
				function() {
					var id = this.id;
	
					var checkbox = '<input checked="checked" name="checkbox-'+id+'" type="checkbox" id="checkbox-'+id+'">';
					jQuery(checkbox).insertAfter(this);
					var password = '<input type="input" value="" id="'+options.prefix+id+'" name="'+options.prefix+id+'"><label for="'+options.prefix+id+'">'+options.label+'</label>';
					jQuery(password).insertAfter(this);
					
					jQuery('#'+options.prefix+id).attr('value', jQuery('#'+id).attr('value'));
					jQuery('#checkbox-'+id).change(
						function() {
							if(jQuery(this).is(':checked')){
								jQuery('#'+options.prefix+id).attr('value', jQuery('#'+id).attr('value'));
								jQuery('#'+id).hide();
								jQuery('#'+options.prefix+id).show();
							} else {
								jQuery('#'+id).attr('value', jQuery('#'+options.prefix+id).attr('value'));
								jQuery('#'+options.prefix+id).hide();
								jQuery('#'+id).show();							
							}
						}
					);
					if(options.clearOnFocus) {
						var valueInit = this.value;
						jQuery('#'+options.prefix+id).focus(
							function(){
								if(this.value == valueInit) {
									this.value = "";
								}
							}
						);
						jQuery('#'+id).focus(
							function(){
								if(this.value == valueInit) {
									this.value = "";
								}
							}
						);
					}
					jQuery(this).css('display', 'none');
				}
			);
		}
	});