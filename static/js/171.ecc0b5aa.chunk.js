"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[171],{1171:function(n,e,r){r.r(e),r.d(e,{default:function(){return S}});var t,a,o,i,s,c=r(2791),d=r(9434),l=r(3634),u=r(5705),h=function(n){return n.contacts.items},m=function(n){return n.contacts.isLoading},p=function(n){return n.contacts.error},x=function(n){return n.contacts.filter},f=r(168),b=r(7691),g=(0,b.ZP)(u.l0)(t||(t=(0,f.Z)(["\n  width: 300px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 10px;\n  margin-bottom: 10px;\n"]))),j=b.ZP.label(a||(a=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-size: large;\n  font-weight: 500;\n"]))),v=(0,b.ZP)(u.gN)(o||(o=(0,f.Z)(["\n  margin-top: 10px;\n  border: 1px solid #cccccc;\n  border-radius: 4px;\n  outline: none;\n  height: 30px;\n"]))),y=b.ZP.button(i||(i=(0,f.Z)(["\n  margin-top: 10px;\n  cursor: pointer;\n  padding: 5px;\n  border-radius: 4px;\n  background-color: #fff;\n\n  &:hover,\n  &:focus {\n    color: white;\n    background-color: green;\n  }\n"]))),C=(0,b.ZP)(u.Bc)(s||(s=(0,f.Z)(["\n  color: red;\n  margin-top: 5px;\n"]))),w=r(2797),k=r(184),Z=w.Ry().shape({name:w.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required("Please, enter name"),number:w.Z_().min(6).max(16).matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required("Please, enter correct number")}),_=function(){var n=(0,d.I0)(),e=(0,d.v9)(h);return(0,k.jsx)(u.J9,{initialValues:{name:"",number:""},validationSchema:Z,onSubmit:function(r,t){var a,o=t.resetForm,i=r.name,s=i.toLowerCase();(e.items,a=s,e.find((function(n){return n.name.toLowerCase()===a})))?alert("".concat(i," is already in your contacts")):(n((0,l.uK)(r)),o())},children:(0,k.jsxs)(g,{autoComplete:"off",children:[(0,k.jsxs)(j,{children:["Name",(0,k.jsx)(v,{type:"text",placeholder:"Enter name",name:"name",title:"Name may contain only letters"}),(0,k.jsx)(C,{name:"name",component:"div"})]}),(0,k.jsxs)(j,{children:["Number",(0,k.jsx)(v,{type:"tel",placeholder:"+380",name:"number",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}),(0,k.jsx)(C,{name:"number",component:"div"})]}),(0,k.jsx)(y,{type:"submit",children:"Add contact"})]})})},F=r(4732),z=r(4190),P=r(3635),A=r(3453),I=function(n){var e=n.id,r=n.name,t=n.number,a=(0,d.I0)();return(0,k.jsx)(z.xu,{sx:{display:"block",fontSize:"20px"},children:(0,k.jsx)(P.Zb,{children:(0,k.jsx)(P.eW,{children:(0,k.jsxs)(z.kC,{pl:"5",children:[(0,k.jsxs)(z.xv,{children:[r," : ",t]}),(0,k.jsx)(A.zx,{color:"green",bg:"white",_hover:{background:"red",color:"white",br:"5"},type:"button",onClick:function(){return a((0,l.GK)(e))},children:(0,k.jsx)(F.pJ,{w:15,h:15})})]})})})})};function L(){var n=(0,d.v9)(h),e=(0,d.v9)(x),r=n.filter((function(n){var r,t;return null===(r=n.name)||void 0===r||null===(t=r.toLowerCase())||void 0===t?void 0:t.includes(e.toLowerCase())}));return(0,k.jsx)("ul",{children:(0,k.jsx)(z.kC,{justifyContent:"center",gap:"10px",wrap:"wrap",display:"block",backgroundColor:"#F7FAFC",children:r.map((function(n){var e=n.id,r=n.name,t=n.number;return(0,k.jsx)("li",{children:(0,k.jsx)(I,{id:e,name:r,number:t})},e)}))})})}var N=r(1538),B=r(6737);function E(){var n=(0,d.I0)(),e=(0,d.v9)(x);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(z.kC,{justifyContent:"center",children:(0,k.jsx)(z.X6,{as:"h2",size:"l",children:"Find contacts"})}),(0,k.jsx)(z.kC,{justifyContent:"center",paddingBottom:"8px",paddingTop:"8px",children:(0,k.jsx)(B.II,{width:"auto",type:"text",name:"filter",placeholder:"Enter search name",value:e,onChange:function(e){n((0,N.a)(e.currentTarget.value))}})})]})}var J=r(7552);function S(){var n=(0,d.I0)(),e=(0,d.v9)(m),r=(0,d.v9)(h),t=(0,d.v9)(p);return(0,c.useEffect)((function(){n((0,l.yF)())}),[n]),(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(_,{}),r.length>0&&(0,k.jsx)(k.Fragment,{children:(0,k.jsx)(E,{})}),(0,k.jsx)("div",{children:e&&(0,k.jsx)(J.D8,{isIndeterminate:!0,color:"green.300",size:"30px"})}),(0,k.jsx)(L,{}),t,r.length>1&&(0,k.jsxs)("div",{children:["\u0423 \u0432\u0430\u0441 ",r.length," \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0456\u0432 "]})]})}}}]);
//# sourceMappingURL=171.ecc0b5aa.chunk.js.map