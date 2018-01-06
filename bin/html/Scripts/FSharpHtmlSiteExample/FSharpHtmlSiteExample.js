(function()
{
 "use strict";
 var Global,FSharpHtmlSiteExample,Client,WebSharper,UI,AttrProxy,IntelliFactory,Runtime,Doc,Var,View,Strings,Arrays,List,Input,Mouse,google,visualization,Submitter;
 Global=window;
 FSharpHtmlSiteExample=Global.FSharpHtmlSiteExample=Global.FSharpHtmlSiteExample||{};
 Client=FSharpHtmlSiteExample.Client=FSharpHtmlSiteExample.Client||{};
 WebSharper=Global.WebSharper;
 UI=WebSharper&&WebSharper.UI;
 AttrProxy=UI&&UI.AttrProxy;
 IntelliFactory=Global.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 Doc=UI&&UI.Doc;
 Var=UI&&UI.Var;
 View=UI&&UI.View;
 Strings=WebSharper&&WebSharper.Strings;
 Arrays=WebSharper&&WebSharper.Arrays;
 List=WebSharper&&WebSharper.List;
 Input=UI&&UI.Input;
 Mouse=Input&&Input.Mouse;
 google=Global.google;
 visualization=google&&google.visualization;
 Submitter=UI&&UI.Submitter;
 Client.InputTransform=function()
 {
  var rvText,inputField,view,viewCaps,viewReverse,viewWordCount,views;
  function cls(s)
  {
   return AttrProxy.Create("class",s);
  }
  function a(x,y)
  {
   return(((Runtime.Curried3(function($1,$2,$3)
   {
    return $1(Global.String($2)+":"+Global.String($3));
   }))(Global.id))(y))(x);
  }
  function tableRow(lbl,view$1)
  {
   return Doc.Element("tr",[],[Doc.Element("td",[],[Doc.TextNode(lbl)]),Doc.Element("td",[AttrProxy.Create("style","width:66%")],[Doc.TextView(view$1)])]);
  }
  rvText=Var.Create$1("");
  inputField=Doc.Element("div",[cls("panel panel-default")],[Doc.Element("div",[cls("panel-heading")],[Doc.Element("h3",[cls("panel-title")],[Doc.TextNode("Input")])]),Doc.Element("div",[cls("panel-body")],[Doc.Element("form",[cls("form-horizontal"),AttrProxy.Create("role","form")],[Doc.Element("div",[cls("form-group")],[Doc.Element("label",[cls("col-sm-4 control-label"),AttrProxy.Create("for","inputBox")],[Doc.TextNode("Write something: ")]),Doc.Element("div",[cls("col-sm-8")],[Doc.Input([cls("form-control"),AttrProxy.Create("id","inputBox")],rvText)])])])])]);
  view=rvText.get_View();
  viewCaps=View.Map(function(s)
  {
   return s.toUpperCase();
  },view);
  viewReverse=View.Map(function(s)
  {
   return Strings.ToCharArray(s).slice().reverse().join("");
  },view);
  viewWordCount=View.Map(function(s)
  {
   return Arrays.length(Arrays.filter(function(w)
   {
    return Strings.Trim(w).length>0;
   },Strings.SplitChars(s,[" "],0)));
  },view);
  views=List.ofArray([["Entered Text",view],["Capitalised",viewCaps],["Reversed",viewReverse],["Word Count",View.Map(Global.String,viewWordCount)],["Word count odd or even?",View.Map(function(i)
  {
   return i%2===0?"Even":"Odd";
  },viewWordCount)],["Mouse coordinates",View.Map(function($1)
  {
   return a($1[0],$1[1]);
  },Mouse.get_Position())]]);
  return Doc.Element("div",[],[inputField,Doc.Element("div",[cls("panel panel-default")],[Doc.Element("div",[cls("panel-heading")],[Doc.Element("h3",[cls("panel-title")],[Doc.TextNode("Output")])]),Doc.Element("div",[cls("panel-body")],[Doc.Element("table",[cls("table")],[Doc.Element("tbody",[],[Doc.Concat(List.map(function($1)
  {
   return tableRow($1[0],$1[1]);
  },views))])])])])]);
 };
 Client.TableExample=function()
 {
  return Doc.Element("div",[],[]).OnAfterRender(function(container)
  {
   var visualization$1,options,r;
   visualization$1=new visualization.Table(container);
   options=(r={},r.showRowNumber=true,r.width="600",r);
   visualization$1.draw(Client.TableData(),options);
  });
 };
 Client.TableData=function()
 {
  var data;
  data=new visualization.DataTable();
  data.addColumn("string","Name");
  data.addColumn("number","Height");
  data.addRows(3);
  data.setCell(0,0,"Tong Ning mu");
  data.setCell(1,0,"Huang Ang fa");
  data.setCell(2,0,"Teng nu");
  data.setCell(0,1,174);
  data.setCell(1,1,523);
  data.setCell(2,1,86);
  return data;
 };
 Client.Main=function()
 {
  var rvInput,submit,vReversed;
  rvInput=Var.Create$1("");
  submit=Submitter.CreateOption(rvInput.get_View());
  vReversed=View.Map(function(a)
  {
   return a!=null&&a.$==1?Client.DoSomething(a.$0):"";
  },submit.view);
  return Doc.Element("div",[],[Doc.Input([],rvInput),Doc.Button("Send",[],function()
  {
   submit.Trigger();
  }),Doc.Element("hr",[],[]),Doc.Element("h4",[AttrProxy.Create("class","text-muted")],[Doc.TextNode("The server responded:")]),Doc.Element("div",[AttrProxy.Create("class","jumbotron")],[Doc.Element("h1",[],[Doc.TextView(vReversed)])])]);
 };
 Client.DoSomething=function(input)
 {
  return Strings.ToCharArray(input).slice().reverse().join("");
 };
}());
