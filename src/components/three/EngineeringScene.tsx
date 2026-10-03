"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function EngineeringScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(max-width: 767px)").matches;
  });

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  if (isMobile) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-gray-600 text-sm font-orbitron tracking-wider text-center px-4">
          Interactive 3D visualization available on desktop.
        </p>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="w-full h-full relative">
      <CanvasScene />
    </div>
  );
}

function CanvasScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const container = canvas.parentElement;
    if (!container) return;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#0a0a0a");
    scene.fog = new THREE.Fog("#0a0a0a", 6, 22);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      42,
      container.clientWidth / container.clientHeight,
      0.1,
      50
    );
    camera.position.set(3.5, 2.8, 5);
    camera.lookAt(0, 0.2, 0);

    // ─── LIGHTING ────────────────────────────────────────────────
    const ambient = new THREE.AmbientLight("#1a1a2e", 0.6);
    scene.add(ambient);

    const sun = new THREE.DirectionalLight("#ffffff", 1.4);
    sun.position.set(4, 6, 3);
    scene.add(sun);

    const fill = new THREE.DirectionalLight("#c84c38", 0.5);
    fill.position.set(-3, 2, -2);
    scene.add(fill);

    const rim = new THREE.DirectionalLight("#37d0d2", 0.6);
    rim.position.set(0, 3, -4);
    scene.add(rim);

    const pointRed = new THREE.PointLight("#c84c38", 2.5, 6);
    pointRed.position.set(-2, 0.5, 1);
    scene.add(pointRed);

    const pointCyan = new THREE.PointLight("#37d0d2", 2, 5);
    pointCyan.position.set(2, 0.3, -1);
    scene.add(pointCyan);

    // ─── GROUND GRID ────────────────────────────────────────────
    const gridHelper = new THREE.GridHelper(10, 20, "#333333", "#1a1a1a");
    gridHelper.position.y = -1.1;
    scene.add(gridHelper);

    // Ground plane (subtle dark)
    const groundGeo = new THREE.PlaneGeometry(20, 20);
    const groundMat = new THREE.MeshStandardMaterial({
      color: "#0a0a0a",
      roughness: 0.9,
      metalness: 0.1,
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -1.1;
    scene.add(ground);

    // ─── BATTERY PACK (Box) ─────────────────────────────────────
    const batteryGroup = new THREE.Group();
    const batteryGeo = new THREE.BoxGeometry(1.5, 0.35, 0.9, 4, 2, 3);
    const batteryMat = new THREE.MeshStandardMaterial({
      color: "#1c1c1c",
      roughness: 0.35,
      metalness: 0.85,
    });
    const battery = new THREE.Mesh(batteryGeo, batteryMat);
    batteryGroup.add(battery);

    // Battery wire port
    const portGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.12, 8);
    const portMat = new THREE.MeshStandardMaterial({
      color: "#efc120",
      emissive: "#efc120",
      emissiveIntensity: 0.4,
      roughness: 0.2,
      metalness: 0.9,
    });
    [-0.45, 0.45].forEach((x) => {
      const port = new THREE.Mesh(portGeo, portMat);
      port.rotation.x = Math.PI / 2;
      port.position.set(x, 0.2, 0);
      batteryGroup.add(port);
    });

    batteryGroup.position.set(0, -0.65, 0);
    scene.add(batteryGroup);

    // ─── MOTOR HOUSING (Cylinder) ───────────────────────────────
    const motorGroup = new THREE.Group();
    const housingGeo = new THREE.CylinderGeometry(0.55, 0.55, 0.75, 32);
    const housingMat = new THREE.MeshStandardMaterial({
      color: "#2a2a2a",
      roughness: 0.3,
      metalness: 0.9,
    });
    const housing = new THREE.Mesh(housingGeo, housingMat);
    motorGroup.add(housing);

    // Motor housing ring detail
    const ringGeo = new THREE.TorusGeometry(0.58, 0.025, 8, 48);
    const ringMat = new THREE.MeshStandardMaterial({
      color: "#c84c38",
      emissive: "#c84c38",
      emissiveIntensity: 0.3,
      roughness: 0.2,
      metalness: 0.9,
    });
    [-0.35, 0.35].forEach((y) => {
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.y = y;
      motorGroup.add(ring);
    });

    // Motor shaft (inner cylinder)
    const shaftGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.6, 16);
    const shaftMat = new THREE.MeshStandardMaterial({
      color: "#888888",
      roughness: 0.15,
      metalness: 0.95,
    });
    const shaft = new THREE.Mesh(shaftGeo, shaftMat);
    motorGroup.add(shaft);

    // Shaft ends (discs)
    const discGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.04, 16);
    [-0.32, 0.32].forEach((y) => {
      const disc = new THREE.Mesh(discGeo, shaftMat);
      disc.position.y = y;
      motorGroup.add(disc);
    });

    motorGroup.position.set(0, 0.05, 0);
    scene.add(motorGroup);

    // ─── WIRING (Torus for cable sleeves) ───────────────────────
    const wireGroup = new THREE.Group();
    const wireMat = new THREE.MeshStandardMaterial({
      color: "#c84c38",
      emissive: "#c84c38",
      emissiveIntensity: 0.4,
      roughness: 0.2,
      metalness: 0.7,
    });

    [-0.55, 0.55].forEach((xSide) => {
      // Torus as wire sleeve
      const torusGeo = new THREE.TorusGeometry(0.08, 0.03, 8, 16);
      for (let j = 0; j < 3; j++) {
        const torus = new THREE.Mesh(torusGeo, wireMat);
        torus.position.set(
          xSide * 0.6,
          -0.3 - j * 0.25,
          xSide * 0.2
        );
        torus.rotation.y = Math.PI / 2;
        wireGroup.add(torus);
      }
    });

    scene.add(wireGroup);

    // ─── ENERGY PARTICLES ───────────────────────────────────────
    const particleCount = 200;
    const particlesGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const particleData: { baseX: number; baseY: number; baseZ: number; phase: number; speed: number }[] = [];

    const yellowColor = new THREE.Color("#efc120");
    const cyanColor = new THREE.Color("#37d0d2");
    const redColor = new THREE.Color("#c84c38");

    for (let i = 0; i < particleCount; i++) {
      // Spawn around battery and motor area
      const fromBattery = Math.random() < 0.5;
      if (fromBattery) {
        const x = (Math.random() - 0.5) * 1.2;
        const y = -0.6 + (Math.random() - 0.5) * 0.5;
        const z = (Math.random() - 0.5) * 0.9;
        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;
        particleData.push({ baseX: x, baseY: y, baseZ: z, phase: Math.random() * Math.PI * 2, speed: 0.3 + Math.random() * 0.8 });
      } else {
        const x = (Math.random() - 0.5) * 0.9;
        const y = -0.1 + (Math.random() - 0.5) * 0.8;
        const z = (Math.random() - 0.5) * 0.8;
        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;
        particleData.push({ baseX: x, baseY: y, baseZ: z, phase: Math.random() * Math.PI * 2, speed: 0.3 + Math.random() * 0.8 });
      }

      const c = Math.random() < 0.4 ? yellowColor : Math.random() < 0.5 ? cyanColor : redColor;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    particlesGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particlesGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particlesMat = new THREE.PointsMaterial({
      size: 0.025,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      transparent: true,
      opacity: 0.8,
    });

    const particles = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particles);

    // ─── ORBIT CONTROLS (manual implementation) ─────────────────
    let isDragging = false;
    const prevMouse = { x: 0, y: 0 };
    const spherical = { theta: Math.PI / 4, phi: Math.PI / 3.5, radius: 6.5 };
    const targetSpherical = { ...spherical };

    const updateCamera = () => {
      spherical.theta += (targetSpherical.theta - spherical.theta) * 0.08;
      spherical.phi += (targetSpherical.phi - spherical.phi) * 0.08;
      spherical.radius += (targetSpherical.radius - spherical.radius) * 0.08;

      const phi = Math.max(0.1, Math.min(Math.PI / 2 - 0.05, spherical.phi));
      const r = spherical.radius;
      camera.position.x = r * Math.sin(phi) * Math.cos(spherical.theta);
      camera.position.y = r * Math.cos(phi);
      camera.position.z = r * Math.sin(phi) * Math.sin(spherical.theta);
      camera.lookAt(0, 0.1, 0);
    };

    canvas.addEventListener("pointerdown", (e) => {
      isDragging = true;
      prevMouse.x = e.clientX;
      prevMouse.y = e.clientY;
      canvas.style.cursor = "grabbing";
    });

    window.addEventListener("pointerup", () => {
      isDragging = false;
      if (canvas) canvas.style.cursor = "grab";
    });

    window.addEventListener("pointermove", (e) => {
      if (!isDragging) return;
      const dx = e.clientX - prevMouse.x;
      const dy = e.clientY - prevMouse.y;
      targetSpherical.theta -= dx * 0.008;
      targetSpherical.phi -= dy * 0.008;
      prevMouse.x = e.clientX;
      prevMouse.y = e.clientY;
    });

    canvas.addEventListener("wheel", (e) => {
      targetSpherical.radius += e.deltaY * 0.01;
      targetSpherical.radius = Math.max(3, Math.min(12, targetSpherical.radius));
    });

    if (canvas) canvas.style.cursor = "grab";

    // ─── ANIMATION LOOP ─────────────────────────────────────────
    const clock = new THREE.Clock();
    const animate = () => {
      const t = clock.getElapsedTime();

      // Rotate motor shaft
      shaft.rotation.y = t * 1.5;

      // Animate particles
      const posArr = particlesGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const pd = particleData[i];
        // Orbital motion
        const angle = t * pd.speed + pd.phase;
        const r = 0.15 + Math.sin(t * 1.2 + pd.phase) * 0.1;
        posArr[i * 3] = pd.baseX + Math.cos(angle) * r;
        posArr[i * 3 + 1] = pd.baseY + Math.sin(angle * 0.7) * 0.15;
        posArr[i * 3 + 2] = pd.baseZ + Math.sin(angle) * r;
      }
      particlesGeo.attributes.position.needsUpdate = true;

      // Slow auto-rotate when not dragging
      if (!isDragging) {
        targetSpherical.theta += 0.0015;
      }

      updateCamera();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // ─── RESIZE HANDLER ─────────────────────────────────────────
    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w === 0 || h === 0) return;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      batteryGeo.dispose();
      batteryMat.dispose();
      housingGeo.dispose();
      housingMat.dispose();
      shaftGeo.dispose();
      shaftMat.dispose();
      particlesGeo.dispose();
      particlesMat.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full block"
      style={{ background: "#0a0a0a" }}
    />
  );
}
