import { defineRule, configure } from "vee-validate";
import rules from "@vee-validate/rules";
import { localize } from "@vee-validate/i18n";
import en from "@vee-validate/i18n/dist/locale/en.json";

export default {
  install() {
    Object.keys(rules).forEach((rule) => {
      defineRule(rule, rules[rule]);
    });

    configure({
      generateMessage: localize({
        en,
      }),
      validateOnBlur: false,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true,
    });
  },
};
