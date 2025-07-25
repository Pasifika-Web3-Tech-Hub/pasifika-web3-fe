"use client";

import { useDarkMode } from "@/lib/useDarkMode";
import Link from "next/link";
import Image from "next/image";
import "../page.css";
import "../shared-pages.css";
import { useEffect, useRef } from "react";

export default function OurStory() {
  const { isDarkMode } = useDarkMode();
  const mermaidRef = useRef(null);

  useEffect(() => {
    // Load and initialize Mermaid when component mounts
    if (typeof window !== 'undefined' && mermaidRef.current) {
      import('mermaid').then((mermaid) => {
        mermaid.default.initialize({
          startOnLoad: true,
          theme: isDarkMode ? 'dark' : 'default',
          securityLevel: 'loose',
        });
        mermaid.default.contentLoaded();
      });
    }
  }, [isDarkMode, mermaidRef]);

  return (
    <div className={`container ${isDarkMode ? 'dark' : 'light'}`}>
      {/* Header Section */}
      <div className="header">
        <div className="header-container">
          <div className="logo">
            <Image
              src="/pasifika.png"
              alt="Pasifika"
              width={50}
              height={50}
            />
            <div className="logo-text">
              <span className="logo-accent">Pasifika</span>
            </div>
          </div>
          
          <div className="nav-menu">
            <div className="nav-item">
              <Link href="/learn-more" className="nav-link-button">
                Back to Resources
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className="page-content">
        <div className="page-banner">
          <h1>Our Story</h1>
        </div>
        
        <div className="content-container">
          <div className="content-section">
            <div className="whitepaper-header">
              <Image
                src="/pasifika.png"
                alt="Pasifika"
                width={300}
                height={300}
                className="whitepaper-logo"
              />
              <h2>Pacific Values in Digital Form</h2>
              <p className="whitepaper-version">Established 2025</p>
              <div className="whitepaper-divider"></div>
            </div>
            
            <div className="summary-box" style={{ 
              padding: '20px', 
              backgroundColor: isDarkMode ? '#333333' : '#f8f8f8', 
              borderRadius: '8px', 
              marginBottom: '30px',
              borderLeft: '4px solid #FF5722'
            }}>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                <strong>&quot;If we take care of our own, they will take care of us&quot;</strong> — This powerful concept of reciprocity and community care isn&apos;t just a nice sentiment, it&apos;s the architectural blueprint for our entire system. Our platform leverages <strong>Bitcoin</strong> as our foundation with <strong>Lightning Network</strong> for scalability, fostering a sustainable economic ecosystem that preserves cultural heritage while creating new digital opportunities for islanders.
              </p>
            </div>
            
            <div style={{ 
              backgroundColor: 'rgba(249, 166, 32, 0.1)',
              borderLeft: '4px solid #F9A620',
              padding: '20px 25px',
              margin: '30px 0',
              borderRadius: '0 8px 8px 0',
              position: 'relative',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)'
            }}>
              <div style={{ 
                position: 'absolute',
                top: '-12px',
                right: '20px',
                backgroundColor: '#F9A620',
                color: '#000',
                fontWeight: 700,
                fontSize: '12px',
                padding: '5px 10px',
                borderRadius: '20px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Seed Funded
              </div>
              <h3 style={{ color: '#F9A620', marginBottom: '10px' }}>RootStock Hactivator Program</h3>
              <p style={{ lineHeight: '1.6' }}>
                Our journey was accelerated by our successful contribution to the RootStock (RSK) Hactivator Program, which provided the seed funding and technical expertise to launch our blockchain interoperability initiative. This partnership with RootStock (RSK) proved pivotal in developing our multi-chain infrastructure and establishing our presence in the Bitcoin ecosystem through RSK&apos;s Bitcoin sidechain technology.
              </p>
            </div>

            <h2>Pacific Values in Digital Form</h2>
            <p>At the heart of Pasifika Web3 Tech Hub is a philosophical principle that has guided Pacific Island communities for generations: <strong>&quot;If we take care of our own, they will take care of us.&quot;</strong> EVM Compatible blockchains, with their focus on decentralization, community governance, and shared prosperity, provide the perfect technological expression of these Pacific values. When we examined various blockchain platforms, those supporting EVM compatibility aligned naturally with our cultural ethos while enabling interoperability across multiple networks.</p>
            
            <h2>Our Vision</h2>
            <p>We envision a future where Pacific Island communities are active participants in the global digital economy, with tools and infrastructure that address our specific needs and challenges. Through the Pasifika Web3 Marketplace operating across multiple networks, we aim to create resilient economic systems that can withstand geographical isolation, climate challenges, and limited traditional infrastructure.</p>
            
            <p>Central to our vision is the development of the <strong>Pasifika Web3 Tech Hub</strong> - a comprehensive Web3 platform designed specifically for Pacific Island communities. This groundbreaking platform leverages Bitcoin and Lightning Network technology to provide secure digital services with low fees and cross-island interoperability, bringing financial inclusion and new economic opportunities to previously underserved regions.</p>

            <h2>Our Mission</h2>
            <p>We&apos;re on a mission to empower Pacific Island communities through accessible Web3 technologies, creating economic opportunities while preserving and celebrating our cultural heritage. We believe in building decentralized systems that work for people regardless of their location, technical background, or economic status.</p>

            <h2>Our Journey</h2>
            <p>
              The Pasifika Web3 Tech Hub emerged from a vision to connect the untapped potential of Pacific Island communities with the transformative power of blockchain and Web3 technologies. Born from the recognition that traditional financial systems have historically underserved these regions, our hub aims to create pathways for economic empowerment, innovation, and global integration.
            </p>
            <p>
              Our journey began with extensive community consultations across several Pacific Island nations, identifying key challenges: limited digital infrastructure, brain drain of tech talent, and barriers to international financial systems. These insights shaped our mission to build not just a tech hub, but a comprehensive ecosystem that nurtures local talent, attracts investment, and creates sustainable digital economy opportunities.
            </p>

            <div className="team-values">
              <h2>Our Values</h2>
              <div className="values-grid">
                <div className="value-item">
                  <div className="value-icon">🤝</div>
                  <h4>Community</h4>
                  <p>Building technology that strengthens Pacific communities and traditions</p>
                </div>
                <div className="value-item">
                  <div className="value-icon">🌊</div>
                  <h4>Resilience</h4>
                  <p>Creating systems that adapt to the unique challenges of island environments</p>
                </div>
                <div className="value-item">
                  <div className="value-icon">🌱</div>
                  <h4>Sustainability</h4>
                  <p>Designing eco-friendly solutions that respect our natural environment</p>
                </div>
                <div className="value-item">
                  <div className="value-icon">🔗</div>
                  <h4>Connection</h4>
                  <p>Bridging traditional knowledge with emerging technologies</p>
                </div>
              </div>
            </div>

            <h2>Our Commitment</h2>
            <p style={{ marginBottom: '20px' }}>
              We are committed to:
            </p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '25px', marginBottom: '30px' }}>
              <li style={{ margin: '10px 0' }}>Building technology that empowers Pacific Island communities</li>
              <li style={{ margin: '10px 0' }}>Preserving and respecting indigenous knowledge and practices</li>
              <li style={{ margin: '10px 0' }}>Creating economic opportunities that benefit all stakeholders</li>
              <li style={{ margin: '10px 0' }}>Developing sustainable solutions for our unique environment</li>
              <li style={{ margin: '10px 0' }}>Fostering innovation while maintaining cultural integrity</li>
            </ul>

            <h2>Our Approach</h2>
            <p>We&apos;ve pivoted to a streamlined, family-based development approach that:</p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '25px', marginBottom: '30px' }}>
              <li style={{ margin: '10px 0' }}><strong>Self-funded:</strong> Operating independently of external seed funding</li>
              <li style={{ margin: '10px 0' }}><strong>Essential-focused:</strong> Building only the core components needed for our platform</li>
              <li style={{ margin: '10px 0' }}><strong>Decentralized-first:</strong> Creating a platform that operates independently of any jurisdiction or centralized authority</li>
              <li style={{ margin: '10px 0' }}><strong>Family-driven:</strong> Leveraging deep family connections and shared vision</li>
              <li style={{ margin: '10px 0' }}><strong>Web3-native:</strong> Building technology that aligns with fundamental Web3 principles</li>
            </ul>



            <h2>Our Team</h2>
            <p style={{ marginBottom: '20px' }}>
              Meet the Founder and co-Founders of Pasifika Web3 Tech Hub
            </p>
            
            <div className="team-grid" style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px',
              justifyContent: 'center',
              maxWidth: '90%',
              margin: '0 auto',
              padding: '0 15px'
            }}>
              <div className="team-member">
                <div className="member-photo-container">
                  <Image 
                    src="/edwin.png" 
                    alt="Edwin Liava&apos;a" 
                    width={150} 
                    height={150} 
                    style={{ borderRadius: '50%' }}
                  />
                </div>
                <h3 className="member-name">Edwin Liava&apos;a</h3>
                <p className="member-role">
                  Founder, Blockchain & Digital Transformation Engineer
                </p>
                <p className="member-location">Pacific Islands</p>
                <a href="https://www.linkedin.com/in/edwin-liavaa/" target="_blank" rel="noopener noreferrer" className="linkedin-link">
                  LinkedIn Profile
                </a>
              </div>
              
              <div className="team-member">
                <div className="member-photo-container">
                  <Image 
                    src="/john.png" 
                    alt="John Liava&apos;a" 
                    width={150} 
                    height={150} 
                    style={{ borderRadius: '50%' }}
                  />
                </div>
                <h3 className="member-name">John Liava&apos;a</h3>
                <p className="member-role">
                  co-Founder, ICT / Systems Engineer
                </p>
                <p className="member-location">Pacific Islands</p>
                <a href="https://www.linkedin.com/in/john-liava-a-5b42251a0/" target="_blank" rel="noopener noreferrer" className="linkedin-link">
                  LinkedIn Profile
                </a>
              </div>
              
              <div className="team-member">
                <div className="member-photo-container">
                  <Image 
                    src="/david.png" 
                    alt="David Liava&apos;a" 
                    width={150} 
                    height={150} 
                    style={{ borderRadius: '50%' }}
                  />
                </div>
                <h3 className="member-name">David Liava&apos;a</h3>
                <p className="member-role">
                  co-Founder, Quantity Surveyor
                </p>
                <p className="member-location">Pacific Islands</p>
                <a href="https://www.linkedin.com/in/david-liava%E2%80%99a-905827260/" target="_blank" rel="noopener noreferrer" className="linkedin-link">
                  LinkedIn Profile
                </a>
              </div>
              
              <div className="team-member">
                <div className="member-photo-container">
                  <Image 
                    src="/selafine.png" 
                    alt="Selafine Liava&apos;a" 
                    width={150} 
                    height={150} 
                    style={{ borderRadius: '50%' }}
                  />
                </div>
                <h3 className="member-name">Selafine Liava&apos;a</h3>
                <p className="member-role">
                  co-Founder, Project Officer
                </p>
                <p className="member-location">Pacific Islands</p>
                <a href="https://www.linkedin.com/in/selafine-liava%E2%80%99a-643616363/" target="_blank" rel="noopener noreferrer" className="linkedin-link">
                  LinkedIn Profile
                </a>
              </div>
            </div>

            <p style={{ marginTop: '30px' }}>
              Pasifika Web3 Tech Hub is now built on a streamlined, family-based team approach. After careful reflection, we&apos;ve pivoted from traditional Web2 methodologies to a more focused, essential development model that aligns with Web3 principles.
            </p>
            <p>
              Our core team consists of family members with deep expertise in blockchain development and Pacific Island contexts. This structure allows us to:</p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '25px', marginBottom: '30px' }}>
              <li style={{ margin: '10px 0' }}>Move faster with a smaller, focused team</li>
              <li style={{ margin: '10px 0' }}>Reduce unnecessary complexities and dependencies</li>
              <li style={{ margin: '10px 0' }}>Leverage deep family connections and shared vision</li>
              <li style={{ margin: '10px 0' }}>Focus exclusively on essential platform components</li>
              <li style={{ margin: '10px 0' }}>Maintain strong Pacific Island cultural ties</li>
            </ul>
            <p>The whitepaper is currently under review as we pivot to a streamlined, family-based development approach. Key aspects are being re-evaluated to better align with our new direction of building a decentralized platform that operates independently of any jurisdiction or centralized authority.</p>



            <h2>Our Partners</h2>
            <p>We&apos;re proud to work with a growing network of regional and international partners including:</p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '25px', marginBottom: '30px' }}>
              <li style={{ margin: '10px 0', fontSize: '1.05rem' }}><span style={{ color: '#FF5722', fontWeight: '500' }}>Pacific Island regional organizations</span></li>
              <li style={{ margin: '10px 0', fontSize: '1.05rem' }}><span style={{ color: '#FF5722', fontWeight: '500' }}>Local government technology initiatives</span></li>
              <li style={{ margin: '10px 0', fontSize: '1.05rem' }}><span style={{ color: '#FF5722', fontWeight: '500' }}>International blockchain development teams</span></li>
              <li style={{ margin: '10px 0', fontSize: '1.05rem' }}><span style={{ color: '#FF5722', fontWeight: '500' }}>Sustainable technology organizations</span></li>
            </ul>




            
            <h2 id="cultural-significance">Beyond the Technology: Cultural Significance</h2>
            <p>
              What truly sets our approach apart is how Bitcoin and Lightning Network technologies allow us to encode Pacific Island cultural values into digital infrastructure:
            </p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '25px', marginBottom: '30px' }}>
              <li style={{ margin: '10px 0' }}><strong>Reciprocity:</strong> Just as traditional Pacific economies function on gift giving and mutual support, our community-focused approach ensures value flows back to community members</li>
              <li style={{ margin: '10px 0' }}><strong>Shared Stewardship:</strong> Our community structure mirrors traditional systems where those with greater responsibility to the community receive greater benefits</li>
              <li style={{ margin: '10px 0' }}><strong>Accessibility:</strong> By utilizing Lightning Network's low fees and fast transactions, we ensure that participation remains accessible to all community members, regardless of economic status</li>
            </ul>


            
            <div className="summit-section" style={{ 
              margin: '40px 0',
              padding: '30px',
              backgroundColor: isDarkMode ? 'rgba(255, 87, 34, 0.15)' : 'rgba(255, 87, 34, 0.08)',
              borderRadius: '8px',
              border: '1px solid rgba(255, 87, 34, 0.3)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ 
                position: 'absolute',
                top: '0',
                right: '0',
                backgroundColor: '#FF5722',
                color: 'white',
                padding: '5px 15px',
                transform: 'rotate(45deg) translateX(20px) translateY(-10px)',
                fontSize: '0.8rem',
                fontWeight: 'bold',
                letterSpacing: '1px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
              }}>
                🚨 EVENT ALERT 🚨
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Image
                  src="/pacific-blockchain-summit.png"
                  alt="Pacific Blockchain Summit"
                  width={500}
                  height={300}
                  style={{ 
                    borderRadius: '8px', 
                    marginBottom: '20px',
                    maxWidth: '100%',
                    height: 'auto'
                  }}
                />
                
                <h2 style={{ color: '#FF5722', marginBottom: '15px' }}>Pacific Blockchain Summit</h2>
                
                <h3 style={{ 
                  marginBottom: '20px', 
                  textAlign: 'center',
                  fontWeight: '600',
                  fontSize: '1.4rem',
                  lineHeight: '1.5'
                }}>
                  ✨ Decentralizing Power: Blockchain, Indigenous Rights, and the Future of Cultural Stewardship ✨
                </h3>
                
                <p style={{ 
                  fontStyle: 'italic', 
                  marginBottom: '20px',
                  fontSize: '1.1rem',
                  lineHeight: '1.6'
                }}>
                  In a world rapidly embracing decentralization, how can blockchain technology be used not just for financial gain—but to empower Indigenous communities, protect cultural heritage, and redefine ownership?
                </p>
                
                <div style={{ 
                  backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 152, 0, 0.1)', 
                  padding: '20px', 
                  borderRadius: '8px', 
                  marginBottom: '20px',
                  width: '100%',
                  textAlign: 'left'
                }}>
                  <h4 style={{ marginBottom: '15px' }}>Join us for a powerful conversation where we'll explore:</h4>
                  <ul style={{ listStyleType: 'none', paddingLeft: '5px' }}>
                    <li style={{ 
                      margin: '10px 0', 
                      display: 'flex', 
                      alignItems: 'center' 
                    }}>
                      <span style={{ 
                        display: 'inline-block', 
                        marginRight: '10px', 
                        color: '#FF9800', 
                        fontSize: '1.2rem' 
                      }}>🔹</span>
                      How blockchain can support Indigenous data sovereignty
                    </li>
                    <li style={{ 
                      margin: '10px 0', 
                      display: 'flex', 
                      alignItems: 'center' 
                    }}>
                      <span style={{ 
                        display: 'inline-block', 
                        marginRight: '10px', 
                        color: '#FF9800', 
                        fontSize: '1.2rem' 
                      }}>🔹</span>
                      New models for community-owned digital assets
                    </li>
                    <li style={{ 
                      margin: '10px 0', 
                      display: 'flex', 
                      alignItems: 'center' 
                    }}>
                      <span style={{ 
                        display: 'inline-block', 
                        marginRight: '10px', 
                        color: '#FF9800', 
                        fontSize: '1.2rem' 
                      }}>🔹</span>
                      Ethical frameworks for cultural preservation in Web3
                    </li>
                  </ul>
                </div>
                
                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ marginBottom: '10px' }}>Speakers</h4>
                  <p style={{ marginBottom: '5px' }}>
                    <span style={{ fontWeight: 'bold' }}>Edwin Liava'a</span> (Pasifika)
                  </p>
                  <p style={{ marginBottom: '5px' }}>
                    <span style={{ fontWeight: 'bold' }}>Alana Kanahele</span> (University of Hawaii at Manoa)
                  </p>
                  <p style={{ marginBottom: '5px' }}>
                    <span style={{ fontWeight: 'bold' }}>Richard Ng</span> (IndigiDAO)
                  </p>
                  <p style={{ marginBottom: '5px' }}>
                    <span style={{ fontWeight: 'bold' }}>Moderator:</span> Jana Ireijo (Vanishing Murals)
                  </p>
                </div>
                
                <p style={{ 
                  fontWeight: 'bold', 
                  fontSize: '1.1rem', 
                  marginBottom: '20px',
                  color: isDarkMode ? '#FF9800' : '#FF5722'
                }}>
                  Blockchain technology in shaping equitable futures is not an imagination, it's happening!
                </p>
                
                <div style={{ marginBottom: '20px' }}>
                  <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>Join us on September 12</p>
                  <a 
                    href="https://www.pacificblockchainsummit.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      padding: '10px 20px',
                      backgroundColor: '#FF5722',
                      color: 'white',
                      borderRadius: '4px',
                      textDecoration: 'none',
                      fontWeight: 'bold',
                      transition: 'background-color 0.3s'
                    }}
                  >
                    Early Bird Tickets Available
                  </a>
                </div>
                
                <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                  <p style={{ marginBottom: '5px' }}>Brought to you by: Inoa.ai</p>
                  <p>Sponsors: Stand With Crypto, Malama Project, Avalanche, OpulenceX Inc, Middle Mgmt</p>
                </div>
              </div>
            </div>

            <div className="join-us-section" style={{ 
              margin: '40px 0',
              padding: '30px',
              backgroundColor: isDarkMode ? 'rgba(255, 87, 34, 0.1)' : 'rgba(255, 87, 34, 0.05)',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <h3 style={{ marginBottom: '15px' }}>Join Our Journey</h3>
              <p style={{ marginBottom: '20px', fontSize: '1.2rem', fontWeight: 'bold' }}>
                &quot;If we take care of our own, they will take care of us&quot;
              </p>
              <p style={{ marginBottom: '20px' }}>
                The Pasifika Web3 Tech Hub is more than a platform—it&apos;s a movement to bring digital economic empowerment to Pacific Island communities through blockchain interoperability. Whether you&apos;re a developer, investor, community leader, or simply passionate about the intersection of technology and cultural values across different blockchain ecosystems, we invite you to join us.
              </p>
              <Link href="/contact" className="btn btn-primary" style={{ display: 'inline-block' }}>
                Contact Us to Get Involved
              </Link>
            </div>
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
