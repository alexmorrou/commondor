(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
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
    530: function (e, t, r) {
      "use strict";
      r.r(t);
      r(76), r(252), r(34);
      var n = r(525),
        head = r(521),
        o = r(522),
        c = r(44),
        l = r(523),
        d = r(45),
        h = {
          name: "PageSpace",
          mixins: [
            Object(head.a)({ pageName: "Space" }),
            Object(o.a)({ layerName: "space" })
          ],
          components: {
            IconArrowLeft: d.c,
            IconArrowRight: d.d,
            IconClose: d.e,
            LinkHome: d.f
          },
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
                        r.dispatch(c.ACTIONS.GET_SPACE, { urlQuery: t })
                      )
                    );
                  case 3:
                  case "end":
                    return n.stop();
                }
            });
          },
          data: function () {
            return {
              imagesLoaded: 0,
              isSliderReady: !1,
              showLoadingText: !1,
              swiperInstance: null
            };
          },
          computed: {
            space: function () {
              return this.$store.state.space;
            },
            spacePhotos: function () {
              return this.space.content.photos.map(this.imageSrcTransformer);
            }
          },
          watch: {
            imagesLoaded: function (e) {
              e === this.spacePhotos.length && this.initSlider();
            }
          },
          mounted: function () {
            var e = this;
            this.$storybridge.on(
              ["input", "published", "change"],
              function (t) {
                "input" === t.action && "space" === t.story.slug
                  ? ((e.spacePhotos = t.story.content.photos.map(
                      e.imageSrcTransformer
                    )),
                    e.swiperInstance.update())
                  : window.location.reload();
              }
            );
          },
          methods: {
            layerReadyCallback: function () {
              var e = this;
              this.handleImageLoading(),
                setTimeout(function () {
                  e.showLoadingText = !0;
                }, 1e3);
            },
            handleImageLoading: function () {
              var e = this,
                t = this.$refs.slider.querySelectorAll("img");
              Array.from(t).forEach(function (image) {
                image.complete
                  ? e.imagesLoaded++
                  : image.addEventListener("load", function () {
                      e.imagesLoaded++;
                    });
              });
            },
            initSlider: function () {
              var e = this;
              (this.swiperInstance = new n.a(this.$refs.slider, {
                centeredSlides: !0,
                coverflowEffect: { rotate: 0, slideShadows: !1 },
                effect: "coverflow",
                init: !1,
                initialSlide: 1,
                keyboard: { enabled: !0, onlyInViewport: !1 },
                navigation: {
                  nextEl: this.$refs["slider-next"],
                  prevEl: this.$refs["slider-prev"]
                },
                preloadImages: !0,
                slidesPerView: "auto",
                slideToClickedSlide: !0,
                updateOnImagesReady: !0
              })),
                this.swiperInstance.on("init", function () {
                  e.isSliderReady = !0;
                }),
                this.swiperInstance.init();
            },
            imageSrcTransformer: function (image) {
              return Object(l.a)({ src: image.filename, size: "0x1000" });
            }
          }
        },
        f = r(1),
        component = Object(f.a)(
          h,
          function () {
            var e = this,
              t = e.$createElement,
              r = e._self._c || t;
            return r("div", { staticClass: "l-page__layers-box" }, [
              r(
                "div",
                {
                  staticClass: "l-layer -space -l2",
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
                        e._v("space")
                      ]),
                      e._v(" "),
                      r("div", { staticClass: "m-space__slider-controls" }, [
                        r(
                          "button",
                          {
                            ref: "slider-prev",
                            staticClass: "m-space__slider-button -prev"
                          },
                          [r("IconArrowLeft")],
                          1
                        ),
                        e._v(" "),
                        r(
                          "button",
                          {
                            ref: "slider-next",
                            staticClass: "m-space__slider-button -next"
                          },
                          [r("IconArrowRight")],
                          1
                        )
                      ]),
                      e._v(" "),
                      r(
                        "div",
                        {
                          staticClass: "l-layer__content -space -fade-in",
                          class: { "is-ready": e.isSliderReady }
                        },
                        [
                          r(
                            "div",
                            {
                              ref: "slider",
                              staticClass: "m-space__slider swiper-container"
                            },
                            [
                              r(
                                "div",
                                { staticClass: "swiper-wrapper" },
                                e._l(e.spacePhotos, function (e) {
                                  return r("img", {
                                    staticClass: "swiper-slide m-space__photo",
                                    attrs: { src: e, alt: "Space" }
                                  });
                                }),
                                0
                              )
                            ]
                          )
                        ]
                      ),
                      e._v(" "),
                      !e.isSliderReady && e.showLoadingText
                        ? r(
                            "div",
                            { staticClass: "l-layer__content -space -overlay" },
                            [e._v("\n        loading photos...\n      ")]
                          )
                        : e._e()
                    ],
                    1
                  )
                ]
              )
            ]);
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
