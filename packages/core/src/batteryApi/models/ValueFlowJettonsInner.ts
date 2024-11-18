/* tslint:disable */
/* eslint-disable */
/**
 * Custodial-Battery REST API.
 * REST API for Custodial Battery which provides gas to different networks to help execute transactions.
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: support@tonkeeper.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { JettonPreview } from './JettonPreview';
import {
    JettonPreviewFromJSON,
    JettonPreviewFromJSONTyped,
    JettonPreviewToJSON,
    JettonPreviewToJSONTyped,
} from './JettonPreview';
import type { AccountAddress } from './AccountAddress';
import {
    AccountAddressFromJSON,
    AccountAddressFromJSONTyped,
    AccountAddressToJSON,
    AccountAddressToJSONTyped,
} from './AccountAddress';

/**
 * 
 * @export
 * @interface ValueFlowJettonsInner
 */
export interface ValueFlowJettonsInner {
    /**
     * 
     * @type {AccountAddress}
     * @memberof ValueFlowJettonsInner
     */
    account: AccountAddress;
    /**
     * 
     * @type {JettonPreview}
     * @memberof ValueFlowJettonsInner
     */
    jetton: JettonPreview;
    /**
     * 
     * @type {number}
     * @memberof ValueFlowJettonsInner
     */
    quantity: number;
}

/**
 * Check if a given object implements the ValueFlowJettonsInner interface.
 */
export function instanceOfValueFlowJettonsInner(value: object): value is ValueFlowJettonsInner {
    if (!('account' in value) || value['account'] === undefined) return false;
    if (!('jetton' in value) || value['jetton'] === undefined) return false;
    if (!('quantity' in value) || value['quantity'] === undefined) return false;
    return true;
}

export function ValueFlowJettonsInnerFromJSON(json: any): ValueFlowJettonsInner {
    return ValueFlowJettonsInnerFromJSONTyped(json, false);
}

export function ValueFlowJettonsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ValueFlowJettonsInner {
    if (json == null) {
        return json;
    }
    return {
        
        'account': AccountAddressFromJSON(json['account']),
        'jetton': JettonPreviewFromJSON(json['jetton']),
        'quantity': json['quantity'],
    };
}

  export function ValueFlowJettonsInnerToJSON(json: any): ValueFlowJettonsInner {
      return ValueFlowJettonsInnerToJSONTyped(json, false);
  }

  export function ValueFlowJettonsInnerToJSONTyped(value?: ValueFlowJettonsInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'account': AccountAddressToJSON(value['account']),
        'jetton': JettonPreviewToJSON(value['jetton']),
        'quantity': value['quantity'],
    };
}

