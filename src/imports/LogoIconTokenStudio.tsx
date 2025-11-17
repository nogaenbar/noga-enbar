import React from 'react';
import imgTokenStudioLogo from "figma:asset/36a19cc155133d9751c718d1eb2d700d4cda727b.png";

const LogoIconTokenStudio: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <img
        src={imgTokenStudioLogo}
        alt="Token Studio logo"
        className="w-full h-full object-contain"
        style={{ maxWidth: '100%', maxHeight: '100%' }}
        onError={(e) => {
          console.error('Token Studio logo failed to load:', imgTokenStudioLogo);
        }}
        onLoad={() => {
          console.log('Token Studio logo loaded successfully:', imgTokenStudioLogo);
        }}
      />
    </div>
  );
};

export default LogoIconTokenStudio;