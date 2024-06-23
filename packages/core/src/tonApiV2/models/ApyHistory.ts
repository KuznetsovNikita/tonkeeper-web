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
/**
 * 
 * @export
 * @interface ApyHistory
 */
export interface ApyHistory {
    /**
     * 
     * @type {number}
     * @memberof ApyHistory
     */
    apy: number;
    /**
     * 
     * @type {number}
     * @memberof ApyHistory
     */
    time: number;
}

/**
 * Check if a given object implements the ApyHistory interface.
 */
export function instanceOfApyHistory(value: object): value is ApyHistory {
    if (!('apy' in value) || value['apy'] === undefined) return false;
    if (!('time' in value) || value['time'] === undefined) return false;
    return true;
}

export function ApyHistoryFromJSON(json: any): ApyHistory {
    return ApyHistoryFromJSONTyped(json, false);
}

export function ApyHistoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApyHistory {
    if (json == null) {
        return json;
    }
    return {
        
        'apy': json['apy'],
        'time': json['time'],
    };
}

export function ApyHistoryToJSON(value?: ApyHistory | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'apy': value['apy'],
        'time': value['time'],
    };
}

