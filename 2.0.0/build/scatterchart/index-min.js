/*!build time : 2014-08-01 1:03:43 AM*/
KISSY.add("kg/kcharts/2.0.0/scatterchart/theme",function(){var a="{COLOR}",b={"ks-chart-default":{title:{content:"",css:{"text-align":"center","font-size":"16px","font-weight":"bold",color:"#666"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px",color:"#666"},isShow:!0},points:{attr:{stroke:"#fff",r:4,"stroke-width":0,fill:a},hoverAttr:{stroke:"#fff",r:5,fill:a,"stroke-width":0}},xGrids:{css:{color:"#eee"}},yGrids:{css:{color:"#eee"}},yAxis:{css:{color:"#ccc"}},xAxis:{css:{color:"#ccc"}},xLabels:{css:{color:"#666","font-size":"12px"}},yLabels:{css:{color:"#666","font-size":"12px"}},tip:{css:{border:"1px solid {COLOR}"}}},"ks-chart-analytiks":{title:{content:"",css:{"text-align":"center","font-size":"16px","font-weight":"bold",color:"#666"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px",color:"#666"},isShow:!0},points:{attr:{stroke:"#fff",r:4,"stroke-width":0,fill:a},hoverAttr:{stroke:"#fff",r:5,fill:a,"stroke-width":0}},xGrids:{css:{color:"#eee"}},yGrids:{css:{color:"#eee"}},yAxis:{css:{color:"#ccc"}},xAxis:{css:{color:"#ccc"}},xLabels:{css:{color:"#666","font-size":"12px"}},yLabels:{css:{color:"#666","font-size":"12px"}},tip:{css:{border:"1px solid {COLOR}"}}},"ks-chart-rainbow":{title:{content:"",css:{"text-align":"center","font-size":"16px","font-weight":"bold",color:"#666"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px",color:"#666"},isShow:!0},points:{attr:{stroke:"#fff",r:4,"stroke-width":0,fill:a},hoverAttr:{stroke:"#fff",r:5,fill:a,"stroke-width":0}},xGrids:{css:{color:"#eee"}},yGrids:{css:{color:"#eee"}},yAxis:{css:{color:"#ccc"}},xAxis:{css:{color:"#ccc"}},xLabels:{css:{color:"#666","font-size":"12px"}},yLabels:{css:{color:"#666","font-size":"12px"}},tip:{css:{border:"1px solid {COLOR}"}}}};return b}),KISSY.add("kg/kcharts/2.0.0/scatterchart/cfg",function(){var a="ks-chart-",b=a+"default",c="{COLOR}";return{themeCls:b,autoRender:!0,title:{content:"",css:{"text-align":"center","font-size":"16px"},isShow:!0},colors:[],subTitle:{content:"",css:{"text-align":"center","font-size":"12px"},isShow:!0},points:{attr:{stroke:"#fff",r:4,"stroke-width":0,fill:c,opacity:.6},hoverAttr:{stroke:"#fff",r:5,fill:c,"stroke-width":0,opacity:1}},legend:{isShow:!1},xLabels:{isShow:!0,css:{color:"#666","font-size":"12px","white-space":"nowrap",position:"absolute"}},yLabels:{isShow:!0,css:{color:"#666","font-size":"12px","white-space":"nowrap",position:"absolute"}},xAxis:{isShow:!0,css:{zIndex:10}},yAxis:{isShow:!0,css:{zIndex:10},num:5},xGrids:{isShow:!0,css:{}},yGrids:{isShow:!0,css:{}},tip:{isShow:!0,clsName:"",template:"",css:{},offset:{x:0,y:0},boundryDetect:!0}}}),KISSY.add("kg/kcharts/2.0.0/scatterchart/index",function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var q,r,s=a.all,t="ks-chart-",u=t+"evtlayout",v="{COLOR}",w=["circle","triangle","rhomb","square"],x={initializer:function(){this.init()},init:function(){var b=this;b.chartType="scatterchart";var c=a.clone(o);b._cfg=a.mix(c,b.userConfig,void 0,void 0,!0),b._cfg.zoomType="xy",g.prototype.init.call(b,b._cfg),b._cfg.autoRender&&b.render()},render:function(){var b=this,c=b._cfg,d=c.themeCls;if(b._$ctnNode[0]){g.prototype.dataFormat.call(b,b._cfg),b._$ctnNode.html(""),b._finished=[],d=b._cfg.themeCls||o.themeCls,b._cfg=a.mix(a.clone(a.mix(o,l[d],void 0,void 0,!0)),b._cfg,void 0,void 0,!0),b.color=q=new i({themeCls:d}),b._cfg.colors.length>0&&q.removeAllColors();for(var e in b._cfg.colors)q.setColor(b._cfg.colors[e]);b.paper=h(b._$ctnNode[0],c.width,c.height,{position:"absolute"}),b.htmlPaper=new j(b._$ctnNode,{clsName:d}),b._clonePoints=b._points,g.Common.drawTitle.call(null,this,d),g.Common.drawSubTitle.call(null,this,d),b.renderTip(),g.Common.drawGridsX.call(null,this),g.Common.drawGridsY.call(null,this),g.Common.drawAxisX.call(null,this),g.Common.drawAxisY.call(null,this),g.Common.drawLabelsX.call(null,this),g.Common.drawLabelsY.call(null,this),b.diffStocksSize(),b.drawAllStocks(),b.renderLegend(),b.renderEvtLayout(),b.afterRender(),b.bindEvt(),a.log(b)}},processAttr:function(b,c){var d=a.clone(b);for(var e in d)d[e]&&"string"==typeof d[e]&&(d[e]=d[e].replace(v,c));return d},diffStocksSize:function(){var a=this,b=a._cfg.points.attr.r,c=a._datas.total,d=[];for(var e in c)d=d.concat(g.prototype.getArrayByKey.call(null,c[e].data,2));if(d.length)for(var e in a._points){var f=g.prototype.getArrayByKey.call(null,c[e].data,2);for(var h in a._points[e])f.length>0&&(a._points[e][h].r=f[h]*b)}else for(var e in a._points)for(var h in a._points[e])a._points[e][h].r=b},drawAllStocks:function(){var a=this;a._stocks={};for(var b in a._points)a.drawStocks(b)},drawStocks:function(a){var b=this,c=[],d=b.color.getColor(a).DEFAULT,e=b._cfg.points.attr;b._stocks[a]={type:"auto"==e.type?w[a%4]:e.type};for(var f in b._points[a]){{b._points[a][f]}c[f]=b.drawStock(a,f,b.processAttr(b._cfg.points.attr,d))}return b._stocks[a].stocks=c,b._stocks[a].points=b._points[a],c},drawStock:function(b,c,d){var e,f=this,g=f._cfg,h=f.paper,i=f.color,j=i.getColor(b).DEFAULT,k=w[b%4],k=f._stocks[b].type,l=f._points[b][c],m=g.points.template,d=d||{},n=void 0!==d.x?d.x:l.x,o=void 0!==d.y?d.y:l.y,q=f._points[b][c].r||d.r;if(void 0!==n&&void 0!==o){if(a.isFunction(m))return m({paper:h,groupIndex:b,stockIndex:c,attr:d,color:j,graphTool:p,x:n,y:o});switch(k){case"triangle":e=p.triangle(h,n,o,1.4*q);break;case"rhomb":e=p.rhomb(h,n,o,2.4*q,2.4*q);break;case"square":e=p.square(h,n,o,2*q,2*q);break;default:e=h.circle(n,o,q,d)}return e.attr(d).attr({cx:n,cy:o}).attr({r:q}),e}},renderTip:function(){if(this._cfg.tip.isShow){var b=this,c=b._cfg,d=b._innerContainer,e=c.tip.boundryDetect?{x:d.tl.x,y:d.tl.y,width:d.width,height:d.height}:{},f=a.mix(c.tip,{rootNode:b._$ctnNode,clsName:c.themeCls,boundry:e});return b.tip=new n(f),b.tip}},renderEvtLayout:function(){var a,b=this,c=b._cfg,d=b._innerContainer,e=(d.tl.y,d.height),f=b._evtEls._rects=[];a=b._evtEls.paper?b._evtEls.paper:b._evtEls.paper=new j(b._$ctnNode,{clsName:u,prependTo:!1,width:d.width,height:e,left:d.tl.x,top:d.tl.y,css:{"z-index":20,background:"#fff",filter:"alpha(opacity =1)","-moz-opacity":.01,"-khtml-opacity":.01,opacity:.01}});for(var g in b._points){var f=[];for(var h in b._points[g]){var i=2*(b._points[g][h].r||c.points.attr.r);f[h]={x:b._points[g][h].x-i/2,y:b._points[g][h].y-i/2,w:i,h:i,groupIndex:g,pointIndex:h}}b._evtEls._rects[g]=f}},clearEvtLayout:function(){var a=this;a._evtEls._rects=[]},renderLegend:function(){if(this._cfg.legend.isShow){var b=this,c=b._cfg.legend,d=c.container&&s(c.container)[0]?s(c.container):b._$ctnNode,e=b._innerContainer,f=b.color._colors,g=f.length,h=b._cfg,i=b._cfg.series,j=a.map(i,function(a,b){b%=g;var c={},d=f[b];return c.text=a.text,c.DEFAULT=d.DEFAULT,c.HOVER=d.HOVER,c}),l=a.merge({interval:20,iconright:5,showicon:!0},h.legend.globalConfig);return b.legend=new k({container:d,paper:b.paper,bbox:{width:e.width,height:e.height,left:e.x,top:e.y},align:h.legend.align||"bc",offset:h.legend.offset||[0,30],globalConfig:l,config:j}),b.legend.on("click",function(a){var b=a.index,c=(a.text,a.icon,a.el);1!=c.hide?(this.hidePoints(b),c.hide=1,c.disable()):(this.showPoints(b),c.hide=0,c.enable())},this),b.legend}},showPoints:function(a){var b=this;g.prototype.recoveryData.call(b,a),b._clonePoints[a]=b._points[a],g.Common.animateGridsAndLabels.call(null,b);for(var c in b._stocks)b._stocks[c].points=b._points[c];b.animateSiblingsPoints(a),b.diffStocksSize(),b.drawStocks(a),b.clearEvtLayout(),b.renderEvtLayout(),b.bindEvt()},hidePoints:function(a){var b=this;g.prototype.removeData.call(b,a),delete b._clonePoints[a],g.Common.animateGridsAndLabels.call(null,b);for(var c in b._stocks[a].stocks)b._stocks[a].stocks[c].remove();for(var c in b._stocks)b._stocks[c].points=b._points[c];b.animateSiblingsPoints(a),b.clearEvtLayout(),b.renderEvtLayout(),b.bindEvt()},animateSiblingsPoints:function(a){var b,c=this;for(var d in c._stocks)if(a!=d){b=c._stocks[d];for(var e in b.stocks)c._points[d]&&b.stocks[e].animate({transform:"T"+(b.points[e].x-b.stocks[e].attr("cx"))+","+(b.points[e].y-b.stocks[e].attr("cy"))},400)}},bindEvt:function(){{var b=this,c=b._evtEls;a.clone(b._cfg.points.hoverAttr)}e.detach(c.paper.$paper,"mousemove"),e.on(c.paper.$paper,"mousemove",function(a){b.delegateMouseMove(b.getOffset(a),function(a,c){b._points[a][c].dataInfo&&(b.stockChange(a,c),b._cfg.tip.isShow&&b.tipHandler(a,c))})}),e.detach(c.paper.$paper,"mouseleave"),e.on(c.paper.$paper,"mouseleave",function(){b.tip&&b.tip.hide(),b.paperLeave()})},delegateMouseMove:function(a,b){var c,d=this,e=d.getInnerContainer();for(var f in d._evtEls._rects)for(var g in d._evtEls._rects[f])c=d._evtEls._rects[f][g],!d.isInSide(a.offsetX+e.x,a.offsetY+e.y,c.x,c.y,c.w,c.h)||d.curGroupIndex===f&&d.curPointIndex==g||(d.curGroupIndex=f,d.curPointIndex=g,b&b(c.groupIndex,c.pointIndex))},stockChange:function(a,b){var c=this,d=c._stocks[a],e={target:d.stocks[b],currentTarget:d.stocks[b],groupIndex:Math.round(a),stockIndex:Math.round(b)};c.fire("stockChange",e)},tipHandler:function(b,c){var d,e,f=this,g=f.color.getColor(b).DEFAULT,h=f.tip,i=f._cfg,j=i.tip.template,k=h.getInstance();j&&(d=f._points[b][c].dataInfo,a.isFunction(j)?h.setContent(j(d)):h.renderTemplate(j,d),e=f._points[b][c],h.isVisable()?h.animateTo(e.x,e.y):h.moveTo(e.x,e.y),k.css(f.processAttr(i.tip.css,g)))},paperLeave:function(){var a=this;a.fire("paperLeave",a)},afterRender:function(){var a=this;a.fire("afterRender",a)},getHtmlPaper:function(){return this.htmlPaper},getRaphaelPaper:function(){return this.paper},clear:function(){this._$ctnNode.html("")}};return b.extend?r=g.extend(x):(r=function(a){var b=this;b.userConfig=a,this.init()},a.extend(r,g,x)),r},{requires:["base","node","dom","event","gallery/template/1.0/index","kg/kcharts/2.0.0/basechart/index","kg/kcharts/2.0.0/raphael/index","kg/kcharts/2.0.0/tools/color/index","kg/kcharts/2.0.0/tools/htmlpaper/index","kg/kcharts/2.0.0/legend/index","./theme","kg/kcharts/2.0.0/tools/touch/index","kg/kcharts/2.0.0/tip/index","./cfg","kg/kcharts/2.0.0/tools/graphtool/index"]});