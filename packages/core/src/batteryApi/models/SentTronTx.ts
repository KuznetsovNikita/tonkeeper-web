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
/**
 * 
 * @export
 * @interface SentTronTx
 */
export interface SentTronTx {
    /**
     * 
     * @type {string}
     * @memberof SentTronTx
     */
    status: string;
}

/**
 * Check if a given object implements the SentTronTx interface.
 */
export function instanceOfSentTronTx(value: object): value is SentTronTx {
    if (!('status' in value) || value['status'] === undefined) return false;
    return true;
}

export function SentTronTxFromJSON(json: any): SentTronTx {
    return SentTronTxFromJSONTyped(json, false);
}

export function SentTronTxFromJSONTyped(json: any, ignoreDiscriminator: boolean): SentTronTx {
    if (json == null) {
        return json;
    }
    return {
        
        'status': json['status'],
    };
}

  export function SentTronTxToJSON(json: any): SentTronTx {
      return SentTronTxToJSONTyped(json, false);
  }

  export function SentTronTxToJSONTyped(value?: SentTronTx | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'status': value['status'],
    };
}

