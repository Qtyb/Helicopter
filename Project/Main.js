function Main() {

 hel2 = new Helicopter2();


    var start = document.createElement("div");
    start.style.position = "absolute";
    start.style.height = innerHeight + "px";
    start.style.width = innerWidth + "px";
    start.style.top = 0+ "px";
    start.style.backgroundColor = "red";
    start.style.backgroundImage = "url('gfx/black.jpg')";
    start.style.backgroundSize = "100% 100%";

    var old = document.createElement("div");
    old.style.id = "old";
    old.style.position = "absolute";
    old.style.height = innerHeight/6 + "px";
    old.style.width = innerWidth/6 + "px";
    old.style.top = innerHeight / 1.5 + "px";
    old.style.left = innerWidth / 6 + "px";
    old.style.backgroundImage = "url('gfx/old.jpg')";
    old.style.backgroundSize = "100% 100%";
    old.style.borderRadius = innerWidth / 6 + "px";
    old.style.border = "5px solid black";
    old.addEventListener("click", function () {
        start.style.display = "none";
        hel = new Helicopter();
        scene.add(hel.getHc());
        camera.lookAt(hel.getHc().position);
    })

    var hel = document.createElement("div");
    hel.style.id = "hel";
    hel.style.position = "absolute";
    hel.style.height = innerHeight / 6 + "px";
    hel.style.width = innerWidth / 6 + "px";
    hel.style.top = innerHeight / 1.5 + "px";
    hel.style.left = innerWidth * 3 / 4 + "px";
    hel.style.backgroundImage = "url('gfx/BHD.jpg')";
    hel.style.backgroundSize = "100% 100%";
    hel.style.borderRadius = innerWidth / 6 + "px";
    hel.style.border = "5px solid black";
    hel.addEventListener("click", function () {
        hel2.ladujGo();
        scene.add(hel2.getHc2());
        camera.lookAt(hel2.getHc2().position);
        cameras();
        start.style.display = "none";
    })
    start.appendChild(hel);

    start.appendChild(old);

    document.body.appendChild(start);

    var scene = new THREE.Scene();

    var axis = new THREE.AxisHelper(2120);
    scene.add(axis);

    camera = new THREE.PerspectiveCamera(
45, // kąt patrzenia kamery (FOV - field of view)
4 / 3, // proporcje widoku
0.1, // min renderowana odległość
1000000 // max renderowana odległość
);


    camera.position.x = -400;
    camera.position.y = 220;
    camera.position.z = -330;


    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0x000000);
    renderer.setSize(innerWidth, innerHeight);


    document.getElementById("render").appendChild(renderer.domElement);

    

    

    var stats = new Stats();
    stats.showPanel(0);
   document.body.appendChild(stats.dom);

    var sky = new Skybox();
    scene.add(sky.getSb());

   var bld = new Buildings();
    scene.add(bld.getBd());


    


    var light = new THREE.DirectionalLight(0xFFFFFF, 3);
   light.position.set(-50, 51, 100);
    scene.add(light);

    function animateScene() {
        if (hel2.loaded() == 1) {
            hel2.getHc2W().rotation.z += 0.15;
            hel2.getHc2W2().rotation.x += 0.15;
        }
            
       // hel2.getHc2().translateZ(2.5)
    
      // hel2.getHc2().rotation.y += 0.02
        stats.begin();
        //kod podlegający pomiarowi wydajności

        stats.end();

        requestAnimationFrame(animateScene);

        renderer.render(scene, camera);
    }


    //na koniec jednokrotne wykonanie powyższej funkcji

    animateScene();
            

}
