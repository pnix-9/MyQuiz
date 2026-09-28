<template>
  <div class="landing-container">
    <!-- Left Column: Illustration & Visual Elements -->
    <div class="illustration-section">
      <div class="artwork-wrapper">
        <!-- Animated Background Flowers -->
        <div class="flower flower-1">🌸</div>
        <div class="flower flower-2">🌼</div>
        <div class="flower flower-3">🌺</div>
        <div class="flower flower-4">🌸</div>

        <!-- Main SVG Illustration (Girl Sitting on Books) -->
        <svg class="main-illustration" viewBox="0 0 400 400" fill="none" xmlns="http://w3.org">
          <!-- Shadow base -->
          <ellipse cx="200" cy="340" rx="90" ry="8" fill="#EAE5DC" />
          
          <!-- Stack of Books -->
          <!-- Bottom Dark Blue Book -->
          <path d="M120 300 H280 V330 H120 Z" fill="#3B5998" />
          <path d="M260 300 H280 V330 H260 Z" fill="#FDFBF7" />
          <path d="M120 300 C110 300 110 330 120 330 Z" fill="#2D4373" />
          
          <!-- Middle Yellow Book -->
          <path d="M130 270 H270 V300 H130 Z" fill="#F5B041" />
          <path d="M130 270 C120 270 120 300 130 300 Z" fill="#D35400" />
          
          <!-- Top Light Blue Book -->
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
          <path d="M190 260 H290 L275 250 H190 Z" fill="#D35400" /> <!-- Dress lap -->
          
          <!-- Arm -->
          <path d="M195 175 Q210 210 220 250" stroke="#E67E22" stroke-width="24" stroke-linecap="round" />
          <path d="M213 240 Q215 250 220 255" stroke="#FADBD8" stroke-width="12" stroke-linecap="round" />

          <!-- Head & Neck -->
          <rect x="195" y="140" width="16" height="25" fill="#FADBD8" />
          <circle cx="205" cy="125" r="22" fill="#FADBD8" />
          
          <!-- Hair -->
          <path d="M180 120 C180 90 225 90 225 120 C225 140 215 155 210 160 C195 160 180 145 180 120 Z" fill="#873600" />
          <circle cx="185" cy="145" r="14" fill="#873600" /> <!-- Ponytail/Bun effect -->
          
          <!-- Decorative abstract lines behind -->
          <line x1="130" y1="210" x2="150" y2="210" stroke="#2C3E50" stroke-width="3" stroke-linecap="round" />
          <line x1="135" y1="218" x2="145" y2="218" stroke="#2C3E50" stroke-width="3" stroke-linecap="round" />
        </svg>
      </div>
    </div>

    <!-- Right Column: Content & Call to Action -->
    <div class="content-section">
      <div class="text-wrapper">
        <h1 class="brand-title">QuizApp</h1>
        <p class="brand-tagline">Short quizzes, big learning</p>
        <button class="cta-button" @click="handleGetStarted">
          Get Started
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const handleGetStarted = () => {
  // Add your navigation or initialization logic here
  console.log('Quiz application initialized!')
}
</script>

<style scoped>
/* Reset-like styles contained for the component */
.landing-container {
  display: flex;
  width: 100%;
  min-height: 100vh;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  background-color: #FDFBF7; /* Soft aesthetic background */
  overflow: hidden;
}

/* Left Section Styles */
.illustration-section {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F5EFEB; /* Slightly darker cream tint for contrast */
  position: relative;
  padding: 2rem;
}

.artwork-wrapper {
  position: relative;
  width: 100%;
  max-width: 450px;
}

.main-illustration {
  width: 100%;
  height: auto;
  display: block;
}

/* Background Floating Flowers */
.flower {
  position: absolute;
  font-size: 1.8rem;
  opacity: 0.7;
  filter: drop-shadow(0px 4px 6px rgba(0,0,0,0.05));
  animation: float 6s ease-in-out infinite;
}

.flower-1 { top: 10%; left: 15%; animation-delay: 0s; }
.flower-2 { top: 20%; right: 10%; animation-delay: 1.5s; font-size: 2.2rem; }
.flower-3 { bottom: 25%; left: 8%; animation-delay: 3s; }
.flower-4 { bottom: 15%; right: 20%; animation-delay: 4.5s; }

/* Right Section Styles */
.content-section {
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 4rem 6rem;
  background-color: #FDFBF7;
}

.text-wrapper {
  max-width: 400px;
}

.brand-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: #2C3E50;
  margin: 0 0 0.5rem 0;
  letter-spacing: -0.03em;
}

.brand-tagline {
  font-size: 1.5rem;
  color: #7F8C8D;
  margin: 0 0 3.5rem 0;
  font-weight: 400;
}

/* Call To Action Button */
.cta-button {
  background-color: #009698; /* Authentic teal palette match */
  color: #FFFFFF;
  border: none;
  padding: 1.1rem 2.8rem;
  font-size: 1.3rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(0, 150, 152, 0.3);
  transition: transform 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;
}

.cta-button:hover {
  background-color: #008284;
  box-shadow: 0 6px 20px rgba(0, 150, 152, 0.4);
  transform: translateY(-2px);
}

.cta-button:active {
  transform: translateY(0);
}

/* Smooth Floating Animation */
@keyframes float {
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-15px) rotate(10deg);
  }
  100% {
    transform: translateY(0px) rotate(0deg);
  }
}

/* Responsive Scaling for Tablets and Mobile devices */
@media (max-width: 900px) {
  .landing-container {
    flex-direction: column;
  }
  
  .illustration-section {
    padding: 3rem 1rem 1rem 1rem;
  }
  
  .content-section {
    padding: 2rem 2rem 4rem 2rem;
    justify-content: center;
    text-align: center;
  }
  
  .brand-title {
    font-size: 2.8rem;
  }
  
  .brand-tagline {
    font-size: 1.2rem;
    margin: 0 0 2rem 0;
  }
}
</style>
