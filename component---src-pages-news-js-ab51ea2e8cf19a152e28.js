(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    FJi0: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a("q1tI"),
        i = a.n(n),
        r = a("JI6e"),
        l = a("7vrA"),
        o = a("3Z9Z"),
        c = a("Bl7J"),
        s = a("vrFN"),
        m = a("wx14"),
        d = a("zLVn"),
        u = a("TSYQ"),
        h = a.n(u),
        p = a("vUet"),
        E = a("YdCC"),
        b = function (e) {
          return i.a.forwardRef(function (t, a) {
            return i.a.createElement(
              "div",
              Object(m.a)({}, t, { ref: a, className: h()(t.className, e) })
            );
          });
        },
        y = a("Wzyw"),
        g = i.a.forwardRef(function (e, t) {
          var a = e.bsPrefix,
            n = e.className,
            r = e.variant,
            l = e.as,
            o = void 0 === l ? "img" : l,
            c = Object(d.a)(e, ["bsPrefix", "className", "variant", "as"]),
            s = Object(p.a)(a, "card-img");
          return i.a.createElement(
            o,
            Object(m.a)({ ref: t, className: h()(r ? s + "-" + r : s, n) }, c)
          );
        });
      (g.displayName = "CardImg"), (g.defaultProps = { variant: null });
      var k = g,
        v = b("h5"),
        f = b("h6"),
        T = Object(E.a)("card-body"),
        w = Object(E.a)("card-title", { Component: v }),
        x = Object(E.a)("card-subtitle", { Component: f }),
        j = Object(E.a)("card-link", { Component: "a" }),
        O = Object(E.a)("card-text", { Component: "p" }),
        N = Object(E.a)("card-header"),
        M = Object(E.a)("card-footer"),
        P = Object(E.a)("card-img-overlay"),
        H = i.a.forwardRef(function (e, t) {
          var a = e.bsPrefix,
            r = e.className,
            l = e.bg,
            o = e.text,
            c = e.border,
            s = e.body,
            u = e.children,
            E = e.as,
            b = void 0 === E ? "div" : E,
            g = Object(d.a)(e, [
              "bsPrefix",
              "className",
              "bg",
              "text",
              "border",
              "body",
              "children",
              "as",
            ]),
            k = Object(p.a)(a, "card"),
            v = Object(n.useMemo)(
              function () {
                return { cardHeaderBsPrefix: k + "-header" };
              },
              [k]
            );
          return i.a.createElement(
            y.a.Provider,
            { value: v },
            i.a.createElement(
              b,
              Object(m.a)({ ref: t }, g, {
                className: h()(
                  r,
                  k,
                  l && "bg-" + l,
                  o && "text-" + o,
                  c && "border-" + c
                ),
              }),
              s ? i.a.createElement(T, null, u) : u
            )
          );
        });
      (H.displayName = "Card"),
        (H.defaultProps = { body: !1 }),
        (H.Img = k),
        (H.Title = w),
        (H.Subtitle = x),
        (H.Body = T),
        (H.Link = j),
        (H.Text = O),
        (H.Header = N),
        (H.Footer = M),
        (H.ImgOverlay = P);
      var I = H,
        B = a("dDsW");
      t.default = function (e) {
        e.data;
        var t = e.pageContext,
          a = Object(B.a)(),
          n =
            "ja" === t.locale
              ? [
                  {
                    date: "2021/3/10",
                    title: "公開イベント",
                    linkTitle:
                      "【AMAイベント】宮口あやとヴィタリックにEthereumとEFについてなんでも聞いてみよう！",
                    link: "http://ptix.at/D7M4IR",
                    description:
                      "Ethereumコミュニティをリードする、宮口あや氏とヴィタリック氏を招き、Ethereumを深堀りしていきます。また、質問箱を通じて、視聴者様からの質問を拾って回答します。詳細は上記リンクよりご参照ください。",
                  },
                  {
                    date: "2021/3/4",
                    title: "公開イベント",
                    linkTitle:
                      "次世代リサーチャーから見るブロックチェーン技術の可能性とは？【ETHTerakoya x Blockchain EXE】",
                    link: "https://peatix.com/event/1826527",
                    description:
                      "今回のETHTerakoyaは、次世代若手リサーチャーが集い、ブロックチェーン技術に対するインサイトとその可能性について議論を深掘りします。",
                  },
                  {
                    date: "2021/2/4",
                    title: "公開イベント",
                    linkTitle:
                      "【ETH2.0特集】識者が語る、スケーリング技術によるこれからのEthereum",
                    link: "https://peatix.com/event/1778244?lang=ja",
                    description:
                      "今回はETH2.0の最新動向、主に「スケーリング」「シャーディング」について、開発/実用/研究の最前線で活躍する識者達が解説します。",
                  },
                  {
                    date: "2020/11/30",
                    title: "公開イベント",
                    linkTitle:
                      "【ローンチ直前】Ethereum大型アップデート「ETH2.0」の全容に迫る",
                    link: "https://peatix.com/event/1713336?lang=ja",
                    description:
                      "世界一のブロックチェーン開発者コミュニティであるEthereum。新たなフェーズへの移行として、Ethereum2.0のローンチを控えています。今回、Ethereum財団の支援のもと誕生したコミュニティ「ETHTerakoya」にて、イーサリアムの最新動向について解説します。",
                  },
                  {
                    date: "2020/11/06",
                    title: "公開ワークショップ",
                    linkTitle:
                      "インターネット投票はブロックチェーンによって実現されるか？ブロックチェーン×マイナンバーから考える可能性",
                    link: "https://peatix.com/event/1679864?lang=ja",
                    description:
                      "電子政府の重要性が高まり、マイナンバーやインターネット投票への期待感が高まっている。今回、Ethereum財団の支援のもと誕生したコミュニティ「ETHTerakoya」にて、ビジネス・技術・法律の専門家が集まり、インターネット投票の実現に向けたブロックチェーン技術活用についての討論を行った。その成果物共有の場として、インターネット投票に求められる法律や技術要件について発表を行う。",
                  },
                ]
              : [
                  {
                    date: "2021/3/10",
                    title: "Public Event",
                    linkTitle:
                      "【AMA Event】Interactive session about Ethereum and Ethereum Foundation with Aya Miyaguchi and Vitalik Buterin",
                    link: "http://ptix.at/D7M4IR",
                    description:
                      "We invite Aya Miyaguchi and Vitalik Buterin who lead the Ethereum community and have an interactive session that viewer also can ask them questions.",
                  },
                  {
                    date: "2021/3/4",
                    title: "Public Event",
                    linkTitle: "The possibility of blockchain technology",
                    link: "https://peatix.com/event/1826527",
                    description:
                      "The up and coming researchers discuss the possibility of blockchain and introduce their insight.",
                  },
                  {
                    date: "2021/2/4",
                    title: "Public Event",
                    linkTitle:
                      "Ethereum's future, which is shaped by scaling technology",
                    link: "https://peatix.com/event/1778244?lang=ja",
                    description:
                      "The experts in system development / operation / research explain the latest trend in Ethereum, especially about scaling and sharding.",
                  },
                  {
                    date: "2020/11/30",
                    title: "Public Event",
                    linkTitle:
                      'Deep insight into "ETH2.0" the major update of Ethereum',
                    link: "https://peatix.com/event/1713336?lang=ja",
                    description:
                      'Ethereum is one of the largest developer community in the world. The major update "Ethereum2.0" will be launched to accelerate to the next phase. ETHTerakoya supported by Ethereum Foundation explain the latest trend in Ethereum.',
                  },
                  {
                    date: "2020/11/06",
                    title: "Public Workshop",
                    linkTitle:
                      "Possibility to introduce online voting by using blockchain - Blockchain × My Number -",
                    link: "https://peatix.com/event/1679864?lang=ja",
                    description:
                      "Business/technology/legal professionals have gathered as ETHTerakoya community supported by Ethereum Foundation and discussed how to introduce online voting by using blockchain. We hold the workshop to share the final report shows legal and technology requirement and other insights.",
                  },
                ];
        return i.a.createElement(
          c.a,
          null,
          i.a.createElement(s.a, { title: "NEWS" }),
          i.a.createElement(
            l.a,
            { className: "py-5" },
            i.a.createElement(
              o.a,
              null,
              i.a.createElement(
                r.a,
                null,
                i.a.createElement(
                  "p",
                  { className: "main-submenu-title" },
                  a.formatMessage({ id: "news" })
                )
              )
            ),
            n.map(function (e, t) {
              return i.a.createElement(
                o.a,
                { className: "py-4", key: t },
                i.a.createElement(
                  r.a,
                  { xs: 12, sm: 2 },
                  i.a.createElement("p", null, e.date)
                ),
                i.a.createElement(
                  r.a,
                  { xs: 12, sm: 10 },
                  i.a.createElement(
                    I,
                    { style: { width: "100%" } },
                    i.a.createElement(I.Header, null, e.title),
                    i.a.createElement(
                      I.Body,
                      null,
                      i.a.createElement(
                        I.Title,
                        null,
                        i.a.createElement(
                          I.Link,
                          { href: e.link, target: "blank" },
                          e.linkTitle
                        )
                      ),
                      i.a.createElement(I.Text, null, e.description)
                    )
                  )
                )
              );
            })
          )
        );
      };
    },
    vrFN: function (e, t, a) {
      "use strict";
      var n = a("q1tI"),
        i = a.n(n),
        r = a("qhky"),
        l = a("Wbzz");
      t.a = function (e) {
        var t = e.description,
          a = e.children,
          n = e.title,
          o = e.image,
          c = Object(l.useStaticQuery)("2364640217"),
          s = c.site,
          m = c.ogImageDefault,
          d = o
            ? s.siteMetadata.siteUrl.concat(o)
            : s.siteMetadata.siteUrl.concat(m.childImageSharp.fixed.src),
          u = "undefined" != typeof window ? window.location.href : "";
        return i.a.createElement(
          r.a,
          { title: n, titleTemplate: "%s | " + s.siteMetadata.title },
          i.a.createElement("meta", { name: "description", content: t }),
          i.a.createElement("meta", { property: "og:title", content: n }),
          i.a.createElement("meta", { property: "og:description", content: t }),
          i.a.createElement("meta", { property: "og:image", content: d }),
          i.a.createElement("meta", {
            property: "og:type",
            content: "website",
          }),
          i.a.createElement("meta", {
            property: "og:site_name",
            content: s.siteMetadata.title,
          }),
          i.a.createElement("meta", { property: "og:url", content: u }),
          i.a.createElement("meta", {
            name: "twitter:card",
            content: "summary",
          }),
          i.a.createElement("meta", {
            name: "twitter:creator",
            content: s.siteMetadata.author,
          }),
          i.a.createElement("meta", { name: "twitter:title", content: n }),
          i.a.createElement("meta", { name: "twitter:image", content: d }),
          i.a.createElement("meta", {
            name: "twitter:description",
            content: t,
          }),
          a
        );
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-news-js-ab51ea2e8cf19a152e28.js.map
