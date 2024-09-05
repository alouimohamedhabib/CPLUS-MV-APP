import React, { memo } from 'react';

function BlockWrapper({ children , className}: { children: React.ReactNode, className?: string }) {
  return <div className={`${className} block-wrapper py-8 bg-red-200`}>
    {children}
  </div>
}

export default memo(BlockWrapper)
