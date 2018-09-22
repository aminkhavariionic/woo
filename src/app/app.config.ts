import { InjectionToken } from "@angular/core";

export let APP_CONFIG = new InjectionToken<AppConfig>("app.config");

export interface AppConfig {
	appName: string;
	apiBase: string;
	perPage: string;
	consumerKey: string;
	consumerSecret: string;
	adminUsername: string;
	adminPassword: string;
	paypalSandbox: string;
	paypalProduction: string;
	payuSalt: string;
	payuKey: string;
}

export const BaseAppConfig: AppConfig = {
	appName: "AndroidSrc",
	apiBase: "https://androidsrc.ir/wp-json/",
	perPage: "5",
	consumerKey: "ck_ca81eecc807927c5949c28675b5caba53f8e9709",
	consumerSecret: "cs_c92b1ade6475716c1c7b3d4f8aca1940b1d054e6",
	adminUsername: "Aminkhavariandroidsrc",
	adminPassword: "JAc!663#ilt1NLPA9st#Oyk)",
	paypalSandbox: "",
	paypalProduction: "",
	payuSalt: "",
	payuKey: ""
};