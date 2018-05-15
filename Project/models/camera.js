function cameras() {
    var szer = innerWidth;
    var kamera = 1;

    // kamery   kamery   kamery   kamery   kamery   kamery   kamery   kamery   kamery   kamery   kamery   kamery   kamery  
    var camBl = document.createElement("div");
    camBl.id = "camBl";
    camBl.style.position = "absolute";
    camBl.style.height = szer / 12 + "px";
    camBl.style.width = szer / 12 + "px";
    camBl.style.bottom = innerHeight /20 + "px";
    camBl.style.left = szer * 2 / 9 + "px";
    camBl.style.backgroundImage = "url('gfx/camera/bok.jpg')";
    camBl.style.backgroundSize = "100% 100%";
    camBl.style.borderRadius = szer / 6 + "px";
    camBl.style.border = "5px solid black";
    camBl.style.margin = "0";
    camBl.style.padding = "0";
    camBl.addEventListener("click", function () {


        kamera = 1;
    })
    document.getElementById("render").appendChild(camBl);

    var camT = document.createElement("div");
    camT.id = "camT";
    camT.style.position = "absolute";
    camT.style.height = szer / 12 + "px";
    camT.style.width = szer / 12 + "px";
    camT.style.bottom = innerHeight /20 + "px";
    camT.style.left = szer * 3 / 9 + "px";
    camT.style.backgroundImage = "url('gfx/camera/tyl.jpg')";
    camT.style.backgroundSize = "100% 100%";
    camT.style.borderRadius = szer / 6 + "px";
    camT.style.border = "5px solid black";
    camT.addEventListener("click", function () {


        kamera = 2;
    })
    document.getElementById("render").appendChild(camT);

    var camP = document.createElement("div");
    camP.id = "camP";
    camP.style.position = "absolute";
    camP.style.height = szer / 12 + "px";
    camP.style.width = szer / 12 + "px";
    camP.style.bottom = innerHeight / 20 + "px";
    camP.style.left = szer * 4 / 9 + "px";
    camP.style.backgroundImage = "url('gfx/camera/przod.jpg')";
    camP.style.backgroundSize = "100% 100%";
    camP.style.borderRadius = szer / 6 + "px";
    camP.style.border = "5px solid black";
    camP.addEventListener("click", function () {


        kamera = 3;
    })
    document.getElementById("render").appendChild(camP);

    var camBp = document.createElement("div");
    camBp.id = "camBp";
    camBp.style.position = "absolute";
    camBp.style.height = szer / 12 + "px";
    camBp.style.width = szer / 12 + "px";
    camBp.style.bottom = innerHeight / 20 + "px";
    camBp.style.left = szer * 5 / 9 + "px";
    camBp.style.backgroundImage = "url('gfx/camera/bokP.jpg')";
    camBp.style.backgroundSize = "100% 100%";
    camBp.style.borderRadius = szer / 6 + "px";
    camBp.style.border = "5px solid black";
    camBp.addEventListener("click", function () {
        kamera = 4;
    })
    document.getElementById("render").appendChild(camBp);

    var camG = document.createElement("div");
    camG.id = "camG";
    camG.style.position = "absolute";
    camG.style.height = szer / 12 + "px";
    camG.style.width = szer / 12 + "px";
    camG.style.bottom = innerHeight / 20 + "px";
    camG.style.left = szer * 6 / 9 + "px";
    camG.style.backgroundImage = "url('gfx/camera/gora.jpg')";
    camG.style.backgroundSize = "100% 100%";
    camG.style.borderRadius = szer / 6 + "px";
    camG.style.border = "5px solid black";
    camG.addEventListener("click", function () {
        kamera = 5;
    })
    document.getElementById("render").appendChild(camG);

    var camK = document.createElement("div");
    camK.id = "camK";
    camK.style.position = "absolute";
    camK.style.height = szer / 12 + "px";
    camK.style.width = szer / 12 + "px";
    camK.style.bottom = innerHeight / 20 + "px";
    camK.style.left = szer * 7 / 9 + "px";
    camK.style.backgroundImage = "url('gfx/camera/kabina.jpg')";
    camK.style.backgroundSize = "100% 100%";
    camK.style.borderRadius = szer / 6 + "px";
    camK.style.border = "5px solid black";
    camK.addEventListener("click", function () {
     
        kamera = 6;
    })
    document.getElementById("render").appendChild(camK);

    // kamery   kamery   kamery   kamery   kamery   kamery   kamery   kamery   kamery   kamery   kamery   kamery   kamery  


    // slidery  slidery  slidery  slidery  slidery  slidery  slidery  slidery  slidery  slidery  slidery  slidery 
    var sldL = document.createElement("div");
    sldL.id = "sldL";
    sldL.style.position = "absolute";
    sldL.style.left = szer / 40 + "px";
    sldL.style.height = innerHeight / 1.5 + "px";
    sldL.style.width = szer / 40 + "px";
    sldL.style.backgroundColor = "gray";
    sldL.style.top = innerHeight / 10 + "px";

    document.getElementById("render").appendChild(sldL);

    var sldR = document.createElement("div");
    sldR.id = "sldR";
    sldR.style.position = "absolute";
    sldR.style.right = szer / 40 + "px";
    sldR.style.height = innerHeight / 1.5 + "px";
    sldR.style.width = szer / 40 + "px";
    sldR.style.backgroundColor = "gray";
    sldR.style.top = innerHeight / 10 + "px";
 

    document.getElementById("render").appendChild(sldR);

    var sldD = document.createElement("div");
    sldD.id = "sldD";
    sldD.style.position = "absolute";
    sldD.style.right = szer / 4 + "px";
    sldD.style.height = szer / 40 + "px";
    sldD.style.width = szer / 2 + "px";
    sldD.style.backgroundColor = "gray";
    sldD.style.bottom = innerHeight / 4+ "px";

    document.getElementById("render").appendChild(sldD);


    // slidery  slidery  slidery  slidery  slidery  slidery  slidery  slidery  slidery  slidery  slidery  slidery 


    // przyciski przyciski przyciski przyciski przyciski przyciski przyciski przyciski przyciski przyciski
    var shdD = document.createElement("div");
    shdD.id = "shdD";
    shdD.style.position = "absolute";
    shdD.style.left = szer / 2.05 + "px";
    shdD.style.height = szer / 20 + "px";
    shdD.style.width = szer / 40 + "px";
    shdD.style.backgroundColor = "red";
    shdD.style.bottom = innerHeight / 4.2 + "px";
    shdD.style.opacity = 0.4;

    document.getElementById("render").appendChild(shdD);

    var shdL = document.createElement("div");
    shdL.id = "shdL";
    shdL.style.position = "absolute";
    shdL.style.left = szer / 80 + "px";
    shdL.style.height = szer / 40 + "px";
    shdL.style.width = szer / 20 + "px";
    shdL.style.backgroundColor = "red";
    shdL.style.top = innerHeight / 2.5 + "px";
    shdL.style.opacity = 0.4;

    document.getElementById("render").appendChild(shdL);


    var shdR = document.createElement("div");
    shdR.id = "shdR";
    shdR.style.position = "absolute";
    shdR.style.right = szer / 80 + "px";
    shdR.style.height = szer / 40 + "px";
    shdR.style.width = szer / 20 + "px";
    shdR.style.backgroundColor = "red";
    shdR.style.top = innerHeight / 2.5 + "px";
    shdR.style.opacity = 0.4;

    document.getElementById("render").appendChild(shdR);


    var butL = document.createElement("div");
    butL.id = "butL";
    butL.style.position = "absolute";
    butL.style.left = szer / 80 + "px";
    butL.style.height = szer / 40 + "px";
    butL.style.width = szer / 20 + "px";
    butL.style.backgroundColor = "lightgray";
    butL.style.top = innerHeight / 2.5 + "px";
    butL.addEventListener("mousedown", function (e) {
        id = this.id;
        e.preventDefault();
        document.addEventListener("mousemove", ruch)
        document.addEventListener("mouseup", nruch)
    })

    document.getElementById("render").appendChild(butL);

    var butR = document.createElement("div");
    butR.id = "butR";
    butR.style.position = "absolute";
    butR.style.right = szer / 80 + "px";
    butR.style.height = szer / 40 + "px";
    butR.style.width = szer / 20 + "px";
    butR.style.backgroundColor = "lightgray";
    butR.style.top = innerHeight / 2.5 + "px";
    butR.addEventListener("mousedown", function (e) {
        e.preventDefault();
         id = this.id;
        document.addEventListener("mousemove", ruch)
        document.addEventListener("mouseup", nruch)
    })


    document.getElementById("render").appendChild(butR);

    var butD = document.createElement("div");
    butD.id = "butD";
    butD.style.position = "absolute";
    butD.style.left = szer / 2.05 + "px";
    butD.style.height = szer / 20 + "px";
    butD.style.width = szer / 40 + "px";
    butD.style.backgroundColor = "lightgray";
    butD.style.bottom = innerHeight / 4.2 + "px";
    butD.addEventListener("mousedown", function (e) {
        e.preventDefault();
        id = this.id;
        document.addEventListener("mousemove", ruchHor)
        document.addEventListener("mouseup", nruchHor)
    })

    document.getElementById("render").appendChild(butD);



    // przyciski przyciski przyciski przyciski przyciski przyciski przyciski przyciski przyciski przyciski


    // divek divek divek divek divek divek divek divek divek divek

    //canvasy
    var canvas, canvas2, canvas3;
    //contexty
    var context, context2, context3;

    //divek
    var divek = document.createElement("DIV")
    divek.id = "divek";
    document.getElementById("render").appendChild(divek);
    var canvas = document.createElement("CANVAS")
    var context = canvas.getContext("2d");
    document.getElementById("divek").appendChild(canvas);
        context.beginPath();
        context.fillStyle = "#FFFFFF";
    context.font = "30px Arial";
    context.fillText("E", 265, 80);
    context.fillText("W", 15, 80);
    context.fillText("S", 144, 142);
    context.fillStyle = "#FF0000";
    context.fillText("N", 144, 22);

    context.stroke();
    context.closePath();

    function animateScene() {
        
        switch (kamera) {
            case 1:
                Bl();
                break;
            case 2:
                T();
                break;
            case 3:
                P();
                break;
            case 4:
                Bp();
                break;
            case 5:
                G();
                break;
            case 6:
                K();
                break;
        }

        shadowy();
        if (typeof vert != "undefined") {
            vert();
        }
        if (typeof hor != "undefined") {
            hor();
        }
        if (typeof rot != "undefined") {
            rot();
        }
        if (typeof obrot != "undefined") {
           obrot();
        }
        requestAnimationFrame(animateScene);
    }
    animateScene();
    
}
function T() {
    var camVect = new THREE.Vector3(15, 40, -300);
    var camPos = camVect.applyMatrix4(hel2.getHc2().matrixWorld);

    camera.position.x = camPos.x;
    camera.position.y = camPos.y;
    camera.position.z = camPos.z;
    camera.lookAt(hel2.getHc2().position);

}
function P() {
    var camVect = new THREE.Vector3(0, 0, 300);
    var camPos = camVect.applyMatrix4(hel2.getHc2().matrixWorld);

    camera.position.x = camPos.x;
    camera.position.y = camPos.y;
    camera.position.z = camPos.z;
    camera.lookAt(hel2.getHc2().position);
}
function K() {


    var camVect = new THREE.Vector3(-3.5, 9, 25);
    var camPos = camVect.applyMatrix4(hel2.getHc2().matrixWorld);

    camera.position.x = camPos.x;
    camera.position.y = camPos.y;
    camera.position.z = camPos.z;
    
    camera.lookAt(hel2.getHc2().position);
    camera.rotation.y = Math.PI;
    camera.rotation.x = Math.PI / 20;

}

function G() {
    var camVect = new THREE.Vector3(0, 300, 1);
    var camPos = camVect.applyMatrix4(hel2.getHc2().matrixWorld);

    camera.position.x = camPos.x;
    camera.position.y = camPos.y;
    camera.position.z = camPos.z;
    camera.lookAt(hel2.getHc2().position);
}
function Bp() {
    var camVect = new THREE.Vector3(-250, 50, 0);
    var camPos = camVect.applyMatrix4(hel2.getHc2().matrixWorld);

    camera.position.x = camPos.x;
    camera.position.y = camPos.y;
    camera.position.z = camPos.z;
    camera.lookAt(hel2.getHc2().position);
}
function Bl() {
    var camVect = new THREE.Vector3(250, 50, 0);
    var camPos = camVect.applyMatrix4(hel2.getHc2().matrixWorld);

    camera.position.x = camPos.x;
    camera.position.y = camPos.y;
    camera.position.z = camPos.z;
    camera.lookAt(hel2.getHc2().position);
}
function ruch(e) {
    var y = event.clientY;
    if (y < innerHeight / 10) {
        y = innerHeight / 10;
    }
    else if (y > innerHeight / 1.35) {
        y = innerHeight / 1.35;
    }
    document.getElementById(id).style.top = y + "px";
    if (id == "butR") {
        vert = function () {
            var speed = parseInt(document.getElementById("shdR").style.top);
            hel2.getHc2().translateZ(-0.005* (speed - 400));
        }
    }
    else {
        hor = function () {
            var speed = parseInt(document.getElementById("shdL").style.top);
            hel2.getHc2().translateY(-0.005 * (speed - 400));
        }
    }
}
function nruch() {
    document.removeEventListener("mousemove", ruch)
}
function ruchHor(e) {
    var x = event.clientX;
    if (x < innerWidth / 4) {
        x = innerWidth / 4;
    }
    else if (x > innerWidth * 3 / 4 - innerWidth / 40) {
        x = innerWidth * 3 / 4 - innerWidth / 40;
    }
    document.getElementById(id).style.left = x + "px";
    rot = function () {
        var angle = parseInt(document.getElementById("shdD").style.left);
        console.log(angle);
        hel2.getHc2().rotation.y += -0.0001 * (angle - 505)

    }

}
function obrot() {
    deg = hel2.getHc2().rotation.y * 57.5;
    var div = document.getElementById('divek')
    div.style.webkitTransform = 'rotate(' + deg + 'deg)';
    div.style.transform = 'rotate(' + deg + 'deg)';
}

function nruchHor() {
    document.removeEventListener("mousemove", ruchHor)
}
function shadowy() {
    var xx = parseInt(document.getElementById("shdR").style.top);
    var yy = parseInt(document.getElementById("butR").style.top)
    if (xx > yy) {
        document.getElementById("shdR").style.top = xx - 2 + "px";
    }
    else if (xx < yy) {
        document.getElementById("shdR").style.top = xx + 2+ "px";
    }
    var zz = parseInt(document.getElementById("shdL").style.top);
    var cc = parseInt(document.getElementById("butL").style.top)
    if (zz > cc) {
        document.getElementById("shdL").style.top = zz - 2 + "px";
    }
    else if (zz < cc) {
        document.getElementById("shdL").style.top = zz + 2 + "px";
    }
    var aa = parseInt(document.getElementById("shdD").style.left);
    var bb = parseInt(document.getElementById("butD").style.left)
    if (aa > bb) {
        document.getElementById("shdD").style.left = aa - 2 + "px";
    }
    else if (aa < bb) {
        document.getElementById("shdD").style.left = aa + 2 + "px";
    }



}
