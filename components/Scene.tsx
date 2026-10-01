"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Scene() {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = host.current;
    if (!el) return;

    let renderer: THREE.WebGLRenderer | null = null;
    let raf = 0;
    let cleanup: (() => void) | undefined;

    try {
      const width = Math.max(1, el.clientWidth);
      const height = Math.max(1, el.clientHeight);

      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });

      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      renderer.setSize(width, height);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      el.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 100);
      camera.position.set(0, 0, 8);

      const group = new THREE.Group();
      scene.add(group);

      const geometry = new THREE.IcosahedronGeometry(2.15, 2);
      const material = new THREE.MeshPhysicalMaterial({
        color: 0x9b7b43,
        roughness: 0.25,
        metalness: 0.82,
        transmission: 0.06,
        clearcoat: 0.8,
        clearcoatRoughness: 0.18,
      });

      const core = new THREE.Mesh(geometry, material);
      group.add(core);

      const wireGeometry = new THREE.EdgesGeometry(geometry, 22);
      const wireMaterial = new THREE.LineBasicMaterial({
        color: 0xd8c18d,
        transparent: true,
        opacity: 0.28,
      });
      const wire = new THREE.LineSegments(wireGeometry, wireMaterial);
      group.add(wire);

      const points = new THREE.BufferGeometry();
      const count = 180;
      const positions = new Float32Array(count * 3);

      for (let i = 0; i < count; i += 1) {
        const r = 2.8 + Math.random() * 1.8;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);

        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = r * Math.cos(phi);
      }

      points.setAttribute("position", new THREE.BufferAttribute(positions, 3));

      const dotsMaterial = new THREE.PointsMaterial({
        color: 0xc9a86a,
        size: 0.025,
        transparent: true,
        opacity: 0.72,
      });
      const dots = new THREE.Points(points, dotsMaterial);
      group.add(dots);

      scene.add(new THREE.AmbientLight(0xefe5cf, 1.2));

      const key = new THREE.PointLight(0xd8b873, 22, 14);
      key.position.set(3, 3, 4);
      scene.add(key);

      const rim = new THREE.PointLight(0x6c5130, 16, 12);
      rim.position.set(-4, -2, -3);
      scene.add(rim);

      let px = 0;
      let py = 0;
      let tx = 0;
      let ty = 0;

      const onPointer = (event: PointerEvent) => {
        tx = (event.clientX / window.innerWidth - 0.5) * 0.35;
        ty = (event.clientY / window.innerHeight - 0.5) * 0.25;
      };

      const onResize = () => {
        if (!renderer || !el.isConnected) return;
        const w = Math.max(1, el.clientWidth);
        const h = Math.max(1, el.clientHeight);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      };

      const animate = () => {
        raf = requestAnimationFrame(animate);
        px += (tx - px) * 0.035;
        py += (ty - py) * 0.25;
        group.rotation.y += 0.0018;
        group.rotation.x = py;
        group.rotation.z = px * 0.35;
        core.rotation.x += 0.0007;
        wire.rotation.copy(core.rotation);
        dots.rotation.y -= 0.0007;
        try { renderer?.render(scene, camera); } catch (error) { console.warn("WebGL render stopped:", error); cancelAnimationFrame(raf); }
      };

      window.addEventListener("pointermove", onPointer, { passive: true });
      window.addEventListener("resize", onResize);
      animate();

      cleanup = () => {
        cancelAnimationFrame(raf);
        window.removeEventListener("pointermove", onPointer);
        window.removeEventListener("resize", onResize);

        geometry.dispose();
        material.dispose();
        wireGeometry.dispose();
        wireMaterial.dispose();
        points.dispose();
        dotsMaterial.dispose();
        renderer?.dispose();
        if (renderer?.domElement.parentElement === el) {
          renderer.domElement.remove();
        }
      };
    } catch (error) {
      console.warn("WebGL scene disabled:", error);
      cleanup = () => {
        cancelAnimationFrame(raf);
        if (renderer) renderer.dispose();
      };
    }

    return () => cleanup?.();
  }, []);

  return <div ref={host} className="webgl-scene" aria-hidden="true" />;
}
