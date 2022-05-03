'use strict';
import { foods1 } from "../utils/foods.js";
import { foods2 } from "../utils/foods.js";
import { foods3 } from "../utils/foods.js";

const documentReady = () => {
     const foods1Container = document.querySelector('#foods1container');
     const foods2Container = document.querySelector('#foods2container');
     const foods3Container = document.querySelector('#foods3container');
 

    foods1.forEach((element) => { 
        foods1Container.innerHTML += `
     <div class="card-wrapper card-image-title-description col-lg-4 col-md-6 col-xs-12  ">

                <div class="card    mt-3" style="width: 16rem; height: 5rem; ">
                    <div class="card-img-wrapper ">
                        <img class="card-img-top" src=${element.imagen} alt="Card image cap">
                    </div>
                    <div class="card-body ">
                        <h5 class="card-title">${element.nombre}</h5>
                        <p class="card-text">${element.ingredientes}</p>
                        <p class="card-text">${element.horarios}</p>
                        <a id="selectproduct" href="#" class="btn btn-primary btn-block">Go somewhere</a>
                    </div>
                </div>

            </div> 
    `
    });

    foods2.forEach((element) => { 
        foods2Container.innerHTML += `
     <div class="card-wrapper card-image-title-description col-lg-4 col-md-6 col-xs-12  ">

                <div class="card    mt-3" style="width: 16rem; height: 5rem; ">
                    <div class="card-img-wrapper ">
                        <img class="card-img-top" src=${element.imagen} alt="Card image cap">
                    </div>
                    <div class="card-body ">
                        <h5 class="card-title">${element.nombre}</h5>
                        <p class="card-text">${element.ingredientes}</p>
                        <p class="card-text">${element.horarios}</p>
                        <a id="selectproduct" href="#" class="btn btn-primary btn-block">Go somewhere</a>
                    </div>
                </div>

            </div> 
    `
    });

    foods3.forEach((element) => { 
        foods3Container.innerHTML += `
     <div class="card-wrapper card-image-title-description col-lg-4 col-md-6 col-xs-12  ">

                <div class="card    mt-3" style="width: 16rem; height: 5rem; ">
                    <div class="card-img-wrapper ">
                        <img class="card-img-top" src=${element.imagen} alt="Card image cap">
                    </div>
                    <div class="card-body ">
                        <h5 class="card-title">${element.nombre}</h5>
                        <p class="card-text">${element.ingredientes}</p>
                        <p class="card-text">${element.horarios}</p>
                        <a id="selectproduct" href="#" class="btn btn-primary btn-block">Go somewhere</a>
                    </div>
                </div>

            </div> 
    `
    });

 
}

document.addEventListener('DOMContentLoaded', documentReady);