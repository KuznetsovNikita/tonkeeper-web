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
 * @interface TraceID
 */
export interface TraceID {
    /**
     * 
     * @type {string}
     * @memberof TraceID
     */
    id: string;
    /**
     * 
     * @type {number}
     * @memberof TraceID
     */
    utime: number;
}

/**
 * Check if a given object implements the TraceID interface.
 */
export function instanceOfTraceID(value: object): value is TraceID {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('utime' in value) || value['utime'] === undefined) return false;
    return true;
}

export function TraceIDFromJSON(json: any): TraceID {
    return TraceIDFromJSONTyped(json, false);
}

export function TraceIDFromJSONTyped(json: any, ignoreDiscriminator: boolean): TraceID {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'utime': json['utime'],
    };
}

export function TraceIDToJSON(value?: TraceID | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'utime': value['utime'],
    };
}

