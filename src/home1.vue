<template>
  <div class="landing-container">
    <!-- Left Column: Immersive Visual Illustration -->
    <div class="illustration-section">
      <div class="artwork-wrapper">
        
        <!-- Animated Custom SVG Flowers Background -->
        <svg class="bg-flower flower-top-left" viewBox="0 0 100 100" fill="none" xmlns="http://w3.org">
          <circle cx="50" cy="50" r="15" fill="#FADBD8" />
          <circle cx="50" cy="20" r="18" fill="#FADBD8" />
          <circle cx="50" cy="80" r="18" fill="#FADBD8" />
          <circle cx="20" cy="50" r="18" fill="#FADBD8" />
          <circle cx="80" cy="50" r="18" fill="#FADBD8" />
          <circle cx="50" cy="50" r="12" fill="#F5B041" />
        </svg>

        <svg class="bg-flower flower-bottom-right" viewBox="0 0 100 100" fill="none" xmlns="http://w3.org">
          <circle cx="50" cy="50" r="15" fill="#EDBB99" />
          <circle cx="50" cy="25" r="16" fill="#EDBB99" />
          <circle cx="50" cy="75" r="16" fill="#EDBB99" />
          <circle cx="25" cy="50" r="16" fill="#EDBB99" />
          <circle cx="75" cy="50" r="16" fill="#EDBB99" />
          <circle cx="50" cy="50" r="10" fill="#F4D03F" />
        </svg>

        <!-- Dynamic Scene Container containing background paths, flight path, plane, and character -->
        <svg class="main-illustration" viewBox="0 0 400 400" fill="none" xmlns="http://w3.org">
          <!-- Ground Base Shadow -->
          <ellipse cx="200" cy="340" rx="95" ry="8" fill="#EAE5DC" />
          
          <!-- Flight Path Curve Line -->
          <path id="flightTrack" d="M 40,300 Q 60,110 180,140 T 360,50" stroke="#BDC3C7" stroke-width="2" stroke-dasharray="6,6" stroke-linecap="round" />

          <!-- Paper Airplane Group locked to path via native SVG coordinate logic -->
          <g>
            <path d="M-10 -10 L12 0 L-10 10 L-6 2 L5 0 L-6 -2 Z" fill="#7F8C8D" />
            <!-- Native SVG Motion Tracking -->
            <animateMotion 
              dur="7s" 
              repeatCount="indefinite" 
              rotate="auto"
              calcMode="linear">
              <mpath href="#flightTrack" />
            </animateMotion>
          </g>

          <!-- Stack of Books -->
          <!-- Bottom Navy Book -->
          <path d="M120 300 H280 V330 H120 Z" fill="#3B5998" />
          <path d="M260 300 H280 V330 H260 Z" fill="#FDFBF7" />
          <path d="M120 300 C110 300 110 330 120 330 Z" fill="#2D4373" />
          
          <!-- Middle Terracotta Book -->
          <path d="M130 270 H270 V300 H130 Z" fill="#F5B041" />
          <path d="M130 270 C120 270 120 300 130 300 Z" fill="#D35400" />
          
          <!-- Top Sea-Blue Book -->
          <path d="M125 240 H285 V270 H125 Z" fill="#5DADE2" />
          <path d="M265 240 H285 V270 H265 Z" fill="#FDFBF7" />
          <path d="M125 240 C115 240 115 270 125 270 Z" fill="#3498DB" />

          <!-- Character Illustration -->
          <!-- Legs -->
          <rect x="230" y="270" width="12" height="60" fill="#FADBD8" />
          <rect x="250" y="270" width="12" height="60" fill="#FADBD8" />
          <!-- Shoes -->
          <path d="M230 330 H250 V336 C240 336 230 336 230 330 Z" fill="#2C3E50" />
          <path d="M250 330 H270 V336 C260 336 250 336 250 330 Z" fill="#2C3E50" />
          
          <!-- Dress / Body -->
          <path d="M185 170 L240 175 L260 260 H180 Z" fill="#E67E22" />
          <path d="M190 260 H290 L275 250 H190 Z" fill="#D35400" />
          
          <!-- Arm -->
          <path d="M195 175 Q210 210 220 250" stroke="#E67E22" stroke-width="24" stroke-linecap="round" />
          <path d="M213 240 Q215 250 220 255" stroke="#FADBD8" stroke-width="12" stroke-linecap="round" />

          <!-- Head & Neck -->
          <rect x="195" y="140" width="16" height="25" fill="#FADBD8" />
          <circle cx="205" cy="125" r="22" fill="#FADBD8" />
          
          <!-- Hair -->
          <path d="M180 120 C180 90 225 90 225 120 C225 140 215 155 210 160 C195 160 180 145 180 120 Z" fill="#873600" />
          <circle cx="185" cy="145" r="14" fill="#873600" />
          
          <!-- Minimal abstract background markers -->
          <line x1="105" y1="210" x2="125" y2="210" stroke="#2C3E50" stroke-width="3" stroke-linecap="round" />
          <line x1="110" y1="218" x2="120" y2="218" stroke="#2C3E50" stroke-width="3" stroke-linecap="round" />
        </svg>
      </div>
    </div>

    <!-- Right Column: Content Section with Elegant Entry Animations -->
    <div class="content-section">
      <div class="text-wrapper">
        <div class="badge">✨ Knowledge is Power</div>
        <h1 class="brand-title">QuizApp</h1>
        <p class="brand-tagline">Short quizzes, big learning. Test your limits, track your progress, and learn effortlessly every day.</p>
        
        <div class="action-block">
          <button class="cta-button" @click="handleGetStarted">
            Get Started 
            <span class="arrow-icon">→</span>
          </button>
          <span class="sub-text">No account required to start</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const handleGetStarted = () => {
  console.log('Quiz adventure started!')
}
</script>

<style scoped>
/* Core Container */
.landing-container {
  display: flex;
  width: 100%;
  min-height: 100vh;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  background-color: #FDFBF7;
  overflow: hidden;
  position: relative;
}

/* Left Illustration Side */
.illustration-section {
  flex: 1.1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F5EFEB;
  position: relative;
  padding: 2rem;
}

.artwork-wrapper {
  position: relative;
  width: 100%;
  max-width: 480px;
}

.main-illustration {
  width: 100%;
  height: auto;
  display: block;
  z-index: 2;
  position: relative;
}

/* Custom Vector SVG Flowers */
.bg-flower {
  position: absolute;
  width: 60px;
  height: 60px;
  opacity: 0.65;
  filter: drop-shadow(0px 8px 12px rgba(0,0,0,0.03));
  z-index: 1;
}

.flower-top-left {
  top: -5%;
  left: 5%;
  animation: floatFlower 7s ease-in-out infinite alternate;
}

.flower-bottom-right {
  bottom: 5%;
  right: 0%;
  width: 80px;
  height: 80px;
  animation: floatFlower 9s ease-in-out infinite alternate-reverse;
}

/* Right Content Side */
.content-section {
  flex: 0.9;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 4rem 6rem;
  background-color: #FDFBF7;
  z-index: 3;
}

.text-wrapper {
  max-width: 460px;
  animation: fadeInUp 0.8s ease-out;
}

/* Creative Badge Element */
.badge {
  display: inline-block;
  background-color: rgba(0, 150, 152, 0.08);
  color: #007D80;
  padding: 0.4rem 1rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  margin-bottom: 1.5rem;
}

.brand-title {
  font-size: 4rem;
  font-weight: 800;
  color: #2C3E50;
  margin: 0 0 1rem 0;
  letter-spacing: -0.04em;
  line-height: 1;
}

.brand-tagline {
  font-size: 1.25rem;
  line-height: 1.6;
  color: #616A6B;
  margin: 0 0 3.5rem 0;
  font-weight: 400;
}

/* CTA and Action Blocks */
.action-block {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  background-color: #009698;
  color: #FFFFFF;
  border: none;
  padding: 1.2rem 3rem;
  font-size: 1.3rem;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(0, 150, 152, 0.25);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  width: fit-content;
}

.arrow-icon {
  transition: transform 0.2s ease;
}

.cta-button:hover {
  background-color: #007D80;
  box-shadow: 0 12px 30px rgba(0, 150, 152, 0.35);
  transform: translateY(-3px);
}

.cta-button:hover .arrow-icon {
  transform: translateX(4px);
}

.cta-button:active {
  transform: translateY(-1px);
}

.sub-text {
  font-size: 0.85rem;
  color: #95A5A6;
  padding-left: 0.5rem;
}

/* Animations Definitions */
@keyframes floatFlower {
  0% { transform: translateY(0px) rotate(0deg) scale(0.95); }
  100% { transform: translateY(-20px) rotate(15deg) scale(1.05); }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Structural Breakpoints */
@media (max-width: 1024px) {
  .content-section {
    padding: 3rem;
  }
  .brand-title { font-size: 3.2rem; }
}

@media (max-width: 900px) {
  .landing-container {
    flex-direction: column;
  }
  .illustration-section {
    padding: 4rem 2rem 2rem 2rem;
  }
  .content-section {
    padding: 2rem 2rem 5rem 2rem;
    justify-content: center;
    text-align: center;
  }
  .badge, .cta-button {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
