/*
 * smartType 0.3
 * Docs: https://github.com/ktasos/smart-type
 * Author: Tasos Karagiannis
 * Website: http://codingstill.com
 * Twitter: https://twitter.com/codingstill
 */

(function ($) {
    $.fn.smartType = function (options) {
        options = $.extend({}, $.fn.smartType.defaultOptions, options);

        var dataAttribute = 'data-' + options.dataAttr;

        this.each(function (idx, item) {
            var jItem = jQuery(item);
            jItem.attr(dataAttribute, jItem.val());

            jItem.keyup(function (e) {
                var isSave = e.which === 13;
                var isCancel = e.which === 27;

                if (isSave || isCancel) {
                    var oldValue = jItem.attr(dataAttribute);
                    var newValue = jItem.val();

                    if (oldValue !== newValue) {
                        if (isSave) {
                            if (options.requireOnSave && newValue === '') {
                                jItem.focus();
                            }
                            else {
                                jItem.attr(dataAttribute, newValue);
                                options.onSave(oldValue, newValue, jItem[0]);
                            }

                            options.preventDefaultOnSave && e.preventDefault();
                        }
                        if (isCancel) {
                            if (options.clearOnCancel) {
                                oldValue = '';
                                jItem.attr(dataAttribute, oldValue);
                            }

                            jItem.val(oldValue);
                            options.onCancel(oldValue, newValue, jItem[0]);
                        }
                    }
                }

            });
        });
    };

    $.fn.smartType.defaultOptions = {
        clearOnCancel: false,
        requireOnSave: false,
        preventDefaultOnSave: true,
        dataAttr: 'val',
        onSave: function (oldValue, newValue, textbox) { },
        onCancel: function (oldValue, newValue, textbox) { }
    };
})(jQuery);
