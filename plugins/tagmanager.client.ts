// This file is executed on the client side
export default defineNuxtPlugin((NuxtApp) => {
    const config = useRuntimeConfig()
    const {cookiesEnabledIds} = useCookieControl();

    // inject google tag manager code if one of following cookies are enabled: GA, AW
    if (cookiesEnabledIds.value?.includes("GA") || cookiesEnabledIds.value?.includes("AW")) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        /** GTM **/
        (function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
            var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != "dataLayer" ? "&l=" + l : "";
            j.async = true;
            j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, "script", "dataLayer", config.public.GTAG_ID);
    }

    // Inject Meta tag if META cookie is enabled
    if (cookiesEnabledIds.value?.includes("META")) {
        (function (f, b, e, v, n, t, s) {
            if (f.fbq) return;
            n = f.fbq = function () {
              n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
            };
            if (!f._fbq) f._fbq = n;
            n.push = n;
            n.loaded = !0;
            n.version = "2.0";
            n.queue = [];
            t = b.createElement(e);
            t.async = !0;
            t.src = v;
            s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s);
        })(
        window,
        document,
        "script",
        "https://connect.facebook.net/en_US/fbevents.js"
        );
        try {
            fbq("init", config.public.META_ID);
            fbq("track", "PageView");
        } catch (e) {
            console.warn(e);
        }
    }
});