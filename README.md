﻿1.自适应的时候，col里最好加word-break，word-wrap这些属性，避免单词过长强行撑开。
2.文档重新备注一下吧，查了源代码才发现原来没有pl05em之类的尺寸，都是偶数结尾的。
3.间距1.5em这种没有很好解决方法，只能用padding加margin来模拟。
5.当banner上需要覆盖文字或者其他内容时，有两种解决方案，一是banner设为背景，内容则可正常显示，但不符合正常做法。另外是banner为图片，内容则需要绝对定位，此时，自带的响应式就会失效。
6.能否考虑加一个line-height和letter-space的自适应，这个结合已有的padding和margin的自适应，以及文本的自适应，可以实现比较好的图文排版自适应。
7.Padding和margin的自适应，没有xlg这个尺寸。
8.Margin的自适应，没有xs这个尺寸。
9.字体的自适应大小，自适应居中，都没有xs这个尺寸，另外能否添加f-100这种类型的属性，类似于源代码中col-2，col-6这种（没有在文档里标明）
10.h1中嵌套h2,h3等是不符合标准的，而且一般会无法解析。
11.常用的320px到414px之间的尺寸，其实都是在default环境下。而标注的xs为小屏幕手机尺寸其实并不正确。
12.mt，mb，ml，mr都没有负值，只有mxn存在，且也只有mx存在响应式的负值。
13.Box类并没有如文档中所说的拥有box-sizing属性。
15.是否可以加上一个padding，margin的百分比宽度，适合一定状态下，响应式时，部分图片能大致保持一定位置。
16.能否加一个postion为fixed的类。
17.top，left，right，bottom这些都可以考虑加上对应的类。
18.input[type="button"],或者 input[type="submit"]或者button，是否也可以加上按钮的样式，因为表单的提交一般是默认用按钮的，在不适用ajax的情况下，用a标签不合适。
19.加一个text-indent吧，主要用于内容的首行缩进2em