(self.webpackChunk=self.webpackChunk||[]).push([[5207],{69345:(e,t,r)=>{r.d(t,{Z:()=>n});var n,i=r(57050),s=r(73975),a=r(55415);!function(e){e.eq=s.getStructEq({absTop:s.eqNumber,height:s.eqNumber,animationInProgress:s.eqBoolean,visible:s.eqBoolean,isHeightValid:s.eqBoolean,watched:s.eqBoolean}),e.verticalEq=s.getStructEq({absTop:s.eqNumber,height:s.eqNumber}),e.empty={absTop:0,height:0,animationInProgress:!1,visible:!1,isHeightValid:!1,watched:!1},e.create=i.identity,e.dimensionEquals=function(e,t){return e.absTop===t.absTop&&e.height===t.height},e.changeTop=function(e,t){return a.update(e,{absTop:t})},e.changeHeight=function(e,t){return a.update(e,{height:t,isHeightValid:!0})},e.changeAnimationInProgress=function(e,t){return a.update(e,{animationInProgress:t})},e.changeVisible=function(e,t){return a.update(e,{visible:t})},e.invalidateHeight=function(e){return a.update(e,{isHeightValid:!1})},e.changeWatched=function(e,t){return a.update(e,{watched:t})}}(n||(n={}))},40966:(e,t,r)=>{r.d(t,{u:()=>n,t:()=>i});var n,i,s=r(73975),a=r(5114),c=r(22232),o=r(55415);!function(e){let t;e.eq=s.getStructEq({type:s.eqString,clockwise:s.eqBoolean}),t=e.nominal||(e.nominal={})}(n||(n={})),function(e){e.initial=(e,t=!0)=>({from:a.none,transitionId:0,transition:e,incomplete:t}),e.eq=s.getStructEq({from:a.getEq(s.eqStrict),transitionId:s.eqStrict,transition:n.eq,incomplete:s.eqStrict}),e.to=(e,t)=>({from:a.some(e.transition.type),transitionId:e.transitionId+1,transition:t,incomplete:!0}),e.complete=(e,t)=>((0,c.kG)(t===e.transitionId,"unexpected transitionId"),o.update(e,{incomplete:!1}))}(i||(i={}))},75316:(e,t,r)=>{r.d(t,{C:()=>A});var n=r(64015),i=r(22690),s=r(71249),a=r(73975),c=r(57050),o=r(45614),u=r(18164),l=a.eqString,d=a.eqNumber,h=a.eqBoolean;a.fromEquals((function(e,t){return e.length===t.length})),a.fromEquals((function(e,t){for(var r in e)if(!(r in t))return!1;for(var r in t)if(!(r in e))return!1;return!0}));var f=a.getStructEq,p=f;var m=o.getEq,v=s.getEq,g=a.getTupleEq;var A,I=c.identity,S={URI:a.URI,literal:function(){return a.eqStrict},string:l,number:d,boolean:h,nullable:function(e){return{equals:function(t,r){return null===t||null===r?t===r:e.equals(t,r)}}},type:p,struct:f,partial:function(e){return{equals:function(t,r){for(var n in e){var i=t[n],s=r[n];if(!(void 0===i||void 0===s?i===s:e[n].equals(i,s)))return!1}return!0}}},record:m,array:v,tuple:g,intersect:function(e){return function(t){return{equals:function(r,n){return t.equals(r,n)&&e.equals(r,n)}}}},sum:function(e){return function(t){return{equals:function(r,n){var i=r[e];return i===n[e]&&t[i].equals(r,n)}}}},lazy:function(e,t){return function(e){var t=(0,u.H)(e);return{equals:function(e,r){return t().equals(e,r)}}}(t)},readonly:I},y=r(73915),w=r(8125),L=r(22232),q=r(5114),T=r(95195),b=r(76513),C=r(88097),F=r(17594),k=r(36156),O=r(69345),E=r(40966);!function(e){let t;!function(e){e.show=q.getShow(i._3)}(t=e.UserInput||(e.UserInput={})),e.hashCode=e=>(0,k.NO)({id:e.id,activeAlertId:e.activeAlert.id,metaHashCode:e.meta.hashCode(),alertsCount:e.alerts.length,removedAlertsIdsCount:e.removedAlertsIds.size,activeHighlightIndex:e.activeHighlightIndex,userInput:t.show.show(e.userInput),takeawayAlertsHashCode:e.alerts.reduce(((e,t)=>F.$.isTakeaway(t)?31*e+C.UC.calculateHashCode(t):e),0),shortenItAlertsHashCode:e.alerts.reduce(((e,t)=>F.$.isShortenIt(t)?31*e+C.Np.calculateHashCode(t):e),0),smartPhrasesAlertHashCode:F.$.isSmartPhrases(e.activeAlert)?C.Xi.calculateHashCode(e.activeAlert):void 0,sentenceLevelBrandTonesAlertHashCode:F.$.isSentenceLevelBrandTones(e.activeAlert)?C.iL.calculateHashCode(e.activeAlert):void 0,toneAIAlertsHashCode:e.alerts.reduce(((e,t)=>F.$.isToneAI(t)?31*e+C.QF.calculateHashCode(t):e),0)});const r=y.n(S)(b.B);function s(e){return e.activeAlert.type===F.$.Type.super}function c(e){return e.activeAlert.type===F.$.Type.smartPhrases}function o(e){return F.$.isTakeaway(e.activeAlert)}function u(e){return e.activeAlert.type===F.$.Type.sentenceLevelBrandTones}function l(e){return e.activeAlert.alertType===C.bZ.Type.Synfony}function d(e){return F.$.isShortenIt(e.activeAlert)}function h(e){return F.$.isToneAI(e.activeAlert)}function f(e){return e.activeAlert.type===F.$.Type.default}function p(e){return q.isSome(e.activeAlert.cardDSL)}e.eq=a.fromEquals(((e,t)=>e.hashCode()===t.hashCode()&&O.Z.eq.equals(e.positionState,t.positionState)&&E.t.eq.equals(e.visualState,t.visualState)&&e.meta.equals(t.meta)&&n.Eh(F.$.eq).equals(e.alerts,t.alerts)&&(0,w.As)(e.removedAlertsIds,t.removedAlertsIds)&&q.getEq(r).equals(e.activeAlert.cardDSL,t.activeAlert.cardDSL))),e.hasAlert=e=>t=>void 0!==t.alerts.find((t=>t.id===e)),e.hasAnyOfAlerts=e=>t=>t.alerts.some((t=>e.has(t.id))),e.willBeDisposed=(e,t)=>e.alerts.every((e=>t.has(e.id))),e.activeAlertRemoved=e=>e.removedAlertsIds.has(e.activeAlert.id),e.getAlertByIndex=(e,t)=>{const r=t[e];return(0,L.kG)(!!r,"Active alert index should point to an alert",(()=>JSON.stringify({alerts:t,alertIndex:e}))),r},e.getIndexByAlert=(e,t)=>{const r=t.findIndex((t=>t.id===e));return(0,L.kG)(-1!==r,"Alert must exist"),r},e.getActiveAlert=t=>e.getAlertByIndex(t.activeAlertIndex,t.alerts),e.isSuperItem=s,e.isSmartPhrasesItem=c,e.isTakeawayItem=o,e.isSentenceLevelBrandTonesItem=u,e.isSynfonyItem=l,e.isShortenItItem=d,e.isToneAIItem=h,e.isDefaultItem=f,e.isSDUIItem=p,e.match=function(e){return t=>{if(p(t))return T.right(e.sdui(t));if(s(t))return T.right(e.super(t));if(c(t))return T.right(e.smartPhrases(t));if(o(t))return T.right(e.takeaway(t));if(u(t))return T.right(e.sentenceLevelBrandTones(t));if(l(t))return T.right(e.synfony(t));if(d(t))return T.right(e.shortenIt(t));if(h(t))return T.right(e.toneAI(t));if(f(t))return T.right(e.default(t));const r={lensId:t.activeAlert.lensId,lensType:t.activeAlert.lensType};return T.left(new Error(`Cannot render unknown card type with alert: [${JSON.stringify(r,null,2)}]`))}}}(A||(A={}))},35416:(e,t,r)=>{r.d(t,{h8:()=>n,Nm:()=>i,_L:()=>s,In:()=>a,CX:()=>c,yi:()=>y,nL:()=>w,Zz:()=>L,Tl:()=>q,FS:()=>T,wj:()=>C});var n,i,s,a,c,o=r(35214),u=r(57050),l=r(40327),d=r(20817),h=r(5114),f=r(8125),p=r(22232),m=r(55415),v=r(66896),g=r(40151),A=r(87938),I=r(76974),S=r(36156);!function(e){e.forceText="forceText",e.forceSidebar="forceSidebar"}(n||(n={})),function(e){e.lensview="lensview",e.advanced="advanced",e.plagiarism="plagiarism",e.draftAI="draftAI",e.closed="closed"}(i||(i={})),function(e){e.active="active",e.persistent="persistent",e.abstract="abstract"}(s||(s={})),function(e){function t(e){return(0,l.pipe)(e.cardIndex,h.chain((t=>e.items.getAt(t))))}e.getActiveItem=t,e.getActiveItemOfType=function(e){return(0,u.flow)(t,h.filter(e))}}(a||(a={})),function(e){e.withFilter=e=>t=>(r,n)=>t(r,(0,f.W9)(e,n)),e.compose=function(e){return(t,r)=>(0,o.fold)((0,o.getEndomorphismMonoid)())(e.map((e=>e(t,r))))}}(c||(c={}));const y=e=>"withPriorityList"in e&&e.withPriorityList;class w{constructor(e){this._data=e}static create(e){return new w(e)}get alertSource(){return this._data.alertSource}get switchOrder(){return this._data.switchOrder}get currentLens(){return this._data.currentLens}patch(e){return new w(Object.assign(Object.assign({},this._data),e))}hashCode(){let e=7;return e=31*e+(0,S.AC)(this.alertSource),e=31*e+(0,S.AC)(this.switchOrder),e=31*e+this.currentLens.hashCode(),e}equals(e){return this.alertSource===e.alertSource&&this.switchOrder===e.switchOrder&&this.currentLens.equals(e.currentLens)}}var L;!function(e){function t(e,t,r){return n=>{switch(n.currentLens.kind){case s.active:return e(n);case s.persistent:return t(n);case s.abstract:return r(n);default:return(0,p.vE)(n.currentLens)}}}let r,a,c,o;function f(e){return e.currentLens.kind===s.persistent}function S(e){return v.R.isOutcomeId(e.currentLens.id)||v.R.isMainLens(e.currentLens.id)||e.currentLens.id===v.R.SpecialId.PredictionTakeaways||e.currentLens.id===v.R.SpecialId.PredictionEmogenie}e.withCardLensSnapshot=(e,t)=>r=>{const n=r.currentLens.items.size>50,i=(0,l.pipe)(r.currentLens.cardIndex,h.getOrElse((()=>0))),[s,a]=n?[Math.max(i-25,0),i+25]:[0,50];return{alertSource:r.alertSource,switchOrder:r.switchOrder,lens:{id:r.currentLens.id,card:(0,l.pipe)(t(r.currentLens),h.map(e)),items:r.currentLens.items.values().slice(s,a).map(e),sample:n}}},e.snapshot=(r,n)=>t(e.withCardLensSnapshot(r,n),e.withCardLensSnapshot(r,n),(e=>({alertSource:e.alertSource,switchOrder:e.switchOrder,lens:{id:e.currentLens.id,kind:e.currentLens.kind}}))),e.genericMapper=t,e.mapper=e=>t(e,e,(()=>h.none)),e.getActiveItem=t=>e.mapper((({currentLens:e})=>t(e))),e.getActiveAlertHighlight=t=>(0,u.flow)(e.getActiveItem(t),h.map((e=>({alert:e.activeAlert,highlightIndex:e.activeHighlightIndex})))),e.getActiveAlert=t=>(0,u.flow)(e.getActiveItem(t),h.map((e=>e.activeAlert))),e.getLens=e.mapper((({currentLens:e})=>h.some(e))),function(e){e.mapper=function(e,t){return r=>t[e(r)](r)}}(r=e.Items||(e.Items={})),e.is=function(e){return t=>t.currentLens.id===e},e.isLensview=function(e){return e.currentLens.type===i.lensview},e.isPersistent=f,e.hasCards=function(e){return e.currentLens.kind===s.active||f(e)},e.hasItems=function(e){return e.currentLens.kind===s.active||e.currentLens.kind===s.persistent},e.hasSuccess=S,e.isWithPriorityList=function(e){return S(e)&&y(e.currentLens)},e.isForceSidebar=t=>(e.isLensview(t)||t.currentLens.type===i.plagiarism)&&t.alertSource===n.forceSidebar,e.isSidebarOpened=t=>!e.is(v.R.SpecialId.Closed)(t),function(e){e.defaultFilter=m.pick("alertHighlight")}(a=e.FocusFirstFilter||(e.FocusFirstFilter={})),function(e){e.getLens=()=>d.Ri.create((e=>e.currentLens),((e,t)=>t.patch({currentLens:e}))),e.getLensWithItems=()=>d.Ri.create((e=>e.currentLens),((e,t)=>t.patch({currentLens:e})))}(c=e.Prism||(e.Prism={})),function(e){let t,r,n,i,s,a,c,o,l;!function(e){e.SwitchLens="SwitchLens",e.SwitchAlert="SwitchAlert",e.Applicator="Applicator",e.ItemsApplicator="ItemsApplicator"}(t=e.Type||(e.Type={})),function(e){let r;e.create=function(e){return{type:t.Applicator,source:e}},function(e){e.identity=e=>e,e.override=e=>()=>e,e.empty=g.E}(r=e.Source||(e.Source={}))}(r=e.Applicator||(e.Applicator={})),function(e){let r;e.create=function(e){return{type:t.ItemsApplicator,source:e}},function(e){e.identity=()=>e=>e,e.override=e=>()=>e,e.empty=g.E}(r=e.Source||(e.Source={}))}(n=e.ItemsApplicator||(e.ItemsApplicator={})),function(e){e.create=function(e){return{type:t.SwitchAlert,source:e}}}(i=e.SwitchAlert||(e.SwitchAlert={})),function(e){e.create=function(e){return{type:t.SwitchLens,source:e}}}(s=e.SwitchLens||(e.SwitchLens={})),function(e){function t(e){return e===v.R.SpecialId.Closed}e.isSidebarClosed=t,e.isSidebarOpen=(0,u.not)(t),e.always=u.constTrue}(a=e.When||(e.When={})),function(e){e.delayed=e=>t=>{const r=A.j((()=>I.of(void 0)),e),n=Object.assign(Object.assign({},t.what),{source:r(t.what.source)});return Object.assign(Object.assign({},t),{what:n})}}(c=e.Producer||(e.Producer={})),function(e){e.noFocus="noFocus",e.unFocus="unFocus",e.focusFirst="focusFirst",e.focusNext="focusNext",e.focusAlert="focusAlert"}(o=e.FocusBehaviorType||(e.FocusBehaviorType={})),function(e){e.noFocus={kind:o.noFocus},e.unFocus={kind:o.unFocus},e.focusNext={kind:o.focusNext},e.focusFirst={kind:o.focusFirst},e.focusAlert=e=>({kind:o.focusAlert,alertHighlight:e})}(l=e.FocusBehavior||(e.FocusBehavior={}))}(o=e.Effect||(e.Effect={}))}(w||(w={})),function(e){e.defaultOptions={focusBehavior:w.Effect.FocusBehavior.focusFirst}}(L||(L={}));const q=e=>t=>t.id===e.id;var T,b,C;!function(e){e[e.allAlerts=0]="allAlerts",e[e.priorityAlertsOnly=1]="priorityAlertsOnly"}(T||(T={})),function(e){e.getDefault=()=>T.allAlerts}(b||(b={})),function(e){e.skip=u.constFalse,e.force=u.constTrue,e.proceed=e=>e.positionState.animationInProgress}(C||(C={}))}}]);