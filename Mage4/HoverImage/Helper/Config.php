<?php
/**
 * Copyright © Mage4. All rights reserved.
 * See MS-LICENSE.txt for license details.
 */
namespace Mage4\HoverImage\Helper;

/**
 * Class Config
 */
class Config extends \Magento\Framework\App\Helper\AbstractHelper
{
    /**
     * Get module settings
     *
     * @param string $key
     * @return mixed
     */
    public function getConfigModule($key)
    {
        return $this->scopeConfig
            ->getValue(
                'mage4_hover_image_catalog/general/' . $key,
                \Magento\Store\Model\ScopeInterface::SCOPE_STORE
            );
    }

    /**
     * @return bool
     */
    public function isEnabled()
    {
        if ($this->getConfigModule('enabled')
            && $this->isModuleOutputEnabled('Mage4_HoverImage')
        ) {
            return true;
        }
        return false;
    }
}
