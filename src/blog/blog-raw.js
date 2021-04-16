const blogRaw = new Map();

let firstBlogContent =
 `# 折腾的快乐

可能每个做前端的都希望有个自己的网站吧，也知道没多少人访问，但还是想建立一个，主要是自己的地方，想怎么弄都行（当然不能违法）。

而时代也从没有像如今这样为个人建站提供如此多的便利，无论是网站模板还是静态页面生成，以及云服务的发展，都为我们提供了很多方便。

而如果你实在不想花什么成本，也不想运营一个服务器，那么 GitHub Pages 服务则是首选，不需要任何成本和维护，只要你上传静态文件就行。

而相比于博客模板，我还是更喜欢自己亲自来折腾，虽然限于审美的匮乏，经常把页面搞得很丑，但这种自己写作品的过程还是很爽的，就是享受折腾的快乐。
`

let doSomething = 
`# 得之我幸，失之我命

不可能所有的好事都让你遇见。

重要的是能把握的事尽量把握就行。

尽力了，得到了开心，得不到放宽心，然后眼光立马往别处看。

你的时间就这么几十年，每一天每一刻才是最珍贵的。

不要浪费在懊悔自责中，又不是没机会了。

无论什么时候，我们最不缺的都是机会。

多往别处看看，会发现更多惊喜的。

人生的路又不是只有一条。
`

let record = 
`# 为自己写传记

人这一辈子真的很快

以前从没想过30岁是什么场景

从没想过自己以后会干什么工作

但一转眼竟也过来了，一切都是那么顺其自然，也终于理解了什么叫车到山前必有路这句话

回想过去的岁月，最大的遗憾就是没有留下一些记录

如果能记录下自己当时的思想，当时的生活，现在回看起来一定很有意思

好在还不算晚，从现在开始没事多记录一下，也算是留下一些痕迹了，权当做给自己的晚年留点记忆
`

let flutterBugOne =
`# flutter bug ---> 有时不显示图片

今天往图片文件夹里丢了一张图片，照例 pub get 一下，然后引用，却奇怪地没有显示出来，也没有报错

怀疑是地址写错了，仔细检查了很多遍发现没有错，又 restart 了一次，还是不显示

最后只能重新 run 一遍整个项目，这时图片才显示出来，总算解决了

目前还不知道具体原因，先记录一下
`

let flutterBugTwo =
`# flutter bug --->打包后的 app 某些页面只显示一层灰色

打包后用来测试的 app 突然在点击某些页面时变成灰色，并且无法继续点击，只能杀掉 app

后来查找到原因，是因为某些错误导致的，比如图片地址为空

今天遇到的就是这种情况，设计不在，还缺了一张图，就空着了

因为这类错误在 debug 模式下不影响使用，就没在意

但是在 release 模式下就会触发页面变灰无法点击的问题，解决办法就是回到 debug 模式，把问题排查清楚再打包就行了
`

let flutterRecordOne = 
`# flutter record ---> 如何做图片缓存

网络请求的图片需要在请求完成后缓存下来留作下次使用，以减少请求次数，加快图片显示

目前已知第三方库 cached_network_image 可以满足这个需求，但还有其他简单方法

方法一是使用 SharedPreferences 将返回的图片二进制数据转换为 base64 保存在本地，使用的时候取出来就好

方法二就是直接保存在本地文件中，使用时读取文件
`

let flutterRecordTwo = 
`# flutter record ---> 既要又要往往是烦恼的根源

做 app ，写网页，好不好做？

说好做挺好做的，就去写嘛，哪有写不出的效果呢？

可是有时候却很烦，为什么，因为现实的效果往往不是 demo 那么简单

demo 很多只是需要某一个功能或效果

而现实往往是既要这个也要那个

当你要这个效果时，很快就能做出来

当你要那个效果时，也很快就能做出来

但当你既想要这个效果，同时还想要那个效果时

就不是简单的 1 + 1 = 2 了

困难度往往直线上升

好在在下班前把长度不定的可拖动排序列表做完了，吐槽下，下周继续
`

blogRaw.set('折腾的快乐', firstBlogContent);
blogRaw.set('得之我幸，失之我命', doSomething);
blogRaw.set('为自己写传记', record);
blogRaw.set('flutter bug ---> 有时不显示图片', flutterBugOne);
blogRaw.set('flutter bug ---> 打包后的 app 某些页面只显示一层灰色', flutterBugTwo);
blogRaw.set('flutter record ---> 缓存图片', flutterRecordOne);
blogRaw.set('flutter record ---> 既要又要往往是烦恼的根源', flutterRecordTwo);