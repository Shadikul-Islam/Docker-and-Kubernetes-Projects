/*! For license information please see module.js.LICENSE.txt */
define(["react","@grafana/ui","@grafana/data","@grafana/runtime","rxjs"],(function(e,t,r,n,a){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=15)}([function(t,r){t.exports=e},function(e,t,r){"use strict";r.d(t,"c",(function(){return a})),r.d(t,"a",(function(){return o})),r.d(t,"g",(function(){return i})),r.d(t,"b",(function(){return u})),r.d(t,"d",(function(){return s})),r.d(t,"f",(function(){return c})),r.d(t,"h",(function(){return l})),r.d(t,"e",(function(){return f}));var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)};function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var o=function(){return(o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function i(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}function u(e,t,r,n){return new(r||(r=Promise))((function(a,o){function i(e){try{s(n.next(e))}catch(e){o(e)}}function u(e){try{s(n.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,u)}s((n=n.apply(e,t||[])).next())}))}function s(e,t){var r,n,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],n=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}}Object.create;function c(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,a,o=r.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)i.push(n.value)}catch(e){a={error:e}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(a)throw a.error}}return i}function l(e,t,r){if(r||2===arguments.length)for(var n,a=0,o=t.length;a<o;a++)!n&&a in t||(n||(n=Array.prototype.slice.call(t,0,a)),n[a]=t[a]);return e.concat(n||Array.prototype.slice.call(t))}function f(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}Object.create},function(e,r){e.exports=t},,function(e,t){e.exports=r},function(e,t){e.exports=n},,function(e,t){e.exports=a},,,,,,,,function(e,t,r){"use strict";r.r(t);var n,a,o,i=r(4),u=r(1),s=r(0),c=r.n(s),l=r(7),f=r(5),d=r(2);!function(e){e.Data="Data",e.TotalKeys="TotalKeys"}(a||(a={})),function(e){e.Key="key",e.Type="type",e.Memory="memory"}(o||(o={}));var p=((n={})[o.Key]="Key",n[o.Type]="Type",n[o.Memory]="Memory",n),m=function(e){function t(t){var r,n,a=e.call(this,t)||this;a.formRef=Object(s.createRef)(),a.setRequestDataInterval=function(){void 0!==a.requestDataTimer&&a.clearRequestDataInterval(),a.setState((function(e){return{isUpdating:!0,dataFrame:null,redisKeys:[],progress:{total:e.progress.total,processed:0}}}));!function e(){a.updateData().then((function(){a.state.isUpdating&&(a.requestDataTimer=setTimeout(e,a.props.options.interval||1e3))}))}()},a.clearRequestDataInterval=function(){void 0!==a.requestDataTimer&&(a.setState({isUpdating:!1}),clearTimeout(a.requestDataTimer),delete a.requestDataTimer)},a.onChangeSort=function(e){a.setState({sortedFields:e})},a.onChangeSize=function(e){a.setState((function(t){return{queryConfig:Object(u.a)(Object(u.a)({},t.queryConfig),{size:parseInt(e.target.value||"0",10)})}}))},a.onChangeCount=function(e){a.setState((function(t){return{queryConfig:Object(u.a)(Object(u.a)({},t.queryConfig),{count:parseInt(e.target.value||"0",10)})}}))},a.onChangeMatchPattern=function(e){a.setState((function(t){return{queryConfig:Object(u.a)(Object(u.a)({},t.queryConfig),{matchPattern:e.target.value})}}))};var i=null===(n=null===(r=a.props.data)||void 0===r?void 0:r.request)||void 0===n?void 0:n.targets,c={size:10,count:100,matchPattern:"*"};if(i&&i[0]){var l=i[0],f=l.size,d=void 0===f?c.size:f,m=l.count,y=void 0===m?c.count:m,h=l.match,v=void 0===h?c.matchPattern:h;c.size=d,c.count=y,c.matchPattern=v}return a.state={sortedFields:[{displayName:p[o.Memory],desc:!0}],redisKeys:[],isUpdating:!1,cursor:"0",dataFrame:null,queryConfig:c,formHeight:0,progress:{total:0,processed:0}},a}return Object(u.c)(t,e),t.getRedisKeys=function(e){for(var t,r,n,a=(null===(t=e.fields.find((function(e){return e.name===o.Key})))||void 0===t?void 0:t.values.toArray())||[],i=(null===(r=e.fields.find((function(e){return e.name===o.Type})))||void 0===r?void 0:r.values.toArray())||[],u=(null===(n=e.fields.find((function(e){return e.name===o.Memory})))||void 0===n?void 0:n.values.toArray())||[],s=[],c=0;c<e.length;c++)s.push({key:a[c],type:i[c],memory:u[c]});return s},t.getSortedRedisKeys=function(e,t,r){var n=Object(u.h)(Object(u.h)([],Object(u.f)(e),!1),Object(u.f)(t),!1).reduce((function(e,t){var r,n=e[t.key],a=t.memory;return n&&(a=Math.max(t.memory,n.memory)),Object(u.a)(Object(u.a)({},e),((r={})[t.key]=Object(u.a)(Object(u.a)({},t),{memory:a}),r))}),{}),a=Object.values(n);return a.sort((function(e,t){return t.memory-e.memory})),a.slice(0,r)},t.getTableDataFrame=function(e){var t=[],r=[],n=[];e.forEach((function(e){t.push(e.key),r.push(e.type),n.push(e.memory)}));var a=[{name:o.Key,type:i.FieldType.string,values:t,config:{displayName:p[o.Key]}},{name:o.Type,type:i.FieldType.string,values:r,config:{displayName:p[o.Type]}},{name:o.Memory,type:i.FieldType.number,values:n,config:{unit:"decbytes",displayName:p[o.Memory]}}],s=Object(i.toDataFrame)({name:"TableDataFrame",fields:a});return s.fields=s.fields.map((function(e){return Object(u.a)(Object(u.a)({},e),{display:Object(i.getDisplayProcessor)({field:e,theme:f.config.theme2})})})),s},t.getCursorValue=function(e){if(!e)return"0";var t=e.fields.find((function(e){return"cursor"===e.name}));return t?t.values.toArray()[0]:"0"},t.getCount=function(e){if(!e)return 0;var t=e.fields.find((function(e){return"count"===e.name}));return t?t.values.toArray()[0]:0},t.prototype.componentDidMount=function(){this.formRef.current&&this.setState({formHeight:this.formRef.current.getBoundingClientRect().height}),this.updateTotalKeys()},t.prototype.componentDidUpdate=function(e,t){var r,n;if(e.options.interval!==this.props.options.interval&&this.clearRequestDataInterval(),e.width!==this.props.width&&this.formRef.current&&this.setState({formHeight:this.formRef.current.getBoundingClientRect().height}),"0"===this.state.cursor&&this.clearRequestDataInterval(),e.data!==this.props.data){this.clearRequestDataInterval();var a=null===(n=null===(r=this.props.data)||void 0===r?void 0:r.request)||void 0===n?void 0:n.targets,o=Object(u.a)({},this.state.queryConfig);if(a&&a[0]){var i=a[0],s=i.size,c=void 0===s?o.size:s,l=i.count,f=void 0===l?o.count:l,d=i.match,p=void 0===d?o.matchPattern:d;o.size=c,o.count=f,o.matchPattern=p}this.setState({queryConfig:o})}},t.prototype.componentWillUnmount=function(){this.clearRequestDataInterval()},t.prototype.makeQuery=function(e){var t;return void 0===e&&(e=a.Data),Object(u.b)(this,void 0,Promise,(function(){var r,n,o,i,s,c=this;return Object(u.d)(this,(function(d){switch(d.label){case 0:return r=null===(t=this.props.data.request)||void 0===t?void 0:t.targets,n="",r&&r.length&&r[0].datasource&&(n=r[0].datasource),n&&r?[4,Object(f.getDataSourceSrv)().get(n)]:[2,Promise.resolve(null)];case 1:return o=d.sent(),i=r,e===a.Data&&(i=r.map((function(e){return Object(u.a)(Object(u.a)({command:"tmscan",type:"command"},e),{count:c.state.queryConfig.count,size:c.state.queryConfig.size,match:c.state.queryConfig.matchPattern,cursor:c.state.cursor})}))),e===a.TotalKeys&&(i=r.map((function(e){return Object(u.a)(Object(u.a)({},e),{type:"cli",query:"dbsize"})}))),s=o.query(Object(u.a)(Object(u.a)({},this.props.data.request),{targets:i})),[2,Object(l.lastValueFrom)(s)]}}))}))},t.prototype.updateData=function(){return Object(u.b)(this,void 0,void 0,(function(){var e,r,n,a,o,i;return Object(u.d)(this,(function(s){switch(s.label){case 0:return[4,this.makeQuery()];case 1:return null===(e=s.sent())?[2,Promise.resolve()]:(r=e.data[0])?(n=t.getSortedRedisKeys(this.state.redisKeys,t.getRedisKeys(r),this.state.queryConfig.size),a=Object(u.a)({},this.state.progress),o=t.getCount(e.data[1]),i=a.processed+o,a.processed=Math.min(i,a.total),this.setState({dataFrame:t.getTableDataFrame(n),redisKeys:n,cursor:t.getCursorValue(e.data[1]),progress:a}),[2,Promise.resolve(r)]):[2,Promise.resolve()]}}))}))},t.prototype.updateTotalKeys=function(){return Object(u.b)(this,void 0,void 0,(function(){var e,t,r;return Object(u.d)(this,(function(n){switch(n.label){case 0:return[4,this.makeQuery(a.TotalKeys)];case 1:return(e=n.sent())&&e.data?(t=Object(u.f)(e.data[0].fields[0].values.toArray(),1),r=t[0],this.setState((function(e){return{progress:Object(u.a)(Object(u.a)({},e.progress),{total:r})}})),[2]):[2,Promise.resolve()]}}))}))},t.prototype.render=function(){var e=this.state,t=e.dataFrame,r=e.sortedFields,n=e.isUpdating,a=e.redisKeys,o=e.queryConfig,i=e.formHeight,u=e.progress;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"gf-form gf-form-inline",ref:this.formRef},c.a.createElement("div",{className:"gf-form gf-form-spacing"},c.a.createElement(d.InlineFormLabel,{width:5},"Top keys"),c.a.createElement(d.Input,{name:"size",value:o.size,type:"number",onChange:this.onChangeSize,width:8,disabled:n})),c.a.createElement("div",{className:"gf-form gf-form-spacing"},c.a.createElement(d.InlineFormLabel,{tooltip:"The amount of work that should be done at every call in order to retrieve elements from the collection.",width:5},"Count"),c.a.createElement(d.Input,{name:"count",value:o.count,type:"number",onChange:this.onChangeCount,width:10,disabled:n})),c.a.createElement("div",{className:"gf-form gf-form-spacing"},c.a.createElement(d.InlineFormLabel,{width:6},"Match pattern"),c.a.createElement(d.Input,{name:"matchPattern",value:o.matchPattern,onChange:this.onChangeMatchPattern,width:12,disabled:n})),c.a.createElement("div",{className:"gf-form gf-form-spacing"},c.a.createElement(d.Button,{onClick:n?this.clearRequestDataInterval:this.setRequestDataInterval},n?"Stop scanning ("+u.processed+"/"+u.total+")":"Start scanning"))),t&&0!==a.length?c.a.createElement(d.Table,{data:t,width:this.props.width,height:this.props.height-i,initialSortBy:r,onSortByChange:this.onChangeSort}):c.a.createElement("div",null,this.state.isUpdating?"No keys found.":"No keys found. Please start scanning."))},t}(s.PureComponent);r.d(t,"plugin",(function(){return y}));var y=new i.PanelPlugin(m).setPanelOptions((function(e){return e.addSliderInput({path:"interval",name:"Interval to run SCAN command, ms",settings:{min:100,max:3e4},defaultValue:1e3})}))}])}));
//# sourceMappingURL=module.js.map