import{i as y,_ as d,o as s,c as a,d as e,t as k,b as r,e as _,m as H,h as w,j as m,F as h,k as u,g as S}from"./index-40a1981e.js";import{H as T}from"./Category-a7a30585.js";import{H as g}from"./ReportsModal-4bf6a729.js";import{H as B}from"./Shimmer-210e3f17.js";import{H as I}from"./EmptyBlock-eaea3f3f.js";import{a as M}from"./ErrorBlock-e1e88579.js";import"./Paragraph-305d8bf5.js";const V={name:"HeraLabTestItem",components:{HeraReportsModal:g},props:{product:{type:Object,required:!0}},data:()=>({baseURL:"https://hera.mobiladvocate.com/"}),methods:{...y({getLabtest:"labtests/getLabtest"}),openModal(){this.getLabtest(this.product.slug).then(t=>{this.$vfm.show({component:"HeraCustomModal",bind:{name:"ReportsModal",class:"full-height"},slots:{default:{component:g,bind:{reports:t.data}}}})})}}},C={class:"labtest-item"},q={class:"labtest-item__wrapper"},x=["src","alt"],R={class:"labtest-item__info"},E={class:"labtest-item__title"};function N(t,n,c,b,p,i){return s(),a("div",C,[e("div",q,[e("button",{onClick:n[0]||(n[0]=(...o)=>i.openModal&&i.openModal(...o)),type:"button",class:"labtest-item__image labtest-item-ibg-cover"},[e("img",{src:t.baseURL+c.product.image,alt:c.product.title},null,8,x)]),e("div",R,[e("h3",E,k(c.product.title),1)])])])}const j=d(V,[["render",N],["__scopeId","data-v-bb5f82bc"]]);const F={name:"HeraLabTestShimmer",components:{HeraShimmer:B}},U={class:"labtest-shimmer"},A={class:"labtest-shimmer__wrapper"},D={class:"labtest-shimmer__image labtest-shimmer-ibg-cover"},G={class:"labtest-shimmer__info"};function O(t,n,c,b,p,i){const o=r("hera-shimmer");return s(),a("div",U,[e("div",A,[e("div",D,[_(o,{classes:["aspect-square","h-full","w-full","overflow-hidden","rounded-2xl"]})]),e("div",G,[_(o,{classes:["h-6","w-1/4","mb-2"]})])])])}const P=d(F,[["render",O],["__scopeId","data-v-5c59a7ea"]]);const z={name:"LabTestsView",components:{HeraCategory:T,HeraLabTestItem:j,HeraLabTestShimmer:P,HeraEmptyBlock:I,HeraErrorBlock:M},computed:{...H({isLoading:t=>t.shop.products.isLoading,error:t=>t.shop.products.error}),...w({labtestList:"labtests/labtestList"}),categorySlug(){return this.$route.query.category}},methods:{...y({getLabtests:"labtests/getLabtests"}),fetchLabtests(){this.getLabtests({slug:this.$route.query.category??"all",page:this.currentPage,only_labtest:!0})}},mounted(){this.fetchLabtests()},watch:{categorySlug(){this.fetchLabtests()}}},J={class:"page__labtests labtests"},K={class:"labtests__container"},Q={class:"labtests__wrapper"},W={class:"labtests__content"},X={key:0,class:"labtests__empty"},Y={key:1,class:"labtests__list"},Z={key:2,class:"labtests__list"},tt={key:1,class:"labtests__empty"};function et(t,n,c,b,p,i){const o=r("hera-category"),f=r("hera-error-block"),v=r("hera-lab-test-shimmer"),L=r("hera-lab-test-item"),$=r("hera-empty-block");return s(),a("div",J,[e("div",K,[e("div",Q,[_(o,{class:"labtests__category",isShop:!1}),e("div",W,[t.error?(s(),a("div",X,[_(f)])):m("",!0),t.isLoading?(s(),a("div",Y,[(s(),a(h,null,u(10,l=>_(v,{key:l})),64))])):m("",!0),t.labtestList?(s(),a("div",Z,[t.labtestList.length?(s(!0),a(h,{key:0},u(t.labtestList,l=>(s(),S(L,{class:"labtests__item",key:l.slug,product:l},null,8,["product"]))),128)):(s(),a("div",tt,[_($,{text:"labtests"})]))])):m("",!0)])])])])}const it=d(z,[["render",et],["__scopeId","data-v-b2ea6cd5"]]);export{it as default};