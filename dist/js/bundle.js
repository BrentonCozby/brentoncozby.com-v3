webpackJsonp([1],{114:function(a,e,t){"use strict";function i(a){return a&&a.__esModule?a:{default:a}}t(116),t(119);var n=t(118),o=i(n),r=t(120),s=i(r);t(302),$(document).ready(function(){function a(){t.removeClass("open"),i.removeClass("revealed"),n.removeClass("revealed"),e.removeClass("revealed")}(0,o.default)(),(0,s.default)();var e=$("#overlay"),t=$("#menuButton"),i=$("#menu"),n=$("#contact"),r=$("#portfolio");e.click(a),$(".teaser").click(function(a){var e=a.currentTarget.dataset.modal;$("#"+e).addClass("open"),$(window).scrollTop(r.offset().top)}),$(".creation-modal-close, .close-btn").click(function(a){$(a.currentTarget).closest(".open").removeClass("open")})})},116:function(a,e,t){"use strict";t(117),$(function(){$("#contact-form input, #contact-form textarea").jqBootstrapValidation({preventSubmit:!0,submitError:function(a,e,t){},submitSuccess:function(a,e){e.preventDefault();var t=$("input#name").val(),i=$("input#email").val(),n=$("input#phone").val(),o=$("textarea#message").val(),r=t;r.indexOf(" ")>=0&&(r=t.split(" ").slice(0,-1).join(" ")),$.ajax({url:"././mail/contact_me.php",type:"POST",data:{name:t,phone:n,email:i,message:o},cache:!1,success:function(){$("#success").html("<div class='alert alert-success'>"),$("#success > .alert-success").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>"),$("#success > .alert-success").append("<strong>Your message has been sent. </strong>"),$("#success > .alert-success").append("</div>"),$("#contact-form").trigger("reset")},error:function(){$("#success").html("<div class='alert alert-danger'>"),$("#success > .alert-danger").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>"),$("#success > .alert-danger").append($("<strong>").text("Sorry "+r+", it seems that my mail server is not responding. Please try again later!")),$("#success > .alert-danger").append("</div>"),$("#contact-form").trigger("reset")}})},filter:function(){return $(this).is(":visible")}}),$('a[data-toggle="tab"]').click(function(a){a.preventDefault(),$(this).tab("show")})}),$("#name, #email, #message, #phone").focus(function(){$("#success").html("")});var i=$("#contact"),n=$("#overlay"),o=$("#menu-button"),r=$("#menu");$(".contact-btn").click(function(a){i.addClass("revealed"),n.addClass("revealed"),o.removeClass("open"),r.removeClass("revealed")}),$("#close").click(function(a){i.removeClass("revealed"),n.removeClass("revealed")})},117:function(a,e,t){"use strict";var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a};!function(a){function e(a){return new RegExp("^"+a+"$")}function t(a,e){for(var t=Array.prototype.slice.call(arguments).splice(2),i=a.split("."),n=i.pop(),o=0;o<i.length;o++)e=e[i[o]];return e[n].apply(this,t)}var n=[],o={options:{prependExistingHelpBlock:!1,sniffHtml:!0,preventSubmit:!0,submitError:!1,submitSuccess:!1,semanticallyStrict:!1,autoAdd:{helpBlocks:!0},filter:function(){return!0}},methods:{init:function(e){var t=a.extend(!0,{},o);t.options=a.extend(!0,t.options,e);var i=this,l=a.unique(i.map(function(){return a(this).parents("form")[0]}).toArray());return a(l).bind("submit",function(e){var i=a(this),n=0,o=i.find("input,textarea,select").not("[type=submit],[type=image]").filter(t.options.filter);o.trigger("submit.validation").trigger("validationLostFocus.validation"),o.each(function(e,t){var i=a(t),o=i.parents(".form-group").first();o.hasClass("warning")&&(o.removeClass("warning").addClass("error"),n++)}),o.trigger("validationLostFocus.validation"),n?(t.options.preventSubmit&&e.preventDefault(),i.addClass("error"),a.isFunction(t.options.submitError)&&t.options.submitError(i,e,o.jqBootstrapValidation("collectErrors",!0))):(i.removeClass("error"),a.isFunction(t.options.submitSuccess)&&t.options.submitSuccess(i,e))}),this.each(function(){var e=a(this),i=e.parents(".form-group").first(),o=i.find(".help-block").first(),l=e.parents("form").first(),d=[];if(!o.length&&t.options.autoAdd&&t.options.autoAdd.helpBlocks&&(o=a('<div class="help-block" />'),i.find(".controls").append(o),n.push(o[0])),t.options.sniffHtml){var c="";if(void 0!==e.attr("pattern")&&(c="Not in the expected format\x3c!-- data-validation-pattern-message to override --\x3e",e.data("validationPatternMessage")&&(c=e.data("validationPatternMessage")),e.data("validationPatternMessage",c),e.data("validationPatternRegex",e.attr("pattern"))),void 0!==e.attr("max")||void 0!==e.attr("aria-valuemax")){var u=void 0!==e.attr("max")?e.attr("max"):e.attr("aria-valuemax");c="Too high: Maximum of '"+u+"'\x3c!-- data-validation-max-message to override --\x3e",e.data("validationMaxMessage")&&(c=e.data("validationMaxMessage")),e.data("validationMaxMessage",c),e.data("validationMaxMax",u)}if(void 0!==e.attr("min")||void 0!==e.attr("aria-valuemin")){var m=void 0!==e.attr("min")?e.attr("min"):e.attr("aria-valuemin");c="Too low: Minimum of '"+m+"'\x3c!-- data-validation-min-message to override --\x3e",e.data("validationMinMessage")&&(c=e.data("validationMinMessage")),e.data("validationMinMessage",c),e.data("validationMinMin",m)}void 0!==e.attr("maxlength")&&(c="Too long: Maximum of '"+e.attr("maxlength")+"' characters\x3c!-- data-validation-maxlength-message to override --\x3e",e.data("validationMaxlengthMessage")&&(c=e.data("validationMaxlengthMessage")),e.data("validationMaxlengthMessage",c),e.data("validationMaxlengthMaxlength",e.attr("maxlength"))),void 0!==e.attr("minlength")&&(c="Too short: Minimum of '"+e.attr("minlength")+"' characters\x3c!-- data-validation-minlength-message to override --\x3e",e.data("validationMinlengthMessage")&&(c=e.data("validationMinlengthMessage")),e.data("validationMinlengthMessage",c),e.data("validationMinlengthMinlength",e.attr("minlength"))),void 0===e.attr("required")&&void 0===e.attr("aria-required")||(c=t.builtInValidators.required.message,e.data("validationRequiredMessage")&&(c=e.data("validationRequiredMessage")),e.data("validationRequiredMessage",c)),void 0!==e.attr("type")&&"number"===e.attr("type").toLowerCase()&&(c=t.builtInValidators.number.message,e.data("validationNumberMessage")&&(c=e.data("validationNumberMessage")),e.data("validationNumberMessage",c)),void 0!==e.attr("minchecked")&&(c="Not enough options checked; Minimum of '"+e.attr("minchecked")+"' required\x3c!-- data-validation-minchecked-message to override --\x3e",e.data("validationMincheckedMessage")&&(c=e.data("validationMincheckedMessage")),e.data("validationMincheckedMessage",c),e.data("validationMincheckedMinchecked",e.attr("minchecked"))),void 0!==e.attr("maxchecked")&&(c="Too many options checked; Maximum of '"+e.attr("maxchecked")+"' required\x3c!-- data-validation-maxchecked-message to override --\x3e",e.data("validationMaxcheckedMessage")&&(c=e.data("validationMaxcheckedMessage")),e.data("validationMaxcheckedMessage",c),e.data("validationMaxcheckedMaxchecked",e.attr("maxchecked")))}void 0!==e.data("validation")&&(d=e.data("validation").split(",")),a.each(e.data(),function(a,e){var t=a.replace(/([A-Z])/g,",$1").split(",");"validation"===t[0]&&t[1]&&d.push(t[1])});var v=d,g=[];do{a.each(d,function(a,e){d[a]=r(e)}),d=a.unique(d),g=[],a.each(v,function(i,n){if(void 0!==e.data("validation"+n+"Shortcut"))a.each(e.data("validation"+n+"Shortcut").split(","),function(a,e){g.push(e)});else if(t.builtInValidators[n.toLowerCase()]){var o=t.builtInValidators[n.toLowerCase()];"shortcut"===o.type.toLowerCase()&&a.each(o.shortcut.split(","),function(a,e){e=r(e),g.push(e),d.push(e)})}}),v=g}while(v.length>0);var h={};a.each(d,function(i,n){var o=e.data("validation"+n+"Message"),s=void 0!==o,l=!1;if(o=o||"'"+n+"' validation failed \x3c!-- Add attribute 'data-validation-"+n.toLowerCase()+"-message' to input to change this message --\x3e",a.each(t.validatorTypes,function(t,i){void 0===h[t]&&(h[t]=[]),l||void 0===e.data("validation"+n+r(i.name))||(h[t].push(a.extend(!0,{name:r(i.name),message:o},i.init(e,n))),l=!0)}),!l&&t.builtInValidators[n.toLowerCase()]){var d=a.extend(!0,{},t.builtInValidators[n.toLowerCase()]);s&&(d.message=o);var c=d.type.toLowerCase();"shortcut"===c?l=!0:a.each(t.validatorTypes,function(t,i){void 0===h[t]&&(h[t]=[]),l||c!==t.toLowerCase()||(e.data("validation"+n+r(i.name),d[i.name.toLowerCase()]),h[c].push(a.extend(d,i.init(e,n))),l=!0)})}l||a.error("Cannot find validation info for '"+n+"'")}),o.data("original-contents",o.data("original-contents")?o.data("original-contents"):o.html()),o.data("original-role",o.data("original-role")?o.data("original-role"):o.attr("role")),i.data("original-classes",i.data("original-clases")?i.data("original-classes"):i.attr("class")),e.data("original-aria-invalid",e.data("original-aria-invalid")?e.data("original-aria-invalid"):e.attr("aria-invalid")),e.bind("validation.validation",function(i,n){var o=s(e),r=[];return a.each(h,function(i,s){(o||o.length||n&&n.includeEmpty||t.validatorTypes[i].blockSubmit&&n&&n.submitting)&&a.each(s,function(a,n){t.validatorTypes[i].validate(e,o,n)&&r.push(n.message)})}),r}),e.bind("getValidators.validation",function(){return h}),e.bind("submit.validation",function(){return e.triggerHandler("change.validation",{submitting:!0})}),e.bind(["keyup","focus","blur","click","keydown","keypress","change"].join(".validation ")+".validation",function(n,r){var d=s(e),c=[];i.find("input,textarea,select").each(function(t,i){var n=c.length;if(a.each(a(i).triggerHandler("validation.validation",r),function(a,e){c.push(e)}),c.length>n)a(i).attr("aria-invalid","true");else{var o=e.data("original-aria-invalid");a(i).attr("aria-invalid",void 0!==o&&o)}}),l.find("input,select,textarea").not(e).not('[name="'+e.attr("name")+'"]').trigger("validationLostFocus.validation"),c=a.unique(c.sort()),c.length?(i.removeClass("success error").addClass("warning"),t.options.semanticallyStrict&&1===c.length?o.html(c[0]+(t.options.prependExistingHelpBlock?o.data("original-contents"):"")):o.html('<ul role="alert"><li>'+c.join("</li><li>")+"</li></ul>"+(t.options.prependExistingHelpBlock?o.data("original-contents"):""))):(i.removeClass("warning error success"),d.length>0&&i.addClass("success"),o.html(o.data("original-contents"))),"blur"===n.type&&i.removeClass("success")}),e.bind("validationLostFocus.validation",function(){i.removeClass("success")})})},destroy:function(){return this.each(function(){var e=a(this),t=e.parents(".form-group").first(),i=t.find(".help-block").first();e.unbind(".validation"),i.html(i.data("original-contents")),t.attr("class",t.data("original-classes")),e.attr("aria-invalid",e.data("original-aria-invalid")),i.attr("role",e.data("original-role")),n.indexOf(i[0])>-1&&i.remove()})},collectErrors:function(e){var t={};return this.each(function(e,i){var n=a(i),o=n.attr("name"),r=n.triggerHandler("validation.validation",{includeEmpty:!0});t[o]=a.extend(!0,r,t[o])}),a.each(t,function(a,e){0===e.length&&delete t[a]}),t},hasErrors:function(){var e=[];return this.each(function(t,i){e=e.concat(a(i).triggerHandler("getValidators.validation")?a(i).triggerHandler("validation.validation",{submitting:!0}):[])}),e.length>0},override:function(e){o=a.extend(!0,o,e)}},validatorTypes:{callback:{name:"callback",init:function(a,e){return{validatorName:e,callback:a.data("validation"+e+"Callback"),lastValue:a.val(),lastValid:!0,lastFinished:!0}},validate:function(a,e,i){if(i.lastValue===e&&i.lastFinished)return!i.lastValid;if(!0===i.lastFinished){i.lastValue=e,i.lastValid=!0,i.lastFinished=!1;var n=i,o=a;t(i.callback,window,a,e,function(a){n.lastValue===a.value&&(n.lastValid=a.valid,a.message&&(n.message=a.message),n.lastFinished=!0,o.data("validation"+n.validatorName+"Message",n.message),setTimeout(function(){o.trigger("change.validation")},1))})}return!1}},ajax:{name:"ajax",init:function(a,e){return{validatorName:e,url:a.data("validation"+e+"Ajax"),lastValue:a.val(),lastValid:!0,lastFinished:!0}},validate:function(e,t,i){return""+i.lastValue==""+t&&!0===i.lastFinished?!1===i.lastValid:(!0===i.lastFinished&&(i.lastValue=t,i.lastValid=!0,i.lastFinished=!1,a.ajax({url:i.url,data:"value="+t+"&field="+e.attr("name"),dataType:"json",success:function(a){""+i.lastValue==""+a.value&&(i.lastValid=!!a.valid,a.message&&(i.message=a.message),i.lastFinished=!0,e.data("validation"+i.validatorName+"Message",i.message),setTimeout(function(){e.trigger("change.validation")},1))},failure:function(){i.lastValid=!0,i.message="ajax call failed",i.lastFinished=!0,e.data("validation"+i.validatorName+"Message",i.message),setTimeout(function(){e.trigger("change.validation")},1)}})),!1)}},regex:{name:"regex",init:function(a,t){return{regex:e(a.data("validation"+t+"Regex"))}},validate:function(a,e,t){return!t.regex.test(e)&&!t.negative||t.regex.test(e)&&t.negative}},required:{name:"required",init:function(a,e){return{}},validate:function(a,e,t){return!(0!==e.length||t.negative)||!!(e.length>0&&t.negative)},blockSubmit:!0},match:{name:"match",init:function(a,e){var t=a.parents("form").first().find('[name="'+a.data("validation"+e+"Match")+'"]').first();return t.bind("validation.validation",function(){a.trigger("change.validation",{submitting:!0})}),{element:t}},validate:function(a,e,t){return e!==t.element.val()&&!t.negative||e===t.element.val()&&t.negative},blockSubmit:!0},max:{name:"max",init:function(a,e){return{max:a.data("validation"+e+"Max")}},validate:function(a,e,t){return parseFloat(e,10)>parseFloat(t.max,10)&&!t.negative||parseFloat(e,10)<=parseFloat(t.max,10)&&t.negative}},min:{name:"min",init:function(a,e){return{min:a.data("validation"+e+"Min")}},validate:function(a,e,t){return parseFloat(e)<parseFloat(t.min)&&!t.negative||parseFloat(e)>=parseFloat(t.min)&&t.negative}},maxlength:{name:"maxlength",init:function(a,e){return{maxlength:a.data("validation"+e+"Maxlength")}},validate:function(a,e,t){return e.length>t.maxlength&&!t.negative||e.length<=t.maxlength&&t.negative}},minlength:{name:"minlength",init:function(a,e){return{minlength:a.data("validation"+e+"Minlength")}},validate:function(a,e,t){return e.length<t.minlength&&!t.negative||e.length>=t.minlength&&t.negative}},maxchecked:{name:"maxchecked",init:function(a,e){var t=a.parents("form").first().find('[name="'+a.attr("name")+'"]');return t.bind("click.validation",function(){a.trigger("change.validation",{includeEmpty:!0})}),{maxchecked:a.data("validation"+e+"Maxchecked"),elements:t}},validate:function(a,e,t){return t.elements.filter(":checked").length>t.maxchecked&&!t.negative||t.elements.filter(":checked").length<=t.maxchecked&&t.negative},blockSubmit:!0},minchecked:{name:"minchecked",init:function(a,e){var t=a.parents("form").first().find('[name="'+a.attr("name")+'"]');return t.bind("click.validation",function(){a.trigger("change.validation",{includeEmpty:!0})}),{minchecked:a.data("validation"+e+"Minchecked"),elements:t}},validate:function(a,e,t){return t.elements.filter(":checked").length<t.minchecked&&!t.negative||t.elements.filter(":checked").length>=t.minchecked&&t.negative},blockSubmit:!0}},builtInValidators:{email:{name:"Email",type:"shortcut",shortcut:"validemail"},validemail:{name:"Validemail",type:"regex",regex:"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}",message:"Not a valid email address\x3c!-- data-validator-validemail-message to override --\x3e"},passwordagain:{name:"Passwordagain",type:"match",match:"password",message:"Does not match the given password\x3c!-- data-validator-paswordagain-message to override --\x3e"},positive:{name:"Positive",type:"shortcut",shortcut:"number,positivenumber"},negative:{name:"Negative",type:"shortcut",shortcut:"number,negativenumber"},number:{name:"Number",type:"regex",regex:"([+-]?\\d+(\\.\\d*)?([eE][+-]?[0-9]+)?)?",message:"Must be a number\x3c!-- data-validator-number-message to override --\x3e"},integer:{name:"Integer",type:"regex",regex:"[+-]?\\d+",message:"No decimal places allowed\x3c!-- data-validator-integer-message to override --\x3e"},positivenumber:{name:"Positivenumber",type:"min",min:0,message:"Must be a positive number\x3c!-- data-validator-positivenumber-message to override --\x3e"},negativenumber:{name:"Negativenumber",type:"max",max:0,message:"Must be a negative number\x3c!-- data-validator-negativenumber-message to override --\x3e"},required:{name:"Required",type:"required",message:"This is required\x3c!-- data-validator-required-message to override --\x3e"},checkone:{name:"Checkone",type:"minchecked",minchecked:1,message:"Check at least one option\x3c!-- data-validation-checkone-message to override --\x3e"}}},r=function(a){return a.toLowerCase().replace(/(^|\s)([a-z])/g,function(a,e,t){return e+t.toUpperCase()})},s=function(e){var t=e.val(),i=e.attr("type");return"checkbox"===i&&(t=e.is(":checked")?t:""),"radio"===i&&(t=a('input[name="'+e.attr("name")+'"]:checked').length>0?t:""),t};a.fn.jqBootstrapValidation=function(e){return o.methods[e]?o.methods[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!==(void 0===e?"undefined":i(e))&&e?(a.error("Method "+e+" does not exist on jQuery.jqBootstrapValidation"),null):o.methods.init.apply(this,arguments)},a.jqBootstrapValidation=function(e){a(":input").not("[type=image],[type=submit]").jqBootstrapValidation.apply(this,arguments)}}(jQuery)},118:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var a=$("#overlay"),e=$("#menu-button"),t=$("#menu");e.click(function(i){a.toggleClass("revealed"),e.toggleClass("open"),t.toggleClass("revealed")}),$(".menu-a:not(.contact-btn)").click(function(i){e.removeClass("open"),t.removeClass("revealed"),a.removeClass("revealed")})}},119:function(a,e,t){"use strict";function i(){c.forEach(function(a){a.each(function(a,e){u.push({element:$(e),position:null})})})}function n(){i(),u.forEach(function(a){a.position=a.element.offset().top})}function o(){u.forEach(function(a){var e=+a.position-+h+ +f;g()>e?a.element.addClass("scroll-visible"):a.element.removeClass("scroll-visible")})}function r(){o()}function s(){h=$(window).height(),f=.1*h,n(),o()}Object.defineProperty(e,"__esModule",{value:!0}),e.playAnimations=void 0;var l=t(303),d=function(a){return a&&a.__esModule?a:{default:a}}(l),c=[$(".appear")],u=[],m=void 0!==window.pageXOffset,v="CSS1Compat"===(document.compatMode||""),g=function(){return m?window.pageYOffset:v?document.documentElement.scrollTop:document.body.scrollTop},h=null,f=150;$(document).ready(function(){setTimeout(s,300),setTimeout(s,600),setTimeout(s,900),setTimeout(s,1200),setInterval(function(){s()},2e3),$(document).scroll((0,d.default)(r,100))}),e.playAnimations=o},120:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){$('a[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var a=$(this.hash);if(a=a.length?a:$("[name="+this.hash.slice(1)+"]"),a.length)return $("html, body").animate({scrollTop:a.offset().top},700),!1}})}},302:function(a,e){},305:function(a,e,t){t(115),a.exports=t(114)}},[305]);