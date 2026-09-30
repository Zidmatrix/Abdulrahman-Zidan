"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Scene() {
  const host = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = host.current; if (!el) return;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, el.clientWidth / el.clientHeight, 0.1, 100); camera.position.set(0,0,8);
    const renderer = new THREE.WebGLRenderer({alpha:true,antialias:true,powerPreference:"high-performance"});
    renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.7)); renderer.setSize(el.clientWidth,el.clientHeight); renderer.outputColorSpace=THREE.SRGBColorSpace; el.appendChild(renderer.domElement);
    const group=new THREE.Group(); scene.add(group);
    const geometry=new THREE.IcosahedronGeometry(2.15,2);
    const material=new THREE.MeshPhysicalMaterial({color:0x9b7b43,roughness:.25,metalness:.82,transmission:.06,clearcoat:.8,clearcoatRoughness:.18});
    const core=new THREE.Mesh(geometry,material); group.add(core);
    const wire=new THREE.LineSegments(new THREE.EdgesGeometry(geometry,22),new THREE.LineBasicMaterial({color:0xd8c18d,transparent:true,opacity:.28})); group.add(wire);
    const points=new THREE.BufferGeometry(); const count=180; const positions=new Float32Array(count*3);
    for(let i=0;i<count;i++){const r=2.8+Math.random()*1.8,t=Math.random()*Math.PI*2,p=Math.acos(2*Math.random()-1);positions[i*3]=r*Math.sin(p)*Math.cos(t);positions[i*3+1]=r*Math.sin(p)*Math.sin(t);positions[i*3+2]=r*Math.cos(p);}
    points.setAttribute("position",new THREE.BufferAttribute(positions,3));
    const dots=new THREE.Points(points,new THREE.PointsMaterial({color:0xc9a86a,size:.025,transparent:true,opacity:.72})); group.add(dots);
    scene.add(new THREE.AmbientLight(0xefe5cf,1.2));
    const key=new THREE.PointLight(0xd8b873,22,14); key.position.set(3,3,4); scene.add(key);
    const rim=new THREE.PointLight(0x6c5130,16,12); rim.position.set(-4,-2,-3); scene.add(rim);
    let px=0,py=0,tx=0,ty=0;
    const onPointer=(e:PointerEvent)=>{tx=(e.clientX/window.innerWidth-.5)*.35;ty=(e.clientY/window.innerHeight-.5)*.25};
    const onResize=()=>{const w=el.clientWidth,h=el.clientHeight;camera.aspect=w/h;camera.updateProjectionMatrix();renderer.setSize(w,h);renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.7));};
    window.addEventListener("pointermove",onPointer,{passive:true}); window.addEventListener("resize",onResize);
    let raf=0; const animate=()=>{raf=requestAnimationFrame(animate);px+=(tx-px)*.035;py+=(ty-py)*.035;group.rotation.y+=.0018;group.rotation.x=py;group.rotation.z=px*.35;core.rotation.x+=.0007;wire.rotation.copy(core.rotation);dots.rotation.y-=.0007;renderer.render(scene,camera)}; animate();
    return ()=>{cancelAnimationFrame(raf);window.removeEventListener("pointermove",onPointer);window.removeEventListener("resize",onResize);geometry.dispose();material.dispose();wire.geometry.dispose();(wire.material as THREE.Material).dispose();points.dispose();(dots.material as THREE.Material).dispose();renderer.dispose();renderer.domElement.remove();};
  },[]);
  return <div ref={host} className="webgl-scene" aria-hidden="true"/>;
}
