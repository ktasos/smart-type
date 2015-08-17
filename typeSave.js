/*
 * TypeSave 0.2
 * Docs: https://github.com/ktasos/type-save
 * Author: Tasos Karagiannis
 * Website: http://codingstill.com
 * Twitter: https://twitter.com/codingstill
 */

(function ($) {
    $.fn.typeSave = function (options) {
        options = $.extend({}, $.fn.typeSave.defaultOptions, options);

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
                            jItem.attr(dataAttribute, newValue);
                            options.onSave(oldValue, newValue, jItem[0]);
                        }
                        if (isCancel) {
                            jItem.val(oldValue);
                            options.onCancel(oldValue, newValue, jItem[0]);
                        }
                    }
                }

                options.preventDefault && e.preventDefault();
            });
        });
    }

    $.fn.typeSave.defaultOptions = {
        preventDefault: true,
        dataAttr: 'val',
        onSave: function (oldValue, newValue, textbox) { },
        onCancel: function (oldValue, newValue, textbox) { }
    };
})(jQuery);
