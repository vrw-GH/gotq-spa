"use strict";(self["webpackChunkgotq_spa"]=self["webpackChunkgotq_spa"]||[]).push([[318],{5236:function(a,e,t){t.r(e),t.d(e,{default:function(){return v}});var n=t(6956),s=t(2456);const u=a=>((0,n.dD)("data-v-6f1db1c0"),a=a(),(0,n.Cn)(),a),r=u((()=>(0,n._)("header",null,[(0,n._)("h1",null," GOT - Quotes ")],-1))),l=["href"],o={key:0},c=["href"];function h(a,e,t,u,h,i){return(0,n.wg)(),(0,n.iD)("section",null,[r,(0,n._)("article",null,[(0,n._)("ul",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(h.listQuotes,(a=>((0,n.wg)(),(0,n.iD)("li",{key:a.id},[(0,n._)("h2",null,(0,s.zw)(a.sentence),1),(0,n._)("a",{href:"/persons/"+a.character.slug},(0,s.zw)(a.character.name||""),9,l),a.character.house.name?((0,n.wg)(),(0,n.iD)("span",o," - ")):(0,n.kq)("",!0),(0,n._)("a",{href:"/houses/"+a.character.house.slug},(0,s.zw)(a.character.house.name||""),9,c)])))),128)),(0,n._)("input",{type:"button",value:"Get 5 new",onClick:e[0]||(e[0]=(...a)=>i.updateData&&i.updateData(...a))})])])])}var i=t(7816);const d=(0,i.iH)([]);let p=(0,i.iH)([]);var f={data(){const a=async()=>{const a=await fetch("https://api.gameofthronesquotes.xyz/v1/random/5"),e=await a.json(),t=e.sort(((a,e)=>a.slug-e.slug));p.value=d.value=t};return a(),{listQuotes:p,currentSlug:null}},methods:{async updateData(){const a=await fetch("https://api.gameofthronesquotes.xyz/v1/random/5"),e=await a.json(),t=e.sort(((a,e)=>a.slug-e.slug));p.value=d.value=t}}},g=t(9239);const w=(0,g.Z)(f,[["render",h],["__scopeId","data-v-6f1db1c0"]]);var v=w}}]);
//# sourceMappingURL=quotes.fb177919.js.map