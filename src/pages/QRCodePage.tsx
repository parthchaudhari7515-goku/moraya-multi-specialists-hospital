import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import QRCode from 'qrcode';
import html2canvas from 'html2canvas';
import { 
  ArrowLeft, 
  Download, 
  Copy, 
  Share2, 
  QrCode,
  Check 
} from 'lucide-react';

const QRCodePage = () => {
  const [qrCodes, setQrCodes] = useState<{ [key: string]: string }>({});
  const [currentUrl, setCurrentUrl] = useState('');
  const [copied, setCopied] = useState(false);

  const sizes = [
    { size: 150, name: 'Small', filename: 'moraya-qr-150.png' },
    { size: 250, name: 'Medium', filename: 'moraya-qr-250.png' },
    { size: 400, name: 'Large', filename: 'moraya-qr-400.png' },
    { size: 600, name: 'Extra Large', filename: 'moraya-qr-600.png' }
  ];

  useEffect(() => {
    const url = window.location.origin;
    setCurrentUrl(url);

    const generateQRCodes = async () => {
      const codes: { [key: string]: string } = {};
      
      for (const sizeConfig of sizes) {
        try {
          const qrUrl = await QRCode.toDataURL(url, {
            width: sizeConfig.size,
            margin: 2,
            color: {
              dark: '#000000',
              light: '#FFFFFF'
            }
          });
          codes[sizeConfig.size.toString()] = qrUrl;
        } catch (error) {
          console.error(`Error generating QR code for size ${sizeConfig.size}:`, error);
        }
      }
      
      setQrCodes(codes);
    };

    generateQRCodes();
  }, []);

  const downloadQR = async (size: number, filename: string) => {
    const qrUrl = qrCodes[size.toString()];
    if (!qrUrl) return;

    try {
      // Create a temporary container
      const container = document.createElement('div');
      container.style.position = 'absolute';
      container.style.left = '-9999px';
      container.style.background = 'white';
      container.style.padding = '20px';
      
      const img = document.createElement('img');
      img.src = qrUrl;
      img.style.display = 'block';
      
      container.appendChild(img);
      document.body.appendChild(container);

      // Wait for image to load
      await new Promise((resolve) => {
        img.onload = resolve;
      });

      // Capture with html2canvas
      const canvas = await html2canvas(container, {
        backgroundColor: 'white',
        scale: 2
      });

      // Clean up
      document.body.removeChild(container);

      // Download
      const link = document.createElement('a');
      link.download = filename;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error('Error downloading QR code:', error);
      // Fallback: direct download
      const link = document.createElement('a');
      link.download = filename;
      link.href = qrUrl;
      link.click();
    }
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Error copying to clipboard:', error);
    }
  };

  const shareLink = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Morya Multi Speciality  Hospital',
          text: 'Visit Morya Multi Speciality  Hospital website',
          url: currentUrl
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center space-x-2">
              <QrCode className="h-6 w-6 text-blue-600" />
              <h1 className="text-xl font-bold text-gray-900">QR Code Tools</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            QR Code – Morya Multi Speciality  Hospital
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Download QR codes in different sizes or share our hospital website link
          </p>
        </div>

        {/* Current URL Display */}
        <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Current URL</h3>
          <div className="bg-gray-50 rounded-lg p-4 break-all text-gray-700 font-mono text-sm">
            {currentUrl}
          </div>
        </div>

        {/* QR Code Downloads */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Download QR Codes
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {sizes.map((sizeConfig) => (
              <div
                key={sizeConfig.size}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="text-center mb-4">
                  <div className="bg-gray-50 rounded-lg p-4 mb-4 inline-block">
                    {qrCodes[sizeConfig.size.toString()] ? (
                      <img
                        src={qrCodes[sizeConfig.size.toString()]}
                        alt={`QR Code ${sizeConfig.size}px`}
                        className="mx-auto"
                        style={{ 
                          width: Math.min(sizeConfig.size, 150), 
                          height: Math.min(sizeConfig.size, 150) 
                        }}
                      />
                    ) : (
                      <div 
                        className="bg-gray-200 rounded flex items-center justify-center"
                        style={{ width: 150, height: 150 }}
                      >
                        <QrCode className="h-8 w-8 text-gray-400" />
                      </div>
                    )}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {sizeConfig.name} ({sizeConfig.size}px)
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    {sizeConfig.filename}
                  </p>
                  <button
                    onClick={() => downloadQR(sizeConfig.size, sizeConfig.filename)}
                    disabled={!qrCodes[sizeConfig.size.toString()]}
                    className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg font-medium hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2 mx-auto"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Share Options */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Share Options
          </h3>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={copyLink}
              className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
              <span>{copied ? 'Copied!' : 'Copy Link'}</span>
            </button>
            
            {navigator.share && (
              <button
                onClick={shareLink}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <Share2 className="h-5 w-5" />
                <span>Share</span>
              </button>
            )}
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-blue-50 rounded-xl p-6">
          <h4 className="font-semibold text-blue-900 mb-3">How to use:</h4>
          <ul className="text-blue-800 space-y-2 text-sm">
            <li>• Choose the appropriate size for your needs</li>
            <li>• Click "Download" to save the QR code as a PNG image</li>
            <li>• Use "Copy Link" to share the URL directly</li>
            <li>• The QR code always points to our hospital website</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default QRCodePage;