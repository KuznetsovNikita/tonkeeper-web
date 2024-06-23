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
import type { DecodedRawMessageMessage } from './DecodedRawMessageMessage';
import {
    DecodedRawMessageMessageFromJSON,
    DecodedRawMessageMessageFromJSONTyped,
    DecodedRawMessageMessageToJSON,
} from './DecodedRawMessageMessage';

/**
 * 
 * @export
 * @interface DecodedRawMessage
 */
export interface DecodedRawMessage {
    /**
     * 
     * @type {DecodedRawMessageMessage}
     * @memberof DecodedRawMessage
     */
    message: DecodedRawMessageMessage;
    /**
     * 
     * @type {number}
     * @memberof DecodedRawMessage
     */
    mode: number;
}

/**
 * Check if a given object implements the DecodedRawMessage interface.
 */
export function instanceOfDecodedRawMessage(value: object): value is DecodedRawMessage {
    if (!('message' in value) || value['message'] === undefined) return false;
    if (!('mode' in value) || value['mode'] === undefined) return false;
    return true;
}

export function DecodedRawMessageFromJSON(json: any): DecodedRawMessage {
    return DecodedRawMessageFromJSONTyped(json, false);
}

export function DecodedRawMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): DecodedRawMessage {
    if (json == null) {
        return json;
    }
    return {
        
        'message': DecodedRawMessageMessageFromJSON(json['message']),
        'mode': json['mode'],
    };
}

export function DecodedRawMessageToJSON(value?: DecodedRawMessage | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'message': DecodedRawMessageMessageToJSON(value['message']),
        'mode': value['mode'],
    };
}

