function Helicopter2() {


        var outerCont = new THREE.Object3D();
        var innerCont = new THREE.Object3D();
        var wirnik;
        var wirnik2;
        var loaded;
        var loader = new THREE.ColladaLoader();
        var axis = new THREE.AxisHelper(60);
        outerCont.add(axis);
        this.ladujGo = function () {
            console.log("LADUJE");
            loader.load("models/BH.xml",
                function (collada) {
                    innerCont = collada.scene;

                    wirnik = innerCont.getObjectByName("main_rotor", true)            
                    wirnik2 = innerCont.getObjectByName("rear_rotor", true)           

                    console.log(wirnik);
                    outerCont.add(innerCont);
              
                    innerCont.scale.set(10, 10, 10);
                    innerCont.rotation.x = 25.1;
                    innerCont.position.set(0, 0, 0);
                    loaded = 1;

                },
                // progress ładowania
                function (e) {
                    //można pokazać model dopiero jak się załaduje
                    //ale obliczenia działają poprawnie 
                    //tylko podczas ładowania przez serwer a najlepiej
                    //nie z localhosta

                    //    console.log( e.loaded)
                    //   console.log( e.total) 


                }
                );
        }

    


    this.getHc2 = function () {
        return outerCont;
    }
    this.getHc2W = function () {
        return wirnik;
    }
    this.getHc2W2 = function () {
        return wirnik2;
    }
    this.loaded = function () {
        return loaded;
    }
}