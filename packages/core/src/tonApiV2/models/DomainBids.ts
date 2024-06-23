/* tslint:disable */
/* eslint-disable */
/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@tonkeeper.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { DomainBid } from './DomainBid';
import {
    DomainBidFromJSON,
    DomainBidFromJSONTyped,
    DomainBidToJSON,
} from './DomainBid';

/**
 * 
 * @export
 * @interface DomainBids
 */
export interface DomainBids {
    /**
     * 
     * @type {Array<DomainBid>}
     * @memberof DomainBids
     */
    data: Array<DomainBid>;
}

/**
 * Check if a given object implements the DomainBids interface.
 */
export function instanceOfDomainBids(value: object): value is DomainBids {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function DomainBidsFromJSON(json: any): DomainBids {
    return DomainBidsFromJSONTyped(json, false);
}

export function DomainBidsFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainBids {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(DomainBidFromJSON)),
    };
}

export function DomainBidsToJSON(value?: DomainBids | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': ((value['data'] as Array<any>).map(DomainBidToJSON)),
    };
}

