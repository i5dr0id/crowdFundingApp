<template>
  <div id="donation">
<div id="post-editor" class="post-editor js-post-editor">

    <div style="position: relative;">
        <div class="wmd-container">
            <div id="wmd-button-bar" class="wmd-button-bar"><ul id="wmd-button-row" class="wmd-button-row"><li class="wmd-button" id="wmd-bold-button" title="Strong <strong> Ctrl+B"><span style="background-position: 0px 0px;"></span></li><li class="wmd-button" id="wmd-italic-button" title="Emphasis <em> Ctrl+I"><span style="background-position: -20px 0px;"></span></li><li class="wmd-spacer wmd-spacer1" id="wmd-spacer1"></li><li class="wmd-button" id="wmd-link-button" title="Hyperlink <a> Ctrl+L"><span style="background-position: -40px 0px;"></span></li><li class="wmd-button" id="wmd-quote-button" title="Blockquote <blockquote> Ctrl+Q"><span style="background-position: -60px 0px;"></span></li><li class="wmd-button" id="wmd-code-button" title="Code Sample <pre><code> Ctrl+K"><span style="background-position: -80px 0px;"></span></li><li class="wmd-button" id="wmd-image-button" title="Image <img> Ctrl+G"><span style="background-position: -100px 0px;"></span></li><li class="wmd-button wmd-snippet-button" id="wmd-snippet-button" title="JavaScript/HTML/CSS snippet Ctrl-M"><span style="background-image: url(&quot;/content/Shared/balsamiq/wmd-mockup-button.png&quot;);"></span></li><li class="wmd-spacer wmd-spacer2" id="wmd-spacer2"></li><li class="wmd-button" id="wmd-olist-button" title="Numbered List <ol> Ctrl+O"><span style="background-position: -120px 0px;"></span></li><li class="wmd-button" id="wmd-ulist-button" title="Bulleted List <ul> Ctrl+U"><span style="background-position: -140px 0px;"></span></li><li class="wmd-button" id="wmd-heading-button" title="Heading <h1>/<h2> Ctrl+H"><span style="background-position: -160px 0px;"></span></li><li class="wmd-button" id="wmd-hr-button" title="Horizontal Rule <hr> Ctrl+R"><span style="background-position: -180px 0px;"></span></li><li class="wmd-spacer wmd-spacer3" id="wmd-spacer3"></li><li class="wmd-button" id="wmd-undo-button" title="Undo - Ctrl+Z"><span style="background-position: -200px 0px;"></span></li><li class="wmd-button" id="wmd-redo-button" title="Redo - Ctrl+Shift+Z"><span style="background-position: -220px -20px;"></span></li><li class="wmd-spacer wmd-spacer-max"></li><li class="wmd-button wmd-help-button active-help" id="wmd-help-button" title="Markdown Editing Help" style="right: 0px;"><span style="background-position: -240px 0px;"></span></li></ul></div><div id="mdhelp" class="mdhelp" style="">
    <ul id="mdhelp-tabs" class="mdhelp-tabs">
        <li data-tab="mdhelp-links" data-buttons="link">Links</li>
        <li data-tab="mdhelp-images" data-buttons="image">Images</li>
        <li data-tab="mdhelp-styles" data-buttons="bold,italic,heading">Styling/Headers</li>
        <li data-tab="mdhelp-lists" data-buttons="olist,ulist">Lists</li>
        <li data-tab="mdhelp-blockquotes" data-buttons="quote">Blockquotes</li>
        <li data-tab="mdhelp-code" data-buttons="code">Code</li>
        <li data-tab="mdhelp-html"> HTML </li>
        <li style="float:right"><a href="/editing-help" target="_blank">advanced help »</a></li>
    </ul>

    <div class="mdhelp-tab" id="mdhelp-links"><div class="mdhelp-tab--content">
            <p>
                In most cases, a plain URL will be recognized as such and automatically linked:
            </p>
            <pre>Visit https://area51.stackexchange.com/ regularly!
Use angle brackets to force linking: Have you seen &lt;https://superuser.com&gt;?
</pre>
            <p>
                To create fancier links, use Markdown:
            </p>
                <pre>Here's [a link](http://www.example.com/)! And a reference-style link to [a panda][1].
References don't have to be [numbers][question].

 [1]: https://notfound.stackexchange.com/
 [question]: https://english.stackexchange.com/questions/11481
</pre>
                <p>You can add tooltips to links:</p>
<pre>Click [here](https://diy.stackexchange.com<span class="spaces">&nbsp;</span>"this text appears when you mouse over")!
This works with [reference links][blog] as well.

 [blog]: https://stackoverflow.blog/<span class="spaces">&nbsp;</span>"click here for updates"
</pre>
    </div></div>

    <div class="mdhelp-tab" id="mdhelp-images"><div class="mdhelp-tab--content">
        <p>Images are exactly like links, but they have an exclamation point in front of them:</p>
        <pre>![a busy cat](https://cdn.sstatic.net/Sites/stackoverflow/img/error-lolcat-problemz.jpg)
![two muppets][1]

 [1]: https://i.imgur.com/I5DFV.jpg "tooltip"
</pre>
        <p>
            The word in square brackets is the alt text, which gets displayed if the browser
 can't show the image. Be sure to include meaningful alt text for screen-reading
 software.
        </p>

    </div></div>
    <div class="mdhelp-tab" id="mdhelp-styles"><div class="mdhelp-tab--content">
        <div class="col1">
            <p>Be sure to use text styling sparingly; only where it helps readability.</p>
                <pre>*This is italicized*, and so
is _this_.

**This is bold**, just like __this__.

You can ***combine*** them
if you ___really have to___.
</pre>

        </div>
        <div class="col2">
            <p>
                To break your text into sections, you can use headers:
            </p>
                <pre>A Large Header
==============

Smaller Subheader
-----------------
</pre>
            <p>
                Use hash marks if you need several levels of headers:</p>
    <pre># Header 1 #
## Header 2 ##
### Header 3 ###
</pre>
        </div>

    </div></div>
    <div class="mdhelp-tab" id="mdhelp-lists"><div class="mdhelp-tab--content">
        <p>Both bulleted and numbered lists are possible:</p>
        <div class="col1">
<pre>-<span class="spaces">&nbsp;</span>Use a minus sign for a bullet
+<span class="spaces">&nbsp;</span>Or plus sign
*<span class="spaces">&nbsp;</span>Or an asterisk

1.<span class="spaces">&nbsp;</span>Numbered lists are easy
2.<span class="spaces">&nbsp;</span>Markdown keeps track of
   the numbers for you
7.<span class="spaces">&nbsp;</span>So this will be item 3.
</pre>
        </div>
        <div class="col2">
<pre>1.<span class="spaces">&nbsp;</span>Lists in a list item:
<span class="spaces">&nbsp;&nbsp;&nbsp;&nbsp;</span>-<span class="spaces">&nbsp;</span>Indented four spaces.
<span class="spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>*<span class="spaces">&nbsp;</span>indented eight spaces.
<span class="spaces">&nbsp;&nbsp;&nbsp;&nbsp;</span>-<span class="spaces">&nbsp;</span>Four spaces again.
2.<span class="spaces">&nbsp;&nbsp;</span>You can have multiple
<span class="spaces">&nbsp;&nbsp;&nbsp;&nbsp;</span>paragraphs in a list items.
<span class="spaces">&nbsp;</span>
<span class="spaces">&nbsp;&nbsp;&nbsp;&nbsp;</span>Just be sure to indent.
</pre>
        </div>
    </div></div>

    <div class="mdhelp-tab" id="mdhelp-blockquotes"><div class="mdhelp-tab--content">
        <div class="col1">
            <pre>&gt; Create a blockquote by
&gt; prepending “&gt;” to each line.
&gt;
&gt; Other formatting also works here, e.g.
&gt;
&gt; 1. Lists or
&gt; 2. Headings:
&gt;
&gt; ## Quoted Heading ##
</pre>
        </div>
        <div class="col2">
                <p>
                    You can even put blockquotes in blockquotes:
                </p>
                <pre>&gt; A standard blockquote is indented
&gt; &gt; A nested blockquote is indented more
&gt; &gt; &gt; &gt; You can nest to any depth.
</pre>
        </div>
    </div></div>

    <div class="mdhelp-tab" id="mdhelp-code"><div class="mdhelp-tab--content">
        <p>
            To create code blocks or other preformatted text, indent by four spaces:
        </p>
        <pre><span class="spaces">&nbsp;&nbsp;&nbsp;&nbsp;</span>This will be displayed in a monospaced font. The first four spaces
<span class="spaces">&nbsp;&nbsp;&nbsp;&nbsp;</span>will be stripped off, but all other whitespace will be preserved.
<span class="spaces">&nbsp;&nbsp;&nbsp;&nbsp;</span>
<span class="spaces">&nbsp;&nbsp;&nbsp;&nbsp;</span>Markdown and HTML are turned off in code blocks:
<span class="spaces">&nbsp;&nbsp;&nbsp;&nbsp;</span>&lt;i&gt;This is not italic&lt;/i&gt;, and [this is not a link](https://example.com)
</pre>
        <p>
            To create not a block, but an inline code span, use backticks:
        </p>
        <pre>The `$` character is just a shortcut for `window.jQuery`.
</pre>
        <p>
            If you want to have a preformatted block within a list, indent by eight spaces:
        </p>
        <pre>1. This is normal text.
2. So is this, but now follows a code block:
<span class="spaces">&nbsp;</span>
<span class="spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Skip a line and indent eight spaces.
<span class="spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>That's four spaces for the list
<span class="spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>and four to trigger the code block.
</pre>
    </div></div>

    <div class="mdhelp-tab" id="mdhelp-html"><div class="mdhelp-tab--content">
        <p>
            If you need to do something that Markdown can't handle, use HTML. Note that <a href="https://meta.stackexchange.com/questions/1777/what-html-tags-are-allowed" target="_blank">we only support a very strict subset of HTML!</a>
        </p>
        <pre>Strikethrough humor is &lt;strike&gt;funny&lt;/strike&gt;.
</pre>
        <p>
            Markdown is smart enough not to mangle your span-level HTML:
        </p>
        <pre>&lt;b&gt;Markdown works *fine* in here.&lt;/b&gt;
</pre>
        <p>
            Block-level HTML elements have a few restrictions:
        </p>
        <ol>
            <li>They must be separated from surrounding text by blank lines.</li>
            <li>The begin and end tags of the outermost block element must not be indented.</li>
            <li>Markdown can't be used within HTML blocks.</li>
        </ol>
        <br>
        <pre>&lt;pre&gt;
    You can &lt;em&gt;not&lt;/em&gt; use Markdown in here.
&lt;/pre&gt;
</pre>
    </div></div>

    <div class="cbt"></div>
</div>
            <textarea id="wmd-input" class="wmd-input processed" name="post-text" cols="92" rows="15" tabindex="101" data-min-length="" style="opacity: 1; height: 216px;"></textarea>
        <div class="grippie" style="margin-right: 0px;"></div></div>
    </div>

    <div class="fl" style="margin-top: 8px; height:24px;">&nbsp;</div>
    <div id="draft-saved" class="draft-saved community-option fl" style="margin-top: 8px; height:24px; display:none;">draft saved</div>

    <div id="draft-discarded" class="draft-discarded community-option fl" style="margin-top: 8px; height:24px; display:none;">draft discarded</div>



    <div id="wmd-preview" class="wmd-preview"><hr>

<hr>

<h2>Heading</h2></div>
    <div></div>
    <div class="edit-block">
        <input id="fkey" name="fkey" type="hidden" value="3302e6cf05325deca2ee1229435c55f7">
        <input id="author" name="author" type="text">
    </div>



</div>
  </div>

</template>

<script>

export default {
  name: "App"
};
</script>

<style scoped>
  #donation {
    padding-top: 10%;
  }
	</style>
