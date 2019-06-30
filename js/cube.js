class Cube {
  constructor() {
    this.camera;
    this.scene;
    this.renderer;
    this.geometry;
    this.material;
    this.mesh;

    this.initialize();
    this.render();
    // this.animate();
  }

  initialize() {
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    this.camera.position.z = 1000;

    this.geometry = new THREE.CubeGeometry(200, 200, 200);
    this.material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.mesh);

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild( this.renderer.domElement );
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }
}
