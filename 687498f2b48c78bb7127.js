(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{240:function(t,e){},351:function(t,e,r){const s=r(43),o=r(233),n=r(234),a=r(82);class c extends a{constructor(t,{baseIRI:e="",context:r=null,factory:n=s}={}){super({objectMode:!0,read:()=>{}}),this.baseIRI=e,this.context=r,this.factory=n;const a=o({encoding:"string"},t=>{t?this.parse(t).then(()=>{this.push(null)}).catch(t=>{this.emit("error",t)}):this.push(null)});t.pipe(a),t.on("error",t=>{this.emit("error",t)})}term(t){switch(t.termType){case"NamedNode":return t.value.startsWith("null:/")?this.factory.namedNode(t.value.slice(6)):this.factory.namedNode(t.value);case"BlankNode":return this.factory.blankNode(t.value.substr(2));case"Literal":return this.factory.literal(t.value,t.language||this.factory.namedNode(t.datatype.value));case"DefaultGraph":return this.factory.defaultGraph();default:throw Error("unknown termType: "+t.termType)}}parse(t){return c.toPlainObject(t).then(t=>{"object"==typeof t["@context"]&&Object.keys(t["@context"]).forEach(e=>{this.emit("prefix",e,this.factory.namedNode(t["@context"][e]))});const e={base:this.baseIRI||"null:/"};return this.context&&(e.expandContext=this.context),n.promises.toRDF(t,e)}).then(t=>{t.forEach(t=>{this.push(this.factory.quad(this.term(t.subject),this.term(t.predicate),this.term(t.object),this.term(t.graph)))})})}static toPlainObject(t){return"string"==typeof t?new Promise((e,r)=>{try{e(JSON.parse(t))}catch(t){r(t)}}):"object"==typeof t?Promise.resolve(t):Promise.reject(new Error("unknown type"))}}t.exports=c},398:function(t,e,r){const s=r(99),o=r(351);t.exports=class extends s{constructor(t){super(o,t)}}}}]);
//# sourceMappingURL=687498f2b48c78bb7127.js.map