(this["webpackJsonpcustom-search"]=this["webpackJsonpcustom-search"]||[]).push([[0],{231:function(e,n,t){},255:function(e,n,t){},256:function(e,n,t){"use strict";t.r(n);var c=t(1),a=t.n(c),r=t(63),i=t.n(r),l=(t(182),t(37)),s=t(18),j=t(55),o=t(42),d=t(270),u=(t(231),t(275)),h=t(3),b=function(e){var n=e.result,t=void 0===n?{}:n;return Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:t.link}),Object(h.jsx)("a",{href:t.link,rel:"noreferrer",target:"_blank",children:Object(h.jsx)("h3",{children:t.title})}),Object(h.jsx)("p",{children:t.snippet}),Object(h.jsx)("br",{})]})},O=function(e){var n=e.results,t=void 0===n?[]:n;return Object(h.jsxs)(u.a,{fluid:!0,children:[Object(h.jsx)(u.a.Content,{children:Object(h.jsx)(u.a.Header,{children:"Results"})}),Object(h.jsx)(u.a.Content,{children:t.map((function(e){return Object(h.jsx)(b,{result:e},e.link)}))})]})},x=t(144),f=t(257),m=t(68),v=t(280),p=t(269),C=t(271),S=t(166),g=t.n(S),y={key:"AIzaSyADVfee-NgDz8_ePI6dOTzySBhvQtrpVY0",cx:"9a352a89890a7adf4"},k=t(273),w=t(278),H=function(e){var n=e.title,t=e.onDeleteSeach,c=a.a.useState(!1),r=Object(s.a)(c,2),i=r[0],l=r[1];return Object(h.jsxs)(k.a,{onClose:function(){return l(!1)},onOpen:function(){return l(!0)},open:i,trigger:Object(h.jsx)(f.a,{disabled:"Unnamed"===n,children:"Delete"}),children:[Object(h.jsxs)(k.a.Header,{children:['Delete search "',n,'"']}),Object(h.jsx)(k.a.Content,{image:!0,children:Object(h.jsxs)(k.a.Description,{children:[Object(h.jsxs)(w.a,{children:['Do you want to delete search "',n,'"?']}),Object(h.jsx)("p",{children:"This action is not reversible."})]})}),Object(h.jsxs)(k.a.Actions,{children:[Object(h.jsx)(f.a,{onClick:function(){return l(!1)},children:"Cancel"}),Object(h.jsx)(f.a,{content:"Yes, delete it",labelPosition:"right",icon:"trash",onClick:function(){return o.a.firestore().collection("searches").doc(n).delete(),l(!1),void(t&&t())},negative:!0})]})]})},R=t(279),A=t(277),T=t(268),L=t(274),U=function(e){var n=e.onOpenSearch,t=Object(c.useState)(!1),a=Object(s.a)(t,2),r=a[0],i=a[1];return Object(h.jsxs)(k.a,{onClose:function(){return i(!1)},onOpen:function(){return i(!0)},open:r,trigger:Object(h.jsx)(f.a,{children:"Open"}),children:[Object(h.jsx)(k.a.Header,{children:"Select a Search"}),Object(h.jsx)(k.a.Content,{children:Object(h.jsxs)(R.a,{children:[Object(h.jsx)(A.a,{active:!1,children:Object(h.jsx)(T.a,{size:"medium",children:"Loading"})}),Object(h.jsxs)(L.a,{celled:!0,selectable:!0,children:[Object(h.jsx)(L.a.Header,{children:Object(h.jsxs)(L.a.Row,{children:[Object(h.jsx)(L.a.HeaderCell,{children:"Name"}),Object(h.jsx)(L.a.HeaderCell,{children:"Query"}),Object(h.jsx)(L.a.HeaderCell,{children:"Limited to URLs"}),Object(h.jsx)(L.a.HeaderCell,{children:"Included terms"}),Object(h.jsx)(L.a.HeaderCell,{children:"Excluded terms"})]})}),Object(h.jsx)(L.a.Body,{children:Object(h.jsx)(j.a,{path:"/searches/",children:function(e){return e.value?e.value.map((function(t,c){return Object(h.jsxs)(L.a.Row,{onClick:function(){n(Object(l.a)({name:e.ids[c]},e.value[c])),i(!1)},children:[Object(h.jsx)(L.a.Cell,{children:e.ids[c]}),Object(h.jsx)(L.a.Cell,{children:t.q}),Object(h.jsx)(L.a.Cell,{children:t.statesSearchArray.join(", ")}),Object(h.jsx)(L.a.Cell,{children:t.includeWord}),Object(h.jsx)(L.a.Cell,{children:t.excludeWord})]},e.ids[c])})):null}})})]})]})}),Object(h.jsx)(k.a.Actions,{children:Object(h.jsx)(f.a,{onClick:function(){return i(!1)},children:"Close"})})]})},I=function(e){var n=a.a.useState(!1),t=Object(s.a)(n,2),c=t[0],r=t[1];return Object(h.jsxs)(k.a,{onClose:function(){return r(!1)},onOpen:function(){return r(!0)},open:c,trigger:Object(h.jsx)(f.a,{disabled:"Unnamed"===e.name,children:"Save"}),children:[Object(h.jsxs)(k.a.Header,{children:['Save search "',e.name,'"']}),Object(h.jsx)(k.a.Content,{image:!0,children:Object(h.jsxs)(k.a.Description,{children:[Object(h.jsxs)(w.a,{children:['Do you want to save the changes made to this search "',e.name,'"?']}),Object(h.jsx)("p",{children:"This action is not reversible."})]})}),Object(h.jsxs)(k.a.Actions,{children:[Object(h.jsx)(f.a,{onClick:function(){return r(!1)},children:"Cancel"}),Object(h.jsx)(f.a,{onClick:function(){return r(!1),void(e.onSaveSearch&&e.onSaveSearch())},primary:!0,children:"Yes, save it"})]})]})},D=function(e){var n=e.title,t=e.onOverwriteSearch,c=e.onCancel,a=e.open;return Object(h.jsxs)(k.a,{onClose:function(){return c()},open:a,children:[Object(h.jsxs)(k.a.Header,{children:['Overwirte search "',n,'"']}),Object(h.jsx)(k.a.Content,{image:!0,children:Object(h.jsxs)(k.a.Description,{children:[Object(h.jsxs)(w.a,{children:["Do you want to overwrite the search ",n,"?"]}),Object(h.jsx)("p",{children:"This action is not reversible."})]})}),Object(h.jsxs)(k.a.Actions,{children:[Object(h.jsx)(f.a,{onClick:function(){return c()},children:"Cancel"}),Object(h.jsx)(f.a,{onClick:function(){return t()},primary:!0,children:"Yes, overwrite it"})]})]})},N=function(e){var n=Object(c.useState)(!1),t=Object(s.a)(n,2),a=t[0],r=t[1],i=Object(c.useState)(!1),d=Object(s.a)(i,2),u=d[0],b=d[1],O=Object(c.useState)(""),x=Object(s.a)(O,2),m=x[0],C=x[1],S=o.a.firestore(),g=function(){S.collection("searches").doc(m).set({q:e.query,statesSearchArray:e.selectedURLs,includeWord:e.includedTerms.map((function(e){return e.value})).join(" "),excludeWord:e.excludedTerms.map((function(e){return e.value})).join(" ")}).then((function(n){r(!1),e.onSaveSearch&&S.collection("searches").doc(m).get().then((function(n){return e.onSaveSearch(Object(l.a)({name:m},n.data()))})),C(""),b(!1)}))};return Object(h.jsxs)("div",{className:"d-inline",children:[Object(h.jsx)(D,{title:m,open:u,onCancel:function(){return b(!1)},onOverwriteSearch:function(){return g()}}),Object(h.jsxs)(k.a,{onClose:function(){return r(!1)},onOpen:function(){return r(!0)},open:a,trigger:Object(h.jsx)(f.a,{children:"Save As"}),children:[Object(h.jsx)(k.a.Header,{children:"Save a Search"}),Object(h.jsxs)(k.a.Content,{children:[Object(h.jsx)(v.a,{children:Object(h.jsxs)(v.a.Row,{children:[Object(h.jsx)(v.a.Column,{width:13,children:Object(h.jsx)(p.a,{fluid:!0,placeholder:"Search name",value:m,onChange:function(e,n){var t=n.value;return C(t)}})}),Object(h.jsx)(v.a.Column,{width:3,children:Object(h.jsx)(f.a,{fluid:!0,primary:!0,onClick:function(){""!==m&&"Unnamed"!==m&&S.collection("searches").doc(m).get().then((function(e){e.data()?b(!0):g()}))},children:"Save"})})]})}),Object(h.jsxs)(R.a,{children:[Object(h.jsx)(A.a,{active:!1,children:Object(h.jsx)(T.a,{size:"medium",children:"Loading"})}),Object(h.jsxs)(L.a,{celled:!0,selectable:!0,children:[Object(h.jsx)(L.a.Header,{children:Object(h.jsxs)(L.a.Row,{children:[Object(h.jsx)(L.a.HeaderCell,{children:"Name"}),Object(h.jsx)(L.a.HeaderCell,{children:"Query"}),Object(h.jsx)(L.a.HeaderCell,{children:"Limited to URLs"}),Object(h.jsx)(L.a.HeaderCell,{children:"Included terms"}),Object(h.jsx)(L.a.HeaderCell,{children:"Excluded terms"})]})}),Object(h.jsx)(L.a.Body,{children:Object(h.jsx)(j.a,{path:"/searches/",children:function(e){return e.value?e.value.map((function(n,t){return Object(h.jsxs)(L.a.Row,{children:[Object(h.jsx)(L.a.Cell,{children:e.ids[t]}),Object(h.jsx)(L.a.Cell,{children:n.q}),Object(h.jsx)(L.a.Cell,{children:n.statesSearchArray.join(", ")}),Object(h.jsx)(L.a.Cell,{children:n.includeWord}),Object(h.jsx)(L.a.Cell,{children:n.excludeWord})]})})):null}})})]})]})]}),Object(h.jsx)(k.a.Actions,{children:Object(h.jsx)(f.a,{onClick:function(){return r(!1)},children:"Close"})})]})]})},q=t(272),W=function(e){var n=e.item,t=e.onUpdate,a=void 0===t?function(){}:t,r=Object(c.useState)(!1),i=Object(s.a)(r,2),l=i[0],j=i[1],o=Object(c.useState)(n.name),d=Object(s.a)(o,2),u=d[0],b=d[1],O=Object(c.useState)(n.url),x=Object(s.a)(O,2),m=x[0],v=x[1];return Object(h.jsxs)(k.a,{onClose:function(){return j(!1)},onOpen:function(){return j(!0)},open:l,trigger:Object(h.jsx)(f.a,{icon:"pencil"}),children:[Object(h.jsxs)(k.a.Header,{children:["Edit URL ",Object(h.jsx)("i",{children:n.url})]}),Object(h.jsxs)(k.a.Content,{children:[Object(h.jsx)(q.a.Input,{fluid:!0,label:"Name",placeholder:"Name",value:u,onChange:function(e,n){var t=n.value;return b(t)}}),Object(h.jsx)("br",{}),Object(h.jsx)(q.a.Input,{fluid:!0,label:"URL",placeholder:"URL",value:m,onChange:function(e,n){var t=n.value;return v(t)}})]}),Object(h.jsxs)(k.a.Actions,{children:[Object(h.jsx)(f.a,{onClick:function(){return j(!1)},children:"Cancel"}),Object(h.jsx)(f.a,{primary:!0,onClick:function(){j(!1),a({id:n.id,name:u,url:m})},children:"Save"})]})]})},z=function(){var e=Object(c.useState)(!1),n=Object(s.a)(e,2),t=n[0],a=n[1],r=Object(c.useState)(""),i=Object(s.a)(r,2),d=i[0],u=i[1],b=Object(c.useState)(""),O=Object(s.a)(b,2),x=O[0],m=O[1],C=o.a.firestore().collection("urls"),S=function(e){var n=e.id,t=e.name,c=e.url;console.log(t),C.doc(n).set({name:t,url:c})};return Object(h.jsxs)(k.a,{onClose:function(){return a(!1)},onOpen:function(){return a(!0)},open:t,trigger:Object(h.jsx)(f.a,{children:"Manage"}),children:[Object(h.jsx)(k.a.Header,{children:"Manage URLs"}),Object(h.jsx)(k.a.Content,{children:Object(h.jsx)(v.a,{children:Object(h.jsxs)(v.a.Row,{children:[Object(h.jsx)(v.a.Column,{width:6,children:Object(h.jsx)(p.a,{fluid:!0,placeholder:"Name",value:d,onChange:function(e,n){var t=n.value;return u(t)}})}),Object(h.jsx)(v.a.Column,{width:8,children:Object(h.jsx)(p.a,{fluid:!0,placeholder:"URL",value:x,onChange:function(e,n){var t=n.value;return m(t)}})}),Object(h.jsx)(v.a.Column,{width:2,children:Object(h.jsx)(f.a,{fluid:!0,primary:!0,onClick:function(e){var n=e.onSave,t=void 0===n?function(){}:n;C.doc().set({name:d,url:x}).then((function(e){t&&C.doc(d).get().then((function(e){return t(Object(l.a)({name:d},e.data()))})),u(""),m("")}))},children:"Save"})})]})})}),Object(h.jsx)(k.a.Content,{children:Object(h.jsxs)(L.a,{celled:!0,children:[Object(h.jsx)(L.a.Header,{children:Object(h.jsxs)(L.a.Row,{children:[Object(h.jsx)(L.a.HeaderCell,{children:"Name"}),Object(h.jsx)(L.a.HeaderCell,{children:"URL"}),Object(h.jsx)(L.a.HeaderCell,{children:"Actions"})]})}),Object(h.jsx)(L.a.Body,{children:Object(h.jsx)(j.a,{path:"/urls/",children:function(e){return e.value?e.value.map((function(n,t){return Object(h.jsxs)(L.a.Row,{children:[Object(h.jsx)(L.a.Cell,{children:n.name}),Object(h.jsx)(L.a.Cell,{children:Object(h.jsx)("a",{href:n.url,children:n.url})}),Object(h.jsxs)(L.a.Cell,{children:[Object(h.jsx)(W,{item:Object(l.a)({id:e.ids[t]},n),onUpdate:S}),Object(h.jsx)(f.a,{icon:"trash",color:"red",onClick:function(){return function(e){var n=e.id;e.name,e.url,C.doc(n).delete().then((function(){}))}(Object(l.a)(Object(l.a)({},n),{},{id:e.ids[t]}))}})]})]},e.ids[t])})):null}})})]})}),Object(h.jsx)(k.a.Actions,{children:Object(h.jsx)(f.a,{onClick:function(){return a(!1)},children:"Close"})})]})},B=function(e){var n=e.onSearch,t=void 0===n?function(e){}:n,a=Object(c.useState)("Unnamed"),r=Object(s.a)(a,2),i=r[0],l=r[1],j=Object(c.useState)(""),d=Object(s.a)(j,2),b=d[0],O=d[1],S=Object(c.useState)([]),k=Object(s.a)(S,2),w=k[0],R=k[1],A=Object(c.useState)([]),T=Object(s.a)(A,2),L=T[0],D=T[1],q=Object(c.useState)([]),W=Object(s.a)(q,2),B=W[0],M=W[1],P=Object(c.useState)([]),Y=Object(s.a)(P,2),E=Y[0],F=Y[1],Q=o.a.firestore();Q.collection("urls").get().then((function(e){F(e.docs.map((function(e){return{key:e.id,text:e.data().name,value:e.id}})))}));var J=function(){l("Unnamed"),O(""),D([]),R([]),M([]),t([])},_=function(e){t([]),l(e.name),O(e.q||""),D((e.includeWord||"").split(" ").map((function(e){return{key:e,text:e,value:e}}))),R((e.excludeWord||"").split(" ").map((function(e){return{key:e,text:e,value:e}}))),M(e.statesSearchArray)},G=_;return Object(h.jsxs)(u.a,{fluid:!0,children:[Object(h.jsxs)(u.a.Content,{children:[Object(h.jsx)(u.a.Header,{className:"d-inline",children:i}),Object(h.jsxs)("div",{className:"d-inline float-right",children:[Object(h.jsxs)(f.a,{onClick:function(){return window.open("https://moz.com/learn/seo/search-operators")},children:[Object(h.jsx)(m.a,{name:"help circle"}),"Avanced Syntax"]}),Object(h.jsx)(U,{onOpenSearch:_})]})]}),Object(h.jsxs)(u.a.Content,{children:[Object(h.jsx)(v.a,{columns:1,children:Object(h.jsx)(v.a.Column,{children:Object(h.jsx)(p.a,{type:"text",placeholder:"Type the desired query...",fluid:!0,icon:"search",value:b,onChange:function(e,n){var t=n.value;return O(t)}})})}),Object(h.jsx)(v.a,{columns:3,children:Object(h.jsxs)(v.a.Row,{children:[Object(h.jsxs)(v.a.Column,{children:[Object(h.jsx)("h4",{children:"Limit to URLs"}),Object(h.jsx)(C.a,{placeholder:"Limit to URLs",multiple:!0,selection:!0,options:E,value:B,onChange:function(e,n){var t=n.value;M(t)}}),Object(h.jsx)(z,{})]}),Object(h.jsxs)(v.a.Column,{children:[Object(h.jsx)("h4",{children:"Must include"}),Object(h.jsx)(C.a,{icon:"",fluid:!0,search:!0,selection:!0,multiple:!0,allowAdditions:!0,options:L,value:L.map((function(e){return e.value})),onAddItem:function(e,n){D([].concat(Object(x.a)(L),[{key:n.value,text:n.value,value:n.value}]))},onChange:function(e,n){var t=n.value;D(t.map((function(e){return{key:e,text:e,value:e}})))}})]}),Object(h.jsxs)(v.a.Column,{children:[Object(h.jsxs)("h4",{children:["Must ",Object(h.jsx)("b",{children:"NOT"})," include"]}),Object(h.jsx)(C.a,{icon:"",fluid:!0,search:!0,selection:!0,multiple:!0,allowAdditions:!0,options:w,value:w.map((function(e){return e.value})),onAddItem:function(e,n){R([].concat(Object(x.a)(w),[{key:n.value,text:n.value,value:n.value}]))},onChange:function(e,n){var t=n.value;R(t.map((function(e){return{key:e,text:e,value:e}})))}})]})]})})]}),Object(h.jsx)(u.a.Content,{children:Object(h.jsx)(v.a,{children:Object(h.jsx)(v.a.Row,{children:Object(h.jsxs)(v.a.Column,{children:[Object(h.jsx)(H,{title:i,onDeleteSeach:function(){J()}}),Object(h.jsxs)("div",{className:"d-inline float-right",children:[Object(h.jsx)(f.a,{onClick:J,children:"Reset"}),Object(h.jsx)(I,{name:i,onSaveSearch:function(){"Unnamed"!==i&&Q.collection("searches").doc(i).set({q:b,statesSearchArray:B,includeWord:L.map((function(e){return e.value})).join(" "),excludeWord:w.map((function(e){return e.value})).join(" ")}).then((function(){}))}}),Object(h.jsx)(N,{query:b,selectedURLs:B,includedTerms:L,excludedTerms:w,onSaveSearch:G}),Object(h.jsx)(f.a,{primary:!0,onClick:function(){Q.collection("urls").get().then((function(e){(function(e){var n=e.query,t=e.orTerms,c=void 0===t?[]:t,a=e.excludeTerms,r=void 0===a?[]:a,i=e.exactTerms,l=void 0===i?[]:i;return g.a.get("https://www.googleapis.com/customsearch/v1?key=".concat(y.key,"&cx=").concat(y.cx,"&q=").concat(n+' "'+l.join('" '),"&orTerms=").concat(c.join(" "),"&excludeTerms=").concat(r.join(" "),"&exactTerms="))})({query:b,orTerms:B.map((function(n){var t,c,a=null===(t=e.docs.find((function(e){return e.id===n})))||void 0===t||null===(c=t.data())||void 0===c?void 0:c.url;return a?"site%3A"+a:""})),excludeTerms:w.map((function(e){return e.value})),exactTerms:L.map((function(e){return e.value}))}).then((function(e){return t(e.data.items)}))}))},children:"Search"})]})]})})})})]})},M={apiKey:"AIzaSyBjE_o5Yn2kFS1pznRhMTsiKgJ8dSkG5Qg",authDomain:"customsearch-8c1e9.firebaseapp.com",projectId:"customsearch-8c1e9",storageBucket:"customsearch-8c1e9.appspot.com",messagingSenderId:"928794993271",appId:"1:928794993271:web:4ffafbfb933e3add84dc72",measurementId:"G-SC4PNYP74M"};var P=function(){var e=Object(c.useState)([]),n=Object(s.a)(e,2),t=n[0],a=n[1];return Object(h.jsx)(j.b,Object(l.a)(Object(l.a)({},M),{},{firebase:o.a,children:Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(d.a,{children:[Object(h.jsx)(B,{onSearch:function(e){a(e)}}),Object(h.jsx)(O,{results:t})]})})}))},Y=(t(255),function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,282)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,r=n.getLCP,i=n.getTTFB;t(e),c(e),a(e),r(e),i(e)}))});i.a.render(Object(h.jsx)(P,{}),document.getElementById("root")),Y()}},[[256,1,2]]]);
//# sourceMappingURL=main.ae04ec55.chunk.js.map