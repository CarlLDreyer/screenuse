<template>
  <div id="objectCanvas"></div>
</template>

<script>
const THREE = require('three')
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { RoughnessMipmapper } from 'three/examples/jsm/utils/RoughnessMipmapper'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
export default {
  name: 'ObjectCanvas',

  mounted () {
    this.loadObj()
  },

  methods: {
    loadObj() {
      let canvas = document.getElementById('objectCanvas')
      let camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.25, 20)
      camera.position.set( - 1.8, 0.5, 2.7)

      // Scene
      let scene = new THREE.Scene()

      let ambientLight = new THREE.AmbientLight( 0x404040 ) 
      scene.add(ambientLight)

      let pointLight = new THREE.PointLight(0xffffff, 0.8)
      camera.add(pointLight)

      scene.add(camera)

      let loader = new GLTFLoader()
      let dracoLoader = new DRACOLoader()
      dracoLoader.setDecoderPath( 'https://www.gstatic.com/draco/v1/decoders/' )
      loader.setDRACOLoader(dracoLoader)
      loader.load('/models/model.gltf', (gltf) => {
          gltf.scene.scale.multiplyScalar(1 / 4)
          gltf.scene.position.x = -1
          
          scene.add(gltf.scene)
          roughnessMipmapper.dispose()

          let animate = () => {
            requestAnimationFrame( animate )  
            gltf.scene.rotation.y  += 0.002
            render()
          }
          animate()
        })

      let renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

      renderer.setPixelRatio(window.devicePixelRatio)
      // renderer.setSize(canvas.offsetWidth, canvas.offsetHeight, false)
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.toneMapping = THREE.ACESFilmicToneMapping
      renderer.toneMappingExposure = 1
      renderer.outputEncoding = THREE.sRGBEncoding
      let roughnessMipmapper = new RoughnessMipmapper(renderer)
      canvas.appendChild( renderer.domElement )

      let pmremGenerator = new THREE.PMREMGenerator(renderer)
      pmremGenerator.compileEquirectangularShader()

      const onWindowResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        // renderer.setPixelRatio(window.devicePixelRatio)
        renderer.setSize(window.innerWidth, window.innerHeight)
        // render()
      }

      window.addEventListener( 'resize', onWindowResize, false )

      const render = () => {
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
