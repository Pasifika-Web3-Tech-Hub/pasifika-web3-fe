"use client";

import { DynamicWidget } from "@/lib/dynamic";
import { useState, useEffect } from "react";
import { useDarkMode } from "@/lib/useDarkMode";
import "./page.css";
import Image from "next/image";
import { useDynamicContext, useIsLoggedIn } from "@dynamic-labs/sdk-react-core";
import { useRouter } from 'next/navigation';

export default function Main() {
  const { isDarkMode } = useDarkMode();
  const { sdkHasLoaded, primaryWallet, handleLogOut } = useDynamicContext();
  const isLoggedIn = useIsLoggedIn();
  const router = useRouter();
  const [showRedirectPrompt, setShowRedirectPrompt] = useState(false);
  const [returningFromServices, setReturningFromServices] = useState(false);
  
  // Check if the user is returning from services page
  useEffect(() => {
    // Use sessionStorage to detect if user has just returned from services
    const fromServices = sessionStorage.getItem('fromServices');
    if (fromServices === 'true') {
      setReturningFromServices(true);
      sessionStorage.removeItem('fromServices');
    }
  }, []);
  
  // Effect to show redirect prompt when authenticated
  useEffect(() => {
    if (sdkHasLoaded && isLoggedIn && primaryWallet && !returningFromServices) {
      setShowRedirectPrompt(true);
    }
  }, [sdkHasLoaded, isLoggedIn, primaryWallet, returningFromServices]);
  
  // Handle redirect to services
  const handleRedirectToServices = () => {
    router.push('/services');
  };
  
  // Handle cancel redirect
  const handleCancelRedirect = () => {
    setShowRedirectPrompt(false);
  };
  
  return (
    <div className={`container ${isDarkMode ? 'dark' : 'light'}`}>
      {/* Header Section - Pasifika Styled */}
      <div className="header">
        <div className="header-container">
          <div className="logo">
            <Image
              src="/pasifika.png"
              alt="Pasifika Web3 Tech Hub"
              width={50}
              height={50}
            />
            <div className="logo-text">
              <span className="logo-accent">Pasifika</span>
            </div>
          </div>
          
          <div className="nav-menu">
            <div className="nav-item">
              <button
                className="btn btn-primary"
                onClick={() => {
                  const tokenBanner = document.querySelector('.token-banner');
                  if (tokenBanner) {
                    // Use scrollIntoView with an offset to ensure the banner is visible
                    const headerHeight = 80; // Height of the fixed header
                    const yOffset = -headerHeight; // Offset to account for the fixed header
                    const y = tokenBanner.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    
                    window.scrollTo({
                      top: y,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section - Pasifika Styled */}
      <div className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Building The Future with Web3</h1>
            <p className="hero-subtitle">
              Join us in creating a decentralized ecosystem for a marketplace that empowers Pacific communities
              through blockchain technology and digital innovation.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => window.location.href = "/learn-more"}
              >
                Learn More and Get Started
              </button>
            </div>
          </div>
          <div className="hero-image">
            <Image
              src="/pasifika.png"
              alt="Pasifika"
              width={500}
              height={500}
              priority
            />
          </div>
        </div>
      </div>

      {/* Service Motto Section */}
      <div className="service-motto" style={{ padding: '20px 0', backgroundColor: 'transparent' }}>
        <div className="container" style={{ textAlign: 'center', margin: '2rem auto' }}>
          <h2 className="motto-title" style={{ fontSize: '1.8rem', color: '#FF5722', marginBottom: '10px' }}>- Always At Your Service -</h2>
          <p className="philosophy-text" style={{ fontSize: '1.4rem', color: isDarkMode ? '#FF9800' : '#333333', fontStyle: 'italic', marginTop: '5px' }}>&ldquo;If we take care of our own, they will take care of us.&rdquo;</p>
        </div>
      </div>

      {/* Our Story Link Section */}
      <div style={{ 
        padding: '20px 0', 
        backgroundColor: isDarkMode ? 'rgba(255, 87, 34, 0.1)' : 'rgba(255, 152, 0, 0.05)', 
        margin: '0 auto 40px',
        borderTop: '1px solid #FF5722',
        borderBottom: '1px solid #FF5722',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center',
            padding: '20px'
          }}>
            <h2 style={{ 
              fontSize: '1.8rem', 
              marginBottom: '15px',
              background: 'linear-gradient(to right, #FF5722, #FF9800)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Discover Our Journey
            </h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '20px', maxWidth: '700px' }}>
              Learn about the vision, progress, and future of Pasifika Web3 Tech Hub as we build a decentralized ecosystem for Pacific Island communities.
            </p>
            <a 
              href="/our-story" 
              style={{
                display: 'inline-block',
                padding: '12px 30px',
                backgroundColor: '#FF5722',
                color: 'white',
                borderRadius: '30px',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 8px rgba(255, 87, 34, 0.3)',
                border: 'none',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 6px 12px rgba(255, 87, 34, 0.4)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(255, 87, 34, 0.3)';
              }}
            >
              Read Our Story
            </a>
          </div>
        </div>
      </div>

      {/* Login and Footer Combined Section */}
      <div className="token">
        <div className="token-banner">
          <h2 className="token-banner-title">Login or Sign-Up</h2>
        </div>
        <div className="container">
          <div className="token-container">
            <div className="token-content">
              <p className="token-subtitle">
                Sign in or create an account to access all features of the Pasifika Web3 Tech Hub.
              </p>
              <div className="token-features">
                <div className="token-feature">
                  <div className="token-feature-icon">✓</div>
                  <div>Secure connection with multiple wallet providers</div>
                </div>
                <div className="token-feature">
                  <div className="token-feature-icon">✓</div>
                  <div>Access to blockchain features and services</div>
                </div>
                <div className="token-feature">
                  <div className="token-feature-icon">✓</div>
                  <div>Manage your digital assets easily</div>
                </div>
              </div>
            </div>
            <div className="token-chart">
              {/* Wallet Connection Widget */}
              <DynamicWidget />
              {/* Logout button when connected */}
              {isLoggedIn && primaryWallet && (
                <div className="logout-container">
                  <button 
                    className="btn logout-button"
                    onClick={() => {
                      if (handleLogOut) {
                        handleLogOut();
                        window.location.reload();
                      }
                    }}
                  >
                    Logout from Wallet
                  </button>
                </div>
              )}
              {/* Redirect prompt that appears when logged in */}
              {showRedirectPrompt && (
                <div className="redirect-prompt">
                  <p>You are now connected to your wallet!</p>
                  <div className="prompt-buttons">
                    <button 
                      className="btn btn-primary" 
                      onClick={handleRedirectToServices}
                    >
                      Continue to Services
                    </button>
                    <button 
                      className="btn btn-secondary" 
                      onClick={handleCancelRedirect}
                    >
                      Stay on Home Page
                    </button>
                  </div>
                </div>
              )}
              {/* Notice about functionality */}
              <div className="redirection-notice">
                <p>Connect your wallet to access our smart contract services.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Spacer div with a fixed height of 1cm */}
      <div style={{ height: '1cm' }} />
      {/* Pasifika DePIN Description Section */}
      <div className="dep-in-section" style={{ background: isDarkMode ? '#222' : '#fff', color: isDarkMode ? '#FF9800' : '#FF5722', padding: '1rem 0', margin: '0 auto', maxWidth: 900, textAlign: 'center', borderRadius: 12, boxShadow: isDarkMode ? '0 2px 16px #111' : '0 2px 16px #eee' }}>
        <p style={{ fontSize: '1.25rem', fontWeight: 500, margin: 0 }}>
          The Pasifika Web3 Tech Hub represents a groundbreaking decentralized physical infrastructure network (DePIN) designed specifically for Pacific Island communities. We have migrated to Arbitrum and our use cases & proof of concept are now live on Arbitrum testnet. We chose Arbitrum for its exceptional throughput, security inherited from Ethereum, and low transaction fees that benefit our Pacific Island users. Our platform creates a sustainable economic ecosystem that preserves cultural heritage while creating new digital opportunities for islanders.
        </p>
      </div>

      {/* Footer Banner */}
      <div className="footer-banner">
        <p>Copyright &copy; Pasifika 2025</p>
      </div>
    </div>
  );
}
