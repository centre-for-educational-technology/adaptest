import{T as U,d as f,o as d,c as $,w as n,g as i,e as p,a as s,b as o,l as h,K as v,R as j,i as _,f as g,u as t,j as B,n as E,O as L}from"./app-1fad0f81.js";import{_ as R}from"./ActionMessage-f44e10ed.js";import{_ as A}from"./FormSection-02276b1a.js";import{_ as k}from"./InputError-7d453597.js";import{_ as F}from"./PrimaryButton-bedb5a23.js";import{L as b,I as x}from"./Label-e8abaf1c.js";import"./SectionTitle-137451b3.js";import"./_plugin-vue_export-helper-c27b6911.js";const O={key:0,class:"col-span-6 sm:col-span-4"},T={class:"mt-2"},q=["src","alt"],z={class:"mt-2"},D=["onClick"],K=["onClick"],M={class:"col-span-6 sm:col-span-4"},Y={class:"col-span-6 sm:col-span-4"},G={key:0},H={class:"text-sm mt-2 dark:text-white"},J={class:"mt-2 font-medium text-sm text-green-600 dark:text-green-400"},ae={__name:"UpdateProfileInformationForm",props:{user:Object},setup(u){const y=u,e=U({_method:"PUT",name:y.user.name,email:y.user.email,photo:null}),w=f(null),c=f(null),l=f(null),S=()=>{l.value&&(e.photo=l.value.files[0]),e.post(route("user-profile-information.update"),{errorBag:"updateProfileInformation",preserveScroll:!0,onSuccess:()=>P()})},V=()=>{w.value=!0},C=()=>{l.value.click()},I=()=>{const a=l.value.files[0];if(!a)return;const r=new FileReader;r.onload=m=>{c.value=m.target.result},r.readAsDataURL(a)},N=()=>{L.delete(route("current-user-photo.destroy"),{preserveScroll:!0,onSuccess:()=>{c.value=null,P()}})},P=()=>{var a;(a=l.value)!=null&&a.value&&(l.value.value=null)};return(a,r)=>(d(),$(A,{onSubmitted:S},{title:n(()=>[i(" Profile Information ")]),description:n(()=>[i(" Update your account's profile information and email address. ")]),form:n(()=>[a.$page.props.jetstream.managesProfilePhotos?(d(),p("div",O,[s("input",{ref_key:"photoInput",ref:l,type:"file",class:"hidden",onChange:I},null,544),o(b,{for:"photo",value:"Photo"}),h(s("div",T,[s("img",{src:u.user.profile_photo_url,alt:u.user.name,class:"rounded-full h-20 w-20 object-cover"},null,8,q)],512),[[v,!c.value]]),h(s("div",z,[s("span",{class:"block rounded-full w-20 h-20 bg-cover bg-no-repeat bg-center",style:j("background-image: url('"+c.value+"');")},null,4)],512),[[v,c.value]]),s("button",{class:"mt-2 btn mr-2",type:"button",onClick:_(C,["prevent"])}," Select A New Photo ",8,D),u.user.profile_photo_path?(d(),p("button",{key:0,type:"button btn btn-secondary",class:"mt-2",onClick:_(N,["prevent"])}," Remove Photo ",8,K)):g("",!0),o(k,{message:t(e).errors.photo,class:"mt-2"},null,8,["message"])])):g("",!0),s("div",M,[o(b,{for:"name",value:"Name"}),o(x,{id:"name",modelValue:t(e).name,"onUpdate:modelValue":r[0]||(r[0]=m=>t(e).name=m),type:"text",class:"mt-1 block w-full",required:"",autocomplete:"name"},null,8,["modelValue"]),o(k,{message:t(e).errors.name,class:"mt-2"},null,8,["message"])]),s("div",Y,[o(b,{for:"email",value:"Email"}),o(x,{id:"email",modelValue:t(e).email,"onUpdate:modelValue":r[1]||(r[1]=m=>t(e).email=m),type:"email",class:"mt-1 block w-full",required:"",autocomplete:"username"},null,8,["modelValue"]),o(k,{message:t(e).errors.email,class:"mt-2"},null,8,["message"]),a.$page.props.jetstream.hasEmailVerification&&u.user.email_verified_at===null?(d(),p("div",G,[s("p",H,[i(" Your email address is unverified. "),o(t(B),{href:a.route("verification.send"),method:"post",as:"button",class:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",onClick:_(V,["prevent"])},{default:n(()=>[i(" Click here to re-send the verification email. ")]),_:1},8,["href","onClick"])]),h(s("div",J," A new verification link has been sent to your email address. ",512),[[v,w.value]])])):g("",!0)])]),actions:n(()=>[o(R,{on:t(e).recentlySuccessful,class:"mr-3"},{default:n(()=>[i(" Saved. ")]),_:1},8,["on"]),o(F,{class:E({"opacity-25":t(e).processing}),disabled:t(e).processing},{default:n(()=>[i(" Save ")]),_:1},8,["class","disabled"])]),_:1}))}};export{ae as default};