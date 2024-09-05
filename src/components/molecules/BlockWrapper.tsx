import React, { memo } from 'react';

function BlockWrapper({ children , className}: { children: React.ReactNode, className?: string }) {
  return <div className={`${className} block-wrapper py-10 mt-4 mb-4`}>
    {children}
  </div>
}

export default memo(BlockWrapper)
