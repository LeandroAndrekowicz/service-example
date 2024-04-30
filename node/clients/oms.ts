import type { InstanceOptions, IOContext } from "@vtex/api";
import { JanusClient } from "@vtex/api";

export default class Oms extends JanusClient {
    constructor ( context : IOContext, options : InstanceOptions) {
        super(context, {
            ...options,
            headers: {
                VtexIdclientAuthToken: context.authToken
            }
        });
    }

}