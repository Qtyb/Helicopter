function Helicopter() {
    var object = new THREE.Object3D();

    var kabinaG = new THREE.BoxGeometry(20, 10, 10);
    var kabinaM= Materials.material;
    var kabina = new THREE.Mesh(kabinaG, kabinaM);

    var ogonG = new THREE.BoxGeometry(40, 4, 4);
    var ogonM = Materials.material;
    var ogon = new THREE.Mesh(ogonG, ogonM);
    ogon.position.x = 20;
    ogon.position.y = -2;

    var statG = new THREE.BoxGeometry(10, 10, 4);
    var statM = Materials.material;
    var stat = new THREE.Mesh(statG, statM);
    stat.position.y = 1;
    stat.position.x = 40;

    var wirgG = new THREE.BoxGeometry(3, 1, 55);
    var wirgM = Materials.wirMat;
    var wirg = new THREE.Mesh(wirgG, wirgM);
    wirg.position.y = 5;
   // wirg.rotation.y = 1.5;

    var wirtG = new THREE.BoxGeometry(3, 1, 20);
    var wirtM = Materials.wirMat;
    var wirt = new THREE.Mesh(wirtG, wirtM);
    wirt.position.y = 5;
    wirt.position.x = 40;
    wirt.position.z = -3;
    wirt.rotation.x = 1.5;

    var axis = new THREE.AxisHelper(60);


    object.add(axis);
    object.add(ogon);
    object.add(stat);
    object.add(kabina);
    object.add(wirg);
    object.add(wirt);

  //  var bbox = new THREE.BoundingBoxHelper(object, 0xff0000);
 //   bbox.update();
 //   object.add(bbox);

    this.getHc = function () {
        return object;
    }
    function update() {

    }
    function animateScene() {

        requestAnimationFrame(animateScene);
        object.rotation.y += 0.02;
        wirt.rotation.y += 0.25;
        wirg.rotation.y += 0.25;
    }
    animateScene();

}