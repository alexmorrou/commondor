(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
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
    522: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return n;
      });
      r(111), r(251);
      var n = function (e) {
        var t = e.layerName,
          r = e.showLayerDelay,
          n = void 0 === r ? 300 : r;
        return {
          data: function () {
            return { showLayer: !1, showLayerTimer: null };
          },
          computed: {
            hasChildRoute: function () {
              return (
                this.$store.state.activeLayer.path &&
                this.$store.state.activeLayer.path.split("/").length - 1 > 2
              );
            },
            isActiveLayer: function () {
              return this.$store.state.activeLayer.name === t;
            }
          },
          watch: {
            isActiveLayer: function (e) {
              e ? this.showLayerDelayed() : (this.showLayer = !1);
            }
          },
          mounted: function () {
            this.showLayerDelayed();
          },
          methods: {
            showLayerDelayed: function () {
              var e = this;
              this.showLayerTimer && clearTimeout(this.showLayerTimer);
              var t = this.hasChildRoute ? 1e3 : n;
              this.showLayerTimer = setTimeout(function () {
                (e.showLayer = !0),
                  e.layerReadyCallback && e.layerReadyCallback();
              }, t);
            }
          }
        };
      };
    },
    527: function (e, t, r) {
      "use strict";
      r.r(t);
      r(34);
      var n = r(45),
        head = r(521),
        o = r(522),
        c = r(44),
        m = {
          name: "PageMembers",
          mixins: [
            Object(head.a)({ pageName: "Members" }),
            Object(o.a)({ layerName: "members-member" })
          ],
          components: { IconClose: n.e, LinkHome: n.f, MemberShape: n.j },
          fetch: function (e) {
            var t, r;
            return regeneratorRuntime.async(function (n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    return (
                      (t = e.query),
                      (r = e.store),
                      (n.next = 3),
                      regeneratorRuntime.awrap(
                        r.dispatch(c.ACTIONS.GET_MEMBERS, { urlQuery: t })
                      )
                    );
                  case 3:
                    return (
                      (n.next = 5),
                      regeneratorRuntime.awrap(
                        r.dispatch(c.ACTIONS.GET_SPOTS, { urlQuery: t })
                      )
                    );
                  case 5:
                  case "end":
                    return n.stop();
                }
            });
          },
          computed: {
            memberSlug: function () {
              return this.$route.params.member;
            },
            members: function () {
              return this.$store.state.members;
            },
            spots: function () {
              return this.$store.state.spots;
            }
          }
        },
        l = r(1),
        component = Object(l.a)(
          m,
          function () {
            var e = this,
              t = e.$createElement,
              r = e._self._c || t;
            return r(
              "div",
              { staticClass: "l-page__layers-box" },
              [
                r(
                  "div",
                  {
                    staticClass: "l-layer -members -l2",
                    class: { "is-active": e.showLayer }
                  },
                  [
                    r(
                      "div",
                      { staticClass: "l-layer__container -mobile-scroll" },
                      [
                        r(
                          "LinkHome",
                          { staticClass: "l-layer__close" },
                          [r("IconClose")],
                          1
                        ),
                        e._v(" "),
                        r("h1", { staticClass: "l-layer__title" }, [
                          e._v("members")
                        ]),
                        e._v(" "),
                        r("div", { staticClass: "l-layer__content -tall" }, [
                          r("div", { staticClass: "m-members -mobile" }, [
                            r(
                              "ul",
                              { staticClass: "m-members-row" },
                              e._l(e.spots.slice(0, 2), function (t, n) {
                                return r("MemberShape", {
                                  key: e.spots.id,
                                  attrs: { member: t, position: n + 1 }
                                });
                              }),
                              1
                            ),
                            e._v(" "),
                            r(
                              "ul",
                              { staticClass: "m-members-row" },
                              e._l(e.spots.slice(2, 4), function (t, n) {
                                return r("MemberShape", {
                                  key: e.spots.id,
                                  attrs: { member: t, position: n + 3 }
                                });
                              }),
                              1
                            ),
                            e._v(" "),
                            r(
                              "ul",
                              { staticClass: "m-members-row" },
                              e._l(e.spots.slice(4, 6), function (t, n) {
                                return r("MemberShape", {
                                  key: e.spots.id,
                                  attrs: { member: t, position: n + 5 }
                                });
                              }),
                              1
                            ),
                            e._v(" "),
                            r(
                              "ul",
                              { staticClass: "m-members-row" },
                              e._l(e.spots.slice(6, 8), function (t, n) {
                                return r("MemberShape", {
                                  key: e.spots.id,
                                  attrs: { member: t, position: n + 7 }
                                });
                              }),
                              1
                            )
                          ]),
                          e._v(" "),
                          r("div", { staticClass: "m-members -desktop" }, [
                            r(
                              "ul",
                              { staticClass: "m-members-row" },
                              e._l(e.spots.slice(0, 4), function (t, n) {
                                return r("MemberShape", {
                                  key: e.spots.id,
                                  attrs: { member: t, position: n + 1 }
                                });
                              }),
                              1
                            ),
                            e._v(" "),
                            r(
                              "ul",
                              { staticClass: "m-members-row" },
                              e._l(e.spots.slice(4, 8), function (t, n) {
                                return r("MemberShape", {
                                  key: e.spots.id,
                                  attrs: { member: t, position: n + 5 }
                                });
                              }),
                              1
                            )
                          ])
                        ])
                      ],
                      1
                    )
                  ]
                ),
                e._v(" "),
                e.memberSlug ? r("NuxtChild") : e._e()
              ],
              1
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
