(self.webpackChunk=self.webpackChunk||[]).push([[7272],{13922:(e,t,i)=>{i.d(t,{O:()=>w});var n=i(57050),s=i(35214),a=i(45701),r=i(40327),o=i(27378),l=i(63047),d=i(24394),c=i(46547),u=i(79921),m=i(1620),p=i(86705),h=i(12187),g=i(67489),v=i.n(g);const S=({emojiUnicode:e,title:t,expanded:i,accepted:n,onShow:s,onExpand:a,onClick:r,onClose:l,onVote:g,browser:S,lensIsPriority:I})=>(o.useEffect((()=>{null==s||s()}),[t]),o.useEffect((()=>{i&&(null==a||a())}),[i]),o.createElement(c.Z,{kind:I?"assistant-priority-lens":"assistant-all-lens",onClick:()=>{i||r()},dataPartName:"intent-detection-card"},o.createElement("div",{...(0,h.Sh)(v().intentDetectionCardContent,i&&!n?v().intentDetectionCardContentExpanded:null,n?v().intentDetectionCardContentAccepted:null)},o.createElement("div",{className:v().intentDetectionCardEmojiAndTitle},o.createElement(u.dy,{className:v().intentDetectionCardEmoji,unicodeLiteral:null,unicodeHexArray:n?["1f64c"]:[e]}),n?o.createElement("div",null,"Thanks for helping us build new suggestions!"):o.createElement("div",null,o.createElement("div",null,t),o.createElement("div",{className:v().intentDetectionCardExpandedInfo},"Your input helps us develop more tailored suggestions for you."))),n?o.createElement("div",{className:v().intentDetectionCardBetaBadgeAndCloseButton},o.createElement(m.P,{onClick:e=>{e.stopPropagation(),l()},size:"small",containerClassName:v().intentDetectionCardCloseButton}),o.createElement(p.v,{browser:S,className:v().intentDetectionCardBetaBadge})):o.createElement("div",{className:v().intentDetectionCardVoteAndBetaBadge},o.createElement(d.A,{ariaLabel:t,voteYesAriaLabel:"Yes",voteNoAriaLabel:"No",voteYesTooltipMessage:"Yes",voteNoTooltipMessage:"No",onVote:g,voteYesMarginRight:8,irrevocable:!0}),o.createElement(p.v,{browser:S,className:v().intentDetectionCardExpandedInfo})))));S.defaultProps={expanded:!1,accepted:!1,lensIsPriority:!0};const I=({emojiUnicode:e,title:t,expanded:i,accepted:n,onShow:s,onExpand:a,onClick:r,onClose:l,onFeedbackAccurate:c,onFeedbackInaccurate:u,browser:m,lensIsPriority:p})=>o.createElement(S,{emojiUnicode:e,title:t,expanded:i,accepted:n,onShow:s,onExpand:a,onClick:r,onClose:l,onVote:e=>{e===d.x.YES?c():u()},browser:m,lensIsPriority:p});var b,y=i(28043),C=i(77176),A=i(5739),f=i(31881);!function(e){e.IntentDetection=f.UI.Node.make((({view:e,notify:t})=>{const i=e("view");return o.createElement(A.F.div,null,i.pipe(y.x(l.Z.eq.equals),C.U((e=>o.createElement(I,{emojiUnicode:e.emojiUnicode,title:e.title,expanded:"focused"===e.visualState.transition.type,accepted:"success"===e.visualState.transition.type,onShow:t({kind:l.Z.Event.Kind.intentDetectionItemShow,id:e.id,predictionId:e.predictionId,label:e.label}),onExpand:t({kind:l.Z.Event.Kind.intentDetectionItemExpand,id:e.id,predictionId:e.predictionId,label:e.label}),onClick:t({kind:l.Z.Event.Kind.intentDetectionItemClick,id:e.id,predictionId:e.predictionId,label:e.label}),onClose:t({kind:l.Z.Event.Kind.intentDetectionItemClose,id:e.id}),onFeedbackAccurate:t({kind:l.Z.Event.Kind.intentDetectionItemFeedbackAccurate,id:e.id,predictionId:e.predictionId,label:e.label,transitionType:e.visualState.transition.type}),onFeedbackInaccurate:t({kind:l.Z.Event.Kind.intentDetectionItemFeedbackInaccurate,id:e.id,predictionId:e.predictionId,label:e.label}),browser:e.browser,lensIsPriority:e.lensIsPriority})))))}))}(b||(b={}));var w,k=i(22373),E=i(7910),R=i(84246),_=i(84974),q=i(98752),D=i(17594),T=i(26027),F=i(91549),x=i(20594),P=i(86775),B=i(16892),N=i(48521),U=i(75316),O=i(15215),H=i(70100),Q=i(47306),L=i(35416),Z=i(93494),M=i(8125),W=i(83078),X=i(5114),K=i(73975);!function(e){function t(e,t,i,n,s){return L.nL.Items.mapper((e=>e.kind),{[T.X.Kind]:e,[F.R.Kind]:t,[H.X.kind]:i,[Q.J.kind]:n,[l.Z.Kind]:s})}function i(e){return e.kind===T.X.Kind}function o(e){return e.kind===F.R.Kind}function d(i){return(0,E.Pv)(e.disposable,((e,n)=>t((t=>({view:t,isLastCard:e,kind:"alertCard",visibleViewportHeight:i(n)})),(t=>({view:t,isLastCard:e,kind:"alertsBundle",visibleViewportHeight:i(n)})),(e=>({view:e,kind:"checklistItemEmpty"})),(t=>({view:t,kind:"checklistItemWithAlerts",isLastCard:e,visibleViewportHeight:i(n)})),(e=>({view:e,kind:"intentDetection"})))))}e.isSelectableWithAlertItem=(0,M.Kg)(i,o,O.d.isChecklistItemWithAlerts),e.getActiveItemWithAlert=L.In.getActiveItemOfType(e.isSelectableWithAlertItem),e.getActiveAlignableItem=L.In.getActiveItemOfType(e.isSelectableWithAlertItem),e.getActiveFocusableItem=L.In.getActiveItemOfType(e.isSelectableWithAlertItem),e.checksFeedItemsMapper=t,e.isAlertCard=i,e.isAlertsBundle=o,e.defaultOrd=(0,s.fold)(a.getMonoid())([(0,r.pipe)(a.ordBoolean,a.contramap(i)),T.X.ord,(0,r.pipe)(a.ordBoolean,a.contramap(l.Z.isIntentDetectionItem))]),e.bundlesOrd=(0,s.fold)(a.getMonoid())([(0,r.pipe)(a.ordBoolean,a.contramap(o)),a.fromCompare(((e,t)=>o(e)&&o(t)?F.R.ord.compare(e,t):0)),(0,r.pipe)(a.ordBoolean,a.contramap(l.Z.isIntentDetectionItem))]),e.item=e=>f.UI.Union.make("kind",{alertCard:k.p.Card(e),alertsBundle:R.Q.Card(e),checklistItemEmpty:_.z.Card(e),checklistItemWithAlerts:q.fw.Card(e),intentDetection:b.IntentDetection}),e.viewState=d,e.createCardListFlow=e=>(0,E.sJ)((t=>(0,r.pipe)(e,W.tap((e=>{e.intentDetectionActions.next(t.action)}))))),e.listItemOrd=e=>(0,a.contramap)((e=>e.cell.item.view))(e).compare;const c={equals:(e,t)=>e.kind===t.kind&&B.s.eqById.equals(e,t)},u=(e,t,i,n,s)=>({equals:(a,r)=>{const o={[T.X.Kind]:e,[F.R.Kind]:t,[H.X.kind]:i,[Q.J.kind]:n,[l.Z.Kind]:s};return c.equals(a,r)&&function(e,t){return(i,n)=>t[e(i)].equals(i,n)}((e=>e.kind),o)(a,r)}}),m=(0,s.fold)(K.getMonoid())([N.o.eq,B.s.verticalPositionEq,c]);function p(e,i){const n=T.X.Capabilities.getChangePosition(e);return{changePosition:e=>t(n.changePosition(e),F.R.changePosition(e),H.X.changePositionState(e),i.changePositionState(e),l.Z.Capabilities.changePosition(e))}}function h(e,i){const n=T.X.Capabilities.getTransitionTo(e);return{transitionTo:e=>t(n.transitionTo(e),F.R.transitionTo(e),H.X.transitionTo(e),i.transitionTo(e),l.Z.Capabilities.transitionTo(e))}}function g(e,i){const n=T.X.Capabilities.getCompleteTransition(e);return{completeTransition:e=>t(n.completeTransition(e),F.R.completeTransition(e),H.X.completeTransition(e),i.completeTransition(e),l.Z.Capabilities.completeTransition(e))}}function v(e,i,s,a,r){const o=F.R.getCardHydrator(r),d=F.R.getSelect(s,a,o),c=F.R.getSelectByAlert(s,a,o),u=T.X.Capabilities.getSelect(e);return{select:(e,s)=>t(u.select(e,s),d(e,s),H.X.select(e),i.selectFirstAlert((0,n.unsafeCoerce)(e),s),l.Z.Capabilities.select(e)),selectByAlert:(e,s,a)=>t(u.selectByAlert(e,s,a),c(s,e,a),H.X.select(e),i.selectByAlert(s,(0,n.unsafeCoerce)(e),a),n.identity),unselect:(e,s)=>t(u.unselect((0,n.unsafeCoerce)(e),s),F.R.unselect((0,n.unsafeCoerce)(e),s),H.X.unselect(e),i.unselect((0,n.unsafeCoerce)(e),s),l.Z.Capabilities.unselect(e))}}function S(e,s,a,r,l,d){return{removeAlertFromItem:(c,u)=>t((t=>T.X.Capabilities.getRemoveAlerts(e,u.itemsOrd)(c,L.In.getActiveItemOfType(i)(u))(t)),(e=>F.R.getRemoveAlertsCapability(r,l,d,u.itemsOrd)(c,L.In.getActiveItemOfType(o)(u))(e)),n.identity,(e=>P.G.getRemoveAlert(s,a,r).removeAlertFromItem(c,u)(e)),n.identity)}}function I(e,i,s){const a=T.X.Capabilities.getRemove(e);return{remove:(e,r)=>t(a.remove(e,r),(t=>e(t)?F.R.getRemove(s)([t.activeAlert],r(t))(t):t),n.identity,(t=>e(t)?i.removeAlerts(t.alerts,r(t))(t):t),n.identity)}}function y(e,i,s){const a=T.X.Capabilities.getUpdateWithAlert(e),r=F.R.getUpdatableWithAlertsCapability(i);return{updateWithAlerts:e=>t(a.updateWithAlerts(e),r(e),n.identity,s.updateWith(e),n.identity)}}e.equatable={structEq:u(T.X.eq,F.R.eq,H.X.eq,Q.J.eq,l.Z.eq),idEq:u(c,c,c,c,c),visualStateEq:u(m,m,m,m,m)},e.changePosition=p,e.disposable={isScheduledToDispose:t((e=>U.C.willBeDisposed(e,e.removedAlertsIds)),(e=>U.C.willBeDisposed(e,e.removedAlertsIds)),n.constFalse,(e=>U.C.willBeDisposed(e,e.removedAlertsIds)),n.constFalse)},e.hidable={isHidden:t(N.o.isHidden,N.o.isHidden,N.o.isHidden,N.o.isHidden,N.o.isHidden)},e.transitionTo=h,e.completeTransition=g,e.hasAlertsQueries={isSelectableByAlert:e=>t(U.C.hasAlert(e.alert.id),U.C.hasAlert(e.alert.id),n.constFalse,U.C.hasAlert(e.alert.id),n.constFalse),hasAlert:e=>t(U.C.hasAlert(e),U.C.hasAlert(e),n.constFalse,U.C.hasAlert(e),n.constFalse),hasActiveAlert:t((e=>X.some(e.activeAlert)),(e=>X.some(e.activeAlert)),(()=>X.none),(e=>X.some(e.activeAlert)),(()=>X.none))},e.changePositionStrategyQueries={useReferenceHeightOnRemove:t(n.constFalse,n.constFalse,n.constFalse,n.constTrue,n.constFalse)},e.select=v,e.removeAlert=S,e.remove=I,e.updateWithAlert=y,e.releaseAlert=(t,i,n,s,a,r)=>Z.v.Capabilities.getAlertReleaser({...S(t,i,n,s,a,r),...e.disposable}),e.unselectable=(e,t,i,n,s)=>Z.v.Capabilities.getUnselectable(L.In.getActiveItem,v(e,t,i,n,s)),e.selectableByAlert=(t,i,n,s,a)=>Z.v.Capabilities.getSelectableByAlert(L.In.getActiveItem,{...e.hasAlertsQueries,...v(t,i,n,s,a)}),e.selectableById=(e,t,i,n,s)=>Z.v.Capabilities.getSelectableById(L.In.getActiveItem,v(e,t,i,n,s)),e.updateMeta=()=>({updateMeta:Z.v.Capabilities.getMetaUpdatable().updateMeta}),e.animatable=(t,i,n,s,a,r)=>Z.v.Capabilities.getAnimatable(t,{...S(t,i,n,s,a,r),...e.hasAlertsQueries}),e.hasPriorityToggle=(t,i)=>Z.v.WithPriority.getHasPriorityToggle({...h(t,i),...e.hasAlertsQueries,...e.disposable});const C=t=>["focused","expanded"].includes(t.visualState.transition.type)&&!e.disposable.isScheduledToDispose(t);function A(e,i){const n=x.Mq.getCardSelections(i);return{nextAlert:t(n.nextAlert,n.nextAlert,(()=>X.none),e.nextAlert,(()=>X.none)),prevAlert:t(n.prevAlert,n.prevAlert,(()=>X.none),e.prevAlert,(()=>X.none))}}function w(){return{updateUserInput:e=>t(T.X.updateUserInput(e),F.R.changeUserInput(e),n.identity,n.identity,n.identity)}}e.alignable={isValidToAlign:t(C,C,n.constFalse,C,n.constFalse)},e.alertIterator=A,e.itemReleaser=(e,t,i)=>{const{removeItemById:n}=P.G.getItemReleaser(e,t,i,Z.v.Capabilities.getItemReleaser());return{removeItemById:n}},e.hasAlerts=Z.v.Capabilities.getHasAlerts,e.getDefaultNextAlertItemFilter=t=>(0,M.W9)(e.isSelectableWithAlertItem,(i=>!e.disposable.isScheduledToDispose(i)&&(0,r.pipe)(i,e.hasAlertsQueries.hasActiveAlert,X.map((e=>t.isRegistered(e.id))),X.getOrElse(n.constFalse)))),e.hasUserInput=w,e.priorityTest=(0,M.W9)(i,(e=>D.$.isPriority(e.activeAlert))),e.verifiable=()=>Z.v.Capabilities.getVerifiable(e.disposable),e.getCapabilities=function(t,i,s,a,r,o,l=(0,n.constant)(X.none),c=x.IG.Default){return{...d(l),...e.disposable,...e.hidable,...e.equatable,...w(),...p(t,s),...h(t,s),...g(t,s),...v(t,s,a,c,r),...I(t,s,c),...S(t,s,o,a,c,r),...y(t,i,s),...e.hasAlertsQueries,...e.changePositionStrategyQueries,...e.alignable,...e.releaseAlert(t,s,o,a,c,r),...e.unselectable(t,s,a,c,r),...e.selectableByAlert(t,s,a,c,r),...e.selectableById(t,s,a,c,r),...e.updateMeta(t),...e.animatable(t,s,o,a,c,r),...e.hasPriorityToggle(t,s),...e.itemReleaser(s,o,a),...e.verifiable(),...e.hasAlerts(A(s,a),e.hasAlertsQueries,(()=>e.getDefaultNextAlertItemFilter(a)))}}}(w||(w={}))},63047:(e,t,i)=>{i.d(t,{Z:()=>n});var n,s=i(40327),a=i(66896),r=i(36156),o=i(5920),l=i(48521),d=i(16892),c=i(4890),u=i(35416),m=i(93494),p=i(73975),h=i(5114),g=i(83078),v=i(95195),S=i(55415);!function(e){let t,i;e.id="IntentDetectionItemId",e.Kind="IntentDetectionItem",e.isIntentDetectionItem=function(t){return t.id===e.id},e.eq=p.fromEquals(((e,t)=>e.hashCode()===t.hashCode())),function(e){let t;!function(e){e.intentDetectionItemShow="intentDetectionItemShow",e.intentDetectionItemExpand="intentDetectionItemExpand",e.intentDetectionItemClick="intentDetectionItemClick",e.intentDetectionItemFeedbackAccurate="intentDetectionItemFeedbackAccurate",e.intentDetectionItemFeedbackInaccurate="intentDetectionItemFeedbackInaccurate",e.intentDetectionItemClose="intentDetectionItemClose",e.intentDetectionItemAccept="intentDetectionItemAccept"}(t=e.Kind||(e.Kind={})),e.isIntentDetectionItemShowAction=function(e){return e.kind===t.intentDetectionItemShow},e.isIntentDetectionItemExpandAction=function(e){return e.kind===t.intentDetectionItemExpand},e.isIntentDetectionItemClickAction=function(e){return e.kind===t.intentDetectionItemClick},e.isIntentDetectionItemFeedbackInaccurateAction=function(e){return e.kind===t.intentDetectionItemFeedbackInaccurate},e.isIntentDetectionItemFeedbackAccurateAction=function(e){return e.kind===t.intentDetectionItemFeedbackAccurate},e.isIntentDetectionItemCloseAction=function(e){return e.kind===t.intentDetectionItemClose},e.isIntentDetectionItemAcceptAction=function(e){return e.kind===t.intentDetectionItemAccept}}(t=e.Event||(e.Event={})),function(e){e.changePosition=e=>t=>new I(t.predictionId,t.label,t.emojiUnicode,t.title,t.browser,t.lensIsPriority,e,t.visualState),e.transitionTo=e=>t=>new I(t.predictionId,t.label,t.emojiUnicode,t.title,t.browser,t.lensIsPriority,t.positionState,l.o.VisualState.to(t.visualState,e)),e.completeTransition=e=>t=>new I(t.predictionId,t.label,t.emojiUnicode,t.title,t.browser,t.lensIsPriority,t.positionState,l.o.VisualState.complete(t.visualState,e)),e.select=e=>t=>(0,s.pipe)(e,h.filter((e=>e.id===t.id)),g.orElse((0,s.pipe)(t,h.fromPredicate((e=>"focused"===e.visualState.transition.type)))),h.fold((()=>{const i=d.s.PositionState.invalidateHeight(t.positionState),n={type:"focused",clockwise:!0},a=(0,s.pipe)(e,h.fold((()=>l.o.VisualState.initial(n)),(()=>l.o.VisualState.to(t.visualState,n))));return new I(t.predictionId,t.label,t.emojiUnicode,t.title,t.browser,t.lensIsPriority,i,a)}),(()=>t))),e.unselect=e=>t=>(0,s.pipe)(e,h.filter((e=>e.id===t.id)),g.orElse((0,s.pipe)(t,h.fromPredicate((e=>"rendered"===e.visualState.transition.type)))),h.fold((()=>{const e=d.s.PositionState.invalidateHeight(t.positionState),i="hidden"===t.visualState.transition.type?t.visualState:l.o.VisualState.to(t.visualState,{type:"rendered",clockwise:!0});return new I(t.predictionId,t.label,t.emojiUnicode,t.title,t.browser,t.lensIsPriority,e,i)}),(()=>t)))}(i=e.Capabilities||(e.Capabilities={}));e.getStateTransformer=t=>({state:i,metadata:n})=>{if(!u.nL.hasItems(i)||!a.R.isMainLens(i.currentLens.id)||!u.nL.isLensview(i))return v.left({state:i,metadata:n});const r=(0,s.pipe)(o.l.find(i.currentLens.items,e.isIntentDetectionItem),h.map(S.pick("value")));return(0,s.pipe)(i,u.nL.getLens,h.chain(((e,t)=>i=>{const n=t.getValue(),r=n?new I(n.predictionId,n.label,n.emojiUnicode,n.title,n.browser,a.R.isPriority(i.id),d.s.PositionState.changeWatched(d.s.PositionState.empty,!0),l.o.VisualState.initial({type:"rendered",clockwise:!0},!1)):null;return(0,s.pipe)(e,h.fold((()=>h.some({lens:i,newIntentDetectionItem:r})),(e=>(null==r?void 0:r.label)===e.label?h.none:h.some({lens:i,newIntentDetectionItem:r}))))})(r,t)),h.map((({lens:e,newIntentDetectionItem:t})=>{let n=(0,s.pipe)(r,h.fold((()=>e.items),(t=>e.items.remove(t.id))));return t&&(n=n.add(t)),u.nL.Prism.getLens().compose(m.v.Prism.items).set(n,i)})),h.getOrElse((()=>i)),(e=>v.left({state:e,metadata:n})))}}(n||(n={}));class I{constructor(e,t,i,s,a,r,o,l){this.predictionId=e,this.label=t,this.emojiUnicode=i,this.title=s,this.browser=a,this.lensIsPriority=r,this.positionState=o,this.visualState=l,this.kind=n.Kind,this.id=n.id,this.renderOptions=c.j.defaultOptions}equals(e){return n.eq.equals(this,e)}hashCode(){return(0,r.NO)({predictionId:this.predictionId,label:this.label,emojiUnicode:this.emojiUnicode,title:this.title,browser:this.browser,lensIsPriority:this.lensIsPriority,positionState:JSON.stringify(this.positionState),visualState:JSON.stringify(this.visualState)})}}},56989:(e,t,i)=>{i.r(t),i.d(t,{ShortenItFeature:()=>G});var n=i(57050),s=i(74850),a=i(13922),r=i(5817),o=i(19751),l=i(85985),d=i(66310),c=i(80900),u=i(17343),m=i(93508),p=i(28043),h=i(76974),g=i(83078),v=i(5114),S=i(38983);class I{constructor(e,t){this._textObserver=e,this._requestAwaitService=t,this._logger=s.Y.create("ShortenItRequestManager"),this._lastActiveRevision=S.h.create(v.none),this._typingDebounceDelay=(0,r.m9)(1),this._typingPaused=this._textObserver.contentChanges.async.pipe(l.h((e=>e.changes.length>0)),d.w((()=>c.H(this._typingDebounceDelay).pipe(u.h(!0),m.O(!1)))),m.O(!0),p.x(),o.d({bufferSize:1,refCount:!0})),this.isCheckingIdle=this._lastActiveRevision.view(v.isNone)}_flush(){this._logger.debug("flushing changes"),this._requestAwaitService.addRequest(Promise.resolve())}canSubmitRequest(){return this._typingPaused.pipe(d.w((e=>e?(this._flush(),c.H(500).pipe(d.w((()=>this.isCheckingIdle)))):h.of(!1))))}onNewRemoteRevision(e){e.sessionJustStarted&&this._onCAPISessionStarted(),this.isCheckingIdle.get()&&this._logger.trace("checking in progress"),this._lastActiveRevision.set(v.some(e.revision))}onRevisionFinished(e){g.contains(e)(this._lastActiveRevision.get())&&(this._logger.trace("checking idle"),this._lastActiveRevision.set(v.none))}_onCAPISessionStarted(){this._logger.debug("session started"),this._lastActiveRevision.set(v.none)}}var b,y=i(17404),C=i(88097),A=i(14601),f=i(32952),w=i(77176),k=i(23063),E=i(24209),R=i(71249);!function(e){e.isReceived=function(e){return e.kind===C.vQ.SummaryState.received},e.isNotFound=function(e){return e.kind===C.vQ.SummaryState.notFound}}(b||(b={}));class _{constructor(e,t){this._alertProcessor=e,this._textObserver=t,this._logger=s.Y.create("ShortenItRequestStateHolder"),this._subs=new A.w,this._summaryRequestState=new Map,this._summaryNotFound=new f.xQ,this._staleRequests=new Map,this._textChangedBeforeSummaryReceived=new f.xQ,this.summaryNotFound=this._summaryNotFound.asObservable(),this.textChangedBeforeSummaryReceived=this._textChangedBeforeSummaryReceived.asObservable(),this._trackSummaryReceived(),this._trackTextChanges()}_trackTextChanges(){this._subs.add(this._textObserver.contentChanges.async.subscribe((e=>{if(!e.deltaChange.isEmpty)for(const e of this._staleRequests.keys())this._staleRequests.set(e,!0)})))}onCAPISessionStarted(){this._summaryRequestState.clear(),this._staleRequests.clear()}onShortenItFinished(e){const t=this._summaryRequestState.get(e);if((null==t?void 0:t.kind)!==C.vQ.SummaryState.received){if(!0===this._staleRequests.get(e))return this._logger.info("request stale",e),void this._textChangedBeforeSummaryReceived.next(e);this._logger.info("summary not found",e),this._summaryRequestState.set(e,{kind:C.vQ.SummaryState.notFound,latency:(0,n.pipe)(v.fromNullable(this._summaryRequestState.get(e)),v.fold((()=>0),(e=>{switch(e.kind){case C.vQ.SummaryState.requestSent:return performance.now()-e.requestTimestamp;case C.vQ.SummaryState.notFound:return e.latency;default:return 0}})))}),this._summaryNotFound.next(e)}else this._staleRequests.delete(e)}onShortenItSubmit(e){this._staleRequests.set(e,!1),this._summaryRequestState.set(e,{kind:C.vQ.SummaryState.requestSent,requestTimestamp:performance.now()})}get(e){return v.fromNullable(this._summaryRequestState.get(e))}_trackSummaryReceived(){const e=this._alertProcessor.alerts.state.pipe(w.U((0,n.flow)(Object.values,Array.from,R.filter(y.S.isShortenItAlertWithSummary))),k.q(1)),t=this._alertProcessor.alerts.changes.pipe(w.U((e=>e.addedAlerts.concat(e.updatedAlerts).filter(y.S.isShortenItAlertWithSummary))));this._subs.add(E.T(e,t).subscribe((e=>{e.forEach((e=>{const t=e.id;this._logger.info("summary received",t),this._summaryRequestState.set(t,{kind:C.vQ.SummaryState.received,latency:(0,n.pipe)(v.fromNullable(this._summaryRequestState.get(t)),v.fold((()=>0),(e=>{switch(e.kind){case C.vQ.SummaryState.requestSent:return performance.now()-e.requestTimestamp;case C.vQ.SummaryState.received:return e.latency;default:return 0}})))})}))})))}dispose(){this._subs.unsubscribe()}}var q=i(36991),D=i(2291),T=i(15646),F=i(75316),x=i(35416),P=i(60797),B=i(16118),N=i(67434),U=i(85321),O=i(13444),H=i(22232),Q=i(8125),L=i(73975),Z=i(26328);function M(e){switch(e){case C.vQ.SummaryState.notRequested:case C.vQ.SummaryState.requested:case C.vQ.SummaryState.requestSent:case C.vQ.SummaryState.invalidated:return"longParagraphOrAILoadingCard";case C.vQ.SummaryState.received:return"summaryCard";case C.vQ.SummaryState.notFound:return"errorCard";default:(0,H.vE)(e)}}class W{constructor(e,t,i){this._gnar=e,this._getSessionUuid=t,this._getRequestState=i}initAssistantTracking(e,t,i,s){const r=new A.w,o=new Map,d=new Map;return r.add(function(e,t){return e.pipe(l.h((0,Q.Kg)(T.lY.isAlertIgnoreAction,T.lY.isAlertApplyAction,T.lY.isAlertResolveAction)),w.U((e=>(0,n.pipe)(t.getById(e.alertId),v.filter(C.bZ.isShortenIt),v.map((()=>e))))),P.oA)}(e,t).subscribe((e=>{switch(e.type){case T.lY.Type.alertIgnore:o.set(e.alertId,"dismissed");break;case T.lY.Type.alertApply:o.set(e.alertId,"accepted");break;case T.lY.Type.alertResolve:o.set(e.alertId,"resolved");break;default:(0,H.vE)(e)}}))),r.add(function(e){return e.pipe(l.h((0,Q.Kg)(T.ut.isCollapseAllEdits,T.ut.isExpandAllEdits,T.ut.isCollapseEdit,T.ut.isExpandEdit)))}(e).subscribe((e=>{var t,i;const n=d.get(e.alertId)||{};switch(e.type){case T.lY.Type.shortenItCollapseAllEdits:d.set(e.alertId,{...n,hideEditsClicked:!0});break;case T.lY.Type.shortenItExpandAllEdits:d.set(e.alertId,{...n,expandEditsClicked:!0});break;case T.lY.Type.shortenItCollapseEdit:d.set(e.alertId,{...n,numEllipsisHides:(null!==(t=n.numEllipsisHides)&&void 0!==t?t:0)+1});break;case T.lY.Type.shortenItExpandEdit:d.set(e.alertId,{...n,numEllipsisExpands:(null!==(i=n.numEllipsisExpands)&&void 0!==i?i:0)+1});break;default:(0,H.vE)(e)}}))),r.add(function(e,t,i,s,r,o){return E.T(t.pipe(w.U(v.some)),i.pipe(u.h(v.none))).pipe(w.U(v.chain((t=>x.nL.hasItems(t)?(0,n.pipe)(a.O.getActiveItemWithAlert(t.currentLens),v.filter(F.C.isShortenItItem),v.map((e=>e.activeAlert)),v.chain((t=>(0,n.pipe)(e.getById(t.id),v.chain(C.bZ.getRawId),v.map((e=>({alert:t,rawAlertId:e}))))))):v.none))),p.x(v.getEq(L.contramap((e=>({id:e.alert.id,activeView:M(e.alert.summaryState)})))(L.getStructEq({id:L.eqString,activeView:L.eqString}))).equals),m.O(v.none),B.G(),N.R((({focusTimestamp:e},[t,i])=>{const a=(0,n.pipe)(t,v.map((e=>e.alert.id)),v.fold(n.constFalse,(e=>(0,n.pipe)(i,v.map((e=>e.alert.id)),g.contains(e))))),l=(0,n.pipe)(i,v.map((e=>e.alert.summaryState)),g.contains(C.vQ.SummaryState.received)),d=(0,n.pipe)(i,v.map((e=>e.alert.summaryState)),g.contains(C.vQ.SummaryState.notFound)),c=[];return(0,n.pipe)(t,g.tap((t=>{const i=t.alert.summaryState===C.vQ.SummaryState.received,s=t.alert.summaryState===C.vQ.SummaryState.notFound,u=v.toNullable(r(t.alert.id))||"unfocused";s?((0,H.kG)("accepted"!==u,"Can't accept a ShortenIt alert that timed-out"),c.push({kind:"summaryNotFoundHide",reason:u,sentenceCount:t.alert.sentenceCount,wordCount:t.alert.wordCount})):i?((0,H.kG)("resolved"!==u,"Can't resolve a ShortenIt alert with summary"),c.push({kind:"summaryAlertHide",alertId:t.alert.id,reason:u,sentenceCount:t.alert.sentenceCount,wordCount:t.alert.wordCount,compressionRatio:D.T.unwrap(t.alert.compressionRatio),numEllipsisExpands:0,numEllipsisHides:0,expandEditsClicked:!1,hideEditsClicked:!1,...o(t.alert.id),numEllipsisEdits:(0,n.pipe)(t.alert.getTransform(),v.chain((e=>v.fromEither(e.content))),v.map((e=>Z.YM(e.alternatives))),v.fold((()=>0),(e=>e.delta.filter(q.s.isDelete).length)))})):t.alert.automaticSummaryRequest?((0,H.kG)("accepted"!==u&&"dismissed"!==u&&"resolved"!==u,"Can't accept/dismiss/resolve a loading ShortenIt alert"),c.push({kind:"summaryAlertLoadingHide",reason:l&&a?"summaryReceived":d&&a?"timeoutReceived":u,duration:performance.now()-e,sentenceCount:t.alert.sentenceCount,wordCount:t.alert.wordCount})):((0,H.kG)("accepted"!==u,"Can't accept a ShortenIt alert without summary"),c.push({kind:"longParagraphAlertHide",reason:l&&a?"summaryReceived":d&&a?"timeoutReceived":u,duration:performance.now()-e,sentenceCount:t.alert.sentenceCount,wordCount:t.alert.wordCount}))}))),(0,n.pipe)(i,g.tap((e=>{d?c.push({kind:"summaryNotFoundShow",reason:a?"timeoutReceived":"focused",sentenceCount:e.alert.sentenceCount,wordCount:e.alert.wordCount,latency:(0,n.pipe)(s(e.rawAlertId),v.getOrElse((()=>0)))}):l?c.push({kind:"summaryAlertShow",reason:a?"summaryReceived":"focused",sentenceCount:e.alert.sentenceCount,wordCount:e.alert.wordCount,compressionRatio:D.T.unwrap(e.alert.compressionRatio),latency:(0,n.pipe)(s(e.rawAlertId),v.getOrElse((()=>0)))}):e.alert.automaticSummaryRequest?c.push({kind:"summaryAlertLoadingShow",sentenceCount:e.alert.sentenceCount,wordCount:e.alert.wordCount}):c.push({kind:"longParagraphAlertShow",sentenceCount:e.alert.sentenceCount,wordCount:e.alert.wordCount})}))),{events:c,focusTimestamp:performance.now()}}),{events:[],focusTimestamp:performance.now()}),w.U((e=>e.events)),U.zg(n.identity))}(t,i.pipe(O.g(100)),s,(e=>(0,n.pipe)(this._getRequestState(e),v.filter((0,Q.Kg)(b.isReceived,b.isNotFound)),v.map((e=>e.latency)))),(e=>v.fromNullable(o.get(e))),(e=>d.get(e)||{})).subscribe((e=>{!function(e,t,i){switch(t.kind){case"longParagraphAlertShow":e.shortenItLongParagraphShow(t.sentenceCount,t.wordCount,i);break;case"longParagraphAlertHide":e.shortenItLongParagraphHide(t.reason,t.sentenceCount,t.wordCount,t.duration,i);break;case"summaryAlertShow":e.shortenItSummaryShow(t.compressionRatio,t.latency,t.sentenceCount,t.wordCount,i,t.reason);break;case"summaryAlertHide":e.shortenItSummaryHide(t.compressionRatio,t.expandEditsClicked,t.hideEditsClicked,t.reason,t.sentenceCount,t.wordCount,t.numEllipsisEdits,t.numEllipsisExpands,t.numEllipsisHides,i);break;case"summaryAlertLoadingShow":e.shortenItSummaryLoadingShow(t.sentenceCount,t.wordCount,i);break;case"summaryAlertLoadingHide":e.shortenItSummaryLoadingHide(t.reason,t.sentenceCount,t.wordCount,t.duration,i);break;case"summaryNotFoundShow":e.shortenItSummaryNotFoundShow(t.latency,t.sentenceCount,t.wordCount,i,t.reason);break;case"summaryNotFoundHide":e.shortenItSummaryNotFoundHide(t.reason,t.sentenceCount,t.wordCount,i);break;default:(0,H.vE)(t)}}(this._gnar,e,(0,n.pipe)(this._getSessionUuid(),v.getOrElse((()=>"")))),"summaryAlertHide"===e.kind&&d.delete(e.alertId)}))),r}}var X=i(84966),K=i(79227),Y=i(4390),j=i(44586),V=i(40151),J=i(78674);class G{constructor(e,t,i,n,a){this._alertProcessor=e,this._textObserver=t,this._requestAwaitService=i,this._getSessionUuid=n,this._gnar=a,this._logger=s.Y.create("ShortenItFeature"),this._requestState=new _(this._alertProcessor,this._textObserver),this._requestManager=new I(this._textObserver,this._requestAwaitService),this._gnarTracking=new W(this._gnar,this._getSessionUuid,(e=>this._requestState.get(e)))}get addStateToRawAlertTransformer(){return e=>{if(X.wQ.isShortenIt(e)){const t=v.toNullable(this._requestState.get(e.id));return{...e,extra_properties:{...e.extra_properties,shorten_it_alert_state:{summaryState:null==t?void 0:t.kind}}}}return e}}onShortenItFinished(e){this._requestState.onShortenItFinished(e)}onNewRemoteRevision(e){e.sessionJustStarted&&this._requestState.onCAPISessionStarted(),this._requestManager.onNewRemoteRevision(e)}onRevisionFinished(e){this._requestManager.onRevisionFinished(e)}initAssistantSession(e,t,i,s,c){return new j.y((()=>{const m=new A.w,h=new f.xQ;return m.add(E.T(function(e,t=(0,r.m9)(.5)){return e.pipe(w.U((e=>x.nL.hasItems(e)?(0,n.pipe)(a.O.getActiveItemWithAlert(e.currentLens),v.filter(F.C.isShortenItItem),v.filter((e=>e.activeAlert.automaticSummaryRequest&&(e.activeAlert.summaryState===C.vQ.SummaryState.notRequested||e.activeAlert.summaryState===C.vQ.SummaryState.invalidated))),v.map((e=>e.activeAlert.id))):v.none)),p.x(v.getEq(L.eqString).equals),J.b(t),o.d({bufferSize:1,refCount:!0}))}(i),e.pipe(l.h(T.ut.isRequestSummaryAction),w.U((e=>v.some(e.alertId)))),this._requestState.textChangedBeforeSummaryReceived.pipe(z(c))).pipe(d.w(v.fold((()=>V.E),(e=>this._requestManager.canSubmitRequest().pipe(l.h((e=>!0===e)),k.q(1),u.h(e)))))).subscribe((e=>{this._logger.info("submitting request for",e),s.sendShortenItSummaryRequest(e),(0,n.pipe)(t.getById(e),v.chain(C.bZ.getRawId),g.tap((e=>this._requestState.onShortenItSubmit(e))))}))),m.add(e.pipe(l.h(T.ut.isRequestSummaryAction)).subscribe((({alertId:e})=>{this._logger.info("received summary request for",e),s.changeShortenItSummaryState(e,"requested")}))),m.add(this._requestState.summaryNotFound.pipe(z(c),P.oA).subscribe((e=>s.changeShortenItSummaryState(e,"notFound")))),m.add(this._requestState.summaryNotFound.pipe(z(c),P.oA,O.g(1500)).subscribe((e=>s.applyFeedback(e,{kind:X.PZ.HIDE,subtype:K.J.getSubTypeFromLens(i.get().currentLens.id)},C.l$.api)))),m.add(this._gnarTracking.initAssistantTracking(e,t,i,h)),()=>{h.next(),m.unsubscribe()}}))}dispose(){this._requestState.dispose()}}function z(e){return w.U((t=>(0,n.pipe)(e.get(),Y.p.find((e=>(0,n.pipe)(C.bZ.getRawId(e.alert),g.contains(t)))),v.map((e=>e.alert.id)))))}},86705:(e,t,i)=>{i.d(t,{v:()=>a});var n=i(27378),s=i(80895);const a=({browser:e,className:t})=>"safari"!==e?n.createElement(s.C,{title:"BETA",kind:"success",className:t}):null},67489:e=>{e.exports={intentDetectionCardContent:"n8ZBv",intentDetectionCardContentExpanded:"_1zJsg",intentDetectionCardContentAccepted:"_2Nm5X",intentDetectionCardEmojiAndTitle:"W04V0",intentDetectionCardEmoji:"_2E35l",intentDetectionCardBetaBadgeAndCloseButton:"bRRgr",intentDetectionCardBetaBadge:"u4Umu",intentDetectionCardCloseButton:"_1kFTv",intentDetectionCardVoteAndBetaBadge:"Szcks",intentDetectionCardExpandedInfo:"_1iUYT"}}}]);