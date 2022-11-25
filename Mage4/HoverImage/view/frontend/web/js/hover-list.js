/**
* Copyright © Mage4. All rights reserved.
* See MS-LICENSE.txt for license details.
*/

define([
    'jquery',
    'jquery/ui'
], function ($) {

    $.widget('mage4.hoverList', {
        options: {
            hoverData: {},
            origData: {},
            itemsSelector: ".product-item",
            itemImageSelector: "product-image-photo"
        },

        _create: function () {
            this._bind();
        },

        _bind: function () {
            var self = this;
            $(this.options.itemsSelector)
                .mouseover(function (event) {
                    self.onMouseOver(event)})
                .mouseout(function (event) {
                    self.onMouseOut(event)});
        },

        onMouseOver: function (event) {
            var $elementTarget = $(event.target);
            if (!$elementTarget.hasClass(this.options.itemImageSelector)) {
                return;
            }
            var $element = $(event.currentTarget);
            var productId = $('.price-box', $element).attr('data-product-id');
            if (this.options.hoverData[productId]) {
                var $image = $('.'+this.options.itemImageSelector, $element);
                this.options.origData[productId] = $image.attr('src');
                $image.attr('src', this.options.hoverData[productId]);
            }
        },

        onMouseOut: function (event) {
            var $element = $(event.currentTarget);
            var productId = $('.price-box', $element).attr('data-product-id');
            if (this.options.origData[productId]) {
                var $image = $('.'+this.options.itemImageSelector, $element);
                $image.attr('src', this.options.origData[productId]);
            }
        }
    });

    return $.mage4.hoverList;

});

