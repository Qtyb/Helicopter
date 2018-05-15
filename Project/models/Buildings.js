function Buildings() {

    var loader = new THREE.ColladaLoader();
    var model;

    var objectM = new THREE.Object3D();
    var matt = Materials.material;

        loader.load(
         
          "models/model.xml",
          // gdy załadowany
          function (collada) {
              
              model = collada.scene;

              // dostęp do meshów wewnątrz modelu
              // używamy gdy chcemy zrobić coś z elementami modelu
              // np podstawić materiał
              model.traverse(function (child) {

                  if (child instanceof THREE.Mesh) {                      
                 //     console.log("mesh " + child.name);
                      child.material = new THREE.MeshPhongMaterial({ side: THREE.DoubleSide, map: THREE.ImageUtils.loadTexture('gfx/house.jpg') });
                  }

              });

              model.scale.set(25, 25, 25);
              model.rotation.x = 300;
              model.rotation.z = 300;
              model.position.set(176, 86, 0)
          //    console.log(model);

              objectM.add(model);

              //poprawki skali, położenia, obrotu
              
              


          },
          // gdy model jest pobierany z serwera
	 //jest możliwe monitorowanie stanu jego pobierania
	 //i wykonanie jakiejś czynności dopiero po załadowaniu

          function (e) {
            //  console.log("model " + e.loaded +"-"+e.total)
          }
      );
    

    this.getBd = function () {
        return objectM;
    }
 

}