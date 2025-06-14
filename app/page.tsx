"use client";

import PasifikaWalletConnect from "./components/PasifikaWalletConnect";
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
            {/* Login button removed */}
          </div>
        </div>
      </div>

      {/* Hero Section - Pasifika Styled */}
      <div className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Building The Future with Web3</h1>
            <p className="hero-subtitle">
              Join us in creating a decentralized ecosystem for a marketplace that empowers Pacific communities through blockchain technology and digital innovation.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => window.location.href = "/learn-more"}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '500',
                  borderRadius: '30px',
                  boxShadow: '0 4px 8px rgba(255, 87, 34, 0.3)'
                }}
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
                background: 'linear-gradient(to right, #FF5722, #FF9800)',
                color: 'white',
                borderRadius: '30px',
                textDecoration: 'none',
                fontSize: '16px',
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

      {/* Pasifika Exchange Feature Section */}
      <div style={{ 
        padding: '60px 0', 
        backgroundColor: isDarkMode ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.9)',
        borderRadius: '8px',
        margin: '40px auto',
        maxWidth: '1200px'
      }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            textAlign: 'center',
            marginBottom: '30px',
            background: 'linear-gradient(to right, #FF5722, #FF9800)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Pasifika Exchange
          </h2>
          <p style={{ fontSize: '1.2rem', textAlign: 'center', marginBottom: '40px', maxWidth: '800px', margin: '0 auto 40px' }}>
            Our cross-chain decentralized exchange platform built specifically for Pacific Island communities
          </p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
            {/* Feature 1: Chainlink Price Feeds */}
            <div style={{
              flex: '1 1 300px',
              maxWidth: '350px',
              padding: '30px',
              backgroundColor: isDarkMode ? 'rgba(50, 50, 50, 0.7)' : 'rgba(255, 255, 255, 0.9)',
              borderRadius: '12px',
              boxShadow: isDarkMode ? '0 8px 24px rgba(0, 0, 0, 0.3)' : '0 8px 24px rgba(200, 200, 200, 0.3)',
              transition: 'transform 0.3s ease',
              cursor: 'pointer',
              border: `1px solid ${isDarkMode ? '#444' : '#eee'}`
            }} onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)'
            }} onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px', color: '#FF5722' }}>🔗</div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '10px', color: isDarkMode ? '#FF9800' : '#FF5722' }}>Reliable Price Oracle</h3>
              <p>
                Secure and reliable token valuations through Chainlink price feeds with advanced decimal handling for financial safety.
              </p>
            </div>

            {/* Feature 2: Cross-Chain Bridge */}
            <div style={{
              flex: '1 1 300px',
              maxWidth: '350px',
              padding: '30px',
              backgroundColor: isDarkMode ? 'rgba(50, 50, 50, 0.7)' : 'rgba(255, 255, 255, 0.9)', 
              borderRadius: '12px',
              boxShadow: isDarkMode ? '0 8px 24px rgba(0, 0, 0, 0.3)' : '0 8px 24px rgba(200, 200, 200, 0.3)',
              transition: 'transform 0.3s ease',
              cursor: 'pointer',
              border: `1px solid ${isDarkMode ? '#444' : '#eee'}`
            }} onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)'
            }} onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px', color: '#FF5722' }}>🌉</div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '10px', color: isDarkMode ? '#FF9800' : '#FF5722' }}>Cross-Chain Bridge</h3>
              <p>
                Connect multiple blockchain networks with our cross-chain bridge functionality powered by Chainlink CCIP technology.
              </p>
            </div>

            {/* Feature 3: Arbitrum Integration */}
            <div style={{
              flex: '1 1 300px',
              maxWidth: '350px',
              padding: '30px',
              backgroundColor: isDarkMode ? 'rgba(50, 50, 50, 0.7)' : 'rgba(255, 255, 255, 0.9)',
              borderRadius: '12px',
              boxShadow: isDarkMode ? '0 8px 24px rgba(0, 0, 0, 0.3)' : '0 8px 24px rgba(200, 200, 200, 0.3)',
              transition: 'transform 0.3s ease', 
              cursor: 'pointer',
              border: `1px solid ${isDarkMode ? '#444' : '#eee'}`
            }} onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)'
            }} onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px', color: '#FF5722' }}>⚡</div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '10px', color: isDarkMode ? '#FF9800' : '#FF5722' }}>Low-Fee Trading</h3>
              <p>
                Trade with minimal fees on Arbitrum&apos;s Layer-2 network, ensuring cost-effective transactions for Pacific Island users.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <a 
              href="/exchange" 
              style={{
                display: 'inline-block',
                padding: '16px 40px',
                background: 'linear-gradient(to right, #FF5722, #FF9800)',
                color: 'white',
                borderRadius: '30px',
                textDecoration: 'none',
                fontSize: '18px',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(255, 87, 34, 0.4)',
                border: 'none',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 87, 34, 0.5)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 87, 34, 0.4)';
              }}
            >
              Explore Pasifika Exchange
            </a>
          </div>
        </div>
      </div>

      {/* Payment Gateway Section */}
      <div className="payment-gateway-section" style={{ padding: '3rem 0', background: isDarkMode ? '#1a1a1a' : '#f9f9f9' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            textAlign: 'center',
            marginBottom: '30px',
            background: 'linear-gradient(to right, #FF5722, #FF9800)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Payment Gateway Solutions
          </h2>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
            
            {/* Circle Payment Gateway */}
            <div style={{ flex: '1 1 400px', background: isDarkMode ? '#2a2a2a' : '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: isDarkMode ? '0 4px 20px rgba(0,0,0,0.3)' : '0 4px 20px rgba(0,0,0,0.1)' }}>
              <div style={{ padding: '1.5rem', borderBottom: isDarkMode ? '1px solid #444' : '1px solid #eee' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#16a34a', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.5rem' }}>💳</div>
                  <h3 style={{ margin: '0', fontSize: '1.5rem' }}>Circle Payments</h3>
                </div>
                <p style={{ lineHeight: '1.6' }}>
                  Empower community transactions with Circle&apos;s secure USDC payment infrastructure. Ideal for community projects, local businesses, and cross-border transactions within Pacific Island communities.
                </p>
              </div>
              <div style={{ padding: '1.5rem', background: isDarkMode ? '#333' : '#f8f8f8' }}>
                <h4 style={{ margin: '0 0 1rem 0', color: isDarkMode ? '#FF9800' : '#FF5722' }}>Key Features</h4>
                <ul style={{ paddingLeft: '1.2rem', marginBottom: '1.5rem' }}>
                  <li>Fast settlement in USDC stablecoin</li>
                  <li>Lower fees than traditional remittance services</li>
                  <li>Transparent exchange rates for Pacific currencies</li>
                  <li>On-chain verification for all transactions</li>
                </ul>
              </div>
            </div>
            
            {/* Stripe Payment Gateway */}
            <div style={{ flex: '1 1 400px', background: isDarkMode ? '#2a2a2a' : '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: isDarkMode ? '0 4px 20px rgba(0,0,0,0.3)' : '0 4px 20px rgba(0,0,0,0.1)' }}>
              <div style={{ padding: '1.5rem', borderBottom: isDarkMode ? '1px solid #444' : '1px solid #eee' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#6366f1', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.5rem' }}>💱</div>
                  <h3 style={{ margin: '0', fontSize: '1.5rem' }}>Stripe Payments</h3>
                </div>
                <p style={{ lineHeight: '1.6' }}>
                  Streamline business operations with Stripe&apos;s robust payment processing capability. Perfect for Pacific businesses looking to expand their global reach while maintaining local connections.
                </p>
              </div>
              <div style={{ padding: '1.5rem', background: isDarkMode ? '#333' : '#f8f8f8' }}>
                <h4 style={{ margin: '0 0 1rem 0', color: isDarkMode ? '#FF9800' : '#FF5722' }}>Key Features</h4>
                <ul style={{ paddingLeft: '1.2rem', marginBottom: '1.5rem' }}>
                  <li>Accept global payments in multiple currencies</li>
                  <li>Integration with existing business infrastructure</li>
                  <li>Detailed transaction reporting and analytics</li>
                  <li>Blockchain verification for enhanced security</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Single unified button */}
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <a
              href="/services#payment-gateways"
              style={{
                display: 'inline-block',
                padding: '16px 40px',
                background: 'linear-gradient(to right, #FF5722, #FF9800)',
                color: 'white',
                borderRadius: '30px',
                textDecoration: 'none',
                fontSize: '18px',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(255, 87, 34, 0.4)',
                border: 'none',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 87, 34, 0.5)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 87, 34, 0.4)';
              }}
            >
              Explore Payment Gateways
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
              {/* Custom Wallet Connection Widget */}
              <PasifikaWalletConnect />
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
      {/* Multi-Chain Approach Section */}
      <div className="dep-in-section" style={{ background: isDarkMode ? '#222' : '#fff', padding: '1.5rem', margin: '0 auto', maxWidth: 900, borderRadius: 12, boxShadow: isDarkMode ? '0 2px 16px #111' : '0 2px 16px #eee' }}>
        <h2 style={{ textAlign: 'center', color: isDarkMode ? '#FF9800' : '#FF5722', marginBottom: '1.5rem' }}>Our Multi-Chain Approach</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Linea */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: '1rem', background: isDarkMode ? '#333' : '#f8f8f8', borderRadius: '8px', borderLeft: '4px solid #3f88c5' }}>
            <h3 style={{ color: isDarkMode ? '#3f88c5' : '#3f88c5', margin: '0' }}>Linea: Scaling With Zero Knowledge</h3>
            <p style={{ margin: '0' }}>
              Linea&apos;s zkEVM technology dramatically reduces transaction costs while maintaining robust EVM compatibility and security. For communities where every fraction of a cent matters, this efficiency is crucial for financial inclusion.
            </p>
          </div>
          
          {/* RSK */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: '1rem', background: isDarkMode ? '#333' : '#f8f8f8', borderRadius: '8px', borderLeft: '4px solid #f9a620' }}>
            <h3 style={{ color: isDarkMode ? '#f9a620' : '#f9a620', margin: '0' }}>RootStock: Bitcoin Integration</h3>
            <p style={{ margin: '0' }}>
              As a Bitcoin sidechain, RSK allows us to work with RBTC while leveraging smart contracts. Our treasury was initially seeded with 27,281 RIF tokens, showcasing the support this technology brings to Pacific innovation.
            </p>
          </div>
          
          {/* Arbitrum */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: '1rem', background: isDarkMode ? '#333' : '#f8f8f8', borderRadius: '8px', borderLeft: '4px solid #9945ff' }}>
            <h3 style={{ color: isDarkMode ? '#9945ff' : '#9945ff', margin: '0' }}>Arbitrum: Optimistic Rollups</h3>
            <p style={{ margin: '0' }}>
              Arbitrum&apos;s optimistic rollup technology gives us additional scaling options and ensures our platform remains connected to multiple blockchain ecosystems through interoperability, expanding opportunities for Pacific Islanders.
            </p>
          </div>
          
          {/* Circle & Stripe Payment Integrations */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: '1rem', background: isDarkMode ? '#333' : '#f8f8f8', borderRadius: '8px', borderLeft: '4px solid #16a34a', marginTop: '10px' }}>
            <h3 style={{ color: isDarkMode ? '#16a34a' : '#16a34a', margin: '0' }}>Payment Gateways: Circle & Stripe</h3>
            <p style={{ margin: '0' }}>
              Our fiat-to-crypto bridge utilizes Circle and Stripe payment solutions, providing seamless on/off-ramps tailored to Pacific communities and businesses. These integrations ensure accessibility regardless of technical expertise.
            </p>
          </div>
        </div>
      </div>
      


      {/* Cultural Values Section */}
      <div className="dep-in-section" style={{ background: isDarkMode ? '#222' : '#fff', padding: '1.5rem', margin: '1.5rem auto', maxWidth: 900, textAlign: 'center', borderRadius: 12, boxShadow: isDarkMode ? '0 2px 16px #111' : '0 2px 16px #eee' }}>
        <h2 style={{ color: isDarkMode ? '#FF9800' : '#FF5722', marginBottom: '1rem' }}>Beyond Technology: Cultural Significance</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
          What truly sets our approach apart is how these EVM Compatible technologies allow us to encode Pacific Island cultural values into digital infrastructure while enabling seamless interoperability across blockchain networks:
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
          <div>
            <h3 style={{ color: isDarkMode ? '#FF9800' : '#FF5722', margin: '0' }}>🤝 Reciprocity</h3>
            <p>Just as traditional Pacific economies function on gift giving and mutual support, our profit sharing mechanism ensures value flows back to community members.</p>
          </div>
          
          <div>
            <h3 style={{ color: isDarkMode ? '#FF9800' : '#FF5722', margin: '0' }}>🌴 Shared Stewardship</h3>
            <p>The graduated fee structure mirrors traditional systems where those with greater responsibility to the community receive greater benefits.</p>
          </div>
          
          <div>
            <h3 style={{ color: isDarkMode ? '#FF9800' : '#FF5722', margin: '0' }}>🏝️ Accessibility</h3>
            <p>By keeping fees low through Layer 2 scaling solutions and enabling cross-chain interoperability, we ensure that participation remains accessible to all community members, regardless of economic status or preferred blockchain network.</p>
          </div>
        </div>
      </div>

      {/* Footer Banner */}
      <div className="footer-banner">
        <p>Copyright &copy; Pasifika 2025</p>
      </div>
    </div>
  );
}
