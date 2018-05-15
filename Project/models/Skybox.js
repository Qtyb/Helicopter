function Skybox() {
    var object = new THREE.Object3D();
    var skyboxG = new THREE.BoxGeometry(10000, 10000, 10000);
    var skyboxM = Materials.skyMaterial;
    var skybox = new THREE.Mesh(skyboxG, skyboxM);

    object.add(skybox);
    this.getSb = function () {
        return object;
    }

}