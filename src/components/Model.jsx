import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import * as THREE from "three";

export default function Model(props) {

  const group = useRef();
  // const { nodes, materials, animations } = useGLTF("/Animado.glb");
  // const { mixer, actions } = useAnimations(animations, group);
  const { nodes, materials } = useGLTF('/Gundam/scene.gltf')

  // mixer.addEventListener("finished", () => {
  //   actions["happyIdle"]
  //     .setLoop(THREE.LoopOnce)
  //     .fadeIn(3)
  //     .crossFadeTo(actions?.talking2, 3, true)
  //     .play();
  // });

  // useEffect(() => {
  //   if (props.marker) {
  //     mixer.stopAllAction();
  //     actions["waving"].fadeOut(5).setLoop(THREE.LoopOnce).play();
  //   }
  // }, [props.marker]);
  

  return (
    // <group ref={group} {...props} dispose={null}>
    //   <group name="Scene">
    //     <group name="Armature" position={[0, 0, 0]}>
    //       <primitive object={nodes.Hips} />
    //       <primitive object={nodes.Ctrl_ArmPole_IK_Left} />
    //       <primitive object={nodes.Ctrl_Hand_IK_Left} />
    //       <primitive object={nodes.Ctrl_ArmPole_IK_Right} />
    //       <primitive object={nodes.Ctrl_Hand_IK_Right} />
    //       <primitive object={nodes.Ctrl_Foot_IK_Left} />
    //       <primitive object={nodes.Ctrl_LegPole_IK_Left} />
    //       <primitive object={nodes.Ctrl_Foot_IK_Right} />
    //       <primitive object={nodes.Ctrl_LegPole_IK_Right} />
    //       <primitive object={nodes.Ctrl_Master} />
    //       <skinnedMesh
    //         name="Wolf3D_Glasses"
    //         geometry={nodes.Wolf3D_Glasses.geometry}
    //         material={materials.Wolf3D_Glasses}
    //         skeleton={nodes.Wolf3D_Glasses.skeleton}
    //       />
    //       <skinnedMesh
    //         name="EyeLeft"
    //         geometry={nodes.EyeLeft.geometry}
    //         material={nodes.EyeLeft.material}
    //         skeleton={nodes.EyeLeft.skeleton}
    //         morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
    //         morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
    //       />
    //       <skinnedMesh
    //         name="EyeRight"
    //         geometry={nodes.EyeRight.geometry}
    //         material={nodes.EyeRight.material}
    //         skeleton={nodes.EyeRight.skeleton}
    //         morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
    //         morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
    //       />
    //       <skinnedMesh
    //         name="Wolf3D_Hair"
    //         geometry={nodes.Wolf3D_Hair.geometry}
    //         material={materials.Wolf3D_Hair}
    //         skeleton={nodes.Wolf3D_Hair.skeleton}
    //       />
    //       <skinnedMesh
    //         name="Wolf3D_Head"
    //         geometry={nodes.Wolf3D_Head.geometry}
    //         material={materials.Wolf3D_Skin}
    //         skeleton={nodes.Wolf3D_Head.skeleton}
    //         morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
    //         morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
    //       />
    //       <skinnedMesh
    //         name="Wolf3D_Outfit_Footwear"
    //         geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
    //         material={materials.Wolf3D_Outfit_Footwear}
    //         skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
    //       />
    //       <skinnedMesh
    //         name="Wolf3D_Teeth"
    //         geometry={nodes.Wolf3D_Teeth.geometry}
    //         material={materials.Wolf3D_Teeth}
    //         skeleton={nodes.Wolf3D_Teeth.skeleton}
    //         morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
    //         morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
    //       />
    //       <skinnedMesh
    //         name="Wolf3D_Outfit_Bottom"
    //         geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
    //         material={materials.Wolf3D_Outfit_Bottom}
    //         skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
    //       />
    //       <skinnedMesh
    //         name="Wolf3D_Outfit_Top"
    //         geometry={nodes.Wolf3D_Outfit_Top.geometry}
    //         material={materials.Wolf3D_Outfit_Top}
    //         skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
    //       />
    //       <skinnedMesh
    //         name="Wolf3D_Body"
    //         geometry={nodes.Wolf3D_Body.geometry}
    //         material={materials.Wolf3D_Body}
    //         skeleton={nodes.Wolf3D_Body.skeleton}
    //       />
    //     </group>
    //   </group>
    // </group>

      <group ref={group} {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={0.1}>
        <group position={[0, 0, 0]}>
          <mesh geometry={nodes.Object_3.geometry} material={materials['15___Default']} />
          <mesh geometry={nodes.Object_4.geometry} material={materials['02___Default']} />
          <mesh geometry={nodes.Object_5.geometry} material={materials['02___Default']} />
          <mesh geometry={nodes.Object_6.geometry} material={materials['02___Default']} />
          <mesh geometry={nodes.Object_7.geometry} material={materials['02___Default']} />
          <mesh geometry={nodes.Object_8.geometry} material={materials['04___Default']} />
          <mesh geometry={nodes.Object_9.geometry} material={materials['04___Default']} />
          <mesh geometry={nodes.Object_10.geometry} material={materials['05___Default']} />
          <mesh geometry={nodes.Object_11.geometry} material={materials['07___Default']} />
          <mesh geometry={nodes.Object_12.geometry} material={materials['07___Default']} />
          <mesh geometry={nodes.Object_13.geometry} material={materials['07___Default']} />
          <mesh geometry={nodes.Object_14.geometry} material={materials['07___Default']} />
          <mesh geometry={nodes.Object_15.geometry} material={materials['07___Default']} />
          <mesh geometry={nodes.Object_16.geometry} material={materials['07___Default']} />
          <mesh geometry={nodes.Object_17.geometry} material={materials['07___Default']} />
          <mesh geometry={nodes.Object_18.geometry} material={materials['07___Default']} />
          <mesh geometry={nodes.Object_19.geometry} material={materials['08___Default']} />
          <mesh geometry={nodes.Object_20.geometry} material={materials['08___Default']} />
          <mesh geometry={nodes.Object_21.geometry} material={materials['08___Default']} />
          <mesh geometry={nodes.Object_22.geometry} material={materials['08___Default']} />
          <mesh geometry={nodes.Object_23.geometry} material={materials['08___Default']} />
          <mesh geometry={nodes.Object_24.geometry} material={materials['08___Default']} />
          <mesh geometry={nodes.Object_25.geometry} material={materials['08___Default']} />
          <mesh geometry={nodes.Object_26.geometry} material={materials['08___Default']} />
          <mesh geometry={nodes.Object_27.geometry} material={materials['08___Default']} />
          <mesh geometry={nodes.Object_28.geometry} material={materials['08___Default']} />
          <mesh geometry={nodes.Object_29.geometry} material={materials['09___Default']} />
          <mesh geometry={nodes.Object_30.geometry} material={materials['09___Default']} />
          <mesh geometry={nodes.Object_31.geometry} material={materials['09___Default']} />
          <mesh geometry={nodes.Object_32.geometry} material={materials['09___Default']} />
          <mesh geometry={nodes.Object_33.geometry} material={materials['10___Default']} />
          <mesh geometry={nodes.Object_34.geometry} material={materials['11___Default']} />
          <mesh geometry={nodes.Object_35.geometry} material={materials['11___Default']} />
          <mesh geometry={nodes.Object_36.geometry} material={materials['11___Default']} />
          <mesh geometry={nodes.Object_37.geometry} material={materials['11___Default']} />
          <mesh geometry={nodes.Object_38.geometry} material={materials['13___Default']} />
          <mesh geometry={nodes.Object_39.geometry} material={materials['14___Default']} />
          <mesh geometry={nodes.Object_40.geometry} material={materials['14___Default']} />
          <mesh geometry={nodes.Object_41.geometry} material={materials['16___Default']} />
          <mesh geometry={nodes.Object_42.geometry} material={materials['17___Default']} />
          <mesh geometry={nodes.Object_43.geometry} material={materials['17___Default']} />
          <mesh geometry={nodes.Object_44.geometry} material={materials.material} />
          <mesh geometry={nodes.Object_45.geometry} material={materials.Material__2594} />
          <mesh geometry={nodes.Object_46.geometry} material={materials.Material__2594} />
          <mesh geometry={nodes.Object_47.geometry} material={materials.Material__2594} />
          <mesh geometry={nodes.Object_48.geometry} material={materials.Material__2594} />
          <mesh geometry={nodes.Object_49.geometry} material={materials.Material__2594} />
          <mesh geometry={nodes.Object_50.geometry} material={materials.Material__2594} />
          <mesh geometry={nodes.Object_51.geometry} material={materials.Material__2594} />
          <mesh geometry={nodes.Object_52.geometry} material={materials.Material__2594} />
          <mesh geometry={nodes.Object_53.geometry} material={materials.Material__2594} />
          <mesh geometry={nodes.Object_54.geometry} material={materials.Material__2594} />
          <mesh geometry={nodes.Object_55.geometry} material={materials.Material__2594} />
          <mesh geometry={nodes.Object_56.geometry} material={materials.Material__2594} />
          <mesh geometry={nodes.Object_57.geometry} material={materials.Material__2594} />
          <mesh geometry={nodes.Object_58.geometry} material={materials.Material__2594} />
          <mesh geometry={nodes.Object_59.geometry} material={materials.Material__2594} />
          <mesh geometry={nodes.Object_60.geometry} material={materials.Material__2594} />
          <mesh geometry={nodes.Object_61.geometry} material={materials.Material__2594} />
          <mesh geometry={nodes.Object_62.geometry} material={materials.Material__2594} />
          <mesh geometry={nodes.Object_63.geometry} material={materials.Material__2594} />
          <mesh geometry={nodes.Object_64.geometry} material={materials.Material__2594} />
          <mesh geometry={nodes.Object_65.geometry} material={materials.Material__2594} />
          <mesh geometry={nodes.Object_66.geometry} material={materials.Material__518} />
          <mesh geometry={nodes.Object_67.geometry} material={materials.wire_016016016} />
          <mesh geometry={nodes.Object_68.geometry} material={materials.wire_135059008} />
          <mesh geometry={nodes.Object_69.geometry} material={materials.wire_140088225} />
          <mesh geometry={nodes.Object_70.geometry} material={materials.wire_229154215} />
        </group>
      </group>
      </group>
  );
}

// useGLTF.preload("/Animado.gltf");
