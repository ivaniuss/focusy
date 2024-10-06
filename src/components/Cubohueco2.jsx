/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 public/cubohueco2.glb 
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
// import { useGLTF, useAnimations } from '@react-three/drei'
import { useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Cubohueco2(props) {
  const group = React.useRef()
  // const { scene, animations } = useGLTF('/cubohueco2.glb')
  const { scene } = useGLTF('/cubohueco2.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  // const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="transform302001" />
        <group name="transform343001" />
        <group name="Area" position={[3.543, 5.237, 0.029]} rotation={[-Math.PI / 2, 0, 0]} scale={6.971} />
        <group name="transform302" />
        <group name="transform343" />
        <group name="locator1" rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <pointLight name="Point" decay={2} position={[-3.236, 0.521, 1.946]} rotation={[-Math.PI / 2, 0, 0]} />
        <pointLight name="Point001" intensity={1.854} decay={5} color="#ffd597" position={[-2.97, 4.276, 3.42]} rotation={[-Math.PI / 2, 0, 0]} />
        <pointLight name="Point003" intensity={1.178} decay={5} color="#ffd597" position={[1.388, 3.455, 3.991]} rotation={[-Math.PI / 2, 0, 0]} />
        <pointLight name="Point005" intensity={3.183} decay={5} color="#ffe4a1" position={[-3.537, 1.853, -0.976]} rotation={[-Math.PI / 2, 0, 0]} />
        <pointLight name="Point002" intensity={0.653} decay={1} color="#ffd597" position={[-4.164, 2.642, 3.676]} rotation={[-Math.PI / 2, 0, 0]} />
        <spotLight intensity={0.382} angle={1.559} penumbra={0.799} decay={5} color="#ffdfbf" position={[0.537, 4.228, -3.872]} rotation={[-1.931, 0.395, 0.144]} target={nodes.Spot003.target}>
          <primitive object={nodes.Spot003.target} position={[0, 0, -1]} />
        </spotLight>
        <mesh name="Background__wallpaper_inspo" geometry={nodes.Background__wallpaper_inspo.geometry} material={materials['Background_ wallpaper inspo']} position={[-4.762, 3.648, -1.93]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
        <mesh name="Pokemon_snorlax" geometry={nodes.Pokemon_snorlax.geometry} material={materials['Pokemon snorlax']} position={[-4.704, 3.632, -3.822]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
        <mesh name="JAVA_Fat_BURN_COFFEE__☕" geometry={nodes['JAVA_Fat_BURN_COFFEE__☕'].geometry} material={materials['JAVA Fat BURN COFFEE  ☕']} position={[-4.716, 3.644, -2.856]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
        <mesh name="puerta" geometry={nodes.puerta.geometry} material={materials['Material.025']} position={[4.808, 2.16, 3.029]} rotation={[0, 0, -Math.PI]} scale={[0.035, 2.019, 1.03]} />
        <group name="lucesdeco" position={[6.832, 0.5, 0.394]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.07, 0.046, 0.05]}>
          <mesh name="Mesh288" geometry={nodes.Mesh288.geometry} material={materials['Material.020']} />
          <mesh name="Mesh288_1" geometry={nodes.Mesh288_1.geometry} material={materials['Material.017']} />
        </group>
        <mesh name="Box049" geometry={nodes.Box049.geometry} material={materials['Material.037']} position={[4.819, 3.269, -0.95]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[0.025, 0.046, 0.025]} />
        <group name="Box050" position={[4.501, 3.636, -0.785]} scale={0.008}>
          <mesh name="Mesh530" geometry={nodes.Mesh530.geometry} material={materials['Material.053']} />
          <mesh name="Mesh530_1" geometry={nodes.Mesh530_1.geometry} material={materials['Material.054']} />
        </group>
        <group name="laptop" position={[-1.755, 1.731, 3.798]} rotation={[0, 0.279, 0]} scale={[0.022, 0.008, 0.032]}>
          <mesh name="Mesh536" geometry={nodes.Mesh536.geometry} material={materials.beige} />
          <mesh name="Mesh536_1" geometry={nodes.Mesh536_1.geometry} material={materials['Material.070']} />
        </group>
        <group name="reloj001" position={[-4.76, 4.018, 0.881]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.011, 0.006, 0.011]}>
          <mesh name="Mesh538" geometry={nodes.Mesh538.geometry} material={materials['Material.060']} />
          <mesh name="Mesh538_1" geometry={nodes.Mesh538_1.geometry} material={materials['Material.061']} />
        </group>
        <group name="Object017" position={[3.39, 4.779, -4.33]} scale={0.01}>
          <mesh name="Mesh546" geometry={nodes.Mesh546.geometry} material={materials['Material.049']} />
          <mesh name="Mesh546_1" geometry={nodes.Mesh546_1.geometry} material={materials['Material.050']} />
        </group>
        <mesh name="Libro001" geometry={nodes.Libro001.geometry} material={materials['Material.055']} position={[4.653, 2.902, -1.28]} rotation={[-2.056, -0.057, -3.034]} scale={0.019} />
        <mesh name="Cuadro" geometry={nodes.Cuadro.geometry} material={materials['Material #97']} position={[4.576, 2.853, -0.702]} rotation={[1.571, -0.438, 1.58]} scale={[0.006, 0.005, 0.008]} />
        <group name="Cylinder023" position={[4.692, 3.384, -0.707]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={0.005}>
          <mesh name="Mesh567" geometry={nodes.Mesh567.geometry} material={materials['Material #25']} />
          <mesh name="Mesh567_1" geometry={nodes.Mesh567_1.geometry} material={materials['Material.052']} />
        </group>
        <group name="Cylinder024" position={[4.528, 0.387, -1.64]} rotation={[1.209, -0.238, 1.452]} scale={0.003}>
          <mesh name="Mesh568" geometry={nodes.Mesh568.geometry} material={materials['Material #25']} />
          <mesh name="Mesh568_1" geometry={nodes.Mesh568_1.geometry} material={materials['Material.047']} />
          <mesh name="Mesh568_2" geometry={nodes.Mesh568_2.geometry} material={materials['Material.048']} />
        </group>
        <group name="Cuadro002" position={[1.836, 3.296, 4.469]} rotation={[1.57, 0, -3.141]} scale={[0.018, 0.013, 0.018]}>
          <mesh name="Mesh587" geometry={nodes.Mesh587.geometry} material={materials['Material #96']} />
          <mesh name="Mesh587_1" geometry={nodes.Mesh587_1.geometry} material={materials['Material.023']} />
        </group>
        <mesh name="cUADRO" geometry={nodes.cUADRO.geometry} material={materials['Material #97']} position={[4.576, 2.853, -0.702]} rotation={[1.571, -0.438, 1.58]} scale={[0.006, 0.005, 0.008]} />
        <mesh name="Basura" geometry={nodes.Basura.geometry} material={materials['Material.056']} position={[-0.614, 0.744, 3.743]} rotation={[1.161, -0.643, 2.015]} scale={0.019} />
        <mesh name="Line004" geometry={nodes.Line004.geometry} material={materials['Material.021']} position={[-0.126, 1.93, -4.109]} rotation={[0, Math.PI / 2, 0]} scale={[0.01, 0.01, 0.036]} />
        <mesh name="Line004001" geometry={nodes.Line004001.geometry} material={materials['Material.021']} position={[1.563, 1.93, -4.109]} rotation={[0, Math.PI / 2, 0]} scale={[0.01, 0.01, 0.037]} />
        <group name="Cuadro001" position={[0.766, 3.296, 4.469]} rotation={[1.57, 0, -3.141]} scale={[0.018, 0.013, 0.018]}>
          <mesh name="Mesh628" geometry={nodes.Mesh628.geometry} material={materials.Material} />
          <mesh name="Mesh628_1" geometry={nodes.Mesh628_1.geometry} material={materials['Material.022']} />
        </group>
        <mesh name="Alfombra" geometry={nodes.Alfombra.geometry} material={materials['Material.015']} position={[3.178, 0.13, -2.798]} scale={1.641} />
        <mesh name="Sphere" geometry={nodes.Sphere.geometry} material={materials['Material.041']} position={[-4.281, 1.594, -1.153]} scale={0.067} />
        <mesh name="Cube" geometry={nodes.Cube.geometry} material={materials['Material.046']} position={[-3.159, 4.256, 4.102]} scale={[0.03, 0.281, 0.034]} />
        <group name="Cuadro003" position={[-2.785, 4.152, 4.303]} rotation={[2.041, 0.001, -3.141]} scale={[0.011, 0.008, 0.011]}>
          <mesh name="Mesh001" geometry={nodes.Mesh001.geometry} material={materials['Material.065']} />
          <mesh name="Mesh001_1" geometry={nodes.Mesh001_1.geometry} material={materials['Material.022']} />
        </group>
        <mesh name="Sphere001" geometry={nodes.Sphere001.geometry} material={materials['Material.041']} position={[-4.188, 2.454, 3.765]} scale={0.047} />
        <mesh name="Sphere002" geometry={nodes.Sphere002.geometry} material={nodes.Sphere002.material} position={[4.748, 2.37, 2.295]} scale={0.079} />
        <mesh name="Cubo_Base" geometry={nodes.Cubo_Base.geometry} material={materials['Material.002']} position={[0.023, 2.667, 0.018]} />
        <mesh name="basedepiso" geometry={nodes.basedepiso.geometry} material={materials['Material.074']} position={[0, -0.043, 0]} />
        <mesh name="pisomadera" geometry={nodes.pisomadera.geometry} material={materials['Material.011']} position={[0.011, 0.111, -4.109]} />
        <mesh name="cabecera1" geometry={nodes.cabecera1.geometry} material={materials['Material.004']} position={[-4.592, 1.684, -2.977]}>
          <mesh name="Cube002" geometry={nodes.Cube002.geometry} material={materials['Material.005']} position={[-0.045, -0.779, 1.153]} scale={[1, 1.024, 1]} />
        </mesh>
        <mesh name="cabecera2" geometry={nodes.cabecera2.geometry} material={materials['Material.007']} position={[0.263, 1.125, -2.977]}>
          <mesh name="Cube003" geometry={nodes.Cube003.geometry} material={materials['Material.006']} position={[-0.009, -0.476, 1.153]} />
        </mesh>
        <mesh name="colchon_" geometry={nodes.colchon_.geometry} material={materials['Material.008']} position={[-2.009, 0.795, -2.999]}>
          <mesh name="Plane002" geometry={nodes.Plane002.geometry} material={materials['Material.010']} position={[-0.213, -0.396, 0]} />
          <mesh name="Plane003" geometry={nodes.Plane003.geometry} material={nodes.Plane003.material} position={[-0.213, 0, 0]} />
        </mesh>
        <mesh name="almohada" geometry={nodes.almohada.geometry} material={materials['Material.009']} position={[-4.134, 1.038, -2.387]} rotation={[0, 0, -0.281]} scale={[1.104, 1.429, 1.07]} />
        <mesh name="PataMesa" geometry={nodes.PataMesa.geometry} material={materials['Material.013']} position={[-1.175, 0.081, 3.696]} scale={[1, 1.312, 1]} />
        <mesh name="cabecera1001" geometry={nodes.cabecera1001.geometry} material={materials['Material.012']} position={[-2.922, 1.502, 3.631]} scale={[1, 1.241, 1]} />
        <mesh name="patamesa" geometry={nodes.patamesa.geometry} material={materials['Material.014']} position={[-4.646, 0.097, 3.696]} scale={[1, 1.3, 1]} />
        <mesh name="estante" geometry={nodes.estante.geometry} material={materials['Material.012']} position={[-2.91, 3.84, 4.085]} scale={[0.505, 0.65, 0.474]} />
        <group name="planta" position={[-3.508, 4.142, 4.13]} scale={0.201}>
          <mesh name="Object_0" geometry={nodes.Object_0.geometry} material={materials['Material.066']} />
          <mesh name="Object_0_1" geometry={nodes.Object_0_1.geometry} material={materials['Material.069']} />
        </group>
        <mesh name="Circle" geometry={nodes.Circle.geometry} material={nodes.Circle.material} position={[-1.989, 0.103, -1.756]} scale={-2.666} />
        <mesh name="lampara" geometry={nodes.lampara.geometry} material={materials['Material.040']} position={[-4.286, 1.318, -1.145]} scale={0.141} />
        <mesh name="mesadenoche" geometry={nodes.mesadenoche.geometry} material={materials['Material.072']} position={[-4.333, 0.655, -1.139]} rotation={[0, 1.571, 0]} scale={[0.374, 0.485, 0.405]} />
        <mesh name="Vnetana" geometry={nodes.Vnetana.geometry} material={materials['Material.001']} position={[0.314, 3.708, -4.38]} scale={[1.541, 0.98, 0.058]} />
        <mesh name="Puf" geometry={nodes.Puf.geometry} material={materials.Carpete} position={[3.469, 0.791, -3.109]} rotation={[0, -0.193, 0]} scale={[1.615, 1.005, 1.615]} />
        <mesh name="Vnetana001" geometry={nodes.Vnetana001.geometry} material={materials['Material.003']} position={[0.314, 3.708, -4.38]} scale={[1.541, 0.98, 0.058]} />
        <mesh name="saBANA" geometry={nodes.saBANA.geometry} material={materials['Material.008']} position={[-1.818, 0.767, -2.999]} scale={[0.866, 1, 1]} />
        <mesh name="almohada001" geometry={nodes.almohada001.geometry} material={materials['Material.009']} position={[-4.015, 1.222, -3.793]} rotation={[-0.086, -0.502, -0.86]} scale={[1.104, 1.429, 1.07]} />
        <mesh name="almohada002" geometry={nodes.almohada002.geometry} material={materials['Material.009']} position={[3.279, 0.861, -3.261]} rotation={[0.058, 0.77, 0.612]} scale={[0.889, 1.15, 0.861]} />
        <mesh name="SillaParteArriba" geometry={nodes.SillaParteArriba.geometry} material={materials['Material.028']} position={[-3.013, 1.091, 2.265]} scale={[0.627, 0.113, 0.627]} />
        <group name="Patasilla" position={[-2.738, 0.596, 2.001]} scale={[1.115, 1.145, 1.115]}>
          <mesh name="Cylinder008" geometry={nodes.Cylinder008.geometry} material={materials['Material.029']} />
          <mesh name="Cylinder008_1" geometry={nodes.Cylinder008_1.geometry} material={materials['Material.030']} />
          <mesh name="Cylinder008_2" geometry={nodes.Cylinder008_2.geometry} material={materials['Material.031']} />
          <mesh name="Cylinder008_3" geometry={nodes.Cylinder008_3.geometry} material={materials['Material.027']} />
        </group>
        <group name="Compu_Monitor" position={[-2.995, 2.543, 3.982]} scale={[0.693, 0.403, 0.028]}>
          <mesh name="Cube006" geometry={nodes.Cube006.geometry} material={materials['Material.058']} />
          <mesh name="Cube006_1" geometry={nodes.Cube006_1.geometry} material={materials['Material.059']} />
        </group>
        <mesh name="PantallaCompu" geometry={nodes.PantallaCompu.geometry} material={materials['Material.026']} position={[-2.995, 2.543, 3.941]} scale={[0.693, 0.403, 0.028]} />
        <mesh name="Teclado" geometry={nodes.Teclado.geometry} material={nodes.Teclado.material} position={[-2.919, 1.762, 3.423]} rotation={[0, -0.152, 0]} scale={[0.39, 0.02, 0.18]} />
        <mesh name="TeclasTeclado" geometry={nodes.TeclasTeclado.geometry} material={nodes.TeclasTeclado.material} position={[-2.625, 1.793, 3.545]} rotation={[-Math.PI, 0.152, -Math.PI]} scale={[0.025, 0.01, 0.025]} />
        <mesh name="TelcasTeclado" geometry={nodes.TelcasTeclado.geometry} material={nodes.TelcasTeclado.material} position={[-2.611, 1.793, 3.451]} rotation={[-Math.PI, 0.152, -Math.PI]} scale={[0.025, 0.01, 0.025]} />
        <mesh name="Teclasteclado" geometry={nodes.Teclasteclado.geometry} material={nodes.Teclasteclado.material} position={[-2.597, 1.793, 3.363]} rotation={[-Math.PI, 0.152, -Math.PI]} scale={[0.025, 0.01, 0.025]} />
        <mesh name="Teclasteclado001" geometry={nodes.Teclasteclado001.geometry} material={nodes.Teclasteclado001.material} position={[-3.067, 1.793, 3.291]} rotation={[-Math.PI, 0.152, -Math.PI]} scale={[0.025, 0.01, 0.025]} />
        <mesh name="Teclas" geometry={nodes.Teclas.geometry} material={nodes.Teclas.material} position={[-2.89, 1.793, 3.318]} rotation={[-Math.PI, 0.152, -Math.PI]} scale={[0.141, 0.01, 0.025]} />
        <mesh name="Mousepad" geometry={nodes.Mousepad.geometry} material={materials['Material.057']} position={[-3.016, 1.74, 3.435]} scale={[0.675, 1, 0.28]} />
        <mesh name="mouse" geometry={nodes.mouse.geometry} material={materials['Material.018']} position={[-3.499, 1.793, 3.47]} rotation={[0, 0, Math.PI / 2]} scale={[-0.021, -0.011, -0.021]} />
        <mesh name="Cylinder005" geometry={nodes.Cylinder005.geometry} material={materials['Material.042']} position={[-0.616, 0.148, 3.696]} scale={[0.355, 0.022, 0.355]} />
        <mesh name="oso" geometry={nodes.oso.geometry} material={materials.brun} position={[-2.392, -1.82, -2.329]} rotation={[1.475, -0.308, 1.114]} scale={0.053} />
        <group name="libro3" position={[0.887, 2.402, 7.643]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={0.07}>
          <mesh name="Mesh036" geometry={nodes.Mesh036.geometry} material={materials.blanc} />
          <mesh name="Mesh036_1" geometry={nodes.Mesh036_1.geometry} material={materials.jaune} />
        </group>
        <mesh name="pared_deco" geometry={nodes.pared_deco.geometry} material={materials.blanc} position={[-0.082, 2.68, 3.329]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.024, 0.098, 0.027]} />
        <mesh name="almohada003" geometry={nodes.almohada003.geometry} material={materials.bleu} position={[-3.785, -3.793, -2.277]} rotation={[0.061, -0.046, 0.277]} scale={2.675} />
        <mesh name="lamparamesa" geometry={nodes.lamparamesa.geometry} material={materials['Material.071']} position={[-2.131, 0.441, 3.994]} rotation={[Math.PI / 2, 0, 0]} scale={0.056} />
        <group name="libro2" position={[0.781, 2.402, 7.643]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={0.07}>
          <mesh name="Mesh257" geometry={nodes.Mesh257.geometry} material={materials.blanc} />
          <mesh name="Mesh257_1" geometry={nodes.Mesh257_1.geometry} material={materials.jaune} />
        </group>
        <group name="Libro" position={[0.682, 2.402, 7.643]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={0.07}>
          <mesh name="Mesh258" geometry={nodes.Mesh258.geometry} material={materials.blanc} />
          <mesh name="Mesh258_1" geometry={nodes.Mesh258_1.geometry} material={materials.jaune} />
        </group>
        <mesh name="pared_deco002" geometry={nodes.pared_deco002.geometry} material={materials.blanc} position={[-3.701, 2.686, -0.112]} rotation={[Math.PI / 2, 0, 0]} scale={[0.024, 0.09, 0.027]} />
        <mesh name="pared_deco001" geometry={nodes.pared_deco001.geometry} material={materials.blanc} position={[3.705, 2.68, 0.072]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0.024, 0.09, 0.027]} />
        <mesh name="pared_deco003" geometry={nodes.pared_deco003.geometry} material={materials.blanc} position={[0.096, 2.706, -3.356]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[0.024, 0.098, 0.027]} />
        <mesh name="Cubo_Base001" geometry={nodes.Cubo_Base001.geometry} material={materials['Material.002']} position={[0.022, 2.671, 0.02]} />
      </group>
    </group>
  )
}

useGLTF.preload('/cubohueco2.glb')
