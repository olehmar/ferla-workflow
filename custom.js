/* eslint-disable no-global-assign */

/* global delegate_viewerReady, delegate_textureChanged, delegate_beforeChange, delegate_afterChange, delegate_optionsAllowed, delegate_endChanges */
/* global setIsLoaderActive, SetBlockTexturePath, beforeFilterAction, afterFilterAction */
/* global THREE, jQuery, scene, camera, theModel, floor, controls, UpdateSceneEnvironmentMapURL, pointLight, pointLight2 */
/* global hideObject */

//Script version v1.0.0 [release]
//Created by Marevo (Oleksandr Trofymchuk (AlexTrofim88))
//UI changes and custom adaptation by Marevo (Pavlo Voronin)

//Welcome to our custom script!

//REMEMBER:
//Theft is wrong not because some ancient text says, 'Thou shalt not steal.' It's always bad, robber :)

/*                                                                                                

          _____                    _____                    _____                    _____                    _____                   _______         
         /\    \                  /\    \                  /\    \                  /\    \                  /\    \                 /::\    \        
        /::\____\                /::\    \                /::\    \                /::\    \                /::\____\               /::::\    \       
       /::::|   |               /::::\    \              /::::\    \              /::::\    \              /:::/    /              /::::::\    \      
      /:::::|   |              /::::::\    \            /::::::\    \            /::::::\    \            /:::/    /              /::::::::\    \     
     /::::::|   |             /:::/\:::\    \          /:::/\:::\    \          /:::/\:::\    \          /:::/    /              /:::/~~\:::\    \    
    /:::/|::|   |            /:::/__\:::\    \        /:::/__\:::\    \        /:::/__\:::\    \        /:::/____/              /:::/    \:::\    \   
   /:::/ |::|   |           /::::\   \:::\    \      /::::\   \:::\    \      /::::\   \:::\    \       |::|    |              /:::/    / \:::\    \  
  /:::/  |::|___|______    /::::::\   \:::\    \    /::::::\   \:::\    \    /::::::\   \:::\    \      |::|    |     _____   /:::/____/   \:::\____\ 
 /:::/   |::::::::\    \  /:::/\:::\   \:::\    \  /:::/\:::\   \:::\____\  /:::/\:::\   \:::\    \     |::|    |    /\    \ |:::|    |     |:::|    |
/:::/    |:::::::::\____\/:::/  \:::\   \:::\____\/:::/  \:::\   \:::|    |/:::/__\:::\   \:::\____\    |::|    |   /::\____\|:::|____|     |:::|    |
\::/    / ~~~~~/:::/    /\::/    \:::\  /:::/    /\::/   |::::\  /:::|____|\:::\   \:::\   \::/    /    |::|    |  /:::/    / \:::\    \   /:::/    / 
 \/____/      /:::/    /  \/____/ \:::\/:::/    /  \/____|:::::\/:::/    /  \:::\   \:::\   \/____/     |::|    | /:::/    /   \:::\    \ /:::/    /  
             /:::/    /            \::::::/    /         |:::::::::/    /    \:::\   \:::\    \         |::|____|/:::/    /     \:::\    /:::/    /   
            /:::/    /              \::::/    /          |::|\::::/    /      \:::\   \:::\____\        |:::::::::::/    /       \:::\__/:::/    /    
           /:::/    /               /:::/    /           |::| \::/____/        \:::\   \::/    /        \::::::::::/____/         \::::::::/    /     
          /:::/    /               /:::/    /            |::|  ~|               \:::\   \/____/          ~~~~~~~~~~                \::::::/    /      
         /:::/    /               /:::/    /             |::|   |                \:::\    \                                         \::::/    /       
        /:::/    /               /:::/    /              \::|   |                 \:::\____\                                         \::/____/        
        \::/    /                \::/    /                \:|   |                  \::/    /                                          ~~              
         \/____/                  \/____/                  \|___|                   \/____/                                                           
                                                                                                                                                      


   ____  _      _                        _        _______         __                      _           _    
  / __ \| |    | |                      | |      |__   __|       / _|                    | |         | |   
 | |  | | | ___| | _____  __ _ _ __   __| |_ __     | |_ __ ___ | |_ _   _ _ __ ___   ___| |__  _   _| | __
 | |  | | |/ _ \ |/ / __|/ _` | '_ \ / _` | '__|    | | '__/ _ \|  _| | | | '_ ` _ \ / __| '_ \| | | | |/ /
 | |__| | |  __/   <\__ \ (_| | | | | (_| | |       | | | | (_) | | | |_| | | | | | | (__| | | | |_| |   < 
  \____/|_|\___|_|\_\___/\__,_|_| |_|\__,_|_|       |_|_|  \___/|_|  \__, |_| |_| |_|\___|_| |_|\__,_|_|\_\
  _____            _        __      __                   _            __/ |                                
 |  __ \          | |       \ \    / /                  (_)          |___/                                 
 | |__) |_ ___   _| | ___    \ \  / /__  _ __ ___  _ __  _ _ __                                            
 |  ___/ _` \ \ / / |/ _ \    \ \/ / _ \| '__/ _ \| '_ \| | '_ \                                           
 | |  | (_| |\ V /| | (_) |    \  / (_) | | | (_) | | | | | | | |                                          
 |_|   \__,_| \_/ |_|\___/      \/ \___/|_|  \___/|_| |_|_|_| |_|                                          
 
*/

//The script was created for additional management of admin panel resources for the NextTable project.
//Each regio is designed to be divided into separate functions and is responsible for its actions separately.
//The PUBLIC VALUES region contains all the parameters-values that are used to interact with the admin panel, html, scripts, and user objects.
//In the CLASS's region, classes are created for convenient work with different types of groups that have their own characteristics.
//The INITIALIZATION region initializes all objects and parses data from the page.
//In the MAIN ACTIONS region, you prepare the actions that will be passed to objects from the page and change the properties that these objects are assigned.

//The basic structure of the script:
//- Calling the "viewerReady" event (all elements are prepared for interaction with the custom script)
//  - InitializationGroups (all groups and properties are initialized);
//  - Start (preparatory functions for interacting with objects are performed);
//      - SetActionForGroups (Setting up actions and interactions for objects);
//          - CheckChanges (Check and set new values for initialized objects. 
//                          The check occurs at every interaction with the initialized objects!)

// NOTE 
//Each region after the MAIN ACTIONS region has 2 main functions:
//- Prepare() - is executed when the script is initialized;
//- Change() - executed whenever the parameters in the script are changed. Execution occurs when using the CheckChanges function.

//------------------------------------------------------

// FAST FUNCTIONS (HELP FOR DEVELOPERS)

// jQuery(document).ready(function ($) { });
// document.addEventListener('click', function(){ });
// theModel.traverse((o) => { });

//------------------------------------------------------

//#region PUBLIC VALUES

let TEST_MODE = false;

var mainGroups = [];

// AR
var modelViewer;

// Pop-ups
let qrcode;
// let infoSharingInput;

var blockTexture = [];

var loaded = false;
var paramsLoaded = false;
let blockURLWriter = true;

var groupType = ["select", "select_no_photo", "range", "checkbox", "number", "text", "dropdown"];
let ar_filter = document.querySelector(".ar_filter");
var summary = document.querySelector("div.summary.entry-summary");

var formElement;

// SHADER
var isWorldposVertexShaderEnabled = true;

// MORPHS
let morphs = [];
let globalMorphs = [];

// Shared-URL PARAMETERS
let delayForWriteURL = false;
const parametersKey = "config";
var parametersValue = "";

var qrScaned = 0;

var SharedParameterList = [
    {
        id: "shape", //* [0]
        groupIds: ["group-0"],
        splitValue: 'm',
        type: 'string',
        value: "0",
        groupOptionAction: null,
        applyURLAction: null,
        applyURLActionReturn: false
    },
    {
        id: "qr", // [last]
        groupIds: null,
        splitValue: 's',
        type: 'int',
        value: 0,
        groupOptionAction: null,
        applyURLAction: null,
        applyURLActionReturn: false
    },
];

SharedParameterList[0].groupOptionAction = function () {
}

// loaderForHtml();

function EmptyURLParams() {
    console.log("ÃƒÂ°Ã…Â¸Ã…Â¡Ã¢â€šÂ¬ÃƒÂ°Ã…Â¸Ã…Â¡Ã¢â€šÂ¬ÃƒÂ°Ã…Â¸Ã…Â¡Ã¢â€šÂ¬ÃƒÂ°Ã…Â¸Ã…Â¡Ã¢â€šÂ¬ÃƒÂ°Ã…Â¸Ã…Â¡Ã¢â€šÂ¬ EmptyURLParams");
    // ParseAllGroups();
    setIsLoaderActive(false);
    blockURLWriter = false;
}


function groupOptionActionForRangeLength(item) {
    for (let i = 0; i < item.groupIds.length; i++) {
        if (item.inputCustomLength[i] != null) {
            item.inputCustomLength[i].value = item.value;
        }

        const parentGroupLength = mainGroups.find(element => element.id == item.groupIds[i]);
        const groupLength = parentGroupLength.group;

        if (groupLength != null) {
            groupLength.input.value = item.value;
            groupLength.input.dispatchEvent(new Event('input'));
            changeRangeOptions(item.groupIds[i]);
        }
    }
}

//#endregion

//#region CLASS's

class Group {
    constructor() {
        this.element = null;
        this.group = null;
        this.id = "";
        this.type = "";
    }
}

class GroupSelect {
    constructor() {
        this.element = null;
        this.header = null;
        this.name = "";
        this.description = "";
        this.filter_option = null;
        this.options = [];
        this.activeOption = 0;
        this.optionsResult = null;
    }
}

class GroupRange {
    constructor() {
        this.element = null;
        this.header = null;
        this.name = "";
        this.description = "";
        this.filter_option = null;
        this.options = [];
        this.input = null;
        this.rangeList = [];
        this.optionsResult = null;
    }
}

class GroupInput {
    constructor() {
        this.element = null;
        this.header = null;
        this.name = "";
        this.description = "";
        this.filter_option = null;
        this.options = [];
        this.input = null;
        this.optionsResult = null;
    }
}

class GroupDropdown {
    constructor() {
        this.element = null;
        this.header = null;
        this.name = "";
        this.description = "";
        this.filter_option = null;
        this.options = [];
        this.select = null;
        this.optionsResult = null;
    }
}

class GroupCheckbox {
    constructor() {
        this.element = null;
        this.header = null;
        this.name = "";
        this.description = "";
        this.filter_option = null;
        this.options = [];
        this.activeOption = 0;
        this.optionsResult = null;
    }
}

class Option {
    constructor() {
        this.element = null;
        this.name = null;
        this.description = null;
        this.tooltip = null;
        this.dataValue = null;
        this.group_id = null;
        this.component_id = null;
        this.price = null;
        this.exclude_items = null;
        this.active = false;
        this.componentOptions = [];
    }
}

class ComponentOption {
    constructor() {
        this.element = null;
        this.name = null;
        this.color = null;
        this.map = null;
        this.normal_map = null;
        this.roughness = null;
        this.metalness = null;
        this.ao = null;
        this.targetObject = null;
    }
}

//#endregion

//#region ENCODE/DECODE

String.prototype.SEncode = function () {
    if (this === undefined) { return ''; }
    const encoder = new TextEncoder();
    const encoded = encoder.encode(this);
    let binary = '';
    encoded.forEach(byte => {
        binary += String.fromCharCode(byte);
    });
    return btoa(binary);
};

String.prototype.SDecode = function () {
    if (this === undefined) { return ''; }
    const decoded = atob(this);
    const decoder = new TextDecoder();
    const byteArray = Uint8Array.from(decoded, char => char.charCodeAt(0));
    return decoder.decode(byteArray);
};

//#endregion

//#region DELEGATES

delegate_viewerReady = viewerReadyDelegate();
delegate_textureChanged = textureChangedDelegate();
delegate_beforeChange = beforeChangeDelegate;
delegate_afterChange = afterChangeDelegate;
delegate_optionsAllowed = optionsAllowedDelegate();
delegate_endChanges = endChangesDelegate();

function viewerReadyDelegate() {
    blockTexture = [];
    SetBlockTexturePath(blockTexture);

    if (camera != null) {
        camera.position.set(-1.2, 0.551, 0.71);
    }

    promiseDelayTheModel(100, function () { InitializationGroups(Start) });
}

function textureChangedDelegate() {
    //You can do something here...
}

function beforeChangeDelegate() {
    //You can do something here...
}

function afterChangeDelegate() {
    if (paramsLoaded) {
        ParseAllGroups();
    }

    ChangeUI();
}

function optionsAllowedDelegate() {
    //You can do something here...
}

function endChangesDelegate() {
    //You can do something here...
}

//#endregion

//#region INITIALIZATION

function InitializationGroups(callback) {
    mainGroups = [];
    let groups = ar_filter.querySelectorAll(":scope > div.ar_filter_group");

    for (let i = 0; i < groups.length; i++) {
        const element = groups[i];

        let typeValue = "";

        let name = element.querySelector("div.ar_filter_caption");
        let description = element.querySelector("div.ar_filter_description");

        let ar_filter_option = null;
        var ar_filter_inputs = null;

        for (let t = 0; t < groupType.length; t++) {

            ar_filter_option = element.querySelector("div.ar_filter_options.type_" + groupType[t]);
            ar_filter_inputs = element.querySelector("div.ar_filter_inputs.type_" + groupType[t]);

            if (ar_filter_option != null) {
                typeValue = groupType[t];
                break;
            }
        }

        if (ar_filter_option == null) { continue; }

        var ar_filter_options_result = element.querySelector("div.ar_filter_options_result");
        var ar_filter_header = element.querySelector("div.ar_filter_header");
        let options = ar_filter_option.querySelectorAll(":scope > div.option");

        const newGroup = new Group();
        newGroup.element = element;
        newGroup.type = typeValue;
        newGroup.id = element.getAttribute("id");

        var newSomeGroup = null;
        switch (typeValue) {
            case "select":
            case "select_no_photo":
                newSomeGroup = new GroupSelect();
                break;
            case "range":
                newSomeGroup = new GroupRange();
                break;
            case "checkbox":
                newSomeGroup = new GroupCheckbox();
                break;
            case "number":
                newSomeGroup = new GroupInput();
                break;
            case "text":
                newSomeGroup = new GroupInput();
                break;
            case "dropdown":
                newSomeGroup = new GroupDropdown();
                break;
        }

        newSomeGroup.element = element;
        newSomeGroup.name = name != null ? name.textContent.trim() : null;
        newSomeGroup.description = description != null ? description.textContent.trim() : null;
        newSomeGroup.filter_option = ar_filter_option;
        newSomeGroup.optionsResult = ar_filter_options_result != null ? ar_filter_options_result : null;
        newSomeGroup.header = ar_filter_header != null ? ar_filter_header : null;
        //newSomeGroup.options = options != null ? options : null;

        let inputRange;
        let input;
        let select_dropdown;

        switch (typeValue) {
            case "range":
                inputRange = ar_filter_inputs.querySelector("input");
                // console.log("ÃƒÂ°Ã…Â¸Ã…Â¡Ã¢â€šÂ¬ ~ InitializationGroups ~ inputRange:", inputRange);

                if (inputRange != null) {
                    newSomeGroup.input = inputRange;

                    newSomeGroup.rangeList = [];
                    if (options != null) {
                        options.forEach(opt => {
                            newSomeGroup.rangeList.push(opt.textContent.trim());
                        });
                        newSomeGroup.rangeList.sort();
                        // console.log("ÃƒÂ°Ã…Â¸Ã…Â¡Ã¢â€šÂ¬ ~ InitializationGroups ~ newSomeGroup.rangeList:", newSomeGroup.rangeList);
                    }
                }
                break;
            case "number":
            case "text":
                input = ar_filter_inputs.querySelector("input");
                // console.log("ÃƒÂ°Ã…Â¸Ã…Â¡Ã¢â€šÂ¬ ~ InitializationGroups ~ input:", input);

                if (input != null) {
                    newSomeGroup.input = input;
                }
                break;
            case "dropdown":
                select_dropdown = ar_filter_inputs.querySelector("select");
                // console.log("ÃƒÂ°Ã…Â¸Ã…Â¡Ã¢â€šÂ¬ ~ InitializationGroups ~ select_dropdown:", select_dropdown);

                if (select_dropdown != null) {
                    newSomeGroup.select = select_dropdown;
                }
                break;
            default:
                break;
        }

        if (options != null) {
            if (options.length > 0) {
                for (let o = 0; o < options.length; o++) {
                    const opt = options[o];

                    const newOption = new Option();
                    newOption.element = opt;
                    var nameElement = opt.querySelector("div.component_title");
                    var descriptionElement = opt.querySelector("div.ar_option_description");
                    var tooltipElement = opt.querySelector("div.ar_option_description_tooltip");

                    newOption.name = nameElement ? nameElement.textContent.trim() : "";
                    newOption.description = descriptionElement ? descriptionElement.textContent.trim() : "";
                    newOption.tooltip = tooltipElement ? tooltipElement.textContent.trim() : "";
                    newOption.active = opt.classList.contains("active") ? true : false;

                    if (newOption.active) {
                        newSomeGroup.activeOption = o;
                    }

                    newOption.group_id = opt.getAttribute("data-group_id");
                    newOption.component_id = opt.getAttribute("data-component_id");
                    newOption.price = opt.getAttribute("data-price");
                    newOption.dataValue = opt.getAttribute("data-value");
                    newOption.exclude_items = opt.getAttribute("data-exclude_items");

                    newOption.componentOptions = [];

                    let divComponentOptions = opt.querySelector("div.component_options");

                    if (divComponentOptions != null) {
                        let componentOptions = divComponentOptions.querySelectorAll(":scope > div.option_settings");

                        if (componentOptions != null) {
                            if (componentOptions.length > 0) {
                                componentOptions.forEach(copt => {
                                    const newComponentOption = new ComponentOption();
                                    newComponentOption.element = copt;
                                    newComponentOption.name = copt.getAttribute("data-name");
                                    newComponentOption.color = copt.getAttribute("data-color");
                                    newComponentOption.map = copt.getAttribute("data-map");
                                    newComponentOption.normal_map = copt.getAttribute("data-normal_map");
                                    newComponentOption.roughness = copt.getAttribute("data-roughness");
                                    newComponentOption.metalness = copt.getAttribute("data-metalness");
                                    newComponentOption.ao = copt.getAttribute("data-ao");
                                    newComponentOption.targetObject = GetObject(copt.getAttribute("data-name"));
                                    if (newComponentOption.targetObject == null) {
                                        newComponentOption.targetObject = GetGroup(copt.getAttribute("data-name"));
                                        if (newComponentOption.targetObject == null) {
                                            newComponentOption.targetObject = GetMaterial(copt.getAttribute("data-name"));
                                        }
                                    }
                                    newOption.componentOptions.push(newComponentOption);
                                });
                            }
                        }
                    }

                    newSomeGroup.options.push(newOption);
                }
            }
        }

        newGroup.group = newSomeGroup;

        mainGroups.push(newGroup)
    }

    if (callback != null) callback();
}

function Start() {
    blockURLWriter = true;
    if (loaded == true) { return; }
    loaded = true;

    theModel.visible = false;
    InitMorphModel(theModel); // Init Morph System
    // ReadURLParameters(StartSettings);

    setActionForOptions(); //! new
    readUrlParams(StartSettings); //! new
}

function StartSettings() {
    console.log('start');
    listenerFocusOptions();
    Settings3d();
    PrepareAR();
    listenerChangeOrbitCamera();
    setTimeout(() => { PrepareUI() }, 1500);
    // SetActionForGroups();
    // ApplyURLParameters(); 
    // CheckChanges();

    // promiseDelay(700, () => {
    //   theModel.scale.set(0, 0, 0);
    //   theModel.visible = true;
    //   animateScale(theModel);
    // });

    theModel.visible = true;
}

function resetCameraToDefault() {
    camera.position.set(-2.2, 0.6, 2); // Ð—Ð°Ð´Ð°Ñ”Ð¼Ð¾ Ð¿Ð¾Ñ‡Ð°Ñ‚ÐºÐ¾Ð²Ñ– ÐºÐ¾Ð¾Ñ€Ð´Ð¸Ð½Ð°Ñ‚Ð¸ ÐºÐ°Ð¼ÐµÑ€Ð¸
    camera.fov = 70; // Ð’Ñ–Ð´Ð½Ð¾Ð²Ð»ÑŽÑ”Ð¼Ð¾ Ð·Ð½Ð°Ñ‡ÐµÐ½Ð½Ñ fov
    camera.updateProjectionMatrix(); // ÐžÐ½Ð¾Ð²Ð»ÑŽÑ”Ð¼Ð¾ Ð¼Ð°Ñ‚Ñ€Ð¸Ñ†ÑŽ ÐºÐ°Ð¼ÐµÑ€Ð¸

    if (controls) {
        controls.maxPolarAngle = Math.PI / 1.77;
        controls.minPolarAngle = 0.15;
        controls.minDistance = 1;
        controls.maxDistance = 4;
        controls.update();
    }
}

function Settings3d() {
    controls.maxPolarAngle = Math.PI / 1.77;
    controls.minPolarAngle = 0.15;
    controls.minDistance = 1;
    controls.maxDistance = 4;

    camera.fov = 70;
    camera.position.set(-2.2, 0.6, 2);

    if (dirLight) {
        dirLight.intensity = 0.1;
        dirLight.position.set(0, 20, 0);
    }

    if (theModel && floor) {
        theModel.position.y = -1;
        floor.position.y = -1;
    }

    const pointLight = new THREE.PointLight(0xffffff, 0.1, 50); // (ÐºÐ¾Ð»Ñ–Ñ€, Ñ–Ð½Ñ‚ÐµÐ½ÑÐ¸Ð²Ð½Ñ–ÑÑ‚ÑŒ, Ñ€Ð°Ð´Ñ–ÑƒÑ)
    pointLight.position.set(2, 1.5, -3); // ÐŸÐ¾Ð·Ð¸Ñ†Ñ–Ñ Ð´Ð¶ÐµÑ€ÐµÐ»Ð° ÑÐ²Ñ–Ñ‚Ð»Ð°
    scene.add(pointLight);

    // Ð”Ð¾Ð´Ð°Ð²Ð°Ð½Ð½Ñ RectAreaLight Ð· ÑÑ–Ñ‚ÐºÐ°Ð¼Ð¸
    const rectLight = new THREE.RectAreaLight(0xffffff, 1, 10, 10); // Ð¿Ñ€ÑÐ¼Ð¾ÐºÑƒÑ‚Ð½Ðµ ÑÐ²Ñ–Ñ‚Ð»Ð¾
    rectLight.position.set(-1.5, -3.8, -3.5);
    rectLight.rotation.z = Math.PI / 2; // ÐžÑÑŒÐ¾Ð²Ð¸Ð¹ Ð¾Ð±ÐµÑ€Ñ‚ Ð´Ð»Ñ RectAreaLight
    rectLight.rotation.y = Math.PI / -2; // ÐžÑÑŒÐ¾Ð²Ð¸Ð¹ Ð¾Ð±ÐµÑ€Ñ‚ Ð´Ð»Ñ RectAreaLight
    scene.add(rectLight);

    // Ð¡Ñ‚Ð²Ð¾Ñ€ÐµÐ½Ð½Ñ ÑÑ–Ñ‚ÐºÐ¸ Ð´Ð»Ñ rectLight
    // const rectLightHelper = new THREE.Mesh(
    //     new THREE.PlaneGeometry(0.5, 0.5), // Ð¿Ñ€ÑÐ¼Ð¾ÐºÑƒÑ‚Ð½Ð° ÑÑ–Ñ‚ÐºÐ° Ð´Ð»Ñ Ð¿Ð¾Ð·Ð½Ð°Ñ‡ÐµÐ½Ð½Ñ Ð´Ð¶ÐµÑ€ÐµÐ»Ð° ÑÐ²Ñ–Ñ‚Ð»Ð°
    //     new THREE.MeshBasicMaterial({ color: 0x0000ff, side: THREE.DoubleSide }) // ÑÐ¸Ð½Ñ–Ð¹ ÐºÐ¾Ð»Ñ–Ñ€
    // );
    // rectLightHelper.position.copy(rectLight.position); // ÐŸÐ¾Ð·Ð¸Ñ†Ñ–Ñ ÑÑ–Ñ‚ÐºÐ¸ Ð·Ð±Ñ–Ð³Ð°Ñ”Ñ‚ÑŒÑÑ Ð· Ð¿Ð¾Ð·Ð¸Ñ†Ñ–Ñ”ÑŽ ÑÐ²Ñ–Ñ‚Ð»Ð°
    // rectLightHelper.rotation.copy(rectLight.rotation); // ÐŸÐ¾Ð·Ð¸Ñ†Ñ–Ñ ÑÑ–Ñ‚ÐºÐ¸ Ð¼Ð°Ñ” Ð²Ñ–Ð´Ð¿Ð¾Ð²Ñ–Ð´Ð°Ñ‚Ð¸ Ð¾Ñ€Ñ–Ñ”Ð½Ñ‚Ð°Ñ†Ñ–Ñ— ÑÐ²Ñ–Ñ‚Ð»Ð°
    // scene.add(rectLightHelper);

    const rectLight1 = new THREE.RectAreaLight(0xffffff, 0.3, 10, 10); // Ñ–Ð½ÑˆÐµ Ð¿Ñ€ÑÐ¼Ð¾ÐºÑƒÑ‚Ð½Ðµ ÑÐ²Ñ–Ñ‚Ð»Ð¾
    rectLight1.position.set(1, 2, 3);
    rectLight1.rotation.z = Math.PI / 2; // ÐžÑÑŒÐ¾Ð²Ð¸Ð¹ Ð¾Ð±ÐµÑ€Ñ‚ Ð´Ð»Ñ RectAreaLight
    rectLight1.rotation.y = Math.PI / 2; // ÐžÑÑŒÐ¾Ð²Ð¸Ð¹ Ð¾Ð±ÐµÑ€Ñ‚ Ð´Ð»Ñ RectAreaLight
    scene.add(rectLight1);

    // Ð¡Ñ‚Ð²Ð¾Ñ€ÐµÐ½Ð½Ñ ÑÑ–Ñ‚ÐºÐ¸ Ð´Ð»Ñ rectLight1
    // const rectLight1Helper = new THREE.Mesh(
    //     new THREE.PlaneGeometry(0.5, 0.5), // Ð¿Ñ€ÑÐ¼Ð¾ÐºÑƒÑ‚Ð½Ð° ÑÑ–Ñ‚ÐºÐ° Ð´Ð»Ñ Ð¿Ð¾Ð·Ð½Ð°Ñ‡ÐµÐ½Ð½Ñ Ð´Ð¶ÐµÑ€ÐµÐ»Ð° ÑÐ²Ñ–Ñ‚Ð»Ð°
    //     new THREE.MeshBasicMaterial({ color: 0xffff00, side: THREE.DoubleSide }) // Ð¶Ð¾Ð²Ñ‚Ð¸Ð¹ ÐºÐ¾Ð»Ñ–Ñ€
    // );
    // rectLight1Helper.position.copy(rectLight1.position); // ÐŸÐ¾Ð·Ð¸Ñ†Ñ–Ñ ÑÑ–Ñ‚ÐºÐ¸ Ð·Ð±Ñ–Ð³Ð°Ñ”Ñ‚ÑŒÑÑ Ð· Ð¿Ð¾Ð·Ð¸Ñ†Ñ–Ñ”ÑŽ ÑÐ²Ñ–Ñ‚Ð»Ð°
    // rectLight1Helper.rotation.copy(rectLight1.rotation); // ÐŸÐ¾Ð·Ð¸Ñ†Ñ–Ñ ÑÑ–Ñ‚ÐºÐ¸ Ð¼Ð°Ñ” Ð²Ñ–Ð´Ð¿Ð¾Ð²Ñ–Ð´Ð°Ñ‚Ð¸ Ð¾Ñ€Ñ–Ñ”Ð½Ñ‚Ð°Ñ†Ñ–Ñ— ÑÐ²Ñ–Ñ‚Ð»Ð°
    // scene.add(rectLight1Helper);

    // Ð›Ð¾Ð³ÑƒÐ²Ð°Ð½Ð½Ñ Ð²ÑÑ–Ñ… ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚Ñ–Ð² Ð´Ð»Ñ Ð½Ð°Ð»Ð°Ð³Ð¾Ð´Ð¶ÐµÐ½Ð½Ñ
    console.log('camera:', camera, 'dirL:', dirLight, 'rectLight:', rectLight, 'rectLight1:', rectLight1, 'pointLight:', pointLight);

    try {
        // UpdateSceneEnvironmentMapURL('https://s3.eu-central-1.amazonaws.com/marevo.vision/RelevantProjects/webAR/WP+AR+WooCommerce+plugin/src/environment/neutral_model_viewer.hdr');
        UpdateSceneEnvironmentMapURL('https://s3.eu-central-1.amazonaws.com/marevo.vision/RelevantProjects/webAR/WP+AR+WooCommerce+plugin/src/environment/blocky_photo_studio_1k.hdr');
    } catch (error) {
        console.log('Error with HDR:', error);
    }
}

function RemoveAllDefaultTextures(targetObject) {
    if (targetObject == null) { return; }

    targetObject.traverse((o) => {
        if (o.isMesh) {
            if (o.material.normalMap) {
                o.material.normalMap = null;
            }
            if (o.material.roughnessMap) {
                o.material.roughnessMap = null;
                o.material.roughness = 0.3;
            }
            if (o.material.metalnessMap) {
                o.material.metalnessMap = null;
                o.material.metalness = 0.05;
            }
            if (o.material.aoMap) {
                o.material.aoMap = null;
            }
            o.material.needsUpdate = true;
        }
    });
}

//#endregion

//#region MAIN ACTIONS

// group id - 9999999 - is example!
function SetActionForGroups() {
    mainGroups.forEach(target => {
        switch (target.type) {
            case "select":
            case "select_no_photo":
                for (let i = 0; i < target.group.options.length; i++) {
                    const opt = target.group.options[i];
                    opt.element.addEventListener('click', function () {
                        target.group.activeOption = i;

                        SetGroupActionForSharedParameters(target.id, opt.component_id, () => {
                            CheckChanges();
                            WriteURLParameters();
                        });
                    });
                }
                break;
            case "range":
                if (target.id == "group-9999999") {
                    //You can do something here...
                }

                target.group.input.addEventListener('input', function () {
                    if (!loaded) { return; }
                    //You can do something here...
                    //SetGroupActionForSharedParameters(target.id, target.group.input.value, () => {
                    //    CheckChanges();
                    //    WriteURLParameters();
                    //});
                });
                target.group.input.addEventListener('change', function () {
                    if (!loaded) { return; }
                    SetGroupActionForSharedParameters(target.id, target.group.input.value, () => {
                        CheckChanges();
                        WriteURLParameters();
                    });
                    // console.log('%c' + target.group.input.value, 'color: blue; font-size: larger');
                });
                break;
            case "checkbox":
                for (let i = 0; i < target.group.options.length; i++) {
                    const opt = target.group.options[i];
                    opt.element.addEventListener('click', function () {
                        target.group.activeOption = i;
                        opt.active = !opt.active;

                        SetGroupActionForSharedParametersCheckboxArray(target.id, target.group.options, () => {
                            CheckChanges();
                            WriteURLParameters();
                        });

                        //You can do something here...
                    });
                }
                break;
            case "number":
                target.group.input.addEventListener('input', function () {
                    SetGroupActionForSharedParameters(target.id, target.group.input.value);
                    CheckChanges();
                    //You can do something here...
                });

                target.group.input.addEventListener('change', function () {
                    console.log('%c' + target.group.input.value, 'color: blue; font-size: larger');
                    WriteURLParameters();
                    //You can do something here...
                });
                break;
            case "dropdown":
                target.group.select.addEventListener('change', function () {
                    const activeOption = parseInt(this.value);
                    target.group.activeOption = activeOption;

                    for (let o = 0; o < target.group.options.length; o++) {
                        const opt = target.group.options[o];
                        opt.element.classList.remove("active");
                        opt.active = false;
                    }
                    const opt = target.group.options[activeOption];
                    opt.element.classList.add("active");
                    opt.active = true;

                    SetGroupActionForSharedParameters(target.id, target.group.select.value);
                    console.log('%c' + target.group.select.value, 'color: blue; font-size: larger');
                    //You can do something here...
                    CheckChanges();
                    WriteURLParameters();
                });
                break;
            case "text":
                //You can do something here...
                break;
        }
    });
}

function SetGroupActionForSharedParameters(targetID, value, callback, parse = false) {
    for (let i = 0; i < SharedParameterList.length; i++) {
        const element = SharedParameterList[i];

        if (element.groupIds == undefined || element.groupIds == null) { continue; }
        if (!element.groupIds.includes(targetID)) { continue; }

        if (element.value == value) { continue; }

        element.value = value;

        if (element.groupOptionAction != null && parse == false) {
            element.groupOptionAction();
        }
    }

    if (callback != null) {
        callback();
    }
}

function SetGroupActionForSharedParametersCheckboxArray(targetID, array, callback, parse = false) {
    if (array == undefined || array == null) { return; }

    for (let i = 0; i < SharedParameterList.length; i++) {
        const element = SharedParameterList[i];

        if (element.groupIds == undefined || element.groupIds == null) { continue; }
        if (!element.groupIds.includes(targetID)) { continue; }

        var newValue = [];

        for (var o = 0; o < array.length; o++) {
            if (array[o].active) {
                newValue.push("1");
            } else {
                newValue.push("0");
            }
        }

        if (element.value == newValue) { continue; }

        element.value = newValue;

        if (element.groupOptionAction != null && parse == false) {
            element.groupOptionAction();
        }
    }

    if (callback != null) {
        callback();
    }
}

function CheckChanges() {
    ChangeUI();

    promiseDelay(300, () => {
        CheckAssign(SharedParameterList[5]);
        CheckAssign(SharedParameterList[6]);
        ChangeUI();
    });

    //! TODO
    ChangeMaterialTilling('top_Z_planar', 0.31, 0.62);
    ChangeMaterialOffset('top_Z_planar', 0.5, 0.5);
}

//#endregion

//#region EXCLUDES


function PrepareExcludes() {
    //CreateExclude("3-6", 24, null);
}

//selectValue = string "0-1" == 0 - selected group; 1 - selected value;
//targetGroup = int 0 - 0 == target group;
//targetOption = int 0 - 0 == target value;

function CreateExclude(selectValue, targetGroup, targetOption) {
    var element = document.createElement("div");
    element.className = 'exclude_item exclude_' + selectValue;
    element.setAttribute('data-target_group', targetGroup);

    if (targetOption != null) {
        element.setAttribute('data-target_option', targetOption);
    }

    summary.appendChild(element);
}

//#endregion

//#region DEBUG


function DebugLog(value, color = 'blue', fontSize = 'larger') {
    console.log('%c' + value, 'color: ' + color + '; font-size: ' + fontSize);
}


function DebugAlert(value) {
    alert(value);
}

//#endregion

//#region ADDITIONAL FUNCTIONS

function ParseAllGroups() {
    mainGroups.forEach(target => {
        if (!target.group.element.classList.contains("disabled")) {
            switch (target.type) {
                case "select":
                case "select_no_photo":
                    for (let i = 0; i < target.group.options.length; i++) {
                        const opt = target.group.options[i];

                        if (opt.element.classList.contains("active")) {
                            SetGroupActionForSharedParameters(target.id, opt.component_id, null, true);
                            break;
                        }
                    }
                    break;
                case "range":
                    SetGroupActionForSharedParameters(target.id, target.group.input.value, null, true);
                    break;
                case "checkbox":
                    SetGroupActionForSharedParametersCheckboxArray(target.id, target.group.options, null, true);
                    break;
                case "number":
                    SetGroupActionForSharedParameters(target.id, target.group.input.value, null, true);
                    break;
                case "dropdown":
                    SetGroupActionForSharedParameters(target.id, target.group.select.value, null, true);
                    break;
                case "text":
                    //You can do something here...
                    break;
            }
        }
    });
}

function changeRangeOptions(groupID) {
    jQuery(document).ready(function () {
        let group = jQuery('#' + groupID);
        let range_option = [];
        let range = group.find('input');
        // console.log("ÃƒÂ°Ã…Â¸Ã…Â¡Ã¢â€šÂ¬ ~ range:", range);
        group.find('.option').removeClass('active');
        beforeFilterAction();
        group.find('.option:not(.disable_filter)').each(function () {

            // Get divided values from the input data.
            const values = jQuery(this).data('value').toString().split('-');

            // Create minimum and maximum variables.
            let min = 0.0;
            let max = 0.0;

            // Check the resulting array of values for the number of elements.
            if (values.length == 1) {
                // If we have 1 element, the minimum and maximum values will be the same.
                max = parseFloat(values[0]);
                min = max;
            } else {
                // Assign a minimum and maximum value.
                min = parseFloat(values[0]);
                max = parseFloat(values[1]);

                // Check the minimum and maximum values and whether one is larger than the other or vice versa.
                if (max < min || min > max) {
                    // If the maximum value is less than the minimum value or the minimum value is greater than the maximum value, assign the maximum value to the minimum value.
                    max = min;
                }
            }

            // Check if the input value is within the range of the required values.
            if (range.val() >= min && range.val() <= max) {
                range_option.push(jQuery(this));
            }
        });

        // If the value array is empty, there is no point in continuing. Calling a callback.
        if (range_option.length == 0) {
            return;
        }

        range_option.forEach(element => {
            jQuery('.selected_components-' + element.data('group_id')).attr('checked', false);
        });

        jQuery('#group-' + range_option[0].data('group_id')).find('.option .component_options .option_settings').each(function () {
            if (jQuery("#ar_filter .option.active .option_settings.option-" + jQuery(this).data('name')).length == 0) {
                hideObject(jQuery(this).data('name'));
            }
        });

        range_option.forEach(element => {
            jQuery('.selected_components-' + element.data('group_id') + '-' + element.data('component_id')).attr('checked', true);
            element.addClass('active');
        });

        afterFilterAction(group);
    });
}

function promiseDelay(time, callback) {
    if (time == null) {
        time = 2000;
    }

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('resolved');
            if (callback != null) {
                callback();
            }
        }, time);
    });
}

function promiseDelayTheModel(time, callback) {
    if (time == null) {
        time = 2000;
    }

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('resolved');
            if (theModel == null) {
                promiseDelayTheModel(time, callback);
            } else {
                if (callback != null) {
                    callback();
                }
            }
        }, time);
    });
}

function udid() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function GetObject(name) {
    var object = null;
    theModel.traverse((o) => {
        if (o.isMesh) {
            if (name == o.name) {
                object = o;
            }
        }
    });

    return object;
}

function GetGroup(name) {
    var group = null;
    theModel.traverse((o) => {
        if (o.isGroup) {
            if (name == o.name) {
                group = o;
            }
        }
    });

    return group;
}

function GetMaterial(name) {
    var material = null;
    theModel.traverse((o) => {
        if (o.isMaterial) {
            if (name == o.material.name) {
                material = o.material;
            }
        }
    });

    return material;
}

function GetMaterialsFromScene(name) {
    var material = null;
    scene.traverse((o) => {
        if (o.material) {
            if (name == o.material.name) {
                material = o.material;
            }
        }
    });

    return material;
}

function GetMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    console.log(userAgent);

    if (/Macintosh/i.test(userAgent)) {
        return "Macintosh";
    }

    if (/Windows/i.test(userAgent) || /Win/i.test(userAgent)) {
        return "Windows";
    }

    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "unknown";
}

function waitFor(conditionFunction) {
    const poll = resolve => {
        if (conditionFunction()) resolve();

        else setTimeout(_ => poll(resolve), 400);
    }

    return new Promise(poll);
}

function UpdateActiveOption(groupId) {
    const parentGroup = mainGroups.find(element => element.id == groupId);
    if (!parentGroup) { return; }
    const group = parentGroup.group;

    if (!group.element.classList.contains("disabled")) {
        promiseDelay(100, () => {
            for (let i = 0; i < group.options.length; i++) {
                if (!group.options[i].element.classList.contains("disabled") &&
                    group.options[i].element.classList.contains("active")) {
                    group.options[i].element.classList.remove("active");
                    group.options[i].element.click();
                    break;
                }
            }
        });
    }
}

function CheckAssign(SharedParameterListItem) {
    for (let i = 0; i < SharedParameterListItem.groupIds.length; i++) {
        const groupId = SharedParameterListItem.groupIds[i];
        const parentGroup = mainGroups.find(element => element.id == groupId);
        if (parentGroup == null) { continue; }
        const group = parentGroup.group;

        if (!group.element.classList.contains("disabled")) { continue; }
        let hasValue = false;

        for (let o = 0; o < group.options.length; o++) {
            const opt = group.options[o];

            if (opt.component_id != SharedParameterListItem.value) {
                if (opt.element.classList.contains("active")) {
                    opt.element.classList.remove("active");
                }
                continue;
            }

            if (!opt.element.classList.contains("active")) {
                opt.element.classList.add("active");
                group.activeOption = o;

                //! for this project only
                const optName = opt.element.querySelector('.component_title').textContent;
                const resultItem = group.element.querySelector('.ar_filter_options_result_name');
                resultItem.textContent = optName;
            }

            hasValue = true;
        }

        if (!hasValue) {
            const opt = group.options[0];

            if (!opt.element.classList.contains("active")) {
                opt.element.classList.add("active");
                group.activeOption = 0;

                //! for this project only
                const optName = opt.element.querySelector('.component_title').textContent;
                const resultItem = group.element.querySelector('.ar_filter_options_result_name');
                resultItem.textContent = optName;
            }
        }

        const selectElement = jQuery(`#${groupId}`).find('select');

        if (selectElement.find(`option[value="${SharedParameterListItem.value}"]`).length > 0) {
            selectElement.val(SharedParameterListItem.value);
        } else {
            selectElement.val('0');
        }
    }
}

//#endregion

//#region *** FUNCTIONS HELPER ***
const buttons = {
    summary: 'sum',
    call: 'call',
    pdf: 'pdf',
}

function saveSceneAsImage(renderer) {
    const canvas = renderer.domElement;

    return imageUrl = canvas.toDataURL('image/png');
}

async function captureSingleSceneSnapshot(renderer, scene, camera) {
    renderer.setClearColor(0x000000, 0);
    scene.background = null;

    renderer.render(scene, camera);

    return saveSceneAsImage(renderer);
}

function getElementFromDOM(cls) {
    return document.getElementsByClassName(cls)[0];
}

function addElementToContainer(container, cls, text = false) {
    const div = document.createElement('div');
    div.className = cls;

    if (text) {
        div.textContent = text;
    }

    const toAdd = getElementFromDOM(container);

    return toAdd.insertAdjacentElement('beforeend', div);
}

function removeElementFromContainer(containerId, elementId) {
    const container = getElementFromDOM(containerId);
    if (container) {
        const element = getElementFromDOM(elementId);
        if (element) container.removeChild(element);
    }
}

function toggleClickButton(triger, element, cls) {
    element.classList.add('hide-visible');

    triger.addEventListener('click', () => {
        if (element.classList.contains('hide-visible')) {
            return element.classList.remove('hide-visible');
        }

        return element.classList.add('hide-visible');
    })
}

function closeClick(triger, element) {
    triger.addEventListener('click', () => {
        return element.classList.add('hide-visible');
    })
}

function toggleStyleForSummary() {
    const maxWidht = 1400;
    const contentId = document.getElementById('content');

    if (!contentId.style.cssText.includes(`max-width: ${maxWidht}px !important`)) {
        contentId.style.cssText += `max-width: ${maxWidht}px !important;`;
    } else {
        contentId.style.cssText = contentId.style.cssText.replace(`max-width: ${maxWidht}px !important;`, '');
    }
}

function webHook(button, close = false) {
    switch (button) {
        case buttons.call:
            localStorage.setItem('callButton', true);

            break;

        case buttons.summary:
            localStorage.setItem('stage', 'Summary');

            break;

        case buttons.pdf:
            localStorage.setItem('pdfButton', true);

            break;

        default:
            break;
    }

    let data = {
        productName: document.getElementsByClassName('entry-title')[0].textContent,
        userName: localStorage.getItem('username'),
        phone: localStorage.getItem('phone'),
        email: localStorage.getItem('email'),
        link: window.location.href,
        stage: localStorage.getItem('stage') ? localStorage.getItem('stage') : 'Incomplete',
        callButton: localStorage.getItem('callButton') ? localStorage.getItem('callButton') : false,
        pdfButton: localStorage.getItem('pdfButton') ? localStorage.getItem('pdfButton') : false,
        webSiteClose: close,
    };

    fetch('https://hook.us1.make.com/xh8wgbzkjkkh8cj6gbq6s62my1t58xmk', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(() => {
        console.log(data);
    })
}

async function makeScreen(capture) {
    const elementToCapture = getElementFromDOM(capture);
    const canvas = await html2canvas(elementToCapture);
    const imageUrl = canvas.toDataURL('image/jpeg');

    return imageUrl;
}
//#endregion

//#region UI FUNCTIONS

function PrepareUI() {
    console.log('script start UI');
    var GLTFExporter_script = document.createElement('script');
    GLTFExporter_script.setAttribute('src', 'https://cdn.jsdelivr.net/npm/three@0.146/examples/js/exporters/GLTFExporter.js');
    document.body.appendChild(GLTFExporter_script);

    //#region ADD PDF SCRIPT
    function loadScript(url) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = url;
            script.onload = () => resolve();
            script.onerror = () => reject(new Error(`Script load error for ${url}`));
            document.head.appendChild(script);
        });
    }

    async function loadPDFLib() {
        try {
            await loadScript('https://unpkg.com/pdf-lib@1.4.0');
            console.log('PDF-lib script loaded');
            await loadScript('https://unpkg.com/@pdf-lib/fontkit@0.0.4');
            console.log('Fontkit script loaded');
        } catch (error) {
            console.error(error);
        }
    }

    async function loadCanvasLib() {
        try {
            await loadScript('https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js');
            console.log('Canvas script loaded');
        } catch (error) {
            console.error(error);
        }
    }

    async function loadCanvasPDFlib() {
        try {
            await loadScript('https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.3/html2pdf.bundle.min.js');
            console.log('PDF HTML script loaded');
        } catch (error) {
            console.error(error);
        }
    }

    loadPDFLib();
    loadCanvasLib();
    loadCanvasPDFlib();
    //#endregion

    const shortCode = document.getElementById('configurator_shortcode');
    const main = document.body;
    const menuConfig = getElementFromDOM('ar_filter');
    const summary = getElementFromDOM('ar_summary');
    const titlePDF = document.getElementsByTagName('h1')[0]?.textContent || 'Ð”Ð¾ÐºÑƒÐ¼ÐµÐ½Ñ‚ PDF';

    summary.classList.add('hide-visible');

    //#region WebHook CLOSE 
    window.addEventListener('unload', function () {
        webHook('', true);
    });
    //#endregion

    //#region RECLICK OPTIONS  
    const reclickGroup = getElementFromDOM('group_custom_id-re-click-options');
    const groupName = reclickGroup.getElementsByClassName('ar_filter_caption')[0].textContent;
    const allSummaryName = document.getElementsByClassName('ar_summary_list_group');
    const reclickGroupOptions = reclickGroup.getElementsByClassName('ar_filter_options')[0].getElementsByClassName('option');

    //delete included from ar_summary_list
    Array.from(reclickGroupOptions).forEach(option => {
        option.addEventListener('click', (event) => {
            console.log(groupName);
            if (option.classList.contains('active')) {
                option.classList.remove('active');
                event.stopPropagation();
                event.preventDefault();

                Array.from(allSummaryName).forEach(list => {
                    list.textContent = list.textContent.replaceAll('Included', '');

                    if (list.textContent.toLowerCase() === groupName.toLowerCase()) {
                        const groupSum = list.closest('.ar_summary_list_item');

                        groupSum.remove();
                    }
                })
            }
        })
    })
    //#endregion

    //#region CREATE-PDF-DOC
    async function generateAndDownloadPDF(filename = 'Ferla-Your-Bike.pdf') {
        const element = getElementFromDOM('ar_summary');

        const body = document.getElementById('content');
        const originalBodyStyle = body.style.cssText;
        const screenWidth = 595;
        const originalWidth = window.innerWidth;

        if (!element) {
            console.error(`Element with ID ${element} not found.`);
            return;
        }

        try {
            //prepare html for A4
            body.style.width = `${screenWidth}`;
            body.style.overflow = 'hidden';
            document.documentElement.style.setProperty('--viewport-width', `${screenWidth}px`);
            Object.defineProperty(window, 'innerWidth', { value: screenWidth, configurable: true });
            await new Promise(resolve => requestAnimationFrame(resolve));

            await html2pdf()
                .from(element)
                .set({
                    margin: 10,
                    filename: filename,
                    image: { type: 'jpeg', quality: 0.98 },
                    html2canvas: { scale: 3, logging: true, dpi: 192, letterRendering: true },
                    jsPDF: { unit: 'mm', format: 'a4', orientation: 'p' },
                    pagebreak: { after: '.shortcode_info', avoid: 'table' }
                })
                .toPdf()
                .get('pdf').then(function (pdf) {
                    const totalPages = pdf.internal.getNumberOfPages();

                    for (let i = 2; i <= totalPages; i++) {
                        pdf.setPage(i);

                        // pdf.addHTML(header, 40, 40, { width: pdf.internal.pageSize.width - 20 }, function () {
                        //     doc.setPage(i);
                        // });

                        // pdf.addHTML(footer, 10, pdf.internal.pageSize.height - 10, { width: pdf.internal.pageSize.width - 20 }, function () {
                        //     doc.setPage(i);
                        // });
                    }
                }).save();

        } catch (error) {
            console.error('Error generating PDF:', error);
        } finally {
            body.style.cssText = originalBodyStyle;
            document.documentElement.style.removeProperty('--viewport-width');

            Object.defineProperty(window, 'innerWidth', { value: originalWidth, configurable: true });

            await new Promise(resolve => requestAnimationFrame(resolve));
        }
    }

    //#endregion

    //#region SHARE AND AR LOGIC

    const shareButton = addElementToContainer('ar_conf_container', 'share-button', 'share');
    const arButton = addElementToContainer('ar_conf_container', 'ar-button', 'ar');
    const arConf = getElementFromDOM('configurator3d_post');

    arConf.insertAdjacentHTML('beforeend', `
        <div class="share-box">
            <div class="share-box_close"></div>
    
            <h3 class="share-box_title">Share Configurator</h3>
    
            <div class="share-box_bottom">
                <input type="text" class="share-box_bottom_input">
                <button class="share-box_bottom_copy"></button>
            </div>
        </div>`);

    arConf.insertAdjacentHTML('beforeend', `
        <div class="ar-box hide-visible">
            <div class= "ar-box_close" ></div >

            <h3 class="ar-box_title">Scan the QR code with your phone. Within 1-3 seconds the AR function opens on your
                phone.</h3>

            <div class="ar-box_bottom">
                <div class="ar-box_bottom_QR"></div>
            </div>
        </div > `)

    //#region URL CHANGE
    function updateInputWithURL() {
        document.getElementById('ar_order_link').setAttribute('value', window.location.href);
        getElementFromDOM('share-box_bottom_input').value = window.location.href;
    }

    updateInputWithURL();

    window.addEventListener('popstate', updateInputWithURL);
    window.addEventListener('hashchange', updateInputWithURL);

    const originalPushState = history.pushState;
    history.pushState = function (...args) {
        originalPushState.apply(this, args);
        updateInputWithURL();
    };

    const originalReplaceState = history.replaceState;
    history.replaceState = function (...args) {
        originalReplaceState.apply(this, args);
        updateInputWithURL();
    };
    //#endregion

    //#region SHARE BUTTON
    if (shareButton) {
        shareButton.addEventListener('click', () => {
            getElementFromDOM('ar-box').classList.add('hide-visible');
        });

        toggleClickButton(shareButton, getElementFromDOM('share-box'));
        closeClick(getElementFromDOM('share-box_close'), getElementFromDOM('share-box'));

        function copyToClipboard() {
            navigator.clipboard.writeText(getElementFromDOM('share-box_bottom_input').value);
        }

        getElementFromDOM('share-box_bottom_copy').addEventListener('click', copyToClipboard);
    }
    //#endregion

    //#region AR BUTTON 
    if (arButton) {
        arButton.addEventListener('click', () => { OpenARorQR() });
    }
    //#endregion
    //#endregion

    //#region SUMARRY_BOARD_INIT
    const sumBoard = document.createElement('div');
    sumBoard.className = 'sum-button';

    const addedSumBoard = menuConfig.parentNode.insertBefore(sumBoard, menuConfig.nextSibling);

    const sumPrice = document.getElementById('ar_price_amount').textContent;

    const formattedPrice = sumPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    addedSumBoard.innerHTML = `
        <div class="sum-button_price">$${formattedPrice}</div>
        <div class="sum-button_button">Summary</div>
    `;
    //#region MODAL CALL REQUEST 

    main.insertAdjacentHTML(
        'beforeend',
        `
          <div class="custom-request-modal-bg hide-visible">
            <div class="custom-request-modal">
              <div class="custom-request-modal-close"></div>
      
              <p class="custom-request-modal-text">
                A representative will be reaching out to you shortly.
              </p>
      
              <div class="custom-request-modal-button">OK</div>
            </div>
          </div>
        `
    );

    const modalCallRequest = getElementFromDOM('custom-request-modal-bg');

    const buttonModal = getElementFromDOM('custom-request-modal-button')
    const closeButton = getElementFromDOM('custom-request-modal-close');

    buttonModal.addEventListener('click', () => {
        if (!modalCallRequest.classList.contains('hide-visible')) {
            document.body.style.overflow = 'auto';
            modalCallRequest.classList.add('hide-visible');
        }
    })

    closeButton.addEventListener('click', () => {
        if (!modalCallRequest.classList.contains('hide-visible')) {
            document.body.style.overflow = 'auto';
            modalCallRequest.classList.add('hide-visible');
        }
    })
    //#endregion

    document.addEventListener('click', async (event) => {
        if (event.target.classList.contains('sum-button_button')) {
            //#region WEB HOOK
            webHook(buttons.summary);
            //#endregion

            //#region IMG CONFIG
            resetCameraToDefault();
            captureSingleSceneSnapshot(renderer, scene, camera);

            const imgBike = await captureSingleSceneSnapshot(renderer, scene, camera);;
            //#endregion

            function applyChanges() {
                const pdfButtonOnPhone = document.getElementsByClassName('sum-button_pdf')[0];
                getElementFromDOM('ar_conf_container').classList.add('hide-visible');
                getElementFromDOM('add-info').classList.add('hide-visible');
                getElementFromDOM('page-header').classList.add('page-header_sum');
                document.getElementById('content').classList.add('content_sum');
                getElementFromDOM('sum-button').classList.add('sum-button_sum');

                addElementToContainer('sum-button', 'sum-button_container');

                if (!pdfButtonOnPhone) {
                    addElementToContainer('sum-button', 'sum-button_pdf', 'Download PDF');
                } else {
                    pdfButtonOnPhone.classList.remove('hide-visible');
                }

                addElementToContainer('sum-button_container', 'sum-button_container_pdf', 'Download PDF');
                addElementToContainer('sum-button_container', 'sum-button_container_call', 'Request a Call');
                addElementToContainer('sum-button_container', 'sum-button_container_conf', 'Change a Model');

                addElementToContainer('ar_summary', 'ar_summary_sum-button_conf', 'Change a Model');
                addElementToContainer('ar_summary', 'ar_summary_sum-button_call', 'Request a Call');
            }

            function revertChanges() {
                getElementFromDOM('ar_conf_container').classList.remove('hide-visible');
                getElementFromDOM('add-info').classList.remove('hide-visible');
                getElementFromDOM('page-header').classList.remove('page-header_sum');
                document.getElementById('content').classList.remove('content_sum');
                getElementFromDOM('sum-button').classList.remove('sum-button_sum');
                getElementFromDOM('sum-button_pdf').classList.add('hide-visible');

                removeElementFromContainer('sum-button_container', 'sum-button_container_pdf');
                removeElementFromContainer('sum-button_container', 'sum-button_container_call');
                removeElementFromContainer('sum-button_container', 'sum-button_container_conf');

                removeElementFromContainer('ar_summary', 'ar_summary_sum-button_conf');
                removeElementFromContainer('ar_summary', 'ar_summary_sum-button_call');

                const sumButtonContainer = getElementFromDOM('sum-button_container');
                if (sumButtonContainer) sumButtonContainer.remove();
            }

            const allTitle = document.getElementsByClassName('ar_summary_list_components_component_title');
            const allPrices = document.getElementsByClassName('ar_summary_list_components_component_price');
            const allListSummary = document.getElementsByClassName('ar_summary_list_item');

            const amountPrice = document.getElementById('ar_price_amount').textContent;
            let basePrice = '';

            //#region **Edit UI price Included or have price** and **find BASE PRICE** and **FIX ADDED PRICE/INCLUDED FOR SUM PRICE**
            Array.from(allListSummary).forEach(list => {
                if (list.getElementsByClassName('ar_summary_list_group')[0].textContent.includes('(hidden)')) {
                    list.classList.add('hide-visible');
                }
                if (list.getElementsByClassName('ar_summary_list_group')[0].textContent.includes('Base Price')) {
                    basePrice = list.getElementsByClassName('ar_summary_list_components_component_price')[0].textContent;
                }
            })

            Array.from(allPrices).forEach(price => {
                if (!price.textContent) {
                    price.textContent = 'Included';
                } else if (!price.textContent.includes('Included')) {
                    price.textContent = price.textContent.includes('$') ? price.textContent : '$' + price.textContent;
                }
            })

            Array.from(allTitle).forEach(title => {
                if (title.textContent.includes('Included')) {
                    title.textContent = title.textContent.replaceAll('Included', '');
                }

                if (title.textContent.includes('$')) {
                    title.textContent = title.textContent.split('$')[0];
                }
            })

            //#endregion

            const differentePrice = (+amountPrice.replace(/[^0-9]/g, "") - +basePrice.replace(/[^0-9]/g, "")).toString();

            function formatPrice(price) {
                return price.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            }

            const breakPageFooter = `
                     <div class="footer-forA4">
                       <ul class="footer-forA4_table">
                         <li class="footer-forA4_table_item footer-forA4_table_item--phone">+1 (213) 291-9070</li>
                         <li class="footer-forA4_table_item footer-forA4_table_item--mail">info@ferlabikes.com</li>
                         <li class="footer-forA4_table_item footer-forA4_table_item--adress">895 N Todd Ave, Azusa, CA, 91702</li>
                       </ul>
                     </div>
            `

            if (!document.querySelector('.sum_img') && !document.querySelector('.custom-template')) {
                const templateHTML = `
                    <div class="sum_img" style="background-img: url(${imgBike}) !important"></div>
                    <div class="custom-template">
                       <div class="head-pdf">
                        <h2 class="head-pdf_title">${titlePDF}</h2>
                        <img class="head-pdf_img" src="https://3d.ferlabikes.info/wp-content/uploads/2024/12/Red-Logo-Ferla.png"></img>
                       </div>

                       <h2 class="custom-template_title">Your ${titlePDF} Configuration</h2>
                       <div class="custom-template_price-item">Base Price: $${formatPrice(basePrice)}</div>
                       <div class="custom-template_price-item">Sum of selected options: $${differentePrice}</div>
                       <div class="custom-template_price-total">Total Price: $${formatPrice(amountPrice)}</div>
                    </div>

                    <div class="shortcode_info">${shortCode.innerHTML}</div>

                   ${breakPageFooter}

                    <div class="header-forA4">
                       <div class="header-forA4_container">
                         <div class="header-forA4_container_img" style="background-image: url(${imgBike});"></div> 

                         <div class="header-forA4_container_title">${titlePDF}</div> 

                         <div class="header-forA4_container_logo"></div> 
                       </div>
                    </div>
                  `;

                getElementFromDOM('ar_summary_list').insertAdjacentHTML('afterend', breakPageFooter);

                summary.insertAdjacentHTML('afterbegin', templateHTML);
            }

            // Rewrite different price
            document.getElementsByClassName('custom-template_price-item')[1].textContent = `Sum of selected options: $${formatPrice(differentePrice)}`;

            // Rewrite amount price
            document.getElementsByClassName('custom-template_price-total')[0].textContent = `Total Price: $${formatPrice(amountPrice)}`;

            //#region Turn-on SUMMARY
            menuConfig.classList.add('hide-visible');
            applyChanges();
            summary.classList.remove('hide-visible');
            toggleStyleForSummary();
            //#endregion

            //#region load img from SUM ***CONFIG_PARAMS***
            const style = document.createElement('style');

            style.textContent = `
                .page-header_sum::after {
                    background-image: url(${imgBike});                 
                }
                .sum_img {
                 background-image: url(${imgBike}) !important;
                }
            `;
            document.head.appendChild(style);
            //#endregion

            //BUTTON CHANGE CONF DESKTOP
            getElementFromDOM('sum-button_container_conf').addEventListener('click', () => {
                //#region Turn-off SUMARRY
                menuConfig.classList.remove('hide-visible');
                revertChanges();
                summary.classList.add('hide-visible');
                toggleStyleForSummary();
                //#endregion
            });

            //BUTTON CHANGE CONF PHONE
            getElementFromDOM('ar_summary_sum-button_conf').addEventListener('click', () => {
                //#region Turn-off SUMARRY
                menuConfig.classList.remove('hide-visible');
                revertChanges();
                summary.classList.add('hide-visible');
                toggleStyleForSummary();
                //#endregion
            });

            //BUTTON CALL-REQUEST DESKTOP
            getElementFromDOM('sum-button_container_call').addEventListener('click', () => {
                if (modalCallRequest.classList.contains('hide-visible')) {
                    document.body.style.overflow = 'hidden'
                    modalCallRequest.classList.remove('hide-visible');
                }

                webHook(buttons.call);
            })

            //BUTTON CALL-REQUEST PHONE
            getElementFromDOM('ar_summary_sum-button_call').addEventListener('click', () => {
                if (modalCallRequest.classList.contains('hide-visible')) {
                    document.body.style.overflow = 'hidden'
                    modalCallRequest.classList.remove('hide-visible');
                }

                webHook(buttons.call);
            })

            //BUTTON DOWNLOAD PDF DESKTOP
            getElementFromDOM('sum-button_container_pdf').addEventListener('click', async () => {
                try {
                    document.body.classList.add('loader');
                    await generateAndDownloadPDF();
                } catch (error) {
                    console.log(`ERROR PDF:${error}`)
                } finally {
                    document.body.classList.remove('loader');
                }

                webHook(buttons.pdf);
            })

            //BUTTON DOWNLOAD PDF PHONE
            getElementFromDOM('sum-button_pdf').addEventListener('click', async () => {
                try {
                    document.body.classList.add('loader');
                    await generateAndDownloadPDF();
                } catch (error) {
                    console.log(`ERROR PDF:${error}`)
                } finally {
                    document.body.classList.remove('loader');
                }

                webHook(buttons.pdf);
            })
        }
    });
    //#endregion

    //#region HIDDEN_FROM_DOM 
    const elementsForHidden = document.getElementsByClassName('group_custom_id-hidden');

    Array.from(elementsForHidden).forEach(element => {
        element.style.display = 'none';
    });
    //#endregion

    //#region add ADDITIONAL-INFO 
    const h1Title = document.getElementsByClassName('entry-title')[0];

    if (document.querySelector('.configurator3d_configurator_auth')) {
        h1Title.style.visibility = 'hidden';
    } else {
        h1Title.style.visibility = 'visible !important';

        if (h1Title) {
            const addInfo = document.createElement('div');
            addInfo.className = 'add-info';
            addInfo.textContent = 'Additional Info';

            const addedInfo = h1Title.parentNode.insertBefore(addInfo, h1Title.nextSibling);

            const info = document.createElement('div');
            info.className = 'additional-info';

            const infoBoard = menuConfig.parentNode.insertBefore(info, menuConfig.nextSibling);
            infoBoard.classList.add('hide-visible');

            info.innerHTML = shortCode.innerHTML + `<div class='add-info_close'></div>`;

            getElementFromDOM('add-info_close').addEventListener('click', () => {
                addedInfo.classList.remove('add-info-active')
                infoBoard.classList.add('hide-visible');
            })

            addedInfo.addEventListener('click', () => {

                if (infoBoard.classList.contains('hide-visible')) {
                    addedInfo.classList.add('add-info-active')
                    return infoBoard.classList.remove('hide-visible');
                }

                addedInfo.classList.remove('add-info-active')
                return infoBoard.classList.add('hide-visible');
            })
        }
    }
    //#endregion

    //#region HEADER-NAV-SHADOW-BOXES
    window.addEventListener('scroll', function () {
        const element = document.getElementsByClassName('elementor-motion-effects-container')[0];

        if (window.scrollY > 0) {
            element.classList.add('scrolled');
        } else {
            element.classList.remove('scrolled');
        }
    });
    //#endregion

    //#region FORM
    const auth = document.getElementsByClassName('configurator3d_configurator_auth')[0];
    const titleH1 = document.getElementsByTagName('h1')[0];

    if (auth) {
        const form = auth.getElementsByTagName('form')[0];

        const inputs = document.getElementsByClassName('configurator3d_configurator_auth')[0].getElementsByTagName('form')[0].getElementsByTagName('input');
        const buttonOfForm = inputs[inputs.length - 1];

        //#region CSS-FORM-BUTTON
        buttonOfForm.value = 'Start customization';
        buttonOfForm.style.backgroundImage = 'url("https://3d.ferlabikes.info/wp-content/uploads/2024/11/tabler_arrow-up.svg")';
        buttonOfForm.style.backgroundRepeat = 'no-repeat';
        buttonOfForm.style.backgroundPosition = '75% center';
        buttonOfForm.style.paddingRight = '30px';
        buttonOfForm.style.pointerEvents = 'none';
        //#endregion

        const name = inputs[0];
        const tel = inputs[1];
        const email = inputs[2];
        const checkbox = inputs[3];

        const maxNameLength = 50;
        const maxTelLength = 15;
        const maxEmailLength = 100;

        function validateForm() {
            let valid = true;

            if (name.value.length > maxNameLength || !name.value.length) {
                valid = false;
                buttonOfForm.style.pointerEvents = 'none';
                buttonOfForm.style.backgroundColor = '#747474';
            }

            const telPattern = /^\+?[0-9\s\-()]{7,15}$/;

            if (!telPattern.test(tel.value) || tel.value.length > maxTelLength) {
                valid = false;
                buttonOfForm.style.pointerEvents = 'none';
                buttonOfForm.style.backgroundColor = '#747474';
            }

            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

            if (!emailPattern.test(email.value) || email.value.length > maxEmailLength) {
                valid = false;
                buttonOfForm.style.pointerEvents = 'none';
                buttonOfForm.style.backgroundColor = '#747474';
            }

            if (!checkbox.checked) {
                valid = false;
                buttonOfForm.style.pointerEvents = 'none';
                buttonOfForm.style.backgroundColor = '#747474';
            }

            if (valid) {
                buttonOfForm.style.pointerEvents = 'all';
                buttonOfForm.style.backgroundColor = '#111111';
            }

            return valid;
        }

        for (let i = 0; i < inputs.length - 1; i++) {
            inputs[i].addEventListener('input', validateForm);
        }

        buttonOfForm.addEventListener('click', function () {
            //ENTER DATA TO LOCALE STORAGE
            localStorage.setItem('username', `${name.value}`);
            localStorage.setItem('phone', `${tel.value}`);
            localStorage.setItem('email', `${email.value}`);

            document.body.classList.add('loader');
            menuConfig.classList.add('menu-visible');
            form.classList.add('hide-visible');
            titleH1.style.visibility = 'visible';

            //#region WEB HOOK
            webHook();
            //#endregion

        });
    }
    //#endregion

    //#region INPUTS

    //#region COLOR-ADD-TO-SELECT script
    const colorsGroup = document.getElementsByClassName("group_custom_id-colors")[0];

    const typeSelect = colorsGroup.getElementsByClassName("type_select");

    for (let i = 0; i < typeSelect.length; i++) {
        const options = typeSelect[i].getElementsByClassName("option");

        for (let j = 0; j < options.length; j++) {
            const classList = options[j].className;

            let classArray = classList.split(" ");

            if (classArray.length > 3) {
                classArray = classArray.slice(0, -1);
            }

            const atrs = classArray[classArray.length - 1].split("-");
            const hexColor = atrs[atrs.length - 1];

            if (hexColor) {
                options[j].style.backgroundColor = `${hexColor}`;
            } else {
                console.log(`No color found for`, options[j]);
            }
        }
    }
    //#endregion

    //#region BRANDING-ADD script
    const brandingGroup = document.querySelector(".group_custom_id-branding");

    if (brandingGroup) {
        const filterOptions = brandingGroup.querySelector(".ar_filter_options");

        if (!filterOptions) {
            console.log("ar_filter_options not found");
        }

        filterOptions.classList.add("type_checkbox_with_add_img");
    }
    //#endregion

    //#region COLOR-PRICE script
    const colorsContainer = document.getElementsByClassName('group_custom_id-colors')[0];

    if (!colorsContainer) {
        console.log("null");
    }

    const filterHeader = colorsContainer.getElementsByClassName('ar_filter_header')[0];

    if (!filterHeader) {
        console.log("null");
    }

    const filterCaption = filterHeader.getElementsByClassName('ar_filter_caption')[0];

    if (!filterCaption) {
        console.log("null");
    }

    const spanPrice = document.createElement('span');
    spanPrice.className = 'span_price';

    spanPrice.innerHTML = '<br>Included';

    filterCaption.appendChild(spanPrice);
    //#endregion

    //#region Custom DATA-PRICE script
    const allGroup = document.getElementsByClassName('ar_filter_group');

    for (const group of allGroup) {
        const allOptions = group.getElementsByClassName('ar_filter_options');

        for (const options of allOptions) {
            const thisOptions = options.getElementsByClassName('option');

            for (const option of thisOptions) {
                const title = option.getElementsByClassName('component_title')[0];
                console.log(title);

                const price = option.getAttribute('data-price');

                const visiblePrice = price == 0 ? 'Included' : `$${price}`;

                const spanPrice = document.createElement('span');
                spanPrice.className = 'span_price';

                spanPrice.innerHTML = `<br>${visiblePrice}`;

                title.appendChild(spanPrice);

                //#region CALC PRICE FOR SUMMARY BOARD
                option.addEventListener('click', () => {
                    setTimeout(() => {
                        const sumPrice = document.getElementById('ar_price_amount').textContent;

                        const formattedPrice = sumPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

                        addedSumBoard.innerHTML = `
                            <div class="sum-button_price">$${formattedPrice}</div>
                            <div class="sum-button_button">Summary</div>
                        `;

                        Array.from(allSummaryName).forEach(list => {
                            list.textContent = list.textContent.replaceAll('Included', '');
                        });
                    }, 300)
                })
                //#endregion
            }
        }
    }
    //#endregion

    //#endregion

    //#region info Pop-UP
    const allPopInfo = document.getElementsByClassName('ar_option_description_tooltip');

    Array.from(allPopInfo).forEach(pop => {

        pop.addEventListener('click', () => {
            const arFilter = document.querySelector('.configurator3d_post');
            const text = pop.nextSibling.nextSibling.textContent;

            // Ð”Ð¾Ð´Ð°Ñ”Ð¼Ð¾ Ñ‚ÐµÐºÑÑ‚ Ñ– ÐºÐ»Ð°Ñ Ð´Ð»Ñ ÑÑ‚Ð¸Ð»Ñ–Ð·Ð°Ñ†Ñ–Ñ—
            arFilter.setAttribute('data-text', text);
            arFilter.classList.add('show-content');

            // Ð”Ð¾Ð´Ð°Ñ”Ð¼Ð¾ Ð¿Ð¾Ð´Ñ–ÑŽ Ð´Ð»Ñ Ð²Ð¸Ð´Ð°Ð»ÐµÐ½Ð½Ñ ÐºÐ»Ð°ÑÑƒ Ð¿Ñ€Ð¸ ÐºÐ»Ñ–ÐºÑƒ
            arFilter.addEventListener('click', (e) => {
                if (e.target === arFilter) {
                    arFilter.classList.remove('show-content');
                    arFilter.removeAttribute('data-text');
                }
            });
        });
    })

    //#endregion

    //#region endLoading
    setTimeout(() => {
        getElementFromDOM('page-content').classList.add('no-loader');
    }, 150)
    //#endregion
}

function updateResultInGroupHeader() {
    jQuery('.ar_filter_group').each(function () {
        const $group = jQuery(this);
        const $header = $group.find('.ar_filter_header');
        const $resultItem = $group.find('.ar_filter_options_result_item').first();
        const resultName = $resultItem.find('.ar_filter_options_result_name').text();
        const resultPrice = $resultItem.find('.ar_filter_options_result_price').text().trim();
        const $itemInHeader = jQuery('<div class="ar_filter_options_result_item_in_header"></div>');
        const $nameInHeader = jQuery('<span class="ar_filter_options_result_name_in_header"></span>').text(resultName);
        const $priceInHeader = jQuery('<span class="ar_filter_options_result_price_in_header"></span>');

        if (resultPrice) {
            $priceInHeader.text(`(+${resultPrice})`);
        }

        $header.find('.ar_filter_options_result_item_in_header').remove();
        $itemInHeader.append($nameInHeader).append($priceInHeader);
        $header.append($itemInHeader);
    });
}

function GroupUiVisibility(groupId, value) {
    const element = document.getElementById(groupId);

    if (element) {
        element.style.display = value ? 'block' : 'none';
    } else {
        console.error('Element not found with id:', groupId);
    }
}

function ChangeUI() {
    const priceAmount = jQuery('#ar_price_amount').text();
    jQuery('#ar_menu__header_price').text(priceAmount);

    updateResultInGroupHeader();
}
//#endregion

//#region URL PARAMETERS
function GetParameterSplitString(array) {
    if (array.length == 0) { return; }

    var params = [];
    for (let index = 0; index < array.length; index++) {
        params.push(array[index].splitValue);
    }
    return new RegExp(`${params.join("|")}`)
}

function ReadURLParameters(callback) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const keys = urlParams.keys(), values = urlParams.values();
    const entries = urlParams.entries();

    var parseParams = "";

    for (const entry of entries) {
        if (entry[0] == parametersKey) {
            parseParams = entry[1];
            break;
        }
    }

    // console.log("ÃƒÂ°Ã…Â¸Ã…Â¡Ã¢â€šÂ¬ ~ ReadURLParameters ~ parseParams:", parseParams);

    if (!parseParams?.trim()) {
        paramsLoaded = true;
        EmptyURLParams();
        if (callback != null) { callback(); }
        return;
    }

    const paramArray = parseParams.split(GetParameterSplitString(SharedParameterList));

    if (paramArray.length == 0) {
        paramsLoaded = true;
        EmptyURLParams();
        if (callback != null) { callback(); }
        return;
    }

    // console.log("ÃƒÂ°Ã…Â¸Ã…Â¡Ã¢â€šÂ¬ ~ ReadURLParameters ~ paramArray:", paramArray);

    for (let index = 0; index < SharedParameterList.length; index++) {
        const element = SharedParameterList[index];
        let arrayValue;

        switch (element.type) {
            case 'string':
                element.value = paramArray[index + 1]?.toString();
                break;
            case 'int':
                element.value = parseInt(paramArray[index + 1]);
                break;
            case 'float':
                element.value = parseFloat(paramArray[index + 1]);
                break;
            case 'array-string':
                arrayValue = paramArray[index + 1]?.toString();
                element.value = GetSharedArrayValues(arrayValue, 'string');
                break;
            case 'array-int':
                arrayValue = paramArray[index + 1]?.toString();
                element.value = GetSharedArrayValues(arrayValue, 'int');
                break;
            case 'array-float':
                arrayValue = paramArray[index + 1]?.toString();
                element.value = GetSharedArrayValues(arrayValue, 'float');
                break;
        }

        if (element.id == "qr") {
            qrScaned = element.value;
        }
    }

    if (callback != null) callback();

    CheckQRMobile();

}

function GetSharedArrayValues(arrayValue, type) {
    var output = [];

    if (arrayValue == undefined || arrayValue == null) { return output; }
    if (arrayValue == "") { return output; }

    var options = arrayValue.split('-');
    for (let i = 0; i < options.length; i++) {
        switch (type) {
            case 'string':
                output.push(options[i]);
                break;
            case 'int':
                output.push(parseInt(options[i]));
                break;
            case 'float':
                output.push(parseFloat(options[i]));
                break;
        }
    }

    return output;
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function ApplyURLParameters(callback = () => { }) {
    let ar_order_link;

    if (paramsLoaded) {
        ar_order_link = jQuery("input[name='ar_order_link']");
        if (ar_order_link != null) {
            ar_order_link[0].value = GetURLWithParameters();
        }
        return;
    }

    for (const target of mainGroups) {
        const group = target.group;

        for (let i = 0; i < SharedParameterList.length; i++) {
            const SharedParameterListItem = SharedParameterList[i];

            if (SharedParameterListItem.groupIds == undefined || SharedParameterListItem.groupIds == null) { continue; }
            if (!SharedParameterListItem.groupIds.includes(target.id)) { continue; }

            if (SharedParameterListItem.applyURLActionReturn) {

                if (SharedParameterListItem.applyURLAction != null) {
                    SharedParameterListItem.applyURLAction();
                }

                await delay(50);
                continue;
            }

            let option;

            switch (target.type) {
                case "select":
                case "select_no_photo":
                    if (SharedParameterListItem.value == "") { break; }

                    option = group.options.find(o => o.component_id == SharedParameterListItem.value);
                    if (option == null) { break; }
                    if (option.element.classList.contains("active")) { break; }

                    for (let i = 0; i < group.options.length; i++) {
                        const element = group.options[i];
                        if (element.element.classList.contains("active")) {
                            element.element.classList.remove("active");
                        }
                    }

                    if (group.element.classList.contains("disabled")) {
                        option.element.classList.add("active");
                        break;
                    }

                    option.element.click();
                    break;
                case "range":
                    group.input.value = SharedParameterListItem.value;
                    group.input.dispatchEvent(new Event('input'));
                    changeRangeOptions(target.id);
                    break;
                case "checkbox":
                    for (let i = 0; i < SharedParameterListItem.value.length; i++) {
                        const value = SharedParameterListItem.value[i];
                        if (value == "1") {
                            group.options[i].active = true;
                            group.options[i].element.classList.add("active");
                            //group.options[i].element.click();
                        }
                    }
                    break;
                case "number":
                    group.input.value = SharedParameterListItem.value;
                    group.input.dispatchEvent(new Event('input'));
                    break;
                case "dropdown":
                    if (SharedParameterListItem.value == "") { break; }

                    group.select.value = SharedParameterListItem.value;

                    for (let index = 0; index < group.options.length; index++) {
                        const element = group.options[index];
                        if (element.component_id == SharedParameterListItem.value) {
                            if (!element.element.classList.contains("active")) {
                                element.element.classList.add("active");
                            }
                        } else {
                            if (element.element.classList.contains("active")) {
                                element.element.classList.remove("active");
                            }
                        }
                    }
                    if (!group.element.classList.contains("disabled")) {
                        let additionalGroup = jQuery('#' + target.id);
                        afterFilterAction(additionalGroup);
                    }
                    break;
                case "text":
                    break;
            }

            if (SharedParameterListItem.applyURLAction != null) {
                SharedParameterListItem.applyURLAction();
            }
        }

        await delay(50);
    }

    ar_order_link = jQuery("input[name='ar_order_link']");
    if (ar_order_link != null) {
        ar_order_link[0].value = GetURLWithParameters();
    }

    paramsLoaded = true;

    setIsLoaderActive(false);

    callback();
}

function WriteURLParameters() {
    if (!paramsLoaded) { return; }
    qrScaned = 0;
    let ar_order_link;

    if (!delayForWriteURL) {
        delayForWriteURL = true;
        promiseDelay(500, function () {
            history.pushState(null, 'NextTable', GetURLWithParameters());

            ar_order_link = jQuery("input[name='ar_order_link']");
            if (ar_order_link != null) {
                ar_order_link[0].value = GetURLWithParameters();
            }

            if (formElement != null) {
                formElement.action = GetURLWithParameters();
            }

            delayForWriteURL = false;
        });
    }
}

function GetParametersString() {
    parametersValue = "";

    for (let index = 0; index < SharedParameterList.length; index++) {
        const element = SharedParameterList[index];

        if (element.value == undefined || element.value == null) { continue; }

        switch (element.type) {
            case 'array-string':
            case 'array-int':
            case 'array-float':
                parametersValue += element.splitValue;

                for (var i = 0; i < element.value.length; i++) {
                    if (i == element.value.length - 1) {
                        parametersValue += element.value[i];
                    } else {
                        parametersValue += element.value[i] + '-';
                    }
                }
                break;
            default:
                parametersValue += element.splitValue + element.value;
                break;
        }
    }

    //You can do something here...
    return parametersValue;
}

function GetURLWithParameters() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const keys = urlParams.keys(), values = urlParams.values();
    const entries = urlParams.entries();

    var url = location.protocol + '//' + location.host + location.pathname + "?";

    var configEmpty = true;

    for (const entry of entries) {
        if (entry[0] == parametersKey) {
            url += parametersKey + "=" + GetParametersString() + "&";
            configEmpty = false;
        } else {
            url += entry[0] + "=" + entry[1] + "&";
        }
    }

    if (configEmpty) {
        url += parametersKey + "=" + GetParametersString();
    }

    if (url.endsWith("&")) {
        url = url.substring(0, url.length - 1);
    }

    return url;
}

//#endregion

//#region CLIPBOARD

const copyToClipboard = function () {
    var aux = document.createElement("input");
    // aux.setAttribute("value", infoSharingInput[0].value);
    aux.setAttribute("value", jQuery('#info-sharing-input').val());
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
}

//#endregion

//#region QR

function CreateQR() {
    // var qr = qrcode[0];
    // if (qr == null) { return; }

    // while (qr.hasChildNodes()) {
    //     qr.removeChild(qr.lastChild);
    // }

    // qrScaned = 1;

    var uri = GetURLWithParameters();
    var encoded = encodeURIComponent(uri);
    var qrImg = new Image();
    qrImg.src = 'https://quickchart.io/qr?text=' + encoded + "&size=200";
    qrImg.addEventListener("load", () => {
        console.log("ÃƒÂ°Ã…Â¸Ã…Â¡Ã¢â€šÂ¬ ~ qrImg.addEventListener ~ qrImg:", qrImg);
        document.getElementsByClassName('ar-box_bottom_QR')[0].style.backgroundImage = `url(${qrImg.src})`;
    });
}

async function CheckQRMobile() {

    await waitFor(_ => loaded === true);

    if (qrScaned == 1) {
        if (GetMobileOperatingSystem() == "Android" || GetMobileOperatingSystem() == "iOS") {
            OpenAR();
        }
        qrScaned = 0;
    }
}

//#endregion

//#region AR

function PrepareAR() {
    jQuery(document).ready(function () {

        const body = jQuery("body");

        modelViewer = jQuery('<model-viewer id="marevo_model" ar ar-modes="webxr scene-viewer quick-look" src="https://s3.eu-central-1.amazonaws.com/marevo.vision/RelevantProjects/webAR/model-viewer-important/scenes/empty_scene.glb" poster="" ar-scale="fixed" loading="eager" alt="by MAIN" shadow-intensity="1" shadow-softness="1" environment-image="neutral" stage-light-intensity="1" camera-orbit="-30deg auto auto" max-camera-orbit="auto 100deg auto" camera-controls exposure="0.9" auto-rotate>');
        const arPromt = jQuery('<div id="ar-prompt">');
        const icoImage = jQuery('<img src="https://modelviewer.dev/shared-assets/icons/hand.png" alt="ar-prompt">');

        arPromt.append(icoImage);
        modelViewer.append(arPromt);

        body.append(modelViewer);

        modelViewer[0].addEventListener('ar-status', (event) => {
            if (event.detail.status == 'session-started') {
                arPromt[0].style.display = "block";
            } else if (event.detail.status == 'not-presenting') {
                arPromt[0].style.display = "none";
                modelViewer[0].resetScene();
            }
            else {
                arPromt[0].style.display = "none";
            }
        });
    });
}

async function OpenAR() {
    // ComputeMorphedAttributes();
    ImportScene(scene);
}

function OpenARorQR() {
    if (GetMobileOperatingSystem() == "Android" || GetMobileOperatingSystem() == "iOS") {
        console.log('Mobile AR');
        OpenAR();
        return;
    }

    CreateQR();

    //custom part
    document.getElementsByClassName('ar-box')[0].classList.remove('hide-visible');

    closeClick(getElementFromDOM('ar-box_close'), getElementFromDOM('ar-box'));
}

//IMPORT
async function ImportScene(newScene) {

    const value = await modelViewer[0].importScene(newScene);
    // AR
    modelViewer[0].activateAR();
}

//#endregion

//#region MATERIAL


function ChangeMaterialTilling(materialName, x, y) {
    var materialObject = GetMaterialsFromScene(materialName);

    if (materialObject == null) { return; }

    if (materialObject.map != null) {
        materialObject.map.repeat.set(x, y);
    }

    if (materialObject.normalMap != null) {
        materialObject.normalMap.repeat.set(x, y);
    }

    if (materialObject.roughnessMap != null) {
        materialObject.roughnessMap.repeat.set(x, y);
    }

    if (materialObject.metalnessMap != null) {
        materialObject.metalnessMap.repeat.set(x, y);
    }

    if (materialObject.aoMap != null) {
        materialObject.aoMap.repeat.set(x, y);
    }
}


function ChangeMaterialOffset(materialName, x, y) {
    var materialObject = GetMaterialsFromScene(materialName);

    if (materialObject == null) { return; }

    if (materialObject.map != null) {
        materialObject.map.offset.set(x, y);
    }

    if (materialObject.normalMap != null) {
        materialObject.normalMap.offset.set(x, y);
    }

    if (materialObject.roughnessMap != null) {
        materialObject.roughnessMap.offset.set(x, y);
    }

    if (materialObject.metalnessMap != null) {
        materialObject.metalnessMap.offset.set(x, y);
    }

    if (materialObject.aoMap != null) {
        materialObject.aoMap.offset.set(x, y);
    }
}


function RotateMaterialTexture(materialName, angle = Math.PI / 2) {
    var materialObject = GetMaterialsFromScene(materialName);

    if (materialObject == null) { return; }

    var rotationAngle = angle;

    if (materialObject.map != null) {
        materialObject.map.rotation = rotationAngle;
    }

    if (materialObject.normalMap != null) {
        materialObject.normalMap.rotation = rotationAngle;
    }

    if (materialObject.roughnessMap != null) {
        materialObject.roughnessMap.rotation = rotationAngle;
    }

    if (materialObject.metalnessMap != null) {
        materialObject.metalnessMap.rotation = rotationAngle;
    }

    if (materialObject.aoMap != null) {
        materialObject.aoMap.rotation = rotationAngle;
    }
}

//#endregion

//#region SHADER

function Shader_ChangeVertexToWorldpos(object) {
    promiseDelayShaderSettings(500, object, () => {
        if (object.isMesh) {
            if (isWorldposVertexShaderEnabled) {
                if (object.material) {
                    if (object.material.name.includes("_Z")) {
                        object.material.onBeforeCompile = (shader) => {
                            shader.vertexShader = shader.vertexShader.replace('#include <uv_vertex>\n', '').replace('#include <worldpos_vertex>', 'vec4 worldPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\nworldPosition = instanceMatrix * worldPosition;\n#endif\nworldPosition = modelMatrix * worldPosition;\nvUv = (uvTransform * vec3(worldPosition.xz, 1)).xy;');
                        };
                    }
                    else if (object.material.name.includes("_Y")) {
                        object.material.onBeforeCompile = (shader) => {
                            shader.vertexShader = shader.vertexShader.replace('#include <uv_vertex>\n', '').replace('#include <worldpos_vertex>', 'vec4 worldPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\nworldPosition = instanceMatrix * worldPosition;\n#endif\nworldPosition = modelMatrix * worldPosition;\nvUv = (uvTransform * vec3(worldPosition.xy, 1)).xy;');
                        };
                    }
                    else if (object.material.name.includes("_X")) {
                        object.material.onBeforeCompile = (shader) => {
                            shader.vertexShader = shader.vertexShader.replace('#include <uv_vertex>\n', '').replace('#include <worldpos_vertex>', 'vec4 worldPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\nworldPosition = instanceMatrix * worldPosition;\n#endif\nworldPosition = modelMatrix * worldPosition;\nvUv = (uvTransform * vec3(worldPosition.yz, 1)).xy;');
                        };
                    }
                    object.material.needsUpdate = true;
                }
            }
        }
    });
}

function promiseDelayShaderSettings(time, object, callback) {
    if (time == null) {
        time = 2000;
    }

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('resolved');
            if (object.material.map == null) {
                promiseDelayShaderSettings(time, object, callback);
            } else {
                if (callback != null) {
                    callback();
                }
            }
        }, time);
    });
}

//#endregion

//#region MORPHS

function InitMorphModel(model) {
    var BufferGeometryUtils_script = document.createElement('script');
    BufferGeometryUtils_script.setAttribute('src', 'https://cdn.jsdelivr.net/npm/three@0.147/examples/js/utils/BufferGeometryUtils.js');
    document.body.appendChild(BufferGeometryUtils_script);

    model.traverse((object) => {
        if (object.isMesh) {

            Shader_ChangeVertexToWorldpos(object);

            if (object.morphTargetDictionary != null) {

                for (const [key, value] of Object.entries(object.morphTargetDictionary)) {

                    var morph = {
                        name: key,
                        object: object,
                        key: value,
                        value: value
                    };

                    if (!morphs.includes(morph)) {
                        morphs.push(morph);
                    }
                }
            }
        }
    });

    PrepareGlobalMorphs();
}

function PrepareGlobalMorphs() {
    globalMorphs = [];

    for (let index = 0; index < morphs.length; index++) {
        const morph = morphs[index];

        var hasMorph = false;

        for (let m = 0; m < globalMorphs.length; m++) {
            const globalMorph = globalMorphs[m];
            if (globalMorph.name != morph.name) { continue; }
            hasMorph = true;
            break;
        }

        if (!hasMorph) {
            globalMorphs.push(morph);
        }
    }
}


function ChangeObjectMorph(morph, inputvalue) {
    if (morph.object == null) { return; }

    if (morph.object.isMesh) {
        if (morph.object.morphTargetInfluences != null) {
            morph.object.morphTargetInfluences[morph.key] = inputvalue;
        }
    }
}

function ChangeGlobalMorph(morphName, inputvalue) {
    for (let index = 0; index < morphs.length; index++) {
        const morph = morphs[index];

        if (morph.name != morphName) { continue; }
        if (morph.object == null) { continue; }
        if (!morph.object.isMesh) { continue; }
        if (morph.object.morphTargetInfluences == null) { continue; }

        morph.object.morphTargetInfluences[morph.key] = inputvalue;
    }
}

function ComputeMorphedAttributes() {
    for (let index = 0; index < morphs.length; index++) {
        const morph = morphs[index];
        var computeMorphedAttributes = THREE.BufferGeometryUtils.computeMorphedAttributes(morph.object);
        morph.object.geometry.computeMorphedAttributes = computeMorphedAttributes;
    }
}


function animateMorph(
    morphName,
    valueStart,
    valueEnd,
    callback = () => { },
    timeInterval = 200,
    steps = 25,
) {
    const stepDuration = timeInterval / steps;
    const stepValue = (valueEnd - valueStart) / steps;
    let currentValue = valueStart;
    let completedSteps = 0;

    for (let i = 1; i <= steps; i++) {
        setTimeout(() => {
            ChangeGlobalMorph(morphName, currentValue);
            currentValue += stepValue;
            completedSteps++;
            if (completedSteps === steps) {
                ChangeGlobalMorph(morphName, valueEnd);
                callback();
            }
        }, i * stepDuration);
    }
}

//#endregion

//#region ANIMATION

// ANIMATION OF MODEL - "SCALING"
function animateScale(
    model,
    duration = 500,
    startScale = 0,
    endScale = 1,
    timingKeyword = 'ease-in',
    callback = () => { }
) {
    function timingFunction(progress) {
        switch (timingKeyword) {
            case 'ease-in':
                return progress * progress;
            case 'ease-out':
                return 1 - Math.pow(1 - progress, 2);
            case 'ease-in-out':
                return progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
            default:
                return progress;
        }
    }

    let startTime = null;

    function animate(currentTime) {
        if (!startTime) {
            startTime = currentTime;
        }

        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const easedProgress = timingFunction(progress);
        const interpolatedScale = startScale + (endScale - startScale) * easedProgress;
        model.scale.set(interpolatedScale, interpolatedScale, interpolatedScale);

        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            model.scale.set(endScale, endScale, endScale);
            callback();
        }
    }

    requestAnimationFrame(animate);
}

//#endregion

//#region DIMENSIONS

let oldLengthValue = 0;
let oldWidthValue = 0;
let oldDiameterValue = 0;
let oldHeightValue = 0;


function changeDimensions(groupIds, needsAnimate = true, type = '') {
    for (let i = 0; i < groupIds.length; i++) {
        const groupId = groupIds[i];
        const parentGroup = mainGroups.find(element => element.id == groupId);

        if (!parentGroup) { return; }
        const group = parentGroup.group;
        if (group.element.classList.contains("disabled")) { continue; }

        const currentShape = SharedParameterList[0].value;

        let lengthMin, lengthMax;
        let widthMin, widthMax;
        let diameterMin, diameterMax;
        let heightMin, heightMax;

        switch (currentShape) {
            case '0': // Rond
                lengthMin = null;
                lengthMax = null;
                widthMin = null;
                widthMax = null;
                diameterMin = 80;
                diameterMax = 130;
                heightMin = 105;
                heightMax = 115;
                break;
            case '1': // Vlieland
                lengthMin = 80;
                lengthMax = 120;
                widthMin = 60;
                widthMax = 90;
                diameterMin = null;
                diameterMax = null;
                heightMin = 105;
                heightMax = 115;
                break;
            case '2': // Texel
                lengthMin = 80;
                lengthMax = 130;
                widthMin = 80;
                widthMax = 130;
                diameterMin = null;
                diameterMax = null;
                heightMin = 105;
                heightMax = 115;
                break;
            default:
                break;
        }

        const dimensionsString = group.options[group.activeOption].dataValue;
        const dimensions = parseTableSize(dimensionsString, type);
        const maxDimension = Math.max(dimensions.length, dimensions.width, dimensions.diameter);
        const minDist = maxDimension / 100 / 2 + 0.5;

        const lengthValue = (dimensions.length && lengthMin && lengthMax)
            ? linearInterpolation(dimensions.length, lengthMin, lengthMax) : null;
        const widthValue = (dimensions.width && widthMin && widthMax)
            ? linearInterpolation(dimensions.width, widthMin, widthMax) : null;
        const diameterValue = (dimensions.diameter && diameterMin && diameterMax)
            ? linearInterpolation(dimensions.diameter, diameterMin, diameterMax) : null;
        const heightValue = (dimensions.height && heightMin && heightMax)
            ? linearInterpolation(dimensions.height, heightMin, heightMax) : null;

        if (!needsAnimate) {
            if (lengthValue !== null && widthValue !== null) {
                minDistanceCallback();
                ChangeGlobalMorph('length', lengthValue);
                ChangeGlobalMorph('width', widthValue);
                ChangeGlobalMorph('size', lengthValue);
            }

            if (diameterValue !== null) {
                minDistanceCallback();
                ChangeGlobalMorph('diameter', diameterValue);
            }

            if (heightValue !== null) {
                minDistanceCallback();
                ChangeGlobalMorph('height', heightValue);
            }
        } else {
            if (lengthValue !== null && widthValue !== null) {
                minDistanceCallback();
                animateMorph('length', oldLengthValue, lengthValue);
                animateMorph('width', oldWidthValue, widthValue);
                animateMorph('size', oldLengthValue, lengthValue);
            }

            if (diameterValue !== null) {
                minDistanceCallback();
                animateMorph('diameter', oldDiameterValue, diameterValue);
            }

            if (heightValue !== null) {
                minDistanceCallback();
                animateMorph('height', oldHeightValue, heightValue);
            }
        }

        if (lengthValue !== null && widthValue !== null) {
            oldLengthValue = lengthValue;
            oldWidthValue = widthValue;
        }

        if (diameterValue !== null) { oldDiameterValue = diameterValue; }

        if (heightValue !== null) { oldHeightValue = heightValue; }

        function minDistanceCallback() {
            controls.minDistance = minDist;
            controls.maxDistance = minDist * 2;
        }
    }
}

function parseTableSize(sizeStr, type = '') {
    sizeStr = sizeStr.toLowerCase();

    if (sizeStr.includes('x')) {
        const [length, width] = sizeStr.split('x').map(Number);
        return {
            length: length || null,
            width: width || null,
            diameter: null,
            height: null,
        };
    } else {
        let diameter = null;
        let height = null;

        if (type == 'height') {
            height = Number(sizeStr);
        } else {
            diameter = Number(sizeStr);
        }

        return {
            length: null,
            width: null,
            diameter: diameter || null,
            height: height || null,
        };
    }
}

function linearInterpolation(value, minValue = 100, maxValue = 300, minCoefficient = 0, maxCoefficient = 1) {
    const range = maxValue - minValue;
    const coefficientRange = maxCoefficient - minCoefficient;

    return ((value - minValue) / range) * coefficientRange + minCoefficient;
}

//#endregion

//#region MIRROR

function setModelMirrored(value) {
    theModel.scale.x = (value) ? -1 : 1;
}

//#endregion

//#region CASTOM COLOR - RAL


function activeRALcolor() {
    jQuery('#RALcode_input').val(SharedParameterList[8].value);
    UpdateRALInput(jQuery('#RALcode_input').val());
    WriteURLParameters();
}

function UpdateRALInput(value) {
    console.log("ÃƒÂ°Ã…Â¸Ã…Â¡Ã¢â€šÂ¬ ~ RALInput ~ value:", value);

    if (value == undefined && value == '') return;

    if (value == null) {
        value = document.getElementById('RAL-input').value;
    }

    const rals = {
        "RAL1000": "#BEBD7F", "RAL1001": "#C2B078", "RAL1002": "#C6A664",
        "RAL1003": "#E5BE01", "RAL1004": "#CDA434", "RAL1005": "#A98307",
        "RAL1006": "#E4A010", "RAL1007": "#DC9D00", "RAL1011": "#8A6642",
        "RAL1012": "#C7B446", "RAL1013": "#EAE6CA", "RAL1014": "#E1CC4F",
        "RAL1015": "#E6D690", "RAL1016": "#EDFF21", "RAL1017": "#F5D033",
        "RAL1018": "#F8F32B", "RAL1019": "#9E9764", "RAL1020": "#999950",
        "RAL1021": "#F3DA0B", "RAL1023": "#FAD201", "RAL1024": "#AEA04B",
        "RAL1026": "#FFFF00", "RAL1027": "#9D9101", "RAL1028": "#F4A900",
        "RAL1032": "#D6AE01", "RAL1033": "#F3A505", "RAL1034": "#EFA94A",
        "RAL1035": "#6A5D4D", "RAL1036": "#705335", "RAL1037": "#F39F18",
        "RAL2000": "#ED760E", "RAL2001": "#C93C20", "RAL2002": "#CB2821",
        "RAL2003": "#FF7514", "RAL2004": "#F44611", "RAL2005": "#FF2301",
        "RAL2007": "#FFA420", "RAL2008": "#F75E25", "RAL2009": "#F54021",
        "RAL2010": "#D84B20", "RAL2011": "#EC7C26", "RAL2012": "#E55137",
        "RAL2013": "#C35831", "RAL3000": "#AF2B1E", "RAL3001": "#A52019",
        "RAL3002": "#A2231D", "RAL3003": "#9B111E", "RAL3004": "#75151E",
        "RAL3005": "#5E2129", "RAL3007": "#412227", "RAL3009": "#642424",
        "RAL3011": "#781F19", "RAL3012": "#C1876B", "RAL3013": "#A12312",
        "RAL3014": "#D36E70", "RAL3015": "#EA899A", "RAL3016": "#B32821",
        "RAL3017": "#E63244", "RAL3018": "#D53032", "RAL3020": "#CC0605",
        "RAL3022": "#D95030", "RAL3024": "#F80000", "RAL3026": "#FE0000",
        "RAL3027": "#C51D34", "RAL3028": "#CB3234", "RAL3031": "#B32428",
        "RAL3032": "#721422", "RAL3033": "#B44C43", "RAL4001": "#6D3F5B",
        "RAL4002": "#922B3E", "RAL4003": "#DE4C8A", "RAL4004": "#641C34",
        "RAL4005": "#6C4675", "RAL4006": "#A03472", "RAL4007": "#4A192C",
        "RAL4008": "#924E7D", "RAL4009": "#A18594", "RAL4010": "#CF3476",
        "RAL4011": "#8673A1", "RAL4012": "#6C6874", "RAL5000": "#354D73",
        "RAL5001": "#1F3438", "RAL5002": "#20214F", "RAL5003": "#1D1E33",
        "RAL5004": "#18171C", "RAL5005": "#1E2460", "RAL5007": "#3E5F8A",
        "RAL5008": "#26252D", "RAL5009": "#025669", "RAL5010": "#0E294B",
        "RAL5011": "#231A24", "RAL5012": "#3B83BD", "RAL5013": "#1E213D",
        "RAL5014": "#606E8C", "RAL5015": "#2271B3", "RAL5017": "#063971",
        "RAL5018": "#3F888F", "RAL5019": "#1B5583", "RAL5020": "#1D334A",
        "RAL5021": "#256D7B", "RAL5022": "#252850", "RAL5023": "#49678D",
        "RAL5024": "#5D9B9B", "RAL5025": "#2A6478", "RAL5026": "#102C54",
        "RAL6000": "#316650", "RAL6001": "#287233", "RAL6002": "#2D572C",
        "RAL6003": "#424632", "RAL6004": "#1F3A3D", "RAL6005": "#2F4538",
        "RAL6006": "#3E3B32", "RAL6007": "#343B29", "RAL6008": "#39352A",
        "RAL6009": "#31372B", "RAL6010": "#35682D", "RAL6011": "#587246",
        "RAL6012": "#343E40", "RAL6013": "#6C7156", "RAL6014": "#47402E",
        "RAL6015": "#3B3C36", "RAL6016": "#1E5945", "RAL6017": "#4C9141",
        "RAL6018": "#57A639", "RAL6019": "#BDECB6", "RAL6020": "#2E3A23",
        "RAL6021": "#89AC76", "RAL6022": "#25221B", "RAL6024": "#308446",
        "RAL6025": "#3D642D", "RAL6026": "#015D52", "RAL6027": "#84C3BE",
        "RAL6028": "#2C5545", "RAL6029": "#20603D", "RAL6032": "#317F43",
        "RAL6033": "#497E76", "RAL6034": "#7FB5B5", "RAL6035": "#1C542D",
        "RAL6036": "#193737", "RAL6037": "#008F39", "RAL6038": "#00BB2D",
        "RAL7000": "#78858B", "RAL7001": "#8A9597", "RAL7002": "#7E7B52",
        "RAL7003": "#6C7059", "RAL7004": "#969992", "RAL7005": "#646B63",
        "RAL7006": "#6D6552", "RAL7008": "#6A5F31", "RAL7009": "#4D5645",
        "RAL7010": "#4C514A", "RAL7011": "#434B4D", "RAL7012": "#4E5754",
        "RAL7013": "#464531", "RAL7015": "#434750", "RAL7016": "#293133",
        "RAL7021": "#23282B", "RAL7022": "#332F2C", "RAL7023": "#686C5E",
        "RAL7024": "#474A51", "RAL7026": "#2F353B", "RAL7030": "#8B8C7A",
        "RAL7031": "#474B4E", "RAL7032": "#B8B799", "RAL7033": "#7D8471",
        "RAL7034": "#8F8B66", "RAL7035": "#C5C7C4", "RAL7036": "#7F7679",
        "RAL7037": "#7D7F7D", "RAL7038": "#B5B8B1", "RAL7039": "#6C6960",
        "RAL7040": "#9DA1AA", "RAL7042": "#8D948D", "RAL7043": "#4E5452",
        "RAL7044": "#CAC4B0", "RAL7045": "#909090", "RAL7046": "#82898F",
        "RAL7047": "#D0D0D0", "RAL7048": "#898176", "RAL8000": "#826C34",
        "RAL8001": "#955F20", "RAL8002": "#6C3B2A", "RAL8003": "#734222",
        "RAL8004": "#8E402A", "RAL8007": "#59351F", "RAL8008": "#6F4F28",
        "RAL8011": "#5B3A29", "RAL8012": "#592321", "RAL8014": "#382C1E",
        "RAL8015": "#633A34", "RAL8016": "#4C2F27", "RAL8017": "#45322E",
        "RAL8019": "#403A3A", "RAL8022": "#212121", "RAL8023": "#A65E2E",
        "RAL8024": "#79553D", "RAL8025": "#755C48", "RAL8028": "#4E3B31",
        "RAL8029": "#763C28", "RAL9001": "#FDF4E3", "RAL9002": "#E7EBDA",
        "RAL9003": "#F4F4F4", "RAL9004": "#282828", "RAL9005": "#0A0A0A",
        "RAL9006": "#A5A5A5", "RAL9007": "#8F8F8F", "RAL9010": "#FFFFFF",
        "RAL9011": "#1C1C1C", "RAL9016": "#F6F6F6", "RAL9017": "#1E1E1E",
        "RAL9018": "#D7D7D7", "RAL9022": "#9C9C9C", "RAL9023": "#828282",
    };

    const getHex = (ral) => rals["RAL" + ral];

    const hex = getHex(value);
    console.log("ÃƒÂ°Ã…Â¸Ã…Â¡Ã¢â€šÂ¬ ~ UpdateRALInput ~ hex:", hex);

    if (hex != undefined && hex != null && hex != '') {
        jQuery('#RALcode_input').removeClass('error');
        jQuery('#RALcode_input_error').removeClass('error');

        SharedParameterList[8].value = value + '';

        setMaterialColor('legs', hex);
        WriteURLParameters();
    } else {
        console.log("ÃƒÂ°Ã…Â¸Ã…Â¡Ã¢â€šÂ¬ ~ ERROR ~ hex for:", value);
        jQuery('#RALcode_input').val('0');
        jQuery('#RALcode_input').addClass('error');
        jQuery('#RALcode_input_error').addClass('error');
    }
}

function setMaterialColor(materialName, color) {
    const materialObject = GetMaterialFromScene(materialName);
    if (materialObject == null) { return; }
    materialObject.color.set(color);
    materialObject.needsUpdate = true;
}

function GetMaterialFromScene(name) {
    var material = null;
    scene.traverse((o) => {
        if (o.material) {
            if (name == o.material.name) {
                material = o.material;
            }
        }
    });

    return material;
}

//#endregion

// * **************************************************************

function setActionForOptions() {
    jQuery(document).on('click', '.ar_filter .option', function () {
        writeUrlParams();
    });
}

// * **************************************************************

//#region Write/Read URL params

function readUrlParams(callback) {
    const hash = window.location.hash;

    if (!hash.startsWith(`#${parametersKey}=`)) {
        console.warn('No valid config found in hash');
        paramsLoaded = true;
        EmptyURLParams();
        // return;
    }

    const encodedParams = hash.substring(8);
    const decodedParams = encodedParams.SDecode();

    const splitValue = '-';
    const paramArray = decodedParams.split(splitValue);

    if (paramArray.length == 0) {
        paramsLoaded = true;
        EmptyURLParams();
        if (callback) callback();
        return;
    }

    // qrScaned = parseInt(paramArray[21]); //! TODO ? later
    console.log(paramArray);

    jQuery(document).ready(() => {
        applyUrlParams(paramArray);
    });

    setIsLoaderActive(false);

    paramsLoaded = true;
    if (callback) callback();
}

function applyUrlParams(classNames) {
    classNames.forEach(className => {
        if (className.includes("options")) {
            className = className.replace("options", "option");
        }

        if (className.includes("_")) {
            const lastUnderscoreIndex = className.lastIndexOf("_");
            className =
                className.slice(0, lastUnderscoreIndex) + "-" + className.slice(lastUnderscoreIndex + 1);
        }

        const element = jQuery('.ar_filter').find(`.${className}`);

        if (element.length) {
            if (!element.hasClass('active')) {
                element[0].click();
            }
        } else {
            console.warn(`There is no element with class "${className}".`);
        }
    });

    blockURLWriter = false;
}

function writeUrlParams() {
    if (!paramsLoaded) { return; }
    if (blockURLWriter) { return; }

    // qrScaned = 0; //! TODO ? later

    if (!delayForWriteURL) {
        delayForWriteURL = true;
        promiseDelay(100, function () {
            history.pushState(null, 'marevo', getUrlWithParameters());
            delayForWriteURL = false;
        });
    }
}

function getUrlWithParameters(updateURL = null, withoutKey = false) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const entries = urlParams.entries();

    var url = location.protocol + '//' + location.host + location.pathname + '#';

    if (updateURL != null) {
        url = updateURL + '#';
    }

    var configEmpty = true;

    for (const entry of entries) {
        if (entry[0] == parametersKey) {
            url += parametersKey + '=' + getParametersString() + '&';
            configEmpty = false;
        } else {
            url += entry[0] + '=' + entry[1] + '&';
        }
    }

    if (configEmpty) {
        url += parametersKey + '=' + getParametersString().SEncode();
    }

    if (withoutKey) {
        url = url.replace('#' + parametersKey + '=', '');
    }

    if (url.endsWith('&')) {
        url = url.substring(0, url.length - 1);
    }

    return url;
}

function getParametersString() {
    const splitValue = '-';
    let parametersValue = '';
    let idsArray = [];

    jQuery('.ar_filter_group').each(function () {
        let $resultBlock = jQuery(this).find('.ar_filter_options_result');

        $resultBlock.find('.ar_filter_options_result_name').each(function () {
            let resultNameText = jQuery(this).text().trim();

            let $componentTitle = jQuery(this).closest('.ar_filter_group').find('.ar_filter_options .component_title').filter(function () {
                return jQuery(this).text().trim() === resultNameText;
            });

            if ($componentTitle.length) {
                let componentId = $componentTitle.siblings('.component_options').attr('id');
                if (componentId) {
                    idsArray.push(componentId);
                }
            }
        });
    });

    idsArray.forEach(id => { parametersValue += id + splitValue });
    // parametersValue += qrScaned; //! TODO ?

    if (parametersValue.endsWith(splitValue)) {
        parametersValue = parametersValue.substring(0, parametersValue.length - 1);
    }

    return parametersValue;
}

//#endregion

// * **************************************************************

function smoothCameraTransition(
    targetCameraPosition,
    duration = 750,
    targetControlX = 0,
    targetControlY = 0,
    targetControlZ = 0,
    targetControlMinDist = 0,
    targetCameraFOV = 70,
    maxPolarAngle = Math.PI / 1.77,
    callback = () => { },
    callback_env = () => { },
) {
    const correctedTargetPosition = new THREE.Vector3(0, 0, 0);
    const delta = 0;
    const deltaControlsX = targetControlX - controls.target.x;
    const deltaControlsY = targetControlY - controls.target.y;
    const deltaControlsZ = targetControlZ - controls.target.z;
    const deltaControlMinDist = targetControlMinDist - controls.minDistance;
    const deltaCameraFOV = targetCameraFOV - camera.fov;

    correctedTargetPosition.x = targetCameraPosition.x + delta;
    correctedTargetPosition.y = targetCameraPosition.y;
    correctedTargetPosition.z = targetCameraPosition.z - delta;

    const startPosition = camera.position.clone();
    const startControlX = controls.target.x;
    const startControlY = controls.target.y;
    const startControlZ = controls.target.z;
    const startControlMinDist = controls.minDistance;
    const startCameraFOV = camera.fov;
    const startMaxPolarAngle = controls.maxPolarAngle;
    const startMaxDistance = controls.maxDistance;
    const startMinDistance = controls.minDistance;

    const startTime = performance.now();

    function animate() {
        const currentTime = performance.now() - startTime;
        const progress = Math.min(currentTime / duration, 1);
        const t = 0.5 - 0.5 * Math.cos(Math.PI * progress);
        const currentPosition = new THREE.Vector3().lerpVectors(
            startPosition, correctedTargetPosition, t,
        );

        const currentControlX = startControlX + deltaControlsX * t;
        const currentControlY = startControlY + deltaControlsY * t;
        const currentControlZ = startControlZ + deltaControlsZ * t;
        const currentControlZoom = startControlMinDist + deltaControlMinDist * t;
        const currentCameraFOV = startCameraFOV + deltaCameraFOV * t;

        camera.position.copy(currentPosition);
        controls.target.x = currentControlX;
        controls.target.y = currentControlY;
        controls.target.z = currentControlZ;
        controls.minDistance = currentControlZoom;
        camera.fov = currentCameraFOV;
        camera.updateProjectionMatrix();

        controls.maxPolarAngle = maxPolarAngle;

        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            controls.minDistance = startMinDistance;
            controls.maxDistance = startMaxDistance;
            controls.maxPolarAngle = startMaxPolarAngle;

            callback();
            if (callback_env) callback_env();
        }
    }

    animate();
}

function listenerChangeOrbitCamera() {
    controls.addEventListener('end', () => {
        consoleLogPosition('camera', camera.position, 3);
    });
}

function consoleLogPosition(text = '', pos, num = 2) {
    let k = 1;

    for (let i = 0; i < num; i++) {
        k = k * 10;
    }

    const x = Math.round(pos.x * k) / k;
    const y = Math.round(pos.y * k) / k;
    const z = Math.round(pos.z * k) / k;

    console.log(':rocket: ' + text + ': [' + x + ', ' + y + ', ' + z + '],');
}

function listenerFocusOptions() {
    const allOptions = document.getElementsByClassName('ar_filter_options');
    console.log(allOptions)

    //Ignored init WP click;
    let initialized = false;

    setTimeout(() => {
        initialized = true;
    }, 300);

    function areArraysEqual(arr1, arr2) {
        if (arr1.length !== arr2.length) return false;
        return JSON.stringify(arr1) === JSON.stringify(arr2);
    }

    for (const options of allOptions) {
        for (const option of options.children) {
            let customIdClass = Array.from(option.classList).find(cls => cls.startsWith('custom_id-'));

            if (customIdClass) {
                customIdClass = customIdClass.replace('custom_id-', '');

                const coordinate = customIdClass.split('/');

                option.addEventListener('click', (event) => {
                    const clickedElement = event.currentTarget;

                    if (!initialized) {
                        console.log('Click ignored during initialization.');
                        return;
                    }

                    const isActive = clickedElement.classList.contains('active');
                    const parsetCurrentCoordinate = [parseFloat(camera.position.x.toFixed(3)), parseFloat(camera.position.y.toFixed(3)), parseFloat(camera.position.z.toFixed(3))];

                    const isEqual = areArraysEqual([+coordinate[0], +coordinate[1], +coordinate[2]], parsetCurrentCoordinate);

                    if (coordinate.length === 3 && !isEqual) {
                        let x = +coordinate[0];
                        let y = +coordinate[1];
                        let z = +coordinate[2];

                        targetCameraPosition = new THREE.Vector3(x, y, z);

                        if (!isActive) {
                            smoothCameraTransition(targetCameraPosition, 1000);
                        }
                    }
                });
            } else {
                console.log('Option without custom_id_${mesh}');
            }
        }
    }
}