<template>
  <div id="objectCanvas"></div>
</template>

<script>
const THREE = require('three')
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
export default {
  name: 'ObjectCanvas',

  mounted () {
    this.loadObj()
  },

  methods: {
    loadObj() {
      let canvas = document.getElementById('objectCanvas')
      let camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 2000)

      if (window.innerWidth <= 1024) {
        camera.position.set(-1.55, 0.6, 3)
      }
      else {
        camera.position.set(-2.5, 0.6, 3)
      }

      // Scene
      let scene = new THREE.Scene()

      let ambientLight = new THREE.AmbientLight(0xcccccc, 0.4)
      scene.add(ambientLight)

      let pointLight = new THREE.PointLight(0xffffff, 0.8)
      camera.add(pointLight)
      scene.add(camera)

      new GLTFLoader()
        .setPath('models/')
        .load('screenTimeTest.glb', (gltf) => {
          gltf.scene.scale.multiplyScalar(1 / 3.2)
          gltf.scene.position.x = -1.6
          gltf.scene.rotation.y = 3
          
          scene.add(gltf.scene)
          let animate = () => {
            requestAnimationFrame( animate )
            gltf.scene.rotation.y  += 0.002
            render()
          }
          animate()

            render()
        })

      let renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
      renderer.setPixelRatio(window.devicePixelRatio)
      // renderer.setSize(canvas.offsetWidth, canvas.offsetHeight, false)
      renderer.setSize(window.innerWidth, window.innerHeight, false)
      renderer.toneMapping = THREE.ACESFilmicToneMapping
      renderer.toneMappingExposure = 1
      renderer.outputEncoding = THREE.sRGBEncoding
      canvas.appendChild( renderer.domElement )

      var pmremGenerator = new THREE.PMREMGenerator( renderer )
      pmremGenerator.compileEquirectangularShader()

      let onWindowResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        // renderer.setPixelRatio(window.devicePixelRatio)
        renderer.setSize(window.innerWidth, window.innerHeight)
      }

      window.addEventListener( 'resize', onWindowResize, false )

      let render = () => {
				renderer.render( scene, camera )
      }

    },
  },

}
</script>

<style scoped lang="scss">
#objectCanvas {
  height: 100%;
  display: flex;
  width: 100%;
}
</style>
