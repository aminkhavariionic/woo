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
	consumerKey: "ck_5ce86be0e8a9119073f85f00a7dc65abf1ba4390",
	consumerSecret: "cs_dbba4eeffdffffd5e78e34e8e7cf465683b37665",
	adminUsername: "Aminkhavariandroidsrc",
	adminPassword: "JAc!663#ilt1NLPA9st#Oyk)",
	paypalSandbox: "",
	paypalProduction: "",
	payuSalt: "",
	payuKey: ""
};