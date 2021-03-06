---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2"
path: ""
category: api
id: "{{Segment | slugify}}"
title: "Segment"
header_sub_title: "Class in module "
doc: "Segment"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/segment/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">


Segment






</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic/edit/2.0/ionic/components/segment/segment.ts#L82'>
Improve this doc
</a>






<!-- description -->

<p>A Segment is a group of buttons, sometimes known as Segmented Controls, that allow the user to interact with a compact group of a number of controls.
Segments provide functionality similar to tabs, selecting one will unselect all others. You should use a tab bar instead of a segmented control when you want to let the user move back and forth between distinct pages in your app.
You could use Angular 2&#39;s <code>ngModel</code> or <code>FormBuilder</code> API. For an overview on how <code>FormBuilder</code> works, checkout <a href="http://learnangular2.com/forms/">Angular 2 Forms</a>, or <a href="https://angular.io/docs/ts/latest/api/common/FormBuilder-class.html">Angular FormBuilder</a></p>


<h3>Directive</h3>
<h3>selector: <code>ion-segment</code></h3>
<!-- @usage tag -->

<h3 style="margin-bottom: 7px">Usage</h3>


<pre><code class="lang-html">&lt;ion-segment [(ngModel)]=&quot;relationship&quot; (change)=&quot;onSegmentChanged($event)&quot; danger&gt;
  &lt;ion-segment-button value=&quot;friends&quot;&gt;
    Friends
  &lt;/ion-segment-button&gt;
  &lt;ion-segment-button value=&quot;enemies&quot;&gt;
    Enemies
  &lt;/ion-segment-button&gt;
&lt;/ion-segment&gt;
</code></pre>
<p>Or with <code>FormBuilder</code></p>
<pre><code class="lang-html">&lt;form [ngFormModel]=&quot;myForm&quot;&gt;
  &lt;ion-segment ngControl=&quot;mapStyle&quot; danger&gt;
    &lt;ion-segment-button value=&quot;standard&quot;&gt;
      Standard
    &lt;/ion-segment-button&gt;
    &lt;ion-segment-button value=&quot;hybrid&quot;&gt;
      Hybrid
    &lt;/ion-segment-button&gt;
    &lt;ion-segment-button value=&quot;sat&quot;&gt;
      Satellite
    &lt;/ion-segment-button&gt;
  &lt;/ion-segment&gt;
&lt;/form&gt;
</code></pre>




<!-- @property tags -->

<h3>Attributes:</h3>
<table class="table" style="margin:0;">
<thead>
<tr>
<th>Attribute</th>








<th>Type</th>


<th>Description</th>
</tr>
</thead>
<tbody>

<tr>
<td>
change
</td>


<td>
Any
</td>


<td>
expression to evaluate when a segment button has been changed
</td>
</tr>

</tbody>
</table>


<!-- methods on the class -->

<h3>Methods</h3>

<div id="value"></div>

<h3>
<code>value()</code>
  

</h3>












<div id="onChange"></div>

<h3>
<code>onChange()</code>
  

</h3>












<div id="onTouched"></div>

<h3>
<code>onTouched()</code>
  

</h3>












<div id="change"></div>

<h3>
<code>change()</code>
  

</h3>










<!-- related link -->

<h3>Related</h3>

<a href='/docs/v2/components#segment'>Segment Component Docs</a>
[Angular 2 Forms](http://learnangular2.com/forms/)<!-- end content block -->


<!-- end body block -->

