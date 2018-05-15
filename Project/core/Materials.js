function Materials() {

    
    //tu ma byc pusto
}

Materials.material = new THREE.MeshBasicMaterial({
    color: 0xFFFFFF, side: THREE.DoubleSide, wireframe: false
});

Materials.wirMat = new THREE.MeshBasicMaterial({
    color: 0xFFFF00, side: THREE.DoubleSide, wireframe: false
});

var materials = [];

materials.push(new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, map: THREE.ImageUtils.loadTexture('gfx/negx.jpg') }));
materials.push(new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, map: THREE.ImageUtils.loadTexture('gfx/posx.jpg') }));
materials.push(new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, map: THREE.ImageUtils.loadTexture('gfx/posy.jpg') }));
materials.push(new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, map: THREE.ImageUtils.loadTexture('gfx/negy.jpg') }));
materials.push(new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, map: THREE.ImageUtils.loadTexture('gfx/negz.jpg') }));
materials.push(new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, map: THREE.ImageUtils.loadTexture('gfx/posz.jpg') }));


Materials.skyMaterial = new THREE.MeshFaceMaterial(materials);