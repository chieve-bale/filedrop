import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { useTranslation } from 'react-i18next';
import { FaPaperPlane, FaCopy } from 'react-icons/fa';
import { useSelector } from 'react-redux';

import { StateType } from '../../reducers';
import { copy } from '../../utils/copy';
import { isShareSupported } from '../../utils/browser';

interface ConnectSectionProps {
  href: string;
}

const ConnectSection: React.FC<ConnectSectionProps> = ({ href }) => {
  const appName = useSelector((state: StateType) => state.appName);
  const { t } = useTranslation();
  const onShare = () => {
    (navigator as any).share({
      title: appName + ' - transfer files',
      url: href,
    });
  };

  return (
    <div className="connect center subsection">
      <div className="info">{t('connect')}</div>
      <div>
        <QRCodeSVG value={href} size={192} className="qrcode" />
      </div>
      <div className="copy">
        <pre>{href}</pre>
        <button className="icon-button" onClick={() => copy(href)}>
          <FaCopy />
        </button>
        {isShareSupported && (
          <button onClick={onShare} className="icon-button">
            <FaPaperPlane />
          </button>
        )}
      </div>
    </div>
  );
};

export default ConnectSection;
