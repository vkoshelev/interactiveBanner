/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['vt323, sans-serif']='<script src=\"http://use.edgefonts.net/vt323:n4:all.js\"></script>';
    fonts['expletus-sans, sans-serif']='<script src=\"http://use.edgefonts.net/expletus-sans:n4,n7,n5,i7,i4,n6,i6,i5:all.js\"></script>';
    fonts['advent-pro, sans-serif']='<script src=\"http://use.edgefonts.net/advent-pro:n2,n5,n7,n4,n1,n6,n3:all.js\"></script>';

var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'background2',
                type: 'rect',
                rect: ['-37', '-62','auto','auto','auto', 'auto']
            },
            {
                id: 'laser1',
                type: 'rect',
                rect: ['40px', '79px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['0.82','0.82']]
            },
            {
                id: 'title',
                type: 'text',
                rect: ['-43px', '43px','692px','92px','auto', 'auto'],
                text: "Choose your weapon",
                align: "center",
                font: ['expletus-sans, sans-serif', 40, "rgba(160,222,18,1)", "normal", "none", ""],
                filter: [0, -6, 1, 1, 0, 0, 0, 0, "rgba(255,255,255,1.00)", 2, 2, 0]
            },
            {
                id: 'rapegun_group',
                type: 'rect',
                rect: ['55', '99','auto','auto','auto', 'auto']
            },
            {
                id: 'rapegun_laser2',
                type: 'rect',
                rect: ['-308px', '54px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['0.4','0.4']]
            },
            {
                id: 'rapegun_laser1',
                type: 'rect',
                rect: ['-304px', '72px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['0.4','0.4']]
            },
            {
                id: 'sphere',
                type: 'rect',
                rect: ['34px', '11px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['0.18013','0.32884']]
            },
            {
                id: 'tesla_group',
                type: 'rect',
                rect: ['235px', '89','auto','auto','auto', 'auto']
            },
            {
                id: 'photon_group',
                type: 'rect',
                rect: ['430', '123','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'rapegun_group',
                symbolName: 'rapegun_group',
                autoPlay: {

                }
            },
            {
                id: 'rapegun_laser2',
                symbolName: 'laser2',
                autoPlay: {

                }
            },
            {
                id: 'photon_group',
                symbolName: 'photon_group',
                autoPlay: {

                }
            },
            {
                id: 'tesla_group',
                symbolName: 'tesla_group',
                autoPlay: {

                }
            },
            {
                id: 'rapegun_laser1',
                symbolName: 'laser2',
                autoPlay: {

                }
            },
            {
                id: 'sphere',
                symbolName: 'sphere',
                autoPlay: {

                }
            },
            {
                id: 'background2',
                symbolName: 'background',
                autoPlay: {

                }
            },
            {
                id: 'laser1',
                symbolName: 'laser1',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_laser1}": [
                ["transform", "scaleX", '0.82'],
                ["style", "top", '79px'],
                ["style", "left", '40px'],
                ["transform", "scaleY", '0.82']
            ],
            "${_rapegun_laser1}": [
                ["transform", "scaleX", '0.4'],
                ["style", "left", '-304px'],
                ["transform", "scaleY", '0.4'],
                ["style", "top", '72px']
            ],
            "${_background2}": [
                ["style", "cursor", 'auto']
            ],
            "${_rapegun_laser2}": [
                ["style", "top", '54px'],
                ["transform", "scaleX", '0.4'],
                ["transform", "scaleY", '0.4'],
                ["style", "left", '-308px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '600px'],
                ["style", "height", '300px'],
                ["style", "overflow", 'hidden']
            ],
            "${_title}": [
                ["subproperty", "filter.drop-shadow.color", 'rgba(255,255,255,1.00)'],
                ["style", "letter-spacing", '5px'],
                ["color", "color", 'rgba(160,222,18,1.00)'],
                ["subproperty", "filter.drop-shadow.offsetV", '2px'],
                ["style", "left", '-46px'],
                ["style", "width", '692px'],
                ["style", "top", '43px'],
                ["subproperty", "filter.hue-rotate", '-6deg'],
                ["style", "text-align", 'center'],
                ["subproperty", "filter.drop-shadow.blur", '0px'],
                ["style", "height", '92px'],
                ["style", "font-family", 'expletus-sans, sans-serif'],
                ["subproperty", "filter.drop-shadow.offsetH", '2px'],
                ["style", "font-size", '40px']
            ],
            "${_sphere}": [
                ["transform", "scaleX", '0.18013'],
                ["transform", "scaleY", '0.32884'],
                ["style", "left", '34px'],
                ["style", "top", '11px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1055,
            autoPlay: true,
            labels: {
                "title": 0
            },
            timeline: [
                { id: "eid14", tween: [ "style", "${_title}", "letter-spacing", '0px', { fromValue: '5px'}], position: 0, duration: 500, easing: "easeOutSine" },
                { id: "eid15", tween: [ "style", "${_title}", "letter-spacing", '5px', { fromValue: '0px'}], position: 500, duration: 500, easing: "easeOutSine" },
                { id: "eid8", tween: [ "style", "${_title}", "font-size", '50px', { fromValue: '40px'}], position: 0, duration: 500, easing: "easeInSine" },
                { id: "eid12", tween: [ "style", "${_title}", "font-size", '40px', { fromValue: '50px'}], position: 500, duration: 500, easing: "easeOutSine" },
                { id: "eid10", tween: [ "style", "${_title}", "left", '-46px', { fromValue: '-46px'}], position: 0, duration: 0, easing: "easeInOutBounce" },
                { id: "eid129", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_sphere}', [] ], ""], position: 0 },
                { id: "eid174", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_rapegun_laser1}', [] ], ""], position: 0 },
                { id: "eid173", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_rapegun_laser2}', [0] ], ""], position: 0 },
                { id: "eid51", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_laser1}', [0] ], ""], position: 0 }            ]
        }
    }
},
"laser1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['-162px', '57px', '533px', '300px', 'auto', 'auto'],
                    id: 'blaster032Copy2',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/blaster032.png', '0px', '0px']
                },
                {
                    rect: ['-86px', '26px', '533px', '300px', 'auto', 'auto'],
                    id: 'blaster032Copy',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/blaster032.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '533px', '300px', 'auto', 'auto'],
                    id: 'blaster032',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/blaster032.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_blaster032}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '300px'],
                ["style", "width", '533px']
            ],
            "${_blaster032Copy2}": [
                ["style", "top", '57px'],
                ["style", "opacity", '1'],
                ["style", "left", '-162px'],
                ["style", "display", 'none']
            ],
            "${_blaster032Copy}": [
                ["style", "top", '26px'],
                ["style", "opacity", '1'],
                ["style", "left", '-86px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 154,
            autoPlay: true,
            timeline: [
                { id: "eid271", tween: [ "style", "${_blaster032}", "display", 'block', { fromValue: 'none'}], position: 21, duration: 0 },
                { id: "eid272", tween: [ "style", "${_blaster032}", "display", 'none', { fromValue: 'block'}], position: 52, duration: 0 },
                { id: "eid292", tween: [ "style", "${_blaster032}", "display", 'none', { fromValue: 'none'}], position: 154, duration: 0 },
                { id: "eid290", tween: [ "style", "${_blaster032Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid282", tween: [ "style", "${_blaster032Copy}", "display", 'none', { fromValue: 'none'}], position: 21, duration: 0 },
                { id: "eid283", tween: [ "style", "${_blaster032Copy}", "display", 'block', { fromValue: 'none'}], position: 52, duration: 0 },
                { id: "eid284", tween: [ "style", "${_blaster032Copy}", "display", 'none', { fromValue: 'block'}], position: 90, duration: 0 },
                { id: "eid291", tween: [ "style", "${_blaster032Copy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid285", tween: [ "style", "${_blaster032Copy2}", "display", 'none', { fromValue: 'none'}], position: 21, duration: 0 },
                { id: "eid286", tween: [ "style", "${_blaster032Copy2}", "display", 'none', { fromValue: 'none'}], position: 52, duration: 0 },
                { id: "eid287", tween: [ "style", "${_blaster032Copy2}", "display", 'block', { fromValue: 'none'}], position: 90, duration: 0 },
                { id: "eid288", tween: [ "style", "${_blaster032Copy2}", "display", 'block', { fromValue: 'block'}], position: 134, duration: 0 },
                { id: "eid289", tween: [ "style", "${_blaster032Copy2}", "display", 'none', { fromValue: 'block'}], position: 154, duration: 0 }            ]
        }
    }
},
"sphere": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '533px', '300px', 'auto', 'auto'],
                    id: 'sphere2006',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/sphere2006.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '533px', '300px', 'auto', 'auto'],
                    id: 'sphere2005',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/sphere2005.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '533px', '300px', 'auto', 'auto'],
                    id: 'sphere2004',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/sphere2004.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '533px', '300px', 'auto', 'auto'],
                    id: 'sphere2003',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/sphere2003.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '533px', '300px', 'auto', 'auto'],
                    id: 'sphere2002',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/sphere2002.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '533px', '300px', 'auto', 'auto'],
                    id: 'sphere2001',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/sphere2001.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_sphere2006}": [
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_sphere2002}": [
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_sphere2003}": [
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_sphere2005}": [
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_sphere2004}": [
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_sphere2001}": [
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '300px'],
                ["style", "width", '533px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1055,
            autoPlay: true,
            timeline: [
                { id: "eid85", tween: [ "style", "${_sphere2003}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid56", tween: [ "style", "${_sphere2003}", "display", 'none', { fromValue: 'none'}], position: 190, duration: 0 },
                { id: "eid66", tween: [ "style", "${_sphere2003}", "display", 'block', { fromValue: 'none'}], position: 281, duration: 0 },
                { id: "eid69", tween: [ "style", "${_sphere2003}", "display", 'none', { fromValue: 'block'}], position: 337, duration: 0 },
                { id: "eid247", tween: [ "style", "${_sphere2003}", "display", 'block', { fromValue: 'none'}], position: 719, duration: 0 },
                { id: "eid249", tween: [ "style", "${_sphere2003}", "display", 'none', { fromValue: 'block'}], position: 788, duration: 0 },
                { id: "eid95", tween: [ "style", "${_sphere2003}", "display", 'block', { fromValue: 'none'}], position: 949, duration: 0 },
                { id: "eid114", tween: [ "style", "${_sphere2002}", "opacity", '0', { fromValue: '1'}], position: 949, duration: 106 },
                { id: "eid84", tween: [ "style", "${_sphere2002}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid55", tween: [ "style", "${_sphere2002}", "display", 'none', { fromValue: 'none'}], position: 190, duration: 0 },
                { id: "eid65", tween: [ "style", "${_sphere2002}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid67", tween: [ "style", "${_sphere2002}", "display", 'none', { fromValue: 'block'}], position: 281, duration: 0 },
                { id: "eid246", tween: [ "style", "${_sphere2002}", "display", 'block', { fromValue: 'none'}], position: 644, duration: 0 },
                { id: "eid248", tween: [ "style", "${_sphere2002}", "display", 'none', { fromValue: 'block'}], position: 719, duration: 0 },
                { id: "eid94", tween: [ "style", "${_sphere2002}", "display", 'block', { fromValue: 'none'}], position: 949, duration: 0 },
                { id: "eid86", tween: [ "style", "${_sphere2004}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid57", tween: [ "style", "${_sphere2004}", "display", 'none', { fromValue: 'none'}], position: 190, duration: 0 },
                { id: "eid68", tween: [ "style", "${_sphere2004}", "display", 'block', { fromValue: 'none'}], position: 337, duration: 0 },
                { id: "eid71", tween: [ "style", "${_sphere2004}", "display", 'none', { fromValue: 'block'}], position: 408, duration: 0 },
                { id: "eid250", tween: [ "style", "${_sphere2004}", "display", 'block', { fromValue: 'none'}], position: 788, duration: 0 },
                { id: "eid251", tween: [ "style", "${_sphere2004}", "display", 'none', { fromValue: 'block'}], position: 852, duration: 0 },
                { id: "eid96", tween: [ "style", "${_sphere2004}", "display", 'block', { fromValue: 'none'}], position: 949, duration: 0 },
                { id: "eid115", tween: [ "style", "${_sphere2005}", "opacity", '0', { fromValue: '1'}], position: 949, duration: 106 },
                { id: "eid88", tween: [ "style", "${_sphere2006}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid59", tween: [ "style", "${_sphere2006}", "display", 'none', { fromValue: 'none'}], position: 190, duration: 0 },
                { id: "eid72", tween: [ "style", "${_sphere2006}", "display", 'block', { fromValue: 'none'}], position: 482, duration: 0 },
                { id: "eid75", tween: [ "style", "${_sphere2006}", "display", 'none', { fromValue: 'block'}], position: 568, duration: 0 },
                { id: "eid98", tween: [ "style", "${_sphere2006}", "display", 'block', { fromValue: 'none'}], position: 949, duration: 0 },
                { id: "eid87", tween: [ "style", "${_sphere2005}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid58", tween: [ "style", "${_sphere2005}", "display", 'none', { fromValue: 'none'}], position: 190, duration: 0 },
                { id: "eid70", tween: [ "style", "${_sphere2005}", "display", 'block', { fromValue: 'none'}], position: 408, duration: 0 },
                { id: "eid73", tween: [ "style", "${_sphere2005}", "display", 'none', { fromValue: 'block'}], position: 482, duration: 0 },
                { id: "eid252", tween: [ "style", "${_sphere2005}", "display", 'block', { fromValue: 'none'}], position: 852, duration: 0 },
                { id: "eid253", tween: [ "style", "${_sphere2005}", "display", 'none', { fromValue: 'block'}], position: 899, duration: 0 },
                { id: "eid97", tween: [ "style", "${_sphere2005}", "display", 'block', { fromValue: 'none'}], position: 949, duration: 0 },
                { id: "eid119", tween: [ "style", "${_sphere2001}", "opacity", '0', { fromValue: '1'}], position: 949, duration: 106 },
                { id: "eid116", tween: [ "style", "${_sphere2006}", "opacity", '0', { fromValue: '1'}], position: 949, duration: 106 },
                { id: "eid120", tween: [ "style", "${_sphere2004}", "opacity", '0', { fromValue: '1'}], position: 949, duration: 106 },
                { id: "eid121", tween: [ "style", "${_sphere2003}", "opacity", '0', { fromValue: '1'}], position: 949, duration: 106 },
                { id: "eid83", tween: [ "style", "${_sphere2001}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid54", tween: [ "style", "${_sphere2001}", "display", 'none', { fromValue: 'none'}], position: 190, duration: 0 },
                { id: "eid64", tween: [ "style", "${_sphere2001}", "display", 'none', { fromValue: 'none'}], position: 205, duration: 0 },
                { id: "eid244", tween: [ "style", "${_sphere2001}", "display", 'block', { fromValue: 'none'}], position: 568, duration: 0 },
                { id: "eid245", tween: [ "style", "${_sphere2001}", "display", 'none', { fromValue: 'block'}], position: 644, duration: 0 },
                { id: "eid93", tween: [ "style", "${_sphere2001}", "display", 'block', { fromValue: 'none'}], position: 949, duration: 0 }            ]
        }
    }
},
"laser2": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['-51px', '32px', '533px', '300px', 'auto', 'auto'],
                    transform: [[], ['-2']],
                    id: 'blaster2',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/blaster022.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '533px', '300px', 'auto', 'auto'],
                    id: 'blaster1',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/blaster012.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_blaster1}": [
                ["style", "display", 'none'],
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_blaster2}": [
                ["style", "display", 'none'],
                ["style", "top", '32px'],
                ["style", "left", '-51px'],
                ["transform", "rotateZ", '-2deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '300px'],
                ["style", "width", '533px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 569,
            autoPlay: true,
            timeline: [
                { id: "eid144", tween: [ "style", "${_blaster2}", "display", 'none', { fromValue: 'none'}], position: 39, duration: 0 },
                { id: "eid150", tween: [ "style", "${_blaster2}", "display", 'block', { fromValue: 'none'}], position: 135, duration: 0 },
                { id: "eid152", tween: [ "style", "${_blaster2}", "display", 'none', { fromValue: 'block'}], position: 172, duration: 0 },
                { id: "eid312", tween: [ "style", "${_blaster2}", "display", 'none', { fromValue: 'none'}], position: 237, duration: 0 },
                { id: "eid313", tween: [ "style", "${_blaster2}", "display", 'block', { fromValue: 'none'}], position: 333, duration: 0 },
                { id: "eid314", tween: [ "style", "${_blaster2}", "display", 'none', { fromValue: 'block'}], position: 370, duration: 0 },
                { id: "eid321", tween: [ "style", "${_blaster2}", "display", 'none', { fromValue: 'none'}], position: 436, duration: 0 },
                { id: "eid322", tween: [ "style", "${_blaster2}", "display", 'block', { fromValue: 'none'}], position: 532, duration: 0 },
                { id: "eid323", tween: [ "style", "${_blaster2}", "display", 'none', { fromValue: 'block'}], position: 569, duration: 0 },
                { id: "eid143", tween: [ "style", "${_blaster1}", "display", 'none', { fromValue: 'none'}], position: 39, duration: 0 },
                { id: "eid148", tween: [ "style", "${_blaster1}", "display", 'block', { fromValue: 'none'}], position: 101, duration: 0 },
                { id: "eid149", tween: [ "style", "${_blaster1}", "display", 'none', { fromValue: 'block'}], position: 135, duration: 0 },
                { id: "eid315", tween: [ "style", "${_blaster1}", "display", 'none', { fromValue: 'none'}], position: 237, duration: 0 },
                { id: "eid316", tween: [ "style", "${_blaster1}", "display", 'block', { fromValue: 'none'}], position: 299, duration: 0 },
                { id: "eid317", tween: [ "style", "${_blaster1}", "display", 'none', { fromValue: 'block'}], position: 333, duration: 0 },
                { id: "eid318", tween: [ "style", "${_blaster1}", "display", 'none', { fromValue: 'none'}], position: 436, duration: 0 },
                { id: "eid319", tween: [ "style", "${_blaster1}", "display", 'block', { fromValue: 'none'}], position: 498, duration: 0 },
                { id: "eid320", tween: [ "style", "${_blaster1}", "display", 'none', { fromValue: 'block'}], position: 532, duration: 0 }            ]
        }
    }
},
"background": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'background',
                    type: 'image',
                    rect: ['0px', '0px', '686px', '424px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/imgpsh_fullsize.jpg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_background}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '424px'],
                ["style", "width", '686px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"rapegun_group": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'rapegun',
                    type: 'image',
                    rect: ['0px', '21px', '120px', '71px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/PlasmaTier2.png', '0px', '0px']
                },
                {
                    rect: ['19px', '130px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['advent-pro, sans-serif', 24, 'rgba(255,255,255,1.00)', 'normal', 'none', ''],
                    id: 'rapegun_header',
                    text: 'Rapegun',
                    display: 'none',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_rapegun}": [
                ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,0)'],
                ["style", "left", '0px'],
                ["style", "width", '120px'],
                ["style", "top", '21px'],
                ["subproperty", "filter.drop-shadow.blur", '0px'],
                ["style", "height", '71px'],
                ["subproperty", "filter.drop-shadow.offsetV", '0px'],
                ["subproperty", "filter.drop-shadow.offsetH", '0px'],
                ["subproperty", "filter.invert", '0']
            ],
            "${_rapegun_header}": [
                ["style", "top", '130px'],
                ["transform", "scaleY", '0.2'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["transform", "scaleX", '0.2'],
                ["style", "font-family", 'advent-pro, sans-serif'],
                ["style", "left", '19px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '159px'],
                ["style", "width", '120px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 750,
            autoPlay: true,
            timeline: [
                { id: "eid197", tween: [ "subproperty", "${_rapegun}", "filter.drop-shadow.color", 'rgba(244,244,244,1.00)', { fromValue: 'rgba(0,0,0,0)'}], position: 14, duration: 736, easing: "easeOutElastic" },
                { id: "eid199", tween: [ "subproperty", "${_rapegun}", "filter.drop-shadow.offsetV", '1px', { fromValue: '0px'}], position: 14, duration: 736, easing: "easeOutElastic" },
                { id: "eid207", tween: [ "style", "${_rapegun_header}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutElastic" },
                { id: "eid208", tween: [ "style", "${_rapegun_header}", "display", 'block', { fromValue: 'none'}], position: 14, duration: 0, easing: "easeOutElastic" },
                { id: "eid206", tween: [ "transform", "${_rapegun_header}", "scaleY", '1', { fromValue: '0.2'}], position: 14, duration: 736, easing: "easeOutElastic" },
                { id: "eid200", tween: [ "subproperty", "${_rapegun}", "filter.drop-shadow.blur", '10px', { fromValue: '0px'}], position: 14, duration: 736, easing: "easeOutElastic" },
                { id: "eid196", tween: [ "subproperty", "${_rapegun}", "filter.invert", '0.05', { fromValue: '0'}], position: 14, duration: 736, easing: "easeOutElastic" },
                { id: "eid198", tween: [ "subproperty", "${_rapegun}", "filter.drop-shadow.offsetH", '1px', { fromValue: '0px'}], position: 14, duration: 736, easing: "easeOutElastic" },
                { id: "eid204", tween: [ "transform", "${_rapegun_header}", "scaleX", '1', { fromValue: '0.2'}], position: 14, duration: 736, easing: "easeOutElastic" }            ]
        }
    }
},
"tesla_group": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'teslaGun',
                    type: 'image',
                    rect: ['15px', '33px', '101px', '63px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/engine2.png', '0px', '0px']
                },
                {
                    rect: ['7px', '140px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['advent-pro, sans-serif', 24, 'rgba(255,255,255,1.00)', 'normal', 'none', ''],
                    id: 'tesla_header',
                    text: 'Tesla blaster',
                    display: 'none',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_tesla_header}": [
                ["style", "top", '140px'],
                ["transform", "scaleY", '0.2'],
                ["style", "display", 'none'],
                ["transform", "scaleX", '0.2'],
                ["style", "font-family", 'advent-pro, sans-serif'],
                ["style", "left", '7px'],
                ["color", "color", 'rgba(255,255,255,1.00)']
            ],
            "${_teslaGun}": [
                ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,0)'],
                ["style", "left", '15px'],
                ["style", "width", '101px'],
                ["style", "top", '33px'],
                ["style", "height", '63px'],
                ["subproperty", "filter.invert", '0'],
                ["subproperty", "filter.drop-shadow.offsetH", '0px'],
                ["subproperty", "filter.drop-shadow.offsetV", '0px'],
                ["subproperty", "filter.drop-shadow.blur", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '169px'],
                ["style", "width", '130px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 750,
            autoPlay: true,
            timeline: [
                { id: "eid218", tween: [ "subproperty", "${_teslaGun}", "filter.drop-shadow.blur", '10px', { fromValue: '0px'}], position: 14, duration: 736, easing: "easeOutElastic" },
                { id: "eid221", tween: [ "transform", "${_tesla_header}", "scaleY", '1', { fromValue: '0.2'}], position: 14, duration: 736, easing: "easeOutElastic" },
                { id: "eid216", tween: [ "subproperty", "${_teslaGun}", "filter.drop-shadow.offsetH", '1px', { fromValue: '0px'}], position: 14, duration: 736, easing: "easeOutElastic" },
                { id: "eid209", tween: [ "style", "${_tesla_header}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutElastic" },
                { id: "eid210", tween: [ "style", "${_tesla_header}", "display", 'block', { fromValue: 'none'}], position: 14, duration: 0, easing: "easeOutElastic" },
                { id: "eid220", tween: [ "style", "${_tesla_header}", "display", 'block', { fromValue: 'block'}], position: 750, duration: 0, easing: "easeOutElastic" },
                { id: "eid222", tween: [ "transform", "${_tesla_header}", "scaleX", '1', { fromValue: '0.2'}], position: 14, duration: 736, easing: "easeOutElastic" },
                { id: "eid217", tween: [ "subproperty", "${_teslaGun}", "filter.drop-shadow.offsetV", '1px', { fromValue: '0px'}], position: 14, duration: 736, easing: "easeOutElastic" },
                { id: "eid219", tween: [ "subproperty", "${_teslaGun}", "filter.drop-shadow.color", 'rgba(255,255,255,1.00)', { fromValue: 'rgba(0,0,0,0)'}], position: 14, duration: 736, easing: "easeOutElastic" },
                { id: "eid215", tween: [ "subproperty", "${_teslaGun}", "filter.invert", '0.03', { fromValue: '0'}], position: 14, duration: 736, easing: "easeOutElastic" }            ]
        }
    }
},
"photon_group": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'photon',
                    type: 'image',
                    rect: ['0px', '0px', '110px', '62px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/or3.png', '0px', '0px']
                },
                {
                    font: ['advent-pro, sans-serif', 24, 'rgba(255,255,255,1.00)', 'normal', 'none', ''],
                    type: 'text',
                    id: 'photon_header',
                    text: 'Photon',
                    display: 'none',
                    rect: ['22px', '106px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_photon_header}": [
                ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,0)'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "left", '22px'],
                ["subproperty", "filter.drop-shadow.offsetH", '0px'],
                ["style", "top", '106px'],
                ["transform", "scaleX", '0.2'],
                ["transform", "scaleY", '0.2'],
                ["subproperty", "filter.drop-shadow.offsetV", '0px'],
                ["subproperty", "filter.invert", '0'],
                ["style", "font-family", 'advent-pro, sans-serif'],
                ["style", "display", 'none'],
                ["subproperty", "filter.drop-shadow.blur", '0px']
            ],
            "${_photon}": [
                ["subproperty", "filter.drop-shadow.color", 'rgba(255,255,255,0.00)'],
                ["subproperty", "filter.drop-shadow.blur", '10px'],
                ["style", "left", '0px'],
                ["subproperty", "filter.invert", '0'],
                ["style", "top", '0px'],
                ["subproperty", "filter.drop-shadow.offsetV", '0px'],
                ["subproperty", "filter.drop-shadow.offsetH", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '135px'],
                ["style", "width", '110px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 750,
            autoPlay: true,
            timeline: [
                { id: "eid243", tween: [ "subproperty", "${_photon}", "filter.drop-shadow.color", 'rgba(255,255,255,1.00)', { fromValue: 'rgba(255,255,255,0.00)'}], position: 14, duration: 736, easing: "easeOutElastic" },
                { id: "eid227", tween: [ "transform", "${_photon_header}", "scaleX", '1', { fromValue: '0.2'}], position: 14, duration: 736, easing: "easeOutElastic" },
                { id: "eid228", tween: [ "transform", "${_photon_header}", "scaleY", '1', { fromValue: '0.2'}], position: 14, duration: 736, easing: "easeOutElastic" },
                { id: "eid240", tween: [ "subproperty", "${_photon}", "filter.invert", '0.05', { fromValue: '0'}], position: 14, duration: 736, easing: "easeOutElastic" },
                { id: "eid236", tween: [ "subproperty", "${_photon}", "filter.drop-shadow.blur", '10px', { fromValue: '10px'}], position: 750, duration: 0, easing: "easeOutElastic" },
                { id: "eid224", tween: [ "style", "${_photon_header}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutElastic" },
                { id: "eid223", tween: [ "style", "${_photon_header}", "display", 'block', { fromValue: 'none'}], position: 14, duration: 0, easing: "easeOutElastic" },
                { id: "eid229", tween: [ "style", "${_photon_header}", "display", 'block', { fromValue: 'block'}], position: 750, duration: 0, easing: "easeOutElastic" },
                { id: "eid241", tween: [ "subproperty", "${_photon}", "filter.drop-shadow.offsetH", '1px', { fromValue: '0px'}], position: 14, duration: 736, easing: "easeOutElastic" },
                { id: "eid242", tween: [ "subproperty", "${_photon}", "filter.drop-shadow.offsetV", '1px', { fromValue: '0px'}], position: 14, duration: 736, easing: "easeOutElastic" }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-176484570");
