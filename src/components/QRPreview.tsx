import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import QRCode from 'qrcode';
import { QrCode, ExternalLink } from 'lucide-react';

const QRPreview = () => {
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');

  useEffect(() => {
    const generateQR = async () => {
      try {
        const currentUrl = window.location.origin;
        const qrUrl = await QRCode.toDataURL(currentUrl, {
          width: 250,
          margin: 2,
          color: {
            dark: '#000000',
            light: '#FFFFFF'
          }
        });
        setQrCodeUrl(qrUrl);
      } catch (error) {
        console.error('Error generating QR code:', error);
      }
    };

    generateQR();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Quick Access QR Code
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Scan this QR code to quickly access our hospital website and services
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-8 max-w-md mx-auto">
          <div className="bg-white rounded-lg p-6 shadow-lg mb-6">
            {qrCodeUrl ? (
              <img
                src={qrCodeUrl}
                alt="Hospital QR Code"
                className="w-64 h-64 mx-auto"
              />
            ) : (
              <div className="w-64 h-64 mx-auto bg-gray-200 rounded-lg flex items-center justify-center">
                <QrCode className="h-16 w-16 text-gray-400" />
              </div>
            )}
          </div>
          
          <p className="text-gray-600 mb-6">
            Scan with your phone camera to visit our website
          </p>

          <Link
            to="/qr-code"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl space-x-2"
          >
            <QrCode className="h-5 w-5" />
            <span>Open Full QR Tools</span>
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default QRPreview;