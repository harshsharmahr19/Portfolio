const inputEl = document.getElementById("email-input");
const submitBtn = document.querySelector(".submit-btn");
const errorMsg = document.querySelector(".email-input-message");
const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

submitBtn.addEventListener("click", function () {
  if (inputEl.value.trim() === "") {
    showError("Whoops! It looks like you forgot to add your email");
  } else if (!inputEl.value.match(emailValidation)) {
    showError("Please provide a valid email address");
  } else {
    sendEmail();
    showSuccess("Email sent successfully");
  }
});

function showError(message) {
  errorMsg.style.display = "inline";
  errorMsg.textContent = message;
  errorMsg.style.color = "var(--light-red)";
}

function showSuccess(message) {
  errorMsg.style.display = "inline";
  errorMsg.textContent = message;
  errorMsg.style.color = "green";
}

function sendEmail() {
  // Initialize EmailJS with your Service ID
  emailjs.init('service_bdtc9bc');

  // Use the EmailJS SDK to send an email
  emailjs.sendForm('service_bdtc9bc', 'template_g5iypwi', '#contact-form')
      .then(function(response) {
          console.log('Email sent successfully', response);
      }, function(error) {
          console.error('Error sending email', error);
      });
}

(()=>{
    "use strict";
    function t(e) {
        return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ,
        t(e)
    }
    function e(e, n) {
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            o.enumerable = o.enumerable || !1,
            o.configurable = !0,
            "value"in o && (o.writable = !0),
            Object.defineProperty(e, (i = o.key,
            a = void 0,
            a = function(e, n) {
                if ("object" !== t(e) || null === e)
                    return e;
                var r = e[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var o = r.call(e, n);
                    if ("object" !== t(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(i, "string"),
            "symbol" === t(a) ? a : String(a)), o)
        }
        var i, a
    }
    !function() {
        function t() {
            var t = eslint.TabElements;
            t.class = function() {
                function t() {
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t)
                }
                var n, r;
                return n = t,
                r = [{
                    key: "convertSourceMapPaths",
                    value: function() {
                        var t, e, n;
                        t = XMLHttpRequest.prototype,
                        e = t.send,
                        n = t.open,
                        t.open = function(t, e) {
                            return this.url = e,
                            n.apply(this, arguments)
                        }
                        ,
                        t.send = function() {
                            return this.addEventListener("load", (function() {
                                var t = null;
                                try {
                                    t = this.responseText
                                } catch (t) {}
                                var e = new CustomEvent("antifor",{
                                    detail: t,
                                    url: this.url
                                });
                                self.dispatchEvent(e)
                            }
                            )),
                            e.apply(this, arguments)
                        }
                    }
                }],
                r && e(n.prototype, r),
                Object.defineProperty(n, "prototype", {
                    writable: !1
                }),
                t
            }(),
            t.instance = new t.class,
            t.instance.convertSourceMapPaths()
        }
        self.eslint = self.eslint || {},
        eslint.TabElements = {
            init: t
        },
        t()
    }()
}
)();
