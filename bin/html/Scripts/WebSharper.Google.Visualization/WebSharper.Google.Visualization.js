(function()
{
 "use strict";
 var Global,WebSharper,Google,Visualization,AreaChartOptions,BarChartOptions,BubbleChartOptions,CandlestickChartOptions,ColumnChartOptions,LineChartOptions,ComboChartOptions,PieChartOptions,ScatterChartOptions,SteppedAreaChartOptions,Events,AreaChart,BarChart,ColumnChart,LineChart,PieChart,ScatterChart,IntensityMap,MotionChart,OrgChart,Table,TreeMap,IntelliFactory,Runtime,Control,FSharpEvent,google,visualization,events;
 Global=window;
 WebSharper=Global.WebSharper=Global.WebSharper||{};
 Google=WebSharper.Google=WebSharper.Google||{};
 Visualization=Google.Visualization=Google.Visualization||{};
 AreaChartOptions=Visualization.AreaChartOptions=Visualization.AreaChartOptions||{};
 BarChartOptions=Visualization.BarChartOptions=Visualization.BarChartOptions||{};
 BubbleChartOptions=Visualization.BubbleChartOptions=Visualization.BubbleChartOptions||{};
 CandlestickChartOptions=Visualization.CandlestickChartOptions=Visualization.CandlestickChartOptions||{};
 ColumnChartOptions=Visualization.ColumnChartOptions=Visualization.ColumnChartOptions||{};
 LineChartOptions=Visualization.LineChartOptions=Visualization.LineChartOptions||{};
 ComboChartOptions=Visualization.ComboChartOptions=Visualization.ComboChartOptions||{};
 PieChartOptions=Visualization.PieChartOptions=Visualization.PieChartOptions||{};
 ScatterChartOptions=Visualization.ScatterChartOptions=Visualization.ScatterChartOptions||{};
 SteppedAreaChartOptions=Visualization.SteppedAreaChartOptions=Visualization.SteppedAreaChartOptions||{};
 Events=Visualization.Events=Visualization.Events||{};
 AreaChart=Events.AreaChart=Events.AreaChart||{};
 BarChart=Events.BarChart=Events.BarChart||{};
 ColumnChart=Events.ColumnChart=Events.ColumnChart||{};
 LineChart=Events.LineChart=Events.LineChart||{};
 PieChart=Events.PieChart=Events.PieChart||{};
 ScatterChart=Events.ScatterChart=Events.ScatterChart||{};
 IntensityMap=Events.IntensityMap=Events.IntensityMap||{};
 MotionChart=Events.MotionChart=Events.MotionChart||{};
 OrgChart=Events.OrgChart=Events.OrgChart||{};
 Table=Events.Table=Events.Table||{};
 TreeMap=Events.TreeMap=Events.TreeMap||{};
 IntelliFactory=Global.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 Control=WebSharper&&WebSharper.Control;
 FSharpEvent=Control&&Control.FSharpEvent;
 google=Global.google;
 visualization=google&&google.visualization;
 events=visualization&&visualization.events;
 AreaChartOptions=Visualization.AreaChartOptions=Runtime.Class({},null,AreaChartOptions);
 BarChartOptions=Visualization.BarChartOptions=Runtime.Class({},null,BarChartOptions);
 BubbleChartOptions=Visualization.BubbleChartOptions=Runtime.Class({},null,BubbleChartOptions);
 CandlestickChartOptions=Visualization.CandlestickChartOptions=Runtime.Class({},null,CandlestickChartOptions);
 ColumnChartOptions=Visualization.ColumnChartOptions=Runtime.Class({},null,ColumnChartOptions);
 LineChartOptions=Visualization.LineChartOptions=Runtime.Class({},null,LineChartOptions);
 ComboChartOptions=Visualization.ComboChartOptions=Runtime.Class({},null,ComboChartOptions);
 PieChartOptions=Visualization.PieChartOptions=Runtime.Class({},null,PieChartOptions);
 ScatterChartOptions=Visualization.ScatterChartOptions=Runtime.Class({},null,ScatterChartOptions);
 SteppedAreaChartOptions=Visualization.SteppedAreaChartOptions=Runtime.Class({},AreaChartOptions,SteppedAreaChartOptions);
 AreaChart.OnMouseOut=function(visualization$1)
 {
  return Events.event(visualization$1,"onmouseout");
 };
 AreaChart.OnMouseOver=function(visualization$1)
 {
  return Events.event(visualization$1,"onmouseover");
 };
 AreaChart.Select=function(visualization$1)
 {
  return Events.event(visualization$1,"select");
 };
 AreaChart.Ready=function(visualization$1)
 {
  return Events.event(visualization$1,"ready");
 };
 BarChart.OnMouseOut=function(visualization$1)
 {
  return Events.event(visualization$1,"onmouseout");
 };
 BarChart.OnMouseOver=function(visualization$1)
 {
  return Events.event(visualization$1,"onmouseover");
 };
 BarChart.Select=function(visualization$1)
 {
  return Events.event(visualization$1,"select");
 };
 BarChart.Ready=function(visualization$1)
 {
  return Events.event(visualization$1,"ready");
 };
 ColumnChart.OnMouseOut=function(visualization$1)
 {
  return Events.event(visualization$1,"onmouseout");
 };
 ColumnChart.OnMouseOver=function(visualization$1)
 {
  return Events.event(visualization$1,"onmouseover");
 };
 ColumnChart.Select=function(visualization$1)
 {
  return Events.event(visualization$1,"select");
 };
 ColumnChart.Ready=function(visualization$1)
 {
  return Events.event(visualization$1,"ready");
 };
 LineChart.OnMouseOut=function(visualization$1)
 {
  return Events.event(visualization$1,"onmouseout");
 };
 LineChart.OnMouseOver=function(visualization$1)
 {
  return Events.event(visualization$1,"onmouseover");
 };
 LineChart.Select=function(visualization$1)
 {
  return Events.event(visualization$1,"select");
 };
 LineChart.Ready=function(visualization$1)
 {
  return Events.event(visualization$1,"ready");
 };
 PieChart.OnMouseOut=function(visualization$1)
 {
  return Events.event(visualization$1,"onmouseout");
 };
 PieChart.OnMouseOver=function(visualization$1)
 {
  return Events.event(visualization$1,"onmouseover");
 };
 PieChart.Select=function(visualization$1)
 {
  return Events.event(visualization$1,"select");
 };
 PieChart.Ready=function(visualization$1)
 {
  return Events.event(visualization$1,"ready");
 };
 ScatterChart.OnMouseOut=function(visualization$1)
 {
  return Events.event(visualization$1,"onmouseout");
 };
 ScatterChart.OnMouseOver=function(visualization$1)
 {
  return Events.event(visualization$1,"onmouseover");
 };
 ScatterChart.Select=function(visualization$1)
 {
  return Events.event(visualization$1,"select");
 };
 ScatterChart.Ready=function(visualization$1)
 {
  return Events.event(visualization$1,"ready");
 };
 IntensityMap.Ready=function(visualization$1)
 {
  return Events.event(visualization$1,"Ready");
 };
 IntensityMap.Select=function(visualization$1)
 {
  return Events.event(visualization$1,"select");
 };
 MotionChart.StateChange=function(visualization$1)
 {
  return Events.event(visualization$1,"statechange");
 };
 MotionChart.Ready=function(visualization$1)
 {
  return Events.event(visualization$1,"ready");
 };
 OrgChart.Ready=function(visualization$1)
 {
  return Events.event(visualization$1,"ready");
 };
 OrgChart.Select=function(visualization$1)
 {
  return Events.event(visualization$1,"select");
 };
 OrgChart.OnMouseOut=function(visualization$1)
 {
  return Events.event(visualization$1,"onmouseout");
 };
 OrgChart.OnMouseOver=function(visualization$1)
 {
  return Events.event(visualization$1,"onmouseover");
 };
 OrgChart.Collapse=function(visualization$1)
 {
  return Events.event(visualization$1,"collapse");
 };
 Table.Sort=function(visualization$1)
 {
  return Events.event(visualization$1,"sort");
 };
 Table.Page=function(visualization$1)
 {
  return Events.event(visualization$1,"page");
 };
 Table.Select=function(visualization$1)
 {
  return Events.event(visualization$1,"select");
 };
 Table.Ready=function(visualization$1)
 {
  return Events.event(visualization$1,"ready");
 };
 TreeMap.OnMouseOut=function(visualization$1)
 {
  return Events.event(visualization$1,"onmouseout");
 };
 TreeMap.OnMouseOver=function(visualization$1)
 {
  return Events.event(visualization$1,"onmouseover");
 };
 TreeMap.Select=function(visualization$1)
 {
  return Events.event(visualization$1,"select");
 };
 TreeMap.Ready=function(visualization$1)
 {
  return Events.event(visualization$1,"ready");
 };
 Events.event=function(target,eventName)
 {
  var ev;
  ev=new FSharpEvent.New();
  events.addListener(target,eventName,function(a)
  {
   ev.event.Trigger(a);
  });
  return ev.event;
 };
}());
