(self.webpackChunk=self.webpackChunk||[]).push([[8928],{79227:(e,t,r)=>{r.d(t,{J:()=>i,k:()=>_});var i,n=r(71249),a=r(95195),o=r(23330),s=r(35214),p=r(64015),d=r(57050),h=r(40327),l=r(84966),c=r(5114),f=r(95574),u=r(81670),g=r(81531),m=r(88097),w=r(66896);!function(e){e.getSubTypeFromLens=e=>w.R.isPriority(e)||w.R.isPriorityOutcomeId(e)?l.e3.SidebarPriority:l.e3.Sidebar}(i||(i={}));class _{constructor(e,t){this._alertsReader=e,this._ops=t,this._log=g.Monitoring.Logging.getLogger("AlertsServiceImpl"),this._findAlert=e=>(0,h.pipe)(e,this._alertsReader.getById,a.fromOption((()=>new Error(`alert ${e} not found in the repo`)))),this.undoBulk=(0,d.flow)(p.DZ((0,d.flow)(this._alertsReader.getById,c.filter(m.bZ.isBulkApplied))),(e=>this._ops.undoApplied(e,m.bZ.State.Applied.Method.Bulk)()),a.getOrElse((e=>{throw this._log.error("Could not undo bulk-applied alerts",e),e}))),this.getHighlightRanges=(0,d.flow)(this._findAlert,a.map((e=>e.getHighlightRanges()))),this.hasNewRangesForUpdate=(0,d.flow)(this._findAlert,a.map((e=>e.hasNewRangesForUpdate))),this.applyPendingRangesUpdate=(0,d.flow)(this._findAlert,a.map((e=>e.applyPendingRangesUpdate()))),this.getAppliedRanges=(0,d.flow)(this._alertsReader.getById,a.fromOption((()=>new Error("alert not found in the repo"))),a.filterOrElse(m.bZ.isApplicableAlert,(e=>new Error(`alert is not applicable: ${e.alertType}`))),a.map((e=>e.getAppliedRanges())))}apply(e,t){const{alternativeIndex:r,source:i}=t;return this._log.trace("apply",e),(0,h.pipe)(this._findAlert(e),a.chain(a.fromPredicate(m.bZ.isApplicableAlert,(()=>new Error("cannot apply not applicable alert")))),a.chain((e=>(0,h.pipe)(f.tryCatchError((()=>e.apply(t))),a.mapLeft((t=>(this._log.error("apply single alert error",{error:t,alert:e.toLiteAlert(),alternativeIndex:r,source:i}),t)))))))}applyBulk(e,t){this._log.trace("applyBulk",e),this.sendBatchFeedback(e,l.DI.BULK_ACCEPTED,t);const r=(0,h.pipe)(e,u.T.fromArray((e=>(0,h.pipe)(this._findAlert(e),a.mapLeft((t=>(0,d.tuple)(t,{id:e}))),a.chain(a.fromPredicate(m.bZ.isRegisteredApplicableAlert,(e=>(0,d.tuple)(new Error("cannot apply not applicable or non-registered alert"),e.toLiteAlert())))),a.chain(a.fromPredicate((e=>l.wQ.withTransformJson(e._raw)),(e=>(0,d.tuple)(new Error("Only alerts with transformJSON can be bulk applied"),e.toLiteAlert())))),a.mapLeft((([e,t])=>(this._log.error(e.message,t),e)))))));return(0,h.pipe)(r,u.T.flatMap(n.getMonoid(),(e=>(0,h.pipe)(this._ops._applyTransformJson({alerts:e.map((e=>({alert:e,alternative:m.bZ.getApplicableAlternative(e,0)}))),source:m.l$.api,method:m.bZ.State.Applied.Method.Bulk,feedbackSubtype:t}),o.g_((t=>()=>(this._log.error("applyBulk error",t),u.T.of([],e.map((e=>e.id))))),(()=>()=>u.T.of(e.map((e=>e.id))))))())))}confirmApplied(e){return this._log.trace("commitApplied",e),(0,h.pipe)(e,u.T.fromArray((0,d.flow)(this._findAlert,a.map(m.Ev.castApplied))),a.mapLeft((e=>new Error(`Error on trying to confirm applied alerts: ${e.rejected.join(",")}`))),a.chain((e=>this._ops._confirmApplied(e)())))}dismissBatch(e,t){return this._log.trace("dismissBatch",e),(0,h.pipe)(e.map((0,d.flow)(this._findAlert,a.map((e=>[e])))),(0,s.fold)(y),a.chain((e=>this._ops._dismissBatch(e,t)())))}applyFeedback(e,t,r){return this._log.trace("sendFeedback",{alertId:e,type:t.kind}),(0,h.pipe)(this._findAlert(e),a.chain((e=>this._ops._alertFeedback(e,t,r)())))}sendBatchFeedback(e,t,r){return this._log.trace("sendBatchFeedback",{alertIds:e,type:t}),(0,h.pipe)(e,u.T.fromArray(this._findAlert),u.T.tapFailure((e=>this._log.error("Cannot send batch feedback for alerts",e.rejected))),u.T.foldSuccess((e=>a.right(this._ops._alertBatchFeedback(e,t,r)()))))}takeReference(e,t){return this._log.trace("takeReference",{alertId:e.id,from:t}),(0,h.pipe)(this._findAlert(e.id),a.chain((e=>e.takeReference(t))))}changeMuteState(e,t){return this._log.trace("changeMuteState",e),(0,h.pipe)(e,u.T.fromArray((e=>this._findAlert(e.id))),u.T.flatMap(n.getMonoid(),(e=>(0,h.pipe)(this._ops._changeMuteState(e,t)(),a.mapLeft((e=>(this._log.error("Can not change mute state",e),e))),f.unsafeGet))))}changeGapValue(e,t){return(0,h.pipe)(this._findAlert(e),a.chain((e=>this._ops._changeGapValue(e,t)())))}changeSmartPhrasesFeedback(e,t){return(0,h.pipe)(this._findAlert(e),a.chain((e=>this._ops._changeSmartPhrasesFeedback(e,t)())))}rotateSmartPhrasesReplacements(e){return(0,h.pipe)(this._findAlert(e),a.chain((e=>this._ops._rotateSmartPhrasesReplacements(e)())))}discardSmartPhrasesReplacement(e,t){return(0,h.pipe)(this._findAlert(e),a.chain((e=>this._ops._discardSmartPhrasesReplacement(e,t)())))}changeTakeawayFeedback(e,t){return(0,h.pipe)(this._findAlert(e),a.chain((e=>this._ops._changeTakeawayFeedback(e,t)())))}changeSentenceLevelBrandTonesFeedback(e,t){return(0,h.pipe)(this._findAlert(e),a.chain((e=>this._ops._changeSentenceLevelBrandTonesFeedback(e,t)())))}changeShortenItSummaryState(e,t){return(0,h.pipe)(this._findAlert(e),a.chain((e=>this._ops._changeShortenItSummaryState(e,t)())))}sendShortenItSummaryRequest(e){return(0,h.pipe)(this._findAlert(e),a.chain((e=>this._ops._commitShortenItSummaryRequest(e)())))}changeToneAIToneAlternative(e,t){return(0,h.pipe)(this._findAlert(e),a.chain((e=>this._ops._changeToneAIToneAlternative(e,t)())))}}const v=n.getMonoid(),y=(0,a.getApplyMonoid)(v)},4390:(e,t,r)=>{r.d(t,{p:()=>i});var i,n=r(22690),a=r(57050),o=r(40327),s=r(64681),p=r(92843),d=r(93756),h=r(81670),l=r(19429),c=r(70996),f=r(7410),u=r(88570);!function(e){let t;!function(e){e.show=p.v.getShow(n._3,c.h.show),e.eq=p.v.getEq(c.h.Id.ord,c.h.ord),e.empty=()=>p.v.empty(),e.toRegistered=function(e){return p.v.fromMutation((t=>{(0,o.pipe)(e,p.v.forEach(((e,r)=>c.h.isRegistered(e)&&t.set(r,d.t$(e))),((e,r,i)=>{c.h.isRegistered(e)?c.h.isRegistered(r)?t.set(i,d.Hk(e,r)):t.set(i,d.t$(e)):c.h.isRegistered(r)&&t.set(i,d.F2(r))}),((e,r)=>c.h.isRegistered(e)&&t.set(r,d.F2(e)))))}))},e.filter=function(e){return p.v.filter(e,((t,r)=>e(t)&&e(r)),e)}}(t=e.Diff||(e.Diff={})),e.empty=f.v.iso.wrap(f.v.empty),e.eq=s.Eh(f.v.eqShow),e.get=function(e){return(0,a.flow)(f.v.iso.unwrap,f.v.get(e))},e.reduce=function(e,t){return(0,a.flow)(f.v.iso.unwrap,f.v.reduce(e,t))},e.diff=function(e,t){return f.v.diff(f.v.iso.unwrap(e),f.v.iso.unwrap(t))},e.isEmpty=function(e){return 0===f.v.iso.unwrap(e).entries.size},e.find=function(e){return(0,a.flow)(f.v.iso.unwrap,f.v.find(e))},e.size=function(){return(0,a.flow)(f.v.iso.unwrap,f.v.size)},e.from=function(e){return(0,o.pipe)(f.v.createDiff({added:e.reduce(((e,t)=>e.set(t.id,c.h.create(t))),new Map)}),h.T.recover(a.constVoid),u.r.applyDiff,l.UI((0,a.flow)(h.T.recover(a.constVoid),f.v.iso.wrap)))(f.v.empty)}}(i||(i={}))},7410:(e,t,r)=>{r.d(t,{v:()=>i});var i,n=r(71249),a=r(22690),o=r(40327),s=r(64681),p=r(92843),d=r(5114),h=r(22232),l=r(95574),c=r(43675),f=r(95195),u=r(93756),g=r(90329),m=r(73975),w=r(20976),_=r(70996);!function(e){function t(e,t){return r=>r.order.reduce(((e,i)=>((0,h.kG)(r.entries.has(i),"got corrupted state"),t(e,r.entries.get(i)))),e)}function r({added:e=new Map,updated:t=new Map,removed:r=new Map}){const i=new Map,n=p.v.fromMutation((n=>{r.forEach(((e,t)=>{n.set(t,u.t$(e))})),e.forEach(((e,t)=>{n.has(t)?i.set(t,`alert add overlaps with alert remove: toAdd(${_.h.show.show(e)} overlapWith(${u.ZN(_.h.show,_.h.show).show(n.get(t))}))`):n.set(t,u.F2(e))})),t.forEach((([e,t],r)=>{n.has(r)?i.set(r,`alert update overlaps with unexpected alert add/remove: toUpdate(${_.h.show.show(t)}) overlapWith(${u.ZN(_.h.show,_.h.show).show(n.get(r))}))`):n.set(r,u.Hk(e,t))}))}));return i.size>0?f.left({recovered:n,rejected:i}):f.right(n)}e.iso=s.k4(),e.empty={entries:new Map,order:[],latestChangeDiff:p.v.empty(),diffVersion:0},e.get=function(e){return t=>d.fromNullable(t.entries.get(e))},e.find=function(e){return t(d.none,((t,r)=>(0,o.pipe)(t,d.alt((()=>d.fromPredicate(e)(r))))))},e.reduce=t,e.size=e=>e.entries.size,e.diff=function(e,t){return 0===e.diffVersion?l.unsafeGet(r({added:t.entries})):e.diffVersion+1===t.diffVersion?t.latestChangeDiff:c.symmetricDiff(_.h.ord)(e.entries,t.entries)},e.applyDiff=function(e){return t=>{const r=c.leftToRight(c.Merger.createStrict(_.h.ordShow),t.entries,e);return(0,o.pipe)(r,f.bimap((r=>{const i=p.v.fromMutation((t=>{(0,o.pipe)(e,p.v.forEach(((e,i)=>!r.rejected.has(i)&&t.set(i,u.t$(e))),((e,i,n)=>!r.rejected.has(n)&&t.set(n,u.Hk(e,i))),((e,i)=>!r.rejected.has(i)&&t.set(i,u.F2(e)))))}));return{recovered:y(r.recovered,i,t.diffVersion),rejected:r.rejected}}),(r=>y(r,e,t.diffVersion))))}},e.applyDiffLoose=function(e){return t=>{const r=c.leftToRight(c.Merger.createLoose(_.h.ordShow),t.entries,e);return(0,o.pipe)(r,f.bimap((r=>({recovered:y(r.recovered,e,t.diffVersion),rejected:r.rejected})),(r=>y(r,e,t.diffVersion))))}},e.createDiff=r,e.toJSON=function(e){return{entries:Array.from(e.entries),order:e.order,latestChangeDiff:p.v.toJSON(e.latestChangeDiff),diffVersion:e.diffVersion}},e.diffEqShow=Object.assign(Object.assign({},p.v.getEq(_.h.Id.ord,_.h.ord)),p.v.getShow(_.h.Id.show,_.h.show));const i=Object.assign(Object.assign({},g.Eh(_.h.Id.ord,_.h.ord)),g.ZN(_.h.Id.show,_.h.show)),v=Object.assign(Object.assign({},n.getEq(_.h.Id.ord)),n.getShow(_.h.Id.show));function y(e,t,r){return{entries:e,order:(0,o.pipe)(e,g.VO(_.h.ord),n.map((e=>e.id))),latestChangeDiff:t,diffVersion:r+1}}e.contentEqShow=Object.assign(Object.assign({},m.getStructEq({entries:i,order:v,latestChangeDiff:w.eqEmpty,diffVersion:w.eqEmpty})),a.aM({entries:i,order:v,latestChangeDiff:e.diffEqShow,diffVersion:a.yt})),e.eqShow=Object.assign(Object.assign({},m.getStructEq({entries:i,order:v,latestChangeDiff:e.diffEqShow,diffVersion:m.eqNumber})),a.aM({entries:i,order:v,latestChangeDiff:e.diffEqShow,diffVersion:a.yt}))}(i||(i={}))},88570:(e,t,r)=>{r.d(t,{r:()=>i});var i,n=r(57050),a=r(95195),o=r(7410);!function(e){e.empty=o.v.empty,e.applyDiff=function(e){return(0,n.flow)(o.v.applyDiffLoose(e),a.mapLeft((e=>({recovered:e.recovered,rejected:e.rejected}))))},e.toCheckingResult=function(e){return o.v.iso.wrap(e)}}(i||(i={}))},20976:(e,t,r)=>{r.r(t),r.d(t,{Contravariant:()=>n.Contravariant,URI:()=>n.URI,contramap:()=>n.contramap,eq:()=>n.eq,eqBoolean:()=>n.eqBoolean,eqDate:()=>n.eqDate,eqNumber:()=>n.eqNumber,eqStrict:()=>n.eqStrict,eqString:()=>n.eqString,fromEquals:()=>n.fromEquals,getMonoid:()=>n.getMonoid,getStructEq:()=>n.getStructEq,getTupleEq:()=>n.getTupleEq,strictEqual:()=>n.strictEqual,eqToInvariant:()=>a,eqEmpty:()=>o});var i=r(22232),n=r(73975);function a(e){return{equals:function(t,r){return(0,i.kG)(e.equals(t,r),"absurd state accured,\n"+e.show(t)+"\ndoes not equal to:\n"+e.show(r)),!0}}}var o={equals:function(){return!0}}}}]);