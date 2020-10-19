<template>
  <div id="objectCanvas"></div>
</template>

<script>
const THREE = require('three')
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
export default {
  name: 'ObjectCanvas',
  static () {
    return {
      camera: null,
      canvas: null,
      scene: null,
      ambientLight: null,
      pointLight: null,
      loader: null,
      dracoLoader: null,
      renderer: null,
    }
  },

  mounted () {
    this.init()
  },

  created () {
    window.addEventListener( 'resize', this.onWindowResize, false )
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onWindowResize)
  },

  methods: {
    init() {
      this.canvas = document.getElementById('objectCanvas')
      this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.25, 20)
      this.adjustCamera()

      this.scene = new THREE.Scene()
      this.ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.9, 100)
      this.pointLight = new THREE.PointLight(0xFFFFFF, 0.6, 100)
      this.pointLight.position.set(0, 0, 25)
      this.scene.add(this.ambientLight)
      this.camera.add(this.pointLight)
      this.scene.add(this.camera)

      this.loader = new GLTFLoader()
      this.dracoLoader = new DRACOLoader()
      this.dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/')
      this.loader.setDRACOLoader(this.dracoLoader)
      this.loader.load('/models/model.gltf', (gltf) => {
        // this.gltf = gltf
        gltf.scene.scale.multiplyScalar(1 / 4.5)
        gltf.scene.position.x = -1
        this.scene.add(gltf.scene)
        
        const animate = () => {
          requestAnimationFrame(animate)  
          gltf.scene.rotation.y  += 0.002
          this.render()
        }
        animate()
      })
      this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
      this.renderer.setPixelRatio(window.devicePixelRatio)
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      this.renderer.outputEncoding = THREE.sRGBEncoding
      this.canvas.appendChild( this.renderer.domElement )

      let pmremGenerator = new THREE.PMREMGenerator(this.renderer)
      pmremGenerator.compileEquirectangularShader()
    },
    onWindowResize () { 
      this.camera.aspect = window.innerWidth / window.innerHeight
      this.adjustCamera()
      this.renderer.setSize(window.innerWidth, window.innerHeight)   
    },
    render () {
      this.renderer.render( this.scene, this.camera )
    },
    adjustCamera () {
      if (window.innerWidth <= 1024) {
        this.camera.position.set( -1, 0.95, 2.7)
        this.camera.fov = 60
      }
      else {
        this.camera.position.set( - 1.8, 0.47, 2.7)
        this.camera.fov = 40
      }
      this.camera.updateProjectionMatrix()
    },
  },

}
</script>

<style scoped lang="scss">
#objectCanvas {
  height: 100%;
  display: flex;
  width: 100%;
  z-index: 2020;
}
</style>
