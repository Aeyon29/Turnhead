const scene = new Entity()
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
scene.addComponentOrReplace(transform)
engine.addEntity(scene)

const groundFloorSciFi_04 = new Entity()
groundFloorSciFi_04.setParent(scene)
const gltfShape = new GLTFShape('models/GroundFloorSciFi_04/GroundFloorSciFi_04.glb')
groundFloorSciFi_04.addComponentOrReplace(gltfShape)
const transform_2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
groundFloorSciFi_04.addComponentOrReplace(transform_2)
engine.addEntity(groundFloorSciFi_04)

const lightCube_01 = new Entity()
lightCube_01.setParent(scene)
const gltfShape_2 = new GLTFShape('models/LightCube_01/LightCube_01.glb')
lightCube_01.addComponentOrReplace(gltfShape_2)
const transform_3 = new Transform({
  position: new Vector3(11, 2.5, 3),
  rotation: new Quaternion(0.013504881562980266, 0.013504881562980112, -0.7069778059981581, 0.7069778059981581),
  scale: new Vector3(0.5674831524834145, 0.7145800969864231, 7.8475369517767035)
})
lightCube_01.addComponentOrReplace(transform_3)
engine.addEntity(lightCube_01)
export class SimpleRotate implements ISystem {
  update() {
    let transform = lightCube_01.getComponent(Transform)
    transform.rotate(Vector3.Left(), 3)
  }
}
engine.addSystem(new SimpleRotate())
const transform_3 = new Entity()
const lightCube_02 = new Entity()
lightCube_02.setParent(scene)
const gltfShape_3 = new GLTFShape('models/LightCube_02/LightCube_02.glb')
lightCube_02.addComponentOrReplace(gltfShape_3)
const transform_4 = new Transform({
  position: new Vector3(8.5, 2.5170693211244415, 3),
  rotation: new Quaternion(0.7071067811865472, 0.7071067811865475, 8.326672684688674e-17, 8.326672684688674e-17),
  scale: new Vector3(-0.5554700791918527, 0.735466438337818, 7.846970944470541)
})
lightCube_02.addComponentOrReplace(transform_4)
engine.addEntity(lightCube_02)
export class SimpleRotate implements ISystem {
  update() {
    let transform = lightCube_02.getComponent(Transform)
    transform.rotate(Vector3.Right(), 5)
  }
}
engine.addSystem(new SimpleRotate())
const transform_4 = new Entity()
const lightCube_03 = new Entity()
lightCube_03.setParent(scene)
const gltfShape_4 = new GLTFShape('models/LightCube_03/LightCube_03.glb')
lightCube_03.addComponentOrReplace(gltfShape_4)
const transform_5 = new Transform({
  position: new Vector3(5.5, 1, 3),
  rotation: new Quaternion(0, 0, -0.6953770589038182, 0.7186450764809261),
  scale: new Vector3(0, 0, 0)
})
lightCube_03.addComponentOrReplace(transform_5)
engine.addEntity(lightCube_03)
export class SimpleRotate implements ISystem {
  update() {
    let transform = lightCube_03.getComponent(Transform)
    transform.rotate(Vector3.Left(), 30)
  }
}
engine.addSystem(new SimpleRotate())
const transform_5 = new Entity()
const lightCube_03_2 = new Entity()
lightCube_03_2.setParent(scene)
lightCube_03_2.addComponentOrReplace(gltfShape_4)
const transform_6 = new Transform({
  position: new Vector3(5.5, 2.5, 13.5),
  rotation: new Quaternion(0, 0, -0.6953770589038182, 0.7186450764809261),
  scale: new Vector3(0.44333160690961804, 0.5418990407537445, 6)
})
lightCube_03_2.addComponentOrReplace(transform_6)
engine.addEntity(lightCube_03_2)
export class SimpleRotate implements ISystem {
  update() {
    let transform = lightCube_03_2.getComponent(Transform)
    transform.rotate(Vector3.Left(), 10)
  }
}
engine.addSystem(new SimpleRotate())
const transform_6 = new Entity()
const lightCube_02_2 = new Entity()
lightCube_02_2.setParent(scene)
lightCube_02_2.addComponentOrReplace(gltfShape_3)
const transform_7 = new Transform({
  position: new Vector3(8.5, 1, 3),
  rotation: new Quaternion(0.7071067811865472, 0.7071067811865475, 8.326672684688674e-17, 8.326672684688674e-17),
  scale: new Vector3(-0.5554700791918527, 0.735466438337818, 7.846970944470541)
})
lightCube_02_2.addComponentOrReplace(transform_7)
engine.addEntity(lightCube_02_2)
export class SimpleRotate implements ISystem {
  update() {
    let transform = lightCube_02_2.getComponent(Transform)
    transform.rotate(Vector3.Right(), 2)
  }
}

engine.addSystem(new SimpleRotate())

const transform_7 = new Entity()
const lightCube_01_2 = new Entity()
lightCube_01_2.setParent(scene)
lightCube_01_2.addComponentOrReplace(gltfShape_2)
const transform_8 = new Transform({
  position: new Vector3(11, 1, 3),
  rotation: new Quaternion(0.013504881562980266, 0.013504881562980112, -0.7069778059981581, 0.7069778059981581),
  scale: new Vector3(0.5674831524834145, 0.7145800969864231, 7.8475369517767035)
})
lightCube_01_2.addComponentOrReplace(transform_8)
engine.addEntity(lightCube_01_2)
export class SimpleRotate implements ISystem {
  update() {
    let transform = lightCube_01_2.getComponent(Transform)
    transform.rotate(Vector3.Left(), 3)
  }
}
engine.addSystem(new SimpleRotate())
const transform_8 = new Entity()
const lightCube_03_3 = new Entity()
lightCube_03_3.setParent(scene)
lightCube_03_3.addComponentOrReplace(gltfShape_4)
const transform_9 = new Transform({
  position: new Vector3(5.5, 2.5, 3),
  rotation: new Quaternion(0, 0, -0.6953770589038182, 0.7186450764809261),
  scale: new Vector3(0, 0, 0)
})
lightCube_03_3.addComponentOrReplace(transform_9)
engine.addEntity(lightCube_03_3)
export class SimpleRotate implements ISystem {
  update() {
    let transform = lightCube_03_3.getComponent(Transform)
    transform.rotate(Vector3.Left(), 30)
  }
}
engine.addSystem(new SimpleRotate())
const transform_9zw = new Entity()
const lightCube_01_3 = new Entity()
lightCube_01_3.setParent(scene)
lightCube_01_3.addComponentOrReplace(gltfShape_2)
const transform_10 = new Transform({
  position: new Vector3(8.5, 2.5, 9),
  rotation: new Quaternion(0.013504881562980266, 0.013504881562980112, -0.7069778059981581, 0.7069778059981581),
  scale: new Vector3(0.5674831524834145, 0.7145800969864231, 7.8475369517767035)
})
lightCube_01_3.addComponentOrReplace(transform_10)
engine.addEntity(lightCube_01_3)
export class SimpleRotate implements ISystem {
  update() {
    let transform = lightCube_01_3.getComponent(Transform)
    transform.rotate(Vector3.Left(), 2)
  }
}
engine.addSystem(new SimpleRotate())
const transform_10 = new Entity()
const lightCube_01_4 = new Entity()
lightCube_01_4.setParent(scene)
lightCube_01_4.addComponentOrReplace(gltfShape_2)
const transform_11 = new Transform({
  position: new Vector3(8.5, 1, 9),
  rotation: new Quaternion(0.013504881562980266, 0.013504881562980112, -0.7069778059981581, 0.7069778059981581),
  scale: new Vector3(0.5674831524834145, 0.7145800969864231, 7.8475369517767035)
})
lightCube_01_4.addComponentOrReplace(transform_11)
engine.addEntity(lightCube_01_4)
export class SimpleRotate implements ISystem {
  update() {
    let transform = lightCube_01_4.getComponent(Transform)
    transform.rotate(Vector3.Left(), 3)
  }
}
engine.addSystem(new SimpleRotate())
const transform_11 = new Entity()
const lightCube_02_3 = new Entity()
lightCube_02_3.setParent(scene)
lightCube_02_3.addComponentOrReplace(gltfShape_3)
const transform_12 = new Transform({
  position: new Vector3(11, 2.5, 9),
  rotation: new Quaternion(0.7071067811865472, 0.7071067811865475, 8.326672684688674e-17, 8.326672684688674e-17),
  scale: new Vector3(-0.5554700791918527, 0.735466438337818, 7.846970944470541)
})
lightCube_02_3.addComponentOrReplace(transform_12)
engine.addEntity(lightCube_02_3)
export class SimpleRotate implements ISystem {
  update() {
    let transform = lightCube_02_3.getComponent(Transform)
    transform.rotate(Vector3.Left(), 3)
  }
}
engine.addSystem(new SimpleRotate())
const transform_12 = new Entity()
const lightCube_02_4 = new Entity()
lightCube_02_4.setParent(scene)
lightCube_02_4.addComponentOrReplace(gltfShape_3)
const transform_13 = new Transform({
  position: new Vector3(11, 1, 9),
  rotation: new Quaternion(0.7071067811865472, 0.7071067811865475, 8.326672684688674e-17, 8.326672684688674e-17),
  scale: new Vector3(-0.5554700791918527, 0.735466438337818, 7.846970944470541)
})
lightCube_02_4.addComponentOrReplace(transform_13)
engine.addEntity(lightCube_02_4)
export class SimpleRotate implements ISystem {
  update() {
    let transform = lightCube_02_4.getComponent(Transform)
    transform.rotate(Vector3.Left(), 4)
  }
}
engine.addSystem(new SimpleRotate())
const transform_13 = new Entity()
const lightCube_02_5 = new Entity()
lightCube_02_5.setParent(scene)
lightCube_02_5.addComponentOrReplace(gltfShape_3)
const transform_14 = new Transform({
  position: new Vector3(3, 2.5, 9),
  rotation: new Quaternion(0.7071067811865472, 0.7071067811865475, 8.326672684688674e-17, 8.326672684688674e-17),
  scale: new Vector3(-0.5554700791918527, 0.735466438337818, 7.846970944470541)
})
lightCube_02_5.addComponentOrReplace(transform_14)
engine.addEntity(lightCube_02_5)
export class SimpleRotate implements ISystem {
  update() {
    let transform = lightCube_02_5.getComponent(Transform)
    transform.rotate(Vector3.Left(), 5)
  }
}
engine.addSystem(new SimpleRotate())
const transform_14 = new Entity()
const lightCube_01_5 = new Entity()
lightCube_01_5.setParent(scene)
lightCube_01_5.addComponentOrReplace(gltfShape_2)
const transform_15 = new Transform({
  position: new Vector3(2.5, 2.5, 3),
  rotation: new Quaternion(0.013504881562980266, 0.013504881562980112, -0.7069778059981581, 0.7069778059981581),
  scale: new Vector3(0.5674831524834145, 0.7145800969864231, 6)
})
lightCube_01_5.addComponentOrReplace(transform_15)
engine.addEntity(lightCube_01_5)
export class SimpleRotate implements ISystem {
  update() {
    let transform = lightCube_01_5.getComponent(Transform)
    transform.rotate(Vector3.Left(), 3)
  }
}
engine.addSystem(new SimpleRotate())
const transform_15 = new Entity()
const lightCube_01_6 = new Entity()
lightCube_01_6.setParent(scene)
lightCube_01_6.addComponentOrReplace(gltfShape_2)
const transform_16 = new Transform({
  position: new Vector3(2.5, 0.5, 3),
  rotation: new Quaternion(0.013504881562980266, 0.013504881562980112, -0.7069778059981581, 0.7069778059981581),
  scale: new Vector3(0.5674831524834145, 0.7145800969864231, 6)
})
lightCube_01_6.addComponentOrReplace(transform_16)
engine.addEntity(lightCube_01_6)
export class SimpleRotate implements ISystem {
  update() {
    let transform = lightCube_01_6.getComponent(Transform)
    transform.rotate(Vector3.Left(), 2)
  }
}
engine.addSystem(new SimpleRotate())
const transform_16 = new Entity()
const lightCube_03_4 = new Entity()
lightCube_03_4.setParent(scene)
lightCube_03_4.addComponentOrReplace(gltfShape_4)
const transform_17 = new Transform({
  position: new Vector3(5.5, 2.5, 9),
  rotation: new Quaternion(0, 0, -0.6953770589038182, 0.7186450764809261),
  scale: new Vector3(0.5737012260674191, 0.7012541836399275, 7.904556133105838)
})
lightCube_03_4.addComponentOrReplace(transform_17)
engine.addEntity(lightCube_03_4)
export class SimpleRotate implements ISystem {
  update() {
    let transform = lightCube_03_4.getComponent(Transform)
    transform.rotate(Vector3.Left(), 3)
  }
}
engine.addSystem(new SimpleRotate())
const transform_17 = new Entity()
const lightCube_01_7 = new Entity()
lightCube_01_7.setParent(scene)
lightCube_01_7.addComponentOrReplace(gltfShape_2)
const transform_18 = new Transform({
  position: new Vector3(8.5, 2.5, 13.5),
  rotation: new Quaternion(0.013504881562980266, 0.013504881562980112, -0.7069778059981581, 0.7069778059981581),
  scale: new Vector3(0.5674831524834145, 0.7145800969864231, 4.288076702413244)
})
lightCube_01_7.addComponentOrReplace(transform_18)
engine.addEntity(lightCube_01_7)
export class SimpleRotate implements ISystem {
  update() {
    let transform = lightCube_01_7.getComponent(Transform)
    transform.rotate(Vector3.Left(), 3)
  }
}
engine.addSystem(new SimpleRotate())
const transform_18 = new Entity()
const lightCube_03_5 = new Entity()
lightCube_03_5.setParent(scene)
lightCube_03_5.addComponentOrReplace(gltfShape_4)
const transform_19 = new Transform({
  position: new Vector3(5.5, 1, 13.5),
  rotation: new Quaternion(0, 0, -0.6953770589038182, 0.7186450764809261),
  scale: new Vector3(0.44333160690961804, 0.5418990407537445, 6)
})
lightCube_03_5.addComponentOrReplace(transform_19)
engine.addEntity(lightCube_03_5)
export class SimpleRotate implements ISystem {
  update() {
    let transform = lightCube_03_5.getComponent(Transform)
    transform.rotate(Vector3.Right(), 9)
  }
}
engine.addSystem(new SimpleRotate())
const transform_19 = new Entity()
const lightCube_01_8 = new Entity()
lightCube_01_8.setParent(scene)
lightCube_01_8.addComponentOrReplace(gltfShape_2)
const transform_20 = new Transform({
  position: new Vector3(8.5, 1, 13.5),
  rotation: new Quaternion(0.013504881562980266, 0.013504881562980112, -0.7069778059981581, 0.7069778059981581),
  scale: new Vector3(0.5674831524834145, 0.7145800969864231, 4.288076702413244)
})
lightCube_01_8.addComponentOrReplace(transform_20)
engine.addEntity(lightCube_01_8)
export class SimpleRotate implements ISystem {
  update() {
    let transform = lightCube_01_8.getComponent(Transform)
    transform.rotate(Vector3.Left(), 4)
  }
}
engine.addSystem(new SimpleRotate())
const transform_20 = new Entity()
const lightCube_03_6 = new Entity()
lightCube_03_6.setParent(scene)
lightCube_03_6.addComponentOrReplace(gltfShape_4)
const transform_21 = new Transform({
  position: new Vector3(11, 2.5, 13.5),
  rotation: new Quaternion(0, 0, -0.6953770589038182, 0.7186450764809261),
  scale: new Vector3(0.44333160690961804, 0.5418990407537445, 3.981579181495622)
})
lightCube_03_6.addComponentOrReplace(transform_21)
engine.addEntity(lightCube_03_6)
export class SimpleRotate implements ISystem {
  update() {
    let transform = lightCube_03_6.getComponent(Transform)
    transform.rotate(Vector3.Left(), 3)
  }
}
engine.addSystem(new SimpleRotate())
const transform_21 = new Entity()
const lightCube_02_6 = new Entity()
lightCube_02_6.setParent(scene)
lightCube_02_6.addComponentOrReplace(gltfShape_3)
const transform_22 = new Transform({
  position: new Vector3(3, 0.5, 9),
  rotation: new Quaternion(0.7071067811865472, 0.7071067811865475, 8.326672684688674e-17, 8.326672684688674e-17),
  scale: new Vector3(-0.5554700791918527, 0.735466438337818, 7.846970944470541)
})
lightCube_02_6.addComponentOrReplace(transform_22)
engine.addEntity(lightCube_02_6)
export class SimpleRotate implements ISystem {
  update() {
    let transform = lightCube_02_6.getComponent(Transform)
    transform.rotate(Vector3.Left(), 2)
  }
}
engine.addSystem(new SimpleRotate())
const transform_22 = new Entity()
const lightCube_03_7 = new Entity()
lightCube_03_7.setParent(scene)
lightCube_03_7.addComponentOrReplace(gltfShape_4)
const transform_23 = new Transform({
  position: new Vector3(13, 2.5, 9),
  rotation: new Quaternion(0, 0, -0.6953770589038182, 0.7186450764809261),
  scale: new Vector3(0.5737012260674191, 0.7012541836399275, 7.904556133105838)
})
lightCube_03_7.addComponentOrReplace(transform_23)
engine.addEntity(lightCube_03_7)
export class SimpleRotate implements ISystem {
  update() {
    let transform = lightCube_03_7.getComponent(Transform)
    transform.rotate(Vector3.Left(), 3)
  }
}
engine.addSystem(new SimpleRotate())
const transform_23 = new Entity()
const lightCube_03_8 = new Entity()
lightCube_03_8.setParent(scene)
lightCube_03_8.addComponentOrReplace(gltfShape_4)
const transform_24 = new Transform({
  position: new Vector3(13, 0.9999999999999999, 9),
  rotation: new Quaternion(0, 0, -0.6953770589038182, 0.7186450764809261),
  scale: new Vector3(0.5737012260674191, 0.7012541836399275, 7.904556133105838)
})
lightCube_03_8.addComponentOrReplace(transform_24)
engine.addEntity(lightCube_03_8)
export class SimpleRotate implements ISystem {
  update() {
    let transform = lightCube_03_8.getComponent(Transform)
    transform.rotate(Vector3.Left(), 4)
  }
}
engine.addSystem(new SimpleRotate())
const transform_24 = new Entity()
const lightCube_02_7 = new Entity()
lightCube_02_7.setParent(scene)
lightCube_02_7.addComponentOrReplace(gltfShape_3)
const transform_25 = new Transform({
  position: new Vector3(13, 2.5, 13.5),
  rotation: new Quaternion(0.7071067811865472, 0.7071067811865475, 8.326672684688674e-17, 8.326672684688674e-17),
  scale: new Vector3(-0.5554700791918527, 0.735466438337818, 4.007931317648819)
})
lightCube_02_7.addComponentOrReplace(transform_25)
engine.addEntity(lightCube_02_7)
export class SimpleRotate implements ISystem {
  update() {
    let transform = lightCube_02_7.getComponent(Transform)
    transform.rotate(Vector3.Left(), 3)
  }
}
engine.addSystem(new SimpleRotate())
const transform_25 = new Entity()
const lightCube_02_8 = new Entity()
lightCube_02_8.setParent(scene)
lightCube_02_8.addComponentOrReplace(gltfShape_3)
const transform_26 = new Transform({
  position: new Vector3(3, 3, 13.5),
  rotation: new Quaternion(0.7071067811865472, 0.7071067811865475, 8.326672684688674e-17, 8.326672684688674e-17),
  scale: new Vector3(-0.5554700791918527, 0.735466438337818, 4.007931317648819)
})
lightCube_02_8.addComponentOrReplace(transform_26)
engine.addEntity(lightCube_02_8)
export class SimpleRotate implements ISystem {
  update() {
    let transform = lightCube_02_8.getComponent(Transform)
    transform.rotate(Vector3.Left(), 5)
  }
}
engine.addSystem(new SimpleRotate())
const transform_26 = new Entity()
const lightCube_02_9 = new Entity()
lightCube_02_9.setParent(scene)
lightCube_02_9.addComponentOrReplace(gltfShape_3)
const transform_27 = new Transform({
  position: new Vector3(13, 1, 13.5),
  rotation: new Quaternion(0.7071067811865472, 0.7071067811865475, 8.326672684688674e-17, 8.326672684688674e-17),
  scale: new Vector3(-0.5554700791918527, 0.735466438337818, 4.007931317648819)
})
lightCube_02_9.addComponentOrReplace(transform_27)
engine.addEntity(lightCube_02_9)
export class SimpleRotate implements ISystem {
  update() {
    let transform = lightCube_02_9.getComponent(Transform)
    transform.rotate(Vector3.Left(), 3)
  }
}
engine.addSystem(new SimpleRotate())
const transform_27 = new Entity()
const lightCube_02_10 = new Entity()
lightCube_02_10.setParent(scene)
lightCube_02_10.addComponentOrReplace(gltfShape_3)
const transform_28 = new Transform({
  position: new Vector3(3, 1, 13.5),
  rotation: new Quaternion(0.7071067811865472, 0.7071067811865475, 8.326672684688674e-17, 8.326672684688674e-17),
  scale: new Vector3(-0.5554700791918527, 0.735466438337818, 4.007931317648819)
})
lightCube_02_10.addComponentOrReplace(transform_28)
engine.addEntity(lightCube_02_10)
export class SimpleRotate implements ISystem {
  update() {
    let transform = lightCube_02_10.getComponent(Transform)
    transform.rotate(Vector3.Left(), 5)
  }
}
engine.addSystem(new SimpleRotate())
const transform_28 = new Entity()
const lightCube_02_11 = new Entity()
lightCube_02_11.setParent(scene)
lightCube_02_11.addComponentOrReplace(gltfShape_3)
const transform_29 = new Transform({
  position: new Vector3(8.5, 8, 8),
  rotation: new Quaternion(0.7071067811865472, 0.7071067811865475, 8.326672684688674e-17, 8.326672684688674e-17),
  scale: new Vector3(-0.5554700791918527, 0.735466438337818, 7.846970944470541)
})
lightCube_02_11.addComponentOrReplace(transform_29)
engine.addEntity(lightCube_02_11)
export class SimpleRotate implements ISystem {
  update() {
    let transform = lightCube_02_11.getComponent(Transform)
    transform.rotate(Vector3.Left(), 2)
  }
}
engine.addSystem(new SimpleRotate())
const transform_29 = new Entity()
const lightCube_01_9 = new Entity()
lightCube_01_9.setParent(scene)
lightCube_01_9.addComponentOrReplace(gltfShape_2)
const transform_30 = new Transform({
  position: new Vector3(8.5, 9, 8),
  rotation: new Quaternion(-0.003348927281560358, -0.003348927281560511, -0.7070988507175375, 0.7070988507175375),
  scale: new Vector3(0.5674831524834145, 0.7145800969864231, 7.8475369517767035)
})
lightCube_01_9.addComponentOrReplace(transform_30)
engine.addEntity(lightCube_01_9)
export class SimpleRotate implements ISystem {
  update() {
    let transform = lightCube_01_9.getComponent(Transform)
    transform.rotate(Vector3.Left(), 3)
  }
}
engine.addSystem(new SimpleRotate())
const transform_30 = new Entity()
const lightCube_03_9 = new Entity()
lightCube_03_9.setParent(scene)
lightCube_03_9.addComponentOrReplace(gltfShape_4)
const transform_31 = new Transform({
  position: new Vector3(8.5, 10, 8),
  rotation: new Quaternion(0, 0, -0.6953770589038182, 0.7186450764809261),
  scale: new Vector3(0.5737012260674191, 0.7012541836399275, 7.904556133105838)
})
lightCube_03_9.addComponentOrReplace(transform_31)
engine.addEntity(lightCube_03_9)
export class SimpleRotate implements ISystem {
  update() {
    let transform = lightCube_03_9.getComponent(Transform)
    transform.rotate(Vector3.Right(), 3)
  }
}
engine.addSystem(new SimpleRotate())
const transform_31 = new Entity()
const lightCube_03_10 = new Entity()
lightCube_03_10.setParent(scene)
lightCube_03_10.addComponentOrReplace(gltfShape_4)
const transform_32 = new Transform({
  position: new Vector3(13.278635244331404, 2.5, 3),
  rotation: new Quaternion(0, 0, -0.6953770589038182, 0.7186450764809261),
  scale: new Vector3(0.5737012260674191, 0.7012541836399275, 6)
})
lightCube_03_10.addComponentOrReplace(transform_32)
engine.addEntity(lightCube_03_10)
export class SimpleRotate implements ISystem {
  update() {
    let transform = lightCube_03_10.getComponent(Transform)
    transform.rotate(Vector3.Left(), 4)
  }
}
engine.addSystem(new SimpleRotate())
const transform_32 = new Entity()
const lightCube_03_11 = new Entity()
lightCube_03_11.setParent(scene)
lightCube_03_11.addComponentOrReplace(gltfShape_4)
const transform_33 = new Transform({
  position: new Vector3(13.31179239166858, 1, 3),
  rotation: new Quaternion(0, 0, -0.6953770589038182, 0.7186450764809261),
  scale: new Vector3(0.5737012260674191, 0.7012541836399275, 6)
})
lightCube_03_11.addComponentOrReplace(transform_33)
engine.addEntity(lightCube_03_11)
export class SimpleRotate implements ISystem {
  update() {
    let transform = lightCube_03_11.getComponent(Transform)
    transform.rotate(Vector3.Left(), 4)
  }
}
engine.addSystem(new SimpleRotate())
const transform_33 = new Entity()
const fenceSticksEnd_01 = new Entity()
fenceSticksEnd_01.setParent(scene)
const gltfShape_5 = new GLTFShape('models/FenceSticksEnd_01/FenceSticksEnd_01.glb')
fenceSticksEnd_01.addComponentOrReplace(gltfShape_5)
const transform_34 = new Transform({
  position: new Vector3(0.09557559663826609, 0, 7.74999680683174),
  rotation: new Quaternion(0, -1.0000000000000007, 0, 9.71445146547012e-17),
  scale: new Vector3(1, 4, -138.8122223405063)
})
fenceSticksEnd_01.addComponentOrReplace(transform_34)
engine.addEntity(fenceSticksEnd_01)

const fenceSticksEnd_01_2 = new Entity()
fenceSticksEnd_01_2.setParent(scene)
fenceSticksEnd_01_2.addComponentOrReplace(gltfShape_5)
const transform_35 = new Transform({
  position: new Vector3(15.87335170579524, 0, 8.249181998963428),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 4, -138.8122223405063)
})
fenceSticksEnd_01_2.addComponentOrReplace(transform_35)
engine.addEntity(fenceSticksEnd_01_2)

const fenceSticksEnd_01_3 = new Entity()
fenceSticksEnd_01_3.setParent(scene)
fenceSticksEnd_01_3.addComponentOrReplace(gltfShape_5)
const transform_36 = new Transform({
  position: new Vector3(8.5, 0, 0.0733498284078955),
  rotation: new Quaternion(0, 0.7071067811865478, 0, -0.7071067811865474),
  scale: new Vector3(1, 4, -124.52490421861371)
})
fenceSticksEnd_01_3.addComponentOrReplace(transform_36)
engine.addEntity(fenceSticksEnd_01_3)

const fenceSticksEnd_01_4 = new Entity()
fenceSticksEnd_01_4.setParent(scene)
fenceSticksEnd_01_4.addComponentOrReplace(gltfShape_5)
const transform_37 = new Transform({
  position: new Vector3(7, 0, 3),
  rotation: new Quaternion(0, 0.7071067811865478, 0, -0.7071067811865474),
  scale: new Vector3(1, 4, -124.52490421861371)
})
fenceSticksEnd_01_4.addComponentOrReplace(transform_37)
engine.addEntity(fenceSticksEnd_01_4)

const fenceSticksEnd_01_5 = new Entity()
fenceSticksEnd_01_5.setParent(scene)
fenceSticksEnd_01_5.addComponentOrReplace(gltfShape_5)
const transform_38 = new Transform({
  position: new Vector3(8.5, 0, 6),
  rotation: new Quaternion(0, 0.7071067811865478, 0, -0.7071067811865474),
  scale: new Vector3(1, 4, -124.52490421861371)
})
fenceSticksEnd_01_5.addComponentOrReplace(transform_38)
engine.addEntity(fenceSticksEnd_01_5)

const fenceSticksEnd_01_6 = new Entity()
fenceSticksEnd_01_6.setParent(scene)
fenceSticksEnd_01_6.addComponentOrReplace(gltfShape_5)
const transform_39 = new Transform({
  position: new Vector3(7, 0, 9),
  rotation: new Quaternion(0, 0.7071067811865478, 0, -0.7071067811865474),
  scale: new Vector3(1, 4, -124.52490421861371)
})
fenceSticksEnd_01_6.addComponentOrReplace(transform_39)
engine.addEntity(fenceSticksEnd_01_6)

const fenceSticksEnd_01_7 = new Entity()
fenceSticksEnd_01_7.setParent(scene)
fenceSticksEnd_01_7.addComponentOrReplace(gltfShape_5)
const transform_40 = new Transform({
  position: new Vector3(8.117074663688843, 0, 12),
  rotation: new Quaternion(0, 0.7071067811865478, 0, -0.7071067811865474),
  scale: new Vector3(1, 4, -118.71745379317274)
})
fenceSticksEnd_01_7.addComponentOrReplace(transform_40)
engine.addEntity(fenceSticksEnd_01_7)

const fenceSticksEnd_01_8 = new Entity()
fenceSticksEnd_01_8.setParent(scene)
fenceSticksEnd_01_8.addComponentOrReplace(gltfShape_5)
const transform_41 = new Transform({
  position: new Vector3(8.843357944791615, 0, 15.923078315494443),
  rotation: new Quaternion(0, 0.7071067811865478, 0, -0.7071067811865474),
  scale: new Vector3(1, 4, -117.81834246865594)
})
fenceSticksEnd_01_8.addComponentOrReplace(transform_41)
engine.addEntity(fenceSticksEnd_01_8)

const fenceSticksEnd_01_9 = new Entity()
fenceSticksEnd_01_9.setParent(scene)
fenceSticksEnd_01_9.addComponentOrReplace(gltfShape_5)
const transform_42 = new Transform({
  position: new Vector3(0.030176522646711668, 4.005708805243308, 7.818178200381437),
  rotation: new Quaternion(-0.7071067811865475, -0.7071067811865477, 2.3432602026631487e-17, 5.657130561438501e-17),
  scale: new Vector3(1, 15.896986377780472, -137.70724921893714)
})
fenceSticksEnd_01_9.addComponentOrReplace(transform_42)
engine.addEntity(fenceSticksEnd_01_9)
const sTART = new Entity()
sTART.setParent(scene)
const gltfShape_6 = new GLTFShape('models/START.glb')
sTART.addComponentOrReplace(gltfShape_6)
const transform_41 = new Transform({
  position: new Vector3(1.1620091273632633, 0.023274111176395662, 0.5945773782802348),
  rotation: new Quaternion(0.5000000000000001, -0.5, -0.5, 0.5),
  scale: new Vector3(0.12804408338331, 0.12804408338331, 0.12804408338331)
})
sTART.addComponentOrReplace(transform_41)
engine.addEntity(sTART)
const fINISH = new Entity()
fINISH.setParent(scene)
const gltfShape_7 = new GLTFShape('models/FINISH.glb')
fINISH.addComponentOrReplace(gltfShape_7)
const transform_42 = new Transform({
  position: new Vector3(1.2266737355297046, 0.17018737536118955, 14.858491126244097),
  rotation: new Quaternion(0.4999999999999999, -0.5, -0.5, 0.5000000000000001),
  scale: new Vector3(0.17059031927853144, 0.17059031927853144, 0.17059031927853144)
})
fINISH.addComponentOrReplace(transform_42)
engine.addEntity(fINISH)