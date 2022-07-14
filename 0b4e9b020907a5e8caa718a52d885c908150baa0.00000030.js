(window.webpackJsonp = window.webpackJsonp || []).push([
    [2], {
            521: function (e, t, r) {
            "use strict";
            r.d(t, "a", function () {
                return o
            });
            var o = function (e) {
                var t = e.pageName,
                    r = e.pageNameProperty;
                return {
                    head: function () {
                        return {
                            title: "".concat(t || this[r], " / ").concat("Plant22 - A creative co-working space in Amsterdam-West.")
                        }
                    }
                }
            }
        },
            522: function (e, t, r) {
            "use strict";
            r.d(t, "a", function () {
                return o
            });
            r(111),
            r(251);
            var o = function (e) {
                var t = e.layerName,
                    r = e.showLayerDelay,
                    o = void 0 === r
                        ? 300
                        : r;
                return {
                    data: function () {
                        return {
                            showLayer: !1,
                            showLayerTimer: null
                        }
                    },
                    computed: {
                        hasChildRoute: function () {
                            return this
                                .$store
                                .state
                                .activeLayer
                                .path && this
                                .$store
                                .state
                                .activeLayer
                                .path
                                .split("/")
                                .length - 1 > 2
                        },
                        isActiveLayer: function () {
                            return this
                                .$store
                                .state
                                .activeLayer
                                .name === t
                        }
                    },
                    watch: {
                        isActiveLayer: function (e) {
                            e
                                ? this.showLayerDelayed()
                                : this.showLayer = !1
                        }
                    },
                    mounted: function () {
                        this.showLayerDelayed()
                    },
                    methods: {
                        showLayerDelayed: function () {
                            var e = this;
                            this.showLayerTimer && clearTimeout(this.showLayerTimer);
                            var t = this.hasChildRoute
                                ? 1e3
                                : o;
                            this.showLayerTimer = setTimeout(function () {
                                e.showLayer = !0,
                                e.layerReadyCallback && e.layerReadyCallback()
                            }, t)
                        }
                    }
                }
            }
        },
            526: function (e, t, r) {
            "use strict";
            r.r(t);
            r(34);
            var head = r(521),
                o = r(522),
                l = r(108),
                n = "undefined" == typeof window,
                c = ! n && window.innerWidth <= 600,
                y = function (e) {
                    var t = e.callback;
                    if (! n) 
                        if (n || !document.getElementById("google-maps-script")) {
                            var script = document.createElement("script");
                            window.googleMapsCallback = t,
                            script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDPy23NgJLwqM7KflAJrrNBInoYd4IdkYE&callback=".concat("googleMapsCallback"),
                            script.id = "google-maps-script",
                            script.async = "async",
                            script.defer = "defer",
                            document.body.appendChild(script)
                        }
                     else 
                        t()
                    
                
            },
            m = r(44),
            f = r(45),
            h = {
                name: "PageContact",
                mixins: [
                    Object(head.a)(
                        {pageName: "Contact"}
                    ),
                    Object(o.a)(
                        {layerName: "contact", showLayerDelay: 50}
                    ),
                    l.a
                ],
                components: {
                    IconClose: f.e,
                    LinkHome: f.f,
                    LinkMembers: f.g,
                    LinkMembership: f.h,
                    LinkSpace: f.i,
                    RichText: f.m
                },
                data: function () {
                    return {
                        isMapLoaded: !1
                    }
                },
                methods: {
                    layerReadyCallback: function () {
                        var e = this;
                        c || this.isMapLoaded || setTimeout(function () {
                            y({
                                callback: function () {
                                    return e.initializeMap()
                                }
                            })
                        }, 600)
                    },
                    initializeMap: function () {
                        var e = this.$refs.map,
                            t = new google.maps.LatLng(52.368006, 4.861944),
                            r = {
                                zoom: 14,
                                center: t,
                                disableDefaultUI: !0,
                                styles: [
                                    {
                                        featureType: "all",
                                        elementType: "labels.text",
                                        stylers: [
                                            {
                                                visibility: "off"
                                            }
                                        ]
                                    },
                                    {
                                        featureType: "poi",
                                        elementType: "labels.icon",
                                        stylers: [
                                            {
                                                visibility: "off"
                                            }, {
                                                color: "#000000"
                                            }
                                        ]
                                    },
                                    {
                                        featureType: "poi.park",
                                        elementType: "geometry.fill",
                                        stylers: [
                                            {
                                                visibility: "on"
                                            }, {
                                                color: "#c3a5f5"
                                            }
                                        ]
                                    },
                                    {
                                        featureType: "road.arterial",
                                        elementType: "geometry.fill",
                                        stylers: [
                                            {
                                                color: "#000000"
                                            }
                                        ]
                                    }, {
                                        featureType: "road.highway",
                                        elementType: "geometry.stroke",
                                        stylers: [
                                            {
                                                color: "#ffe100"
                                            }
                                        ]
                                    }, {
                                        featureType: "road",
                                        elementType: "labels",
                                        stylers: [
                                            {
                                                visibility: "off"
                                            }
                                        ]
                                    }, {
                                        featureType: "water",
                                        elementType: "geometry.fill",
                                        stylers: [
                                            {
                                                color: "#3cc8aa"
                                            }
                                        ]
                                    }, {
                                        featureType: "road.local",
                                        elementType: "geometry.stroke",
                                        stylers: [
                                            {
                                                color: "#000000"
                                            }
                                        ]
                                    }, {
                                        featureType: "transit.line",
                                        elementType: "geometry.stroke",
                                        stylers: [
                                            {
                                                color: "#000000"
                                            }
                                        ]
                                    }, {
                                        featureType: "administrative.land_parcel",
                                        elementType: "geometry.stroke",
                                        stylers: [
                                            {
                                                color: "#000000"
                                            }
                                        ]
                                    }, {
                                        featureType: "administrative.neighborhood",
                                        elementType: "geometry.stroke",
                                        stylers: [
                                            {
                                                color: "#000000"
                                            }
                                        ]
                                    }, {
                                        featureType: "landscape.natural",
                                        elementType: "geometry.stroke",
                                        stylers: [
                                            {
                                                color: "#000000"
                                            }
                                        ]
                                    }, {
                                        featureType: "landscape.natural",
                                        elementType: "geometry.fill",
                                        stylers: [
                                            {
                                                color: "#ffffff"
                                            }
                                        ]
                                    }, {
                                        featureType: "road",
                                        elementType: "geometry.stroke",
                                        stylers: [
                                            {
                                                visibility: "off"
                                            }, {
                                                color: "#000000"
                                            }
                                        ]
                                    }, {
                                        featureType: "road",
                                        elementType: "geometry.fill",
                                        stylers: [
                                            {
                                                color: "#000000"
                                            }
                                        ]
                                    }, {
                                        featureType: "road.highway",
                                        elementType: "geometry.fill",
                                        stylers: [
                                            {
                                                visibility: "on"
                                            }, {
                                                color: "#000000"
                                            }
                                        ]
                                    }, {
                                        featureType: "transit",
                                        elementType: "geometry.fill",
                                        stylers: [
                                            {
                                                visibility: "on"
                                            }, {
                                                color: "#000000"
                                            }
                                        ]
                                    }, {
                                        featureType: "transit.line",
                                        elementType: "geometry.fill",
                                        stylers: [
                                            {
                                                visibility: "on"
                                            }, {
                                                color: "#000000"
                                            }
                                        ]
                                    }, {
                                        featureType: "landscape.natural",
                                        elementType: "geometry.stroke",
                                        stylers: [
                                            {
                                                visibility: "on"
                                            }, {
                                                color: "#000000"
                                            }
                                        ]
                                    }, {
                                        featureType: "road",
                                        elementType: "geometry.stroke",
                                        stylers: [
                                            {
                                                visibility: "on"
                                            }, {
                                                color: "#ffa9af"
                                            }
                                        ]
                                    }, {
                                        featureType: "transit.station",
                                        elementType: "geometry.stroke",
                                        stylers: [
                                            {
                                                visibility: "on"
                                            }, {
                                                color: "#ffe100"
                                            }
                                        ]
                                    }, {
                                        featureType: "transit",
                                        elementType: "labels.icon",
                                        stylers: [
                                            {
                                                visibility: "off"
                                            }
                                        ]
                                    }, {
                                        featureType: "transit",
                                        elementType: "geometry.fill",
                                        stylers: [
                                            {
                                                visibility: "on"
                                            }
                                        ]
                                    }, {
                                        featureType: "transit.station",
                                        elementType: "geometry.fill",
                                        stylers: [
                                            {
                                                visibility: "on"
                                            }, {
                                                color: "#c3a5f5"
                                            }
                                        ]
                                    }, {
                                        featureType: "poi.sports_complex",
                                        elementType: "labels.text",
                                        stylers: [
                                            {
                                                visibility: "on"
                                            }
                                        ]
                                    }, {
                                        featureType: "poi",
                                        elementType: "geometry.fill",
                                        stylers: [
                                            {
                                                visibility: "on"
                                            }, {
                                                color: "#c4a5f5"
                                            }
                                        ]
                                    }, {
                                        featureType: "landscape",
                                        elementType: "geometry",
                                        stylers: [
                                            {
                                                visibility: "on"
                                            }, {
                                                color: "#ffffff"
                                            }
                                        ]
                                    }
                                ]
                            },
                            map = new google.maps.Map(e, r);
                        new google.maps.Marker({map: map, position: t, title: "Plant22", icon: "/images/map/marker.svg"}),
                        this.isMapLoaded = !0
                    }
                },
                fetch: function (e) {
                    var t,
                        r;
                    return regeneratorRuntime.async (function (o) {
                        for (;;) 
                            switch (o.prev = o.next) {
                                case 0:
                                    return t = e.query,
                                    r = e.store,
                                    o.next = 3,
                                    regeneratorRuntime.awrap(r.dispatch(m.ACTIONS.GET_CONTACT, {urlQuery: t}));
                                case 3:
                                case "end":
                                    return o.stop()
                            }
                        
                    })
                },
                computed: {
                    contact: function () {
                        return this
                            .$store
                            .state
                            .contact
                    }
                }
            },
            d = r(1),
            component = Object(d.a)(h, function () {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("div", {
                    staticClass: "l-page__layers-box"
                }, [r("div", {
                        staticClass: "l-layer -l2",
                        class: {
                            "is-active" : e.showLayer
                        }
                    }, [
                        r("div", {
                            staticClass: "l-layer__column -c2-1 -contact"
                        }, [r("div", {
                                ref: "map",
                                staticClass: "l-layer__cover"
                            })]),
                        e._v(" "),
                        r("div", {
                            staticClass: "l-layer__column -c2-2 -contact"
                        }, [r("div", {
                                staticClass: "l-layer__container -scroll"
                            }, [
                                r("LinkHome", {
                                    staticClass: "l-layer__close"
                                }, [r("IconClose")], 1),
                                e._v(" "),
                                r("h1", {
                                    staticClass: "l-layer__title"
                                }, [e._v("contact")]),
                                e._v(" "),
                                r("div", {
                                    staticClass: "l-layer__content"
                                }, [
                                    r("a", {
                                        staticClass: "e-mobile-image -map",
                                        attrs: {
                                            href: "https://goo.gl/maps/R87QJ27rMmB2",
                                            target: "_blank",
                                            rel: "noopener noreferrer"
                                        }
                                    }),
                                    e._v(" "),
                                    r("div", {
                                        staticClass: "m-content"
                                    }, [
                                        e._m(0),
                                        e._v(" "),
                                        r("p", [r("RichText", {
                                                attrs: {
                                                    richText: e
                                                        .contact
                                                        .paragraph1
                                                        .content
                                                }
                                            })], 1),
                                        e._v(" "),
                                        r("p", [
                                            e.hasSpots
                                                ? [r("RichText", {
                                                        attrs: {
                                                            richText: e
                                                                .contact
                                                                .paragraphSpots
                                                                .content,
                                                            spotsAvailableText: e.spotsAvailableText
                                                        }
                                                    })]
                                                : [r("RichText", {
                                                        attrs: {
                                                            richText: e
                                                                .contact
                                                                .paragraphNoSpots
                                                                .content
                                                        }
                                                    })]
                                        ], 2),
                                        e._v(" "),
                                        e
                                            .contact
                                            .paragraph2
                                            .content
                                                ? r("p", [r("RichText", {
                                                        attrs: {
                                                            richText: e
                                                                .contact
                                                                .paragraph2
                                                                .content
                                                        }
                                                    })], 1)
                                                : e._e(),
                                        e._v(" "),
                                        r("a", {
                                            staticClass: "e-button -full-width -margin-top",
                                            attrs: {
                                                href: "mailto:hi@plant22.co"
                                            }
                                        }, [e._v(e._s(e.contact.buttonText))])
                                    ])
                                ])
                            ], 1)])
                    ])])
            }, [
                function () {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("p", [
                        t("strong", [this._v("address:")]),
                        this._v(" "),
                        t("br"),
                        t("a", {
                            attrs: {
                                href: "https://goo.gl/maps/R87QJ27rMmB2",
                                target: "_blank",
                                rel: "noopener noreferrer"
                            }
                        }, [
                            this._v("Chasséstraat 22H"),
                            t("br"),
                            this._v("\n              1057 JE Amsterdam"),
                            t("br"),
                            this._v("\n              The Netherlands")
                        ])
                    ])
                }
            ], !1, null, null, null);
            t.default = component.exports
        }
    }]);