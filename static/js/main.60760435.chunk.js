(this["webpackJsonpwidget-page"]=this["webpackJsonpwidget-page"]||[]).push([[0],{16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(5),r=a.n(c),o=a(1),i=a(2),s=a.n(i),m=Object(n.forwardRef)((function(e,t){var a=e.children,l=e.disablePortal,c=e.container,i=Object(n.useState)(null),s=Object(o.a)(i,2),m=s[0],d=s[1];return Object(n.useEffect)((function(){l||d(function(e){return e="function"===typeof e?e():e,r.a.findDOMNode(e)}(c)||document.body)}),[c,l]),m?r.a.createPortal(a,m):m}));m.proptypes={children:s.a.node,container:s.a.oneOfType([s.a.instanceOf(l.a.Component),s.a.func]),disablePortal:s.a.bool};var d=m,u=a(6),g=n.forwardRef((function(e,t){var a=e.open,l=Object(u.a)(e,["open"]);return a?n.createElement("div",Object.assign({className:"modal-backdrop","aria-hidden":!0,ref:t},l)):null})),f=(a(16),Object(n.forwardRef)((function(e,t){var a=e.children,n=e.open,c=e.onClose;return n?l.a.createElement(d,null,l.a.createElement("div",{className:"modal-backspace",ref:t},l.a.createElement(g,{open:n,onClick:function(e){e.target===e.currentTarget&&c&&c(e,"backdropClick")}}),a)):null}))),b=a(4),v=a(7),E=a(3),p=a.n(E),N=function(e){var t=e.children,a=e.value,n=e.index,c=e.className,r=Object(u.a)(e,["children","value","index","className"]),o=p()("step-panel",c);return l.a.createElement("div",Object.assign({className:o,hidden:a!==n,"aria-labelledby":"step-".concat(n)},r),a===n&&t)},h={english:"English",germany:"Germany",Bangla:"Bangla",Arabic:"Arabic"},w=function(e){var t=e.onChange,a=e.widget.language,n=e.error,c=p()("form-control",{"has-error":n.language});return l.a.createElement("div",{className:"widget-step step-1"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"selectLanguage"},"Select Language"),l.a.createElement("select",{"data-testid":"language-select",name:"language",className:c,value:a,onChange:function(e){t(e.target.value,e)}},l.a.createElement("option",{value:"none","data-testid":"language-option-0"},"Select Language"),Object.keys(h).map((function(e,t){return l.a.createElement("option",{key:e,value:e,"data-testid":"language-option-".concat(t+1)},h[e])}))),n.language&&l.a.createElement("p",{className:"error-message"},n.language)))},O=function(e){var t=e.onChange,a=e.widget.name,n=e.error,c=p()("form-control",{"has-error":n.language});return l.a.createElement("div",{className:"widget-step step-2"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"selectName"},"Name"),l.a.createElement("input",{onChange:function(e){t(e.target.value,e)},type:"text",name:"name",id:"selectName",value:a,placeholder:"Type widget name",className:c}),n.name&&l.a.createElement("p",{className:"error-message"},n.name)))};N.propTypes={onClose:s.a.func,addWidget:s.a.func};var j=function(e){var t=e.onClose,a=e.addWidget,c=Object(n.useState)({}),r=Object(o.a)(c,2),i=r[0],s=r[1],m=Object(n.useState)(1),d=Object(o.a)(m,2),u=d[0],g=d[1],f=Object(n.useState)({name:"",language:"none"}),E=Object(o.a)(f,2),p=E[0],h=E[1],j=function(e,t){var a=t.target.name;i[a]&&(delete i[a],s(i)),h(Object(v.a)({},p,Object(b.a)({},a,e)))},k=function(e){return function(t){t.preventDefault(),1===e&&g(e),p.language&&"none"!==p.language?g(e):s(Object(v.a)({},i,Object(b.a)({},"language","Language required for create widget!")))}};return l.a.createElement("div",{className:"modal"},l.a.createElement("div",{className:"modal-header d-flex"},l.a.createElement("h3",{className:"title"},"Step ",u),l.a.createElement("button",{className:"modal-close",onClick:function(e){e.preventDefault(),t&&t()}},"\u2715")),l.a.createElement("div",{className:"modal-body"},l.a.createElement(N,{value:u,index:1},l.a.createElement(w,{widget:p,error:i,onChange:j})),l.a.createElement(N,{value:u,index:2},l.a.createElement(O,{widget:p,error:i,onChange:j}))),l.a.createElement("div",{className:"modal-footer d-flex"},1===u&&l.a.createElement("button",{className:"btn btn-default",onClick:k(2)},"Next Step"),2===u&&l.a.createElement("button",{className:"btn btn-default",onClick:k(1)},"Back"),2===u&&l.a.createElement("button",{"data-testid":"add-btn",className:"btn btn-success",onClick:function(e){e.preventDefault(),p.name&&""!==p.name?a(p):s(Object(v.a)({},i,Object(b.a)({},"name","Name required for create widget!")))}},"Add")))},k=function(e){var t=e.onAction,a=e.message,n=void 0===a?"Are you sure?":a,c=function(e){return function(a){a.preventDefault(),t(e)}};return l.a.createElement("div",{className:"modal alert-modal"},l.a.createElement("div",{className:"modal-body"},l.a.createElement("h3",{className:"title"},n)),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{className:"btn btn-default",onClick:c("cancel")},"No"),l.a.createElement("button",{className:"btn btn-danger",onClick:c("confirm")},"Yes")))},y=function(e){var t=e.index,a=e.widget,n=e.onDelete;return l.a.createElement("div",{className:"widget-list d-flex","data-testid":"list-item"},l.a.createElement("div",{className:"widget-name flex-2"},a.name),l.a.createElement("div",{className:"widget-language flex-2"},a.language),l.a.createElement("div",{className:"widget-list-action flex-1"},l.a.createElement("button",{className:"btn btn-danger",onClick:function(e){return function(t){t.preventDefault(),n(e)}}(t)},"Delete")))},C=function(){return l.a.createElement("div",{className:"widget-list-empty"},l.a.createElement("h3",{className:"title"},"Widget list empty"),l.a.createElement("p",{className:"notes"},"Please add widget to click add widget button."))},x=function(e){var t=e.widgets,a=e.onDelete,n=function(e){a(e)};return l.a.createElement("div",{className:"widget-lists d-flex"},0===t.length&&l.a.createElement(C,null),t.length>0&&t.map((function(e,t){return l.a.createElement(y,{widget:e,index:t,key:t+1,onDelete:n})})))},S=function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"_widget_list",t=localStorage.getItem(e);return t?JSON.parse(t):null}()},D=function(e){!function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"_widget_list";localStorage.setItem(t,JSON.stringify(e))}(e)},W=(a(17),function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),i=Object(o.a)(r,2),s=i[0],m=i[1],d=Object(n.useState)(null),u=Object(o.a)(d,2),g=u[0],b=u[1];Object(n.useEffect)((function(){var e=S();e&&m(e)}),[]);return l.a.createElement("div",{className:"widget-container"},l.a.createElement("div",{className:"widget-header d-flex item-center"},l.a.createElement("div",{className:"widget-title"},l.a.createElement("h3",{className:"title"},"Widget List")),l.a.createElement("div",{className:"widget-action"},l.a.createElement("button",{className:"btn btn-default",onClick:function(e){e.preventDefault(),c(!0)}},"Add-Widget"))),l.a.createElement(x,{widgets:s,onDelete:function(e){b(e)}}),l.a.createElement(f,{open:a},l.a.createElement(j,{onClose:function(){c(!1)},addWidget:function(e){s.unshift(e),m(s),D(s),c(!1)}})),l.a.createElement(f,{open:null!==g},l.a.createElement(k,{onAction:function(e){"confirm"===e&&(s.splice(g,1),m(s),D(s)),b(null)}})))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.60760435.chunk.js.map