(self.webpackChunk=self.webpackChunk||[]).push([[8600],{53874:(e,n,t)=>{t.d(n,{o:()=>l});var r=t(29511),i=t(27378);const o=async()=>{var e;return null===(e=await(0,r.O)().bgRpc.api.checkAuthPermissions())||void 0===e||e},s=async()=>{var e;return null===(e=await(0,r.O)().bgRpc.api.requestAuthPermissions())||void 0===e||e};function l({checkPermissions:e=o,requestPermissions:n=s}={}){return function({checkPermissions:e,requestPermissions:n}){const[t,r]=(0,i.useState)(),o=Boolean(t),[s,l]=(0,i.useState)(!1);return{needPermissions:o,requestingPermissions:s,bindSignIn:n=>()=>{o||s||e().then((e=>{e?(r(void 0),n()):r((e=>n))}))},onRequestPermissions:()=>{s||(l(!0),n().then((e=>{l(!1),e&&(r(void 0),null==t||t())})))}}}({checkPermissions:e,requestPermissions:n})}},1371:(e,n,t)=>{t.r(n),t.d(n,{LoginReminderPopup:()=>d,LoginReminderPopupView:()=>g});var r=t(5872),i=t(88326),o=t(62111),s=t(27378),l=t(19106),a=t(53874),u=t(24606),m=t(61658);const c=s.createElement(s.Fragment,null,s.createElement("h1",null,"Looks like you got signed out!"),s.createElement("p",null,"In order to continue receiving your personalized Grammarly suggestions, please sign back in.")),p=s.createElement(s.Fragment,null,s.createElement("h1",null,"You’re missing out on your Grammarly Premium features."),s.createElement("h2",null,"Sign back in to receive"),s.createElement("ul",null,s.createElement("li",null,"Advanced grammar checks"),s.createElement("li",null,"Vocabulary enhancements"))),d=({openSignInDialogFromLoginReminder:e,...n})=>{s.useEffect((()=>{l.J.loginReminderPopupShow(),(0,o.T)().loginReminderPopupShow()}),[]);const{bindSignIn:t,...r}=(0,a.o)(),i=t(e);return s.createElement(g,{...r,onSignIn:i,...n})},g=({isFlipped:e,reminderType:n,remove:t,disableLoginReminder:o,closeLoginReminder:l,onSignIn:a,needPermissions:d,requestingPermissions:g,onRequestPermissions:_})=>{const h=(0,r.cs)(m.gButtonPopup,m.loginReminder,d&&m.permission,m[n],e&&m.isFlipped,e&&m.flipped);return s.createElement("div",{className:h},s.createElement("div",{className:(0,r.cs)(m.popupFooter,e&&m.isFlipped)},"▲"),s.createElement(i.M,{clickHandler:()=>{l(),t()}},s.createElement("button",{className:m.close})),d?s.createElement(s.Fragment,null,s.createElement("h1",null,"Chrome requires your permission to let Grammarly sign you in"),s.createElement("p",null,"Please follow your browser′s prompts to allow Grammarly to read grammarly.com site data."),s.createElement("div",null,s.createElement(u.z,{kind:"success",onClick:_,containerClassName:m.mainButton},"Allow ",s.createElement(u.g,null,"and continue to sign in"))),s.createElement("footer",null,g?s.createElement(s.Fragment,null,"We are requesting your browser to grant permission."):s.createElement(s.Fragment,null,"Next, your browser will ask you to grant permission."))):s.createElement(s.Fragment,null,"free"===n?c:p,s.createElement(u.z,{kind:"success",onClick:a,containerClassName:m.mainButton},"Sign back in"),s.createElement(u.z,{kind:"link",onClick:o,containerClassName:m.secondaryButton},"Don’t show this again")))}},61658:e=>{e.exports={gButtonPopup:"_1kF5v",newDataControl:"_2DXpn",showWrapper:"jbUGk",flipped:"_33Y70",title:"_3j0IH",icon:"_3mzPB",button:"_3ayiu",buttonText:"_3iTGv",popupFooter:"_1Pn79",isFlipped:"mrPCR",settings:"_1wln3",text:"_1igtd",bold:"_233YR",link:"_3Zolz",secondary:"_3CC0d",firstTime:"eytxh",close:"_1Q8MJ",disable:"_2GBXV",gdocs:"_1rwC7",gdocsBeta:"_3Nt7c",header:"_2QN8E",headerUnavailable:"_3oKby",cardsIcon:"_2p0cU",bubbleArrow:"_3P-V4",unavailablePopup:"_3ItKT",loginReminder:"_3nwkh",permission:"_3t67i",secondaryButton:"_1gDFt",onboarding:"_36Myk",chipmunkGButtonCalloutPopup:"_1BqSc",btn:"_36yMW",buttonContainer:"_2uDiN",primaryButtonContainer:"BPm96",primaryButton:"_33u2w",secondaryButtonContainer:"_3B1gP",hardDismiss:"_1Oq8R",softDismiss:"_3x--s",calloutArrow:"_1DWDs",warningPopup:"dcXJa",warning:"_3IVIe",ctaBtnGroup:"_1Bbg8",ctaButton:"_1mTiW",later:"_22eWb",managedSSOControl:"nF7Y6",illustration:"ThWjl",signInWithSSO:"_3cCtR",signInWithSSO2:"_2Z9Lo"}}}]);