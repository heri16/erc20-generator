(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{309:function(e,t,n){"use strict";var a=n(1),r=n(310);a({target:"String",proto:!0,forced:n(311)("link")},{link:function(e){return r(this,"a","href",e)}})},310:function(e,t,n){var a=n(24),r=/"/g;e.exports=function(e,t,n,o){var i=String(a(e)),s="<"+t;return""!==n&&(s+=" "+n+'="'+String(o).replace(r,"&quot;")+'"'),s+">"+i+"</"+t+">"}},311:function(e,t,n){var a=n(2);e.exports=function(e){return a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},312:function(e,t,n){var a=n(1),r=n(4),o=n(92),i=[].slice,s=function(e){return function(t,n){var a=arguments.length>2,r=a?i.call(arguments,2):void 0;return e(a?function(){("function"==typeof t?t:Function(t)).apply(this,r)}:t,n)}};a({global:!0,bind:!0,forced:/MSIE .\./.test(o)},{setTimeout:s(r.setTimeout),setInterval:s(r.setInterval)})},313:function(e,t,n){"use strict";n.r(t);n(95),n(63),n(94),n(309),n(312),n(91);var a=n(42),r={methods:{isMobile:function(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch(e){return!1}},makeToast:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.$bvToast.toast(t,{title:e,variant:n,solid:!0})}}},o={name:"Generator",mixins:[n(304).a,r],data:function(){return{loading:!0,currentNetwork:null,trxHash:"",transactionStarted:!1,makingTransaction:!1,formDisabled:!1,token:{name:"",symbol:"",decimals:18,cap:"",initialBalance:""},enableTransfer:!0,finishMinting:!1}},mounted:function(){this.currentNetwork=this.getParam("network")||this.network.default,this.initDapp()},methods:{initDapp:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.network.current=e.network.list[e.currentNetwork],t.prev=1,t.next=4,e.initWeb3(e.currentNetwork,!0);case 4:e.initToken(),e.loading=!1,t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0),e.makeToast("Some errors occurred",t.t0,"danger");case 12:case"end":return t.stop()}}),t,null,[[1,8]])})))()},generateToken:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$refs.observer.validate().then(function(){var t=Object(a.a)(regeneratorRuntime.mark((function t(n){var a,r,o,i,s,l,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=31;break}if(e.metamask.installed){t.next=6;break}return e.makeToast("Warning","To create a Token please install MetaMask!","danger"),t.abrupt("return");case 6:if(e.metamask.netId===e.network.current.id){t.next=9;break}return e.makeToast("Warning","Your MetaMask in on the wrong network. Please switch on ".concat(e.network.current.name," and try again!"),"warning"),t.abrupt("return");case 9:if(a=e.token.name,r=e.token.symbol.toUpperCase(),o=new e.web3.BigNumber(e.token.decimals),i=new e.web3.BigNumber(e.token.cap).mul(Math.pow(10,e.token.decimals)),s=new e.web3.BigNumber(e.token.initialBalance).mul(Math.pow(10,e.token.decimals)),l=e.enableTransfer,c=e.finishMinting,t.prev=16,e.trxHash="",e.formDisabled=!0,e.makingTransaction=!0,e.legacy){t.next=23;break}return t.next=23,e.web3Provider.enable();case 23:setTimeout((function(){e.contracts.token.new(a,r,o,i,s,l,c,{from:e.web3.eth.coinbase,data:e.contracts.token.bytecode},(function(t,n){t?(console.log(t),e.makingTransaction=!1,e.formDisabled=!1,e.makeToast("Some error occurred",t.message,"danger")):n.address?(e.token.address=n.address,e.token.link=e.network.current.etherscanLink+"/token/"+e.token.address,e.$forceUpdate(),e.makeToast("Well done!","Your token has been deployed at ".concat(e.token.address),"success")):(e.transactionStarted=!0,e.trxHash=n.transactionHash,e.trxLink=e.network.current.etherscanLink+"/tx/"+e.trxHash)}))}),500),t.next=31;break;case 26:t.prev=26,t.t0=t.catch(16),e.makingTransaction=!1,e.formDisabled=!1,e.makeToast("Some error occurred",t.t0.message,"danger");case 31:case"end":return t.stop()}}),t,null,[[16,26]])})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){console.log(t),e.makingTransaction=!1,e.makeToast("Some error occurred",t.message,"danger")}));case 1:case"end":return t.stop()}}),t)})))()},updateInitialBalance:function(){this.token.initialBalance=this.finishMinting?this.token.cap:this.token.initialBalance},getParam:function(e){var t={};return window.location.href.replace(location.hash,"").replace(/[?&]+([^=&]+)=?([^&]*)?/gi,(function(e,n,a){t[n]=void 0!==a?a:""})),e?t[e]?t[e]:null:t}}},i=n(41),s=Object(i.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-jumbotron",{staticClass:"mb-0",attrs:{"bg-variant":"dark","text-variant":"white",header:"ERC20 Token Generator",lead:"Create your Token for FREE",fluid:""}},[n("p",[n("b-img",{attrs:{src:"https://img.shields.io/badge/version-3.0.4-blue"}}),e._v(" "),n("b-link",{attrs:{href:"https://travis-ci.org/github/vittominacori/erc20-generator",target:"_blank"}},[n("b-img",{attrs:{src:"https://travis-ci.org/vittominacori/erc20-generator.svg?branch=master"}})],1),e._v(" "),n("b-link",{attrs:{href:"https://coveralls.io/github/vittominacori/erc20-generator",target:"_blank"}},[n("b-img",{attrs:{src:"https://coveralls.io/repos/github/vittominacori/erc20-generator/badge.svg?branch=master"}})],1)],1),e._v(" "),n("p",[e._v("Easily deploy Smart Contract for a Standard, Capped, Mintable, Burnable ERC20 Token.")]),e._v(" "),n("hr",{staticClass:"my-4"}),e._v(" "),n("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:{duration:1e3,offset:-50,updateHistory:!1},expression:"{ duration: 1000, offset: -50, updateHistory: false }"}],staticClass:"btn btn-lg btn-outline-warning",attrs:{href:"#token-generator"}},[e._v("\n            Create a Token\n        ")]),e._v(" "),n("b-button",{attrs:{to:"/docs.html",size:"lg",variant:"light"}},[e._v("\n            Documentation\n        ")])],1),e._v(" "),n("b-row",[n("b-col",{staticClass:"mb-3 p-0",attrs:{lg:"10","offset-lg":"1"}},[e.loading?e._e():n("b-card",{attrs:{"bg-variant":"transparent","border-variant":"0"}},[n("b-alert",{attrs:{show:"",variant:"primary"}},[e._v("\n                    NOTE: to use this app we suggest to install "),n("a",{attrs:{href:"https://metamask.io/",target:"_blank"}},[e._v("MetaMask")]),e._v(" extension on Chrome Desktop.\n                    Use any other wallet at your own risk.\n                ")]),e._v(" "),e.makingTransaction||e.transactionStarted?n("b-card",{staticClass:"mt-3",attrs:{header:"Making transaction...","header-bg-variant":"info","header-text-variant":"white"}},[e.trxHash?n("div",[n("b",[e._v("Well! Transaction done!")]),n("br"),e._v("\n                        Transaction id "),n("a",{attrs:{href:e.trxLink,target:"_blank"}},[n("span",{domProps:{innerHTML:e._s(e.trxHash)}})]),n("br"),e._v("\n\n                        Retrieving Token.\n                        "),e.token.address?n("div",[n("b",[e._v("Your Token")]),e._v(" "),n("b-link",{attrs:{href:e.token.link,target:"_blank"}},[n("span",{domProps:{innerHTML:e._s(e.token.address)}})])],1):n("div",[e._v("Please wait...")])]):n("div",[e._v("Please wait...")])]):e._e(),e._v(" "),e.makingTransaction?e._e():n("ValidationObserver",{ref:"observer",attrs:{id:"token-generator",tag:"form"},on:{submit:function(t){return t.preventDefault(),e.generateToken()}}},[n("fieldset",{attrs:{disabled:e.formDisabled}},[n("b-row",[n("b-col",{attrs:{lg:"4"}},[n("b-card",{staticClass:"mt-3",attrs:{header:"Token Details","header-bg-variant":"dark","header-text-variant":"white"}},[n("ValidationProvider",{attrs:{name:"token name",rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[n("b-form-group",{attrs:{description:"Choose a name for your token.",label:"Token name *","label-for":"tokenName"}},[n("b-form-input",{class:{"is-invalid":a.length>0},attrs:{id:"tokenName",name:"tokenName",placeholder:"Your token name",size:"lg",maxlength:"20"},model:{value:e.token.name,callback:function(t){e.$set(e.token,"name","string"==typeof t?t.trim():t)},expression:"token.name"}}),e._v(" "),n("small",{directives:[{name:"show",rawName:"v-show",value:a.length>0,expression:"errors.length > 0"}],staticClass:"text-danger"},[e._v("\n                                                "+e._s(a[0])+"\n                                            ")])],1)]}}],null,!1,1959070492)}),e._v(" "),n("ValidationProvider",{attrs:{name:"token symbol",rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[n("b-form-group",{attrs:{description:"Choose a symbol for your token (usually 3-5 chars).",label:"Token symbol *","label-for":"tokenSymbol"}},[n("b-form-input",{class:{"is-invalid":a.length>0},attrs:{id:"tokenSymbol",name:"tokenSymbol",placeholder:"Your token symbol",size:"lg",maxlength:"5"},model:{value:e.token.symbol,callback:function(t){e.$set(e.token,"symbol","string"==typeof t?t.trim():t)},expression:"token.symbol"}}),e._v(" "),n("small",{directives:[{name:"show",rawName:"v-show",value:a.length>0,expression:"errors.length > 0"}],staticClass:"text-danger"},[e._v("\n                                                "+e._s(a[0])+"\n                                            ")])],1)]}}],null,!1,704265056)}),e._v(" "),n("ValidationProvider",{attrs:{name:"token decimals",rules:{required:!0,numeric:!0,min_value:0,max_value:36}},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[n("b-form-group",{attrs:{description:"Insert the decimal precision of your token. If you don't know what to insert, use 18.",label:"Token decimals *","label-for":"tokenDecimals"}},[n("b-form-input",{class:{"is-invalid":a.length>0},attrs:{id:"tokenDecimals",name:"tokenDecimals",placeholder:"Your token decimals",type:"number",size:"lg",step:"1"},model:{value:e.token.decimals,callback:function(t){e.$set(e.token,"decimals","string"==typeof t?t.trim():t)},expression:"token.decimals"}}),e._v(" "),n("small",{directives:[{name:"show",rawName:"v-show",value:a.length>0,expression:"errors.length > 0"}],staticClass:"text-danger"},[e._v("\n                                                "+e._s(a[0])+"\n                                            ")])],1)]}}],null,!1,1866992299)}),e._v(" "),n("ValidationProvider",{attrs:{name:"token max supply",rules:{required:!0,numeric:!0,min_value:1,max_value:1e15}},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[n("b-form-group",{attrs:{description:"Insert the maximum number of tokens available.",label:"Total supply *","label-for":"tokenCap"}},[n("b-form-input",{class:{"is-invalid":a.length>0},attrs:{id:"tokenCap",name:"tokenCap",placeholder:"Your token max supply",type:"number",size:"lg",step:"1"},on:{update:e.updateInitialBalance},model:{value:e.token.cap,callback:function(t){e.$set(e.token,"cap","string"==typeof t?t.trim():t)},expression:"token.cap"}}),e._v(" "),n("small",{directives:[{name:"show",rawName:"v-show",value:a.length>0,expression:"errors.length > 0"}],staticClass:"text-danger"},[e._v("\n                                                "+e._s(a[0])+"\n                                            ")])],1)]}}],null,!1,1270358801)}),e._v(" "),n("ValidationProvider",{attrs:{name:"token initial supply",rules:{required:!0,numeric:!0,min_value:0,max_value:e.token.cap||0}},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[n("b-form-group",{attrs:{description:"Insert the initial number of tokens available. Will be put in your account.",label:"Initial supply *","label-for":"tokenInitialBalance"}},[n("b-form-input",{class:{"is-invalid":a.length>0},attrs:{id:"tokenInitialBalance",name:"tokenInitialBalance",placeholder:"Your token initial supply",type:"number",disabled:e.finishMinting,size:"lg",step:"1"},model:{value:e.token.initialBalance,callback:function(t){e.$set(e.token,"initialBalance","string"==typeof t?t.trim():t)},expression:"token.initialBalance"}}),e._v(" "),n("small",{directives:[{name:"show",rawName:"v-show",value:a.length>0,expression:"errors.length > 0"}],staticClass:"text-danger"},[e._v("\n                                                "+e._s(a[0])+"\n                                            ")])],1)]}}],null,!1,2947137112)})],1)],1),e._v(" "),n("b-col",{attrs:{lg:"8"}},[n("b-card",{staticClass:"mt-3",attrs:{header:"Advanced","header-bg-variant":"dark","header-text-variant":"white"}},[n("b-row",[n("b-col",{attrs:{lg:"12"}},[n("b-form-group",{attrs:{description:"Choose your Network.",label:"Network *","label-for":"network"}},[n("b-form-select",{attrs:{id:"network",size:"lg"},on:{input:e.initDapp},model:{value:e.currentNetwork,callback:function(t){e.currentNetwork=t},expression:"currentNetwork"}},e._l(e.network.list,(function(t,a){return n("option",{domProps:{value:a}},[e._v(e._s(t.name)+"\n                                                    ")])})),0)],1),e._v(" "),"mainnet"!==e.currentNetwork?n("b-alert",{attrs:{show:"",variant:"warning"}},[n("strong",[e._v("\n                                                    You selected a TEST Network.\n                                                ")]),e._v(" "),n("hr"),e._v("\n                                                To deploy on Main Network you must select Main Ethereum Network.\n                                            ")]):e._e()],1)],1),e._v(" "),n("b-row",[n("b-col",{attrs:{lg:"12"}},[n("b-form-group",{attrs:{description:"Choose to enable transfer during deploy or enable manually later.","label-for":"enableTransfer"}},[n("b-form-checkbox",{attrs:{size:"lg",switch:""},model:{value:e.enableTransfer,callback:function(t){e.enableTransfer=t},expression:"enableTransfer"}},[e._v("\n                                                    Enable transfer\n                                                ")])],1),e._v(" "),e.enableTransfer?e._e():n("b-alert",{attrs:{show:"",variant:"warning"}},[n("strong",[e._v("\n                                                    Tokens won't be transferable until you call the\n                                                    "),n("i",[e._v("enableTransfer")]),e._v(" function.\n                                                ")]),e._v(" "),n("hr"),e._v("\n                                                Only people (or smart contracts) with "),n("i",[e._v("OPERATOR")]),e._v(" role will be\n                                                able to transfer tokens."),n("br"),e._v("\n                                                Contract creator will be OPERATOR by default, so he can transfer\n                                                tokens also when transfer is not enabled."),n("br"),e._v("\n                                                You can also add or remove the OPERATOR role to addresses."),n("br"),e._v("\n                                                This is because, by business choices, you may decide not to enable\n                                                transfer until a specific time.\n                                            ")]),e._v(" "),e.enableTransfer?n("b-alert",{attrs:{show:"",variant:"info"}},[n("strong",[e._v("\n                                                    Everyone will be able to transfer tokens after deploy.\n                                                ")]),e._v(" "),n("hr"),e._v("\n                                                If you decide not to enable transfer until a specific time,\n                                                disable this option and call the\n                                                "),n("i",[e._v("enableTransfer")]),e._v(" function manually later.\n                                            ")]):e._e()],1)],1),e._v(" "),n("b-row",[n("b-col",{attrs:{lg:"12"}},[n("b-form-group",{attrs:{description:"Choose to disable minting during deploy or disable manually later.","label-for":"finishMinting"}},[n("b-form-checkbox",{attrs:{size:"lg",switch:""},on:{input:e.updateInitialBalance},model:{value:e.finishMinting,callback:function(t){e.finishMinting=t},expression:"finishMinting"}},[e._v("\n                                                    Disable minting\n                                                ")])],1),e._v(" "),e.finishMinting?n("b-alert",{attrs:{show:"",variant:"warning"}},[n("strong",[e._v("\n                                                    You won't be able to generate other tokens.\n                                                ")]),e._v(" "),n("hr"),e._v("\n                                                Your initial supply will be equal to total supply.\n                                            ")]):e._e(),e._v(" "),e.finishMinting?e._e():n("b-alert",{attrs:{show:"",variant:"info"}},[n("strong",[e._v("\n                                                    You will be able to generate tokens up to your total supply.\n                                                ")]),e._v(" "),n("hr"),e._v("\n                                                You can add or remove the MINTER role to addresses."),n("br"),e._v("\n                                                When you decide to disable minting you must call the\n                                                "),n("i",[e._v("finishMinting")]),e._v(" function manually.\n                                            ")])],1)],1)],1),e._v(" "),n("b-row",{staticClass:"mt-3"},[n("b-col",{staticClass:"text-right",attrs:{lg:"12"}},[n("b-button",{attrs:{variant:"warning",size:"lg",type:"submit"}},[e._v("Create Token")])],1)],1)],1)],1)],1)])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=s.exports}}]);