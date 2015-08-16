/*
 * TypeSave 0.1
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
                if (e.which === 13) {
                    var newValue = jItem.val();
                    var oldValue = jItem.attr(dataAttribute);
                    if (newValue !== oldValue) {
                        jItem.attr(dataAttribute, newValue);
                        options.onSave(oldValue, newValue);
                    }
                }
                else if (e.which === 27) {
                    var oldValue = jItem.attr(dataAttribute);
                    jItem.val(oldValue);
                    options.onCancel();
                }

                options.preventDefault && e.preventDefault();
            });
        });
    }

    $.fn.typeSave.defaultOptions = {
        preventDefault: true,
        dataAttr: 'val',
        onSave: function (oldValue, newValue) { },
        onCancel: function () { }
    };
})(jQuery);
