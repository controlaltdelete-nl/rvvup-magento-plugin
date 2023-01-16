var config = {
    config: {
        mixins: {
            "Magento_Swatches/js/swatch-renderer": {
                'Rvvup_Payments/js/swatch-renderer-mixin' : true
            },
            "Magento_Bundle/js/price-bundle": {
                'Rvvup_Payments/js/bundle/price-bundle-mixin' : true
            },
            "Magento_Checkout/js/model/cart/totals-processor/default": {
                'Rvvup_Payments/js/clearpay/clearpay-price-mixin' : true
            },
        }
    }
};
