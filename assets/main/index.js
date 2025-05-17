System.register("chunks:///_virtual/main",["./SceneManager.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/SceneManager.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(n){var t,e,r,o,i,c,a,u,l;return{setters:[function(n){t=n.applyDecoratedDescriptor,e=n.inheritsLoose,r=n.initializerDefineProperty,o=n.assertThisInitialized},function(n){i=n.cclegacy,c=n._decorator,a=n.Button,u=n.director,l=n.Component}],execute:function(){var p,s,b,d,f,y,_,g,h,v,S;i._RF.push({},"bdc28Lk7e5F7L0KR+aAjQM8","SceneManager",void 0);var m=c.ccclass,z=c.property;function I(){return z({type:a})}n("SceneManager",(p=m("SceneManager"),s=I(),b=I(),d=I(),f=I(),p((g=t((_=function(n){function t(){for(var t,e=arguments.length,i=new Array(e),c=0;c<e;c++)i[c]=arguments[c];return t=n.call.apply(n,[this].concat(i))||this,r(t,"btn_Introduction",g,o(t)),r(t,"btn_Production",h,o(t)),r(t,"btn_Honor",v,o(t)),r(t,"btn_Connect",S,o(t)),t}e(t,n);var i=t.prototype;return i.onLoad=function(){u.addPersistRootNode(this.node)},i.start=function(){this.btn_Introduction.node.on(a.EventType.CLICK,(function(){u.loadScene("Scene_Introduction")}))},i.update=function(n){},t}(l)).prototype,"btn_Introduction",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),h=t(_.prototype,"btn_Production",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=t(_.prototype,"btn_Honor",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),S=t(_.prototype,"btn_Connect",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=_))||y));i._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});