/*
 * Vue Awesome Notification
 * */
import Vue from 'vue';
import VueAWN from "awesome-notifications";

require("awesome-notifications/dist/styles/style.css");

let vueAwesomeNotificationOptions = {
    icons: {
        prefix: "<i class='icon-4x ",
        suffix: "'></i>",
        tip: "icon ion-md-help",
        info: "icon ion-md-information",
        success: "ion-checkmark-round",
        warning: "ion-alert-circled",
        alert: "ion-alert-circled",
        async: "ion-load-b icon-spin",
        confirm: "ion-alert-circled"
    },
    durations: {
        global: 1500
    }
};

Vue.use(VueAWN, vueAwesomeNotificationOptions);