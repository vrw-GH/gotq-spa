"use strict";(self["webpackChunkgotq_spa"]=self["webpackChunkgotq_spa"]||[]).push([[371],{6967:function(e,n,t){t.r(n),t.d(n,{default:function(){return k}});var r=t(8785),u=t(1369);const s=e=>((0,r.dD)("data-v-1a77ba67"),e=e(),(0,r.Cn)(),e),l=s((()=>(0,r._)("div",{class:"scrollingImage"},null,-1))),o=["onClick"],a={ref:"aScrollTo"},c={key:0},i=s((()=>(0,r._)("h2",null,"Quotes",-1)));function h(e,n,t,s,h,g){const p=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("header",null,[(0,r._)("h1",null,(0,u.zw)(g.currentPersonName||"GOT - Persons"),1)]),(0,r._)("section",null,[l,(0,r._)("nav",null,[(0,r._)("input",{type:"search",name:"search",placeholder:"Search any name/house",title:"Start typing a Name or House",autocomplete:"off",autofocus:"",onKeyup:n[0]||(n[0]=e=>g.filterPersons(e.target.value))},null,32),(0,r._)("ul",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(h.listPersons,(e=>((0,r.wg)(),(0,r.iD)("li",{key:e.slug},[(0,r._)("a",{onClick:n=>g.setCurrentSlug(e.slug)},[(0,r.Uk)((0,u.zw)(e.slug)+" - ",1),(0,r._)("i",null,[(0,r._)("small",null,(0,u.zw)(e.house?.slug),1)])],8,o)])))),128))])]),(0,r._)("article",null,[(0,r._)("ul",a,[g.currentPersonHouse?.name?((0,r.wg)(),(0,r.iD)("h3",c,[(0,r.Wm)(p,{to:"/houses/"+g.currentPersonHouse?.slug},{default:(0,r.w5)((()=>[(0,r.Uk)((0,u.zw)(g.currentPersonHouse?.name||""),1)])),_:1},8,["to"])])):(0,r.kq)("",!0),i,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(g.currentPersonQuotes,(e=>((0,r.wg)(),(0,r.iD)("li",{key:e.id},(0,u.zw)(e),1)))),128)),g.currentPersonName?((0,r.wg)(),(0,r.iD)("input",{key:1,type:"button",value:"Change Quotes",onClick:n[1]||(n[1]=e=>{g.changeQuotes(),g.gotoTop()})})):(0,r.kq)("",!0)])])])],64)}var g=t(7995);const p=(0,g.iH)([]);let f=(0,g.iH)([]),m=(0,g.iH)([]);var w={data(){const e=async()=>{const e=await fetch("https://api.gameofthronesquotes.xyz/v1/characters"),n=await e.json();n.sort(((e,n)=>e.slug.localeCompare(n.slug))),f.value=p.value=n};return e(),{listPersons:f,currentSlug:this.$route.params.slug||null}},methods:{setCurrentSlug(e){this.currentSlug=e},filterPersons(e){return f.value=""===e?p.value:p.value.filter((n=>-1!==n.name.toLowerCase().search(e.toLowerCase().trim()))),null},changeQuotes(){if(null!==this.currentperson){const e=async()=>{const e=await fetch("https://api.gameofthronesquotes.xyz/v1/random/3"),n=await e.json();m.value=n.map((e=>e.sentence))};return e(),m}return null},gotoTop(){this.$nextTick((()=>this.$refs.aScrollTo.scrollTo(0,0)))}},computed:{currentperson(){if(null!==this.currentSlug){const e=this.listPersons.filter((e=>e.slug===this.currentSlug));if(1===e.length)return m.value=e[0].quotes,e[0]}return null},currentPersonName(){return null!==this.currentperson?this.currentperson.name:null},currentPersonHouse(){return null!==this.currentperson?this.currentperson.house?this.currentperson.house:" - - ":null},currentPersonQuotes(){return null!==this.currentperson?m.value:null}}},v=t(4361);const _=(0,v.Z)(w,[["render",h],["__scopeId","data-v-1a77ba67"]]);var k=_}}]);
//# sourceMappingURL=persons.407e4a64.js.map