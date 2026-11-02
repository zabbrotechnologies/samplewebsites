import React, { useEffect, useRef } from 'react';

/**
 * AmbientFluidBackground — VERHOST Interactive Animated Background
 * 
 * Continuous living wave environment using the authentic VERHOST dark green artwork:
 * - Layer 1: Base Artwork with continuous organic wave drift animation.
 * - Layer 2: Flowing Wave Morphed Overlay (screen blend) causing continuous fluid undulation
 *            and breathing light along the wave crests (NO artificial lines!).
 * - Layer 3: Atmospheric wave shimmer pulsing softly along the upper and lower wave belts.
 * - Layer 4: Living Canvas Particle Stream continuously flowing along the wave curves
 *            with organic drift, fluid harmonics, and dynamic proximity filaments.
 * - Layer 5: Restrained interactive cursor ambient glow.
 * 
 * Performance & Polish:
 * - 60 FPS Canvas 2D with requestAnimationFrame.
 * - Independent mouse parallax and scroll parallax without overwriting CSS animations.
 * - Content-safe: Central showcase area remains uncluttered, dark, and perfectly legible.
 * - Pointer-events: none so it never intercepts clicks or scrolling.
 */
export default function AmbientFluidBackground() {
  const bgParallaxRef = useRef(null);
  const canvasRef = useRef(null);
  const cursorGlowRef = useRef(null);

  useEffect(() => {
    // Parallax tracking variables
    let targetNormX = 0;
    let targetNormY = 0;
    let currentNormX = 0;
    let currentNormY = 0;

    let targetClientX = window.innerWidth * 0.7;
    let targetClientY = window.innerHeight * 0.35;
    let currentClientX = targetClientX;
    let currentClientY = targetClientY;

    let targetScroll = window.scrollY || 0;
    let currentScroll = targetScroll;

    let animId;

    // --- CANVAS PARTICLE SIMULATION SETUP ---
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 36 : 72;

    // Palette: Base black #020A07, Emerald #00D978, Neon green #39FF91, Soft mint #B4FFD2
    const particleColors = [
      'rgba(57, 255, 145, ', // Neon green
      'rgba(0, 217, 120, ',  // Emerald
      'rgba(180, 255, 210, ' // Soft mint
    ];

    class FlowParticle {
      constructor(isUpper) {
        this.isUpper = isUpper;
        this.reset(true);
      }

      reset(initial = false) {
        this.isUpper = Math.random() > 0.44; // ~56% upper wave, ~44% lower wave
        this.x = initial ? Math.random() * width : -20 - Math.random() * 50;

        // Spread around the wave crest (expanded spread for a taller, more expansive lower wave)
        this.waveSpread = (Math.random() - 0.5) * (this.isUpper ? height * 0.15 : height * 0.22);

        // Continuous flowing speed (left to right along the wave stream)
        this.flowSpeed = this.isUpper 
          ? 0.42 + Math.random() * 0.65 
          : 0.32 + Math.random() * 0.48;

        this.radius = 0.9 + Math.random() * 1.5;
        this.colorPrefix = particleColors[Math.floor(Math.random() * particleColors.length)];
        this.baseAlpha = 0.35 + Math.random() * 0.45;
        this.pulseSpeed = 0.015 + Math.random() * 0.025;
        this.pulseAngle = Math.random() * Math.PI * 2;
        this.phaseOffset = Math.random() * Math.PI * 2;
        this.disturbX = 0;
        this.disturbY = 0;
      }

      update(mouseX, mouseY, timeSec) {
        // 1. Continuous forward flow along the wave
        this.x += this.flowSpeed;

        // 2. Wave curve tracking matching the authentic artwork
        const normX = Math.max(0, Math.min(1, this.x / width));
        let curveY;
        if (this.isUpper) {
          // Upper Wave Contour: starts ~21% height, dips to ~28% mid-left, crests up to ~15% at upper-right
          curveY = height * (0.21 + 0.08 * Math.sin(normX * Math.PI * 1.5 - 0.35) - 0.045 * Math.sin(normX * Math.PI * 3.0));
        } else {
          // Lower Wave Contour: elevated to match the taller bottom wave framing (~73% - 81%)
          curveY = height * (0.75 - 0.065 * Math.sin(normX * Math.PI * 1.6 + 0.4));
        }

        // 3. Fluid undulating oscillation along the wave
        const waveHarmonic = Math.sin(timeSec * 1.6 + normX * 5.5 + this.phaseOffset) * (this.isUpper ? 7.5 : 7.0);
        const targetY = curveY + this.waveSpread + waveHarmonic;

        // 4. Smoothly ease to wave position
        this.y = targetY + this.disturbY;

        // 5. Ambient pulse
        this.pulseAngle += this.pulseSpeed;

        // Fade out near screen edges for smooth loop
        let edgeFade = 1;
        if (this.x < 70) edgeFade = Math.max(0, this.x / 70);
        if (this.x > width - 70) edgeFade = Math.max(0, (width - this.x) / 70);

        this.currentAlpha = (this.baseAlpha + Math.sin(this.pulseAngle) * 0.2) * edgeFade;

        // 6. Interactive mouse proximity disturbance
        if (mouseX !== undefined && mouseY !== undefined) {
          const dx = mouseX - this.x;
          const dy = mouseY - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 135;

          if (dist < maxDist && dist > 1) {
            const force = (1 - dist / maxDist) * 0.8;
            this.disturbX -= (dx / dist) * force * 1.6;
            this.disturbY -= (dy / dist) * force * 1.6;
          }
        }

        // Damp disturbance back to 0
        this.disturbX *= 0.94;
        this.disturbY *= 0.94;

        // 7. Loop when exiting right boundary
        if (this.x > width + 45) {
          this.reset(false);
        }
      }

      draw(context) {
        const a = Math.max(0.05, Math.min(0.9, this.currentAlpha));
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fillStyle = `${this.colorPrefix}${a.toFixed(2)})`;
        if (this.radius > 1.6) {
          context.shadowColor = '#39FF91';
          context.shadowBlur = 4;
        }
        context.fill();
        context.shadowBlur = 0;
      }
    }

    const particles = Array.from({ length: particleCount }, () => new FlowParticle(true));

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      particles.forEach((p) => p.reset(true));
    };

    const handlePointerMove = (e) => {
      targetClientX = e.clientX;
      targetClientY = e.clientY;
      targetNormX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetNormY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const handleScroll = () => {
      targetScroll = window.scrollY || 0;
    };

    // --- MAIN 60FPS ANIMATION LOOP ---
    const update = (time) => {
      const timeSec = time * 0.001;

      // Spring-like easing
      currentNormX += (targetNormX - currentNormX) * 0.045;
      currentNormY += (targetNormY - currentNormY) * 0.045;
      currentClientX += (targetClientX - currentClientX) * 0.05;
      currentClientY += (targetClientY - currentClientY) * 0.05;
      currentScroll += (targetScroll - currentScroll) * 0.05;

      // 1. Layer 1-3 Parallax Stage (Smooth subtle mouse/scroll depth, ~4–5px)
      if (bgParallaxRef.current) {
        const bgX = currentNormX * 5.2;
        const bgY = currentNormY * 4.0 + currentScroll * -0.014;
        bgParallaxRef.current.style.transform = `translate3d(${bgX.toFixed(2)}px, ${bgY.toFixed(2)}px, 0)`;
      }

      // 2. Layer 4: Particle Mesh Canvas Parallax (~9–12px)
      if (canvas) {
        const pX = currentNormX * 9.8;
        const pY = currentNormY * 7.6 + currentScroll * -0.026;
        canvas.style.transform = `translate3d(${pX.toFixed(2)}px, ${pY.toFixed(2)}px, 0)`;
      }

      // 3. Layer 5: Interactive Cursor Glow (Smooth tracking)
      if (cursorGlowRef.current) {
        cursorGlowRef.current.style.transform = `translate3d(${currentClientX}px, ${currentClientY}px, 0)`;
      }

      // 4. Draw Canvas Particles & Living Connecting Mesh
      ctx.clearRect(0, 0, width, height);

      // Draw subtle connecting lines between nearby particles
      const maxConnectDist = isMobile ? 46 : 64;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectDist) {
            const alpha = (1 - dist / maxConnectDist) * 0.22;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(57, 255, 145, ${alpha.toFixed(3)})`;
            ctx.lineWidth = 0.65;
            ctx.stroke();
          }
        }
      }

      // Update & Draw individual flowing particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update(currentClientX, currentClientY, timeSec);
        particles[i].draw(ctx);
      }

      animId = requestAnimationFrame(update);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    animId = requestAnimationFrame(update);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="verhost-ambient-background-system" aria-hidden="true">
      {/* =========================================================
       * PARALLAX STAGE: Smoothly responds to mouse & scroll
       * ========================================================= */}
      <div ref={bgParallaxRef} className="verhost-bg-parallax-stage">
        {/* Layer 1: Base artwork with continuous organic wave drift */}
        <div className="verhost-bg-image-layer verhost-wave-drift-base" />

        {/* Layer 2: Continuous Flowing Wave Morph Overlay (Screen Blend) */}
        <div className="verhost-bg-image-layer verhost-wave-fluid-overlay" />

        {/* Layer 3: Atmospheric Ambient Wave Luminescence & Pulse */}
        <div className="verhost-wave-ambient-shimmer" />
      </div>

      {/* =========================================================
       * LAYER 4: LIVING FLOWING PARTICLE MESH CANVAS
       * Streams continuously along the wave trajectories with
       * organic wave oscillation and delicate interconnecting networks.
       * ========================================================= */}
      <canvas 
        ref={canvasRef} 
        className="verhost-particles-canvas"
      />

      {/* =========================================================
       * LAYER 5: INTERACTIVE SOFT CURSOR GLOW
       * Restrained, non-blinding emerald light perturbation.
       * ========================================================= */}
      <div 
        ref={cursorGlowRef} 
        className="verhost-cursor-ambient-glow"
      />
    </div>
  );
}
