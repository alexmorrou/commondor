(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    521: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return n;
      });
      var n = function (e) {
        var t = e.pageName,
          r = e.pageNameProperty;
        return {
          head: function () {
            return {
              title: ""
                .concat(t || this[r], " / ")
                .concat(
                  "Plant22 - A creative co-working space in Amsterdam-West."
                )
            };
          }
        };
      };
    },
    523: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return n;
      });
      r(112);
      var n = function (e) {
        var t = e.src,
          r = e.size;
        return t.replace("a.storyblok.com", "img2.storyblok.com/".concat(r));
      };
    },
    528: function (e, t, r) {
      "use strict";
      r.r(t);
      r(111), r(34);
      var n = r(180),
        o = r.n(n),
        m = r(45),
        head = r(521),
        c = r(44),
        l = r(523),
        _ = {
          name: "PageMember",
          mixins: [Object(head.a)({ pageNameProperty: "memberName" })],
          components: { IconClose: m.e, LinkMembers: m.g },
          data: function () {
            return { isMemberPhotoLoaded: !1, showLayer: !1 };
          },
          asyncData: function (e) {
            var t, r, n, m, l, _;
            return regeneratorRuntime.async(function (h) {
              for (;;)
                switch ((h.prev = h.next)) {
                  case 0:
                    if (
                      ((t = e.params),
                      (r = e.query),
                      (n = e.redirect),
                      0 !== (m = e.store).state.members.length)
                    ) {
                      h.next = 4;
                      break;
                    }
                    return (
                      (h.next = 4),
                      regeneratorRuntime.awrap(
                        m.dispatch(c.ACTIONS.GET_MEMBERS, { urlQuery: r })
                      )
                    );
                  case 4:
                    if (
                      ((l = t.member),
                      (_ = l
                        ? o()(m.state.members, function (e) {
                            return e.slug === l;
                          })
                        : null),
                      !l || _)
                    ) {
                      h.next = 9;
                      break;
                    }
                    return n(301, "/404/"), h.abrupt("return");
                  case 9:
                    return h.abrupt("return", { member: _ });
                  case 10:
                  case "end":
                    return h.stop();
                }
            });
          },
          computed: {
            members: function () {
              return this.$store.state.members;
            },
            memberSlug: function () {
              return this.$route.params.member;
            },
            memberName: function () {
              return this.member.name;
            },
            memberClass: function () {
              return "-member-".concat(this.member.content.position);
            },
            photoClass: function () {
              return this.memberPhoto ? "-photo" : "";
            },
            memberPhoto: function () {
              return this.member.content.photo
                ? Object(l.a)({
                    src: this.member.content.photo,
                    size: "0x1500"
                  })
                : null;
            },
            listItems: function () {
              var e = this;
              return ["Place", "Person", "Book", "Movie", "Song", "Dish"].map(
                function (t) {
                  return {
                    title: "a ".concat(t.toLowerCase()),
                    text: e.member.content["a".concat(t, "Text")],
                    url: e.member.content["a".concat(t, "Url")]
                  };
                }
              );
            },
            styleObject: function () {
              return this.memberPhoto
                ? { "background-image": "url(".concat(this.memberPhoto, ")") }
                : {};
            }
          },
          mounted: function () {
            var e = this;
            setTimeout(function () {
              e.showLayer = !0;
            }, 50),
              this.memberPhoto && this.preloadMemberPhoto(),
              this.$storybridge.on(
                ["input", "published", "change"],
                function (t) {
                  "input" === t.action && t.story.slug === e.member.slug
                    ? (e.member = t.story)
                    : window.location.reload();
                }
              );
          },
          methods: {
            preloadMemberPhoto: function () {
              var e = this,
                image = new Image();
              (image.onload = function () {
                return (e.isMemberPhotoLoaded = !0);
              }),
                (image.src = this.memberPhoto);
            }
          }
        },
        h = r(1),
        component = Object(h.a)(
          _,
          function () {
            var e = this,
              t = e.$createElement,
              r = e._self._c || t;
            return r(
              "div",
              {
                staticClass: "l-layer -l3",
                class: { "is-active": e.showLayer }
              },
              [
                r(
                  "div",
                  {
                    staticClass: "l-layer__column -c2-1",
                    class: [e.memberClass, e.photoClass]
                  },
                  [
                    e.memberPhoto
                      ? r("div", {
                          class: { "is-loaded": e.isMemberPhotoLoaded },
                          style: e.styleObject
                        })
                      : e._e()
                  ]
                ),
                e._v(" "),
                r(
                  "div",
                  {
                    staticClass: "l-layer__column -c2-2",
                    class: [e.memberClass]
                  },
                  [
                    r(
                      "div",
                      { staticClass: "l-layer__container -scroll" },
                      [
                        r(
                          "LinkMembers",
                          { staticClass: "l-layer__close" },
                          [r("IconClose")],
                          1
                        ),
                        e._v(" "),
                        r("div", { staticClass: "l-layer__content -tight" }, [
                          r("div", { staticClass: "m-member" }, [
                            e.memberPhoto
                              ? r("div", {
                                  staticClass: "e-mobile-image",
                                  style: e.styleObject
                                })
                              : e._e(),
                            e._v(" "),
                            r("h1", { staticClass: "m-member__name" }, [
                              e._v(e._s(e.member.name))
                            ]),
                            e._v(" "),
                            e.member.content.title
                              ? r("p", { staticClass: "m-member__title" }, [
                                  e._v(
                                    "\n            " +
                                      e._s(e.member.content.title) +
                                      "\n          "
                                  )
                                ])
                              : e._e(),
                            e._v(" "),
                            e.member.content.websiteUrl
                              ? r("p", { staticClass: "m-member__text" }, [
                                  e._v("\n            website: "),
                                  r(
                                    "a",
                                    {
                                      attrs: {
                                        href: e.member.content.websiteUrl,
                                        target: "_blank"
                                      }
                                    },
                                    [
                                      e._v(
                                        e._s(
                                          e.member.content.websiteDisplay ||
                                            e.member.content.websiteUrl
                                        )
                                      )
                                    ]
                                  )
                                ])
                              : e._e(),
                            e._v(" "),
                            e.member.content.contactEmail
                              ? r("p", { staticClass: "m-member__text" }, [
                                  e._v("\n            contact: "),
                                  r(
                                    "a",
                                    {
                                      attrs: {
                                        href:
                                          "mailto:" +
                                          e.member.content.contactEmail
                                      }
                                    },
                                    [e._v(e._s(e.member.content.contactEmail))]
                                  )
                                ])
                              : e._e(),
                            e._v(" "),
                            e.member.content.description
                              ? r(
                                  "p",
                                  { staticClass: "m-member__text -margin-top" },
                                  [
                                    e._v(
                                      "\n            " +
                                        e._s(e.member.content.description) +
                                        "\n          "
                                    )
                                  ]
                                )
                              : e._e(),
                            e._v(" "),
                            r(
                              "ul",
                              { staticClass: "m-member__list -margin-top" },
                              e._l(e.listItems, function (t) {
                                return t.text
                                  ? r("li", [
                                      r("strong", [e._v(e._s(t.title))]),
                                      e._v(" "),
                                      t.url
                                        ? r(
                                            "a",
                                            {
                                              attrs: {
                                                href: t.url,
                                                target: "_blank"
                                              }
                                            },
                                            [e._v(e._s(t.text))]
                                          )
                                        : r("span", [e._v(e._s(t.text))])
                                    ])
                                  : e._e();
                              }),
                              0
                            )
                          ])
                        ])
                      ],
                      1
                    )
                  ]
                )
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      t.default = component.exports;
    }
  }
]);
