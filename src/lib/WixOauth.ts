import { createClient, OAuthStrategy } from "@wix/sdk";
import { items } from "@wix/data";
export const myWixClient = createClient({
  modules: { items },
  auth: OAuthStrategy({ clientId: process.env.WIX_CLIENT_ID! }),
});
