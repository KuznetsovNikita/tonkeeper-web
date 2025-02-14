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
 * @interface PromoUsed
 */
export interface PromoUsed {
    /**
     * 
     * @type {boolean}
     * @memberof PromoUsed
     */
    promoUsed: boolean;
}

/**
 * Check if a given object implements the PromoUsed interface.
 */
export function instanceOfPromoUsed(value: object): value is PromoUsed {
    if (!('promoUsed' in value) || value['promoUsed'] === undefined) return false;
    return true;
}

export function PromoUsedFromJSON(json: any): PromoUsed {
    return PromoUsedFromJSONTyped(json, false);
}

export function PromoUsedFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromoUsed {
    if (json == null) {
        return json;
    }
    return {
        
        'promoUsed': json['promo_used'],
    };
}

  export function PromoUsedToJSON(json: any): PromoUsed {
      return PromoUsedToJSONTyped(json, false);
  }

  export function PromoUsedToJSONTyped(value?: PromoUsed | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'promo_used': value['promoUsed'],
    };
}

