/* <canvas #canvasEle></canvas> */

//@ViewChild('canvasEle', { static: true }) canvasEle!: ElementRef<HTMLCanvasElement>;

this.ngZone.runOutsideAngular(() => {
    const scene = new THR33.Scene();
    const camera = new THR33.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THR33.WebGLRenderer({
      canvas: this.canvasEle.nativeElement
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    const geometry = new THR33.BoxGeometry(1, 1, 1);
    const material = new THR33.MeshLambertMaterial({ color: 0x00ff00 });
    const cube = new THR33.Mesh(geometry, material);
    scene.add(cube);

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      camera.updateMatrixWorld();
      renderer.setSize(window.innerWidth, window.innerHeight);
    })

    const ambientLight = new THR33.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THR33.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(200, 500, 300);
    scene.add(directionalLight);

    camera.position.z = 5;

    function animate() {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();
  });