"use strict";(self["webpackChunkgotq_spa"]=self["webpackChunkgotq_spa"]||[]).push([[458,371],{8655:function(e,u,t){t.r(u),t.d(u,{default:function(){return v}});var r=t(8785),n=t(1369);const l=e=>((0,r.dD)("data-v-45f96ca4"),e=e(),(0,r.Cn)(),e),s={class:"leftmenu"},o=["onClick"],a=l((()=>(0,r._)("h2",null,"House Members",-1)));function c(e,u,t,l,c,i){const h=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("header",null,[(0,r._)("h1",null,(0,n.zw)(i.currentHouseName||"GOT - Houses"),1)]),(0,r._)("section",null,[(0,r._)("nav",s,[(0,r._)("input",{type:"search",name:"search",placeholder:"Search",title:"Start typing a House",autocomplete:"off",autofocus:"",onKeyup:u[0]||(u[0]=e=>i.filterHouses(e.target.value))},null,32),(0,r._)("ul",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(c.listHouses,(e=>((0,r.wg)(),(0,r.iD)("li",{key:e.slug},[(0,r._)("a",{onClick:u=>i.setCurrentSlug(e.slug)},(0,n.zw)(e.slug),9,o)])))),128))])]),(0,r._)("article",null,[(0,r._)("ul",null,[a,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.currentHouseMembers,(e=>((0,r.wg)(),(0,r.iD)("li",{key:e.slug},[(0,r.Wm)(h,{to:"/persons/"+e?.slug},{default:(0,r.w5)((()=>[(0,r.Uk)((0,n.zw)(e.name||""),1)])),_:2},1032,["to"])])))),128))])])])],64)}var i=t(7995);const h=(0,i.iH)([]);let g=(0,i.iH)([]);var p={data(){const e=async()=>{const e=await fetch("https://api.gameofthronesquotes.xyz/v1/houses"),u=await e.json(),t=u.sort(((e,u)=>e.slug-u.slug));g.value=h.value=t};return e(),{listHouses:g,currentSlug:this.$route.params.slug||null}},methods:{setCurrentSlug(e){this.currentSlug=e},filterHouses(e){return g.value=""===e?h.value:h.value.filter((u=>-1!==u.slug.search(e.toLowerCase().trim()))),null}},computed:{currentHouse(){if(null!==this.currentSlug){const e=this.listHouses.filter((e=>e.slug===this.currentSlug));if(1===e.length)return e[0]}return null},currentHouseName(){return null!==this.currentHouse?this.currentHouse.name:null},currentHouseMembers(){return null!==this.currentHouse?this.currentHouse.members:null}}},f=t(4361);const m=(0,f.Z)(p,[["render",c],["__scopeId","data-v-45f96ca4"]]);var v=m},9117:function(e,u,t){t.r(u),t.d(u,{default:function(){return _}});var r=t(8785),n=t(1369);const l=e=>((0,r.dD)("data-v-03f02600"),e=e(),(0,r.Cn)(),e),s=l((()=>(0,r._)("div",{class:"scrollingImage"},null,-1))),o=["onClick"],a={ref:"aScrollTo"},c={key:0},i=l((()=>(0,r._)("h2",null,"Quotes",-1)));function h(e,u,t,l,h,g){const p=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("header",null,[(0,r._)("h1",null,(0,n.zw)(g.currentPersonName||"GOT - Persons"),1)]),(0,r._)("section",null,[s,(0,r._)("nav",null,[(0,r._)("input",{type:"search",name:"search",placeholder:"Search",title:"Start typing a Name or House",autocomplete:"off",autofocus:"",onKeyup:u[0]||(u[0]=e=>g.filterPersons(e.target.value))},null,32),(0,r._)("ul",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(h.listPersons,(e=>((0,r.wg)(),(0,r.iD)("li",{key:e.slug},[(0,r._)("a",{onClick:u=>g.setCurrentSlug(e.slug)},[(0,r.Uk)((0,n.zw)(e.slug)+" - ",1),(0,r._)("i",null,[(0,r._)("small",null,(0,n.zw)(e.house?.slug),1)])],8,o)])))),128))])]),(0,r._)("article",null,[(0,r._)("ul",a,[g.currentPersonHouse?.name?((0,r.wg)(),(0,r.iD)("h3",c,[(0,r.Wm)(p,{to:"/houses/"+g.currentPersonHouse?.slug},{default:(0,r.w5)((()=>[(0,r.Uk)((0,n.zw)(g.currentPersonHouse?.name||""),1)])),_:1},8,["to"])])):(0,r.kq)("",!0),i,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(g.currentPersonQuotes,(e=>((0,r.wg)(),(0,r.iD)("li",{key:e.id},(0,n.zw)(e),1)))),128)),g.currentPersonName?((0,r.wg)(),(0,r.iD)("input",{key:1,type:"button",value:"Change Quotes",onClick:u[1]||(u[1]=e=>{g.changeQuotes(),g.gotoTop()})})):(0,r.kq)("",!0)])])])],64)}var g=t(7995);const p=(0,g.iH)([]);let f=(0,g.iH)([]),m=(0,g.iH)([]);var v={data(){const e=async()=>{const e=await fetch("https://api.gameofthronesquotes.xyz/v1/characters"),u=await e.json(),t=u.sort(((e,u)=>e.slug-u.slug));f.value=p.value=t};return e(),{listPersons:f,currentSlug:this.$route.params.slug||null}},methods:{setCurrentSlug(e){this.currentSlug=e},filterPersons(e){return f.value=""===e?p.value:p.value.filter((u=>-1!==u.name.toLowerCase().search(e.toLowerCase().trim()))),null},changeQuotes(){if(null!==this.currentperson){const e=async()=>{const e=await fetch("https://api.gameofthronesquotes.xyz/v1/random/3"),u=await e.json();m.value=u.map((e=>e.sentence))};return e(),m}return null},gotoTop(){this.$nextTick((()=>this.$refs.aScrollTo.scrollTo(0,0)))}},computed:{currentperson(){if(null!==this.currentSlug){const e=this.listPersons.filter((e=>e.slug===this.currentSlug));if(1===e.length)return m.value=e[0].quotes,e[0]}return null},currentPersonName(){return null!==this.currentperson?this.currentperson.name:null},currentPersonHouse(){return null!==this.currentperson?this.currentperson.house?this.currentperson.house:" - - ":null},currentPersonQuotes(){return null!==this.currentperson?m.value:null}}},w=t(4361);const H=(0,w.Z)(v,[["render",h],["__scopeId","data-v-03f02600"]]);var _=H}}]);
//# sourceMappingURL=houses.23b56908.js.map