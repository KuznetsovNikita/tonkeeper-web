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
 * The network version and additional capabilities supported by the validators.
 * @export
 * @interface BlockchainConfig8
 */
export interface BlockchainConfig8 {
    /**
     * 
     * @type {number}
     * @memberof BlockchainConfig8
     */
    version: number;
    /**
     * 
     * @type {number}
     * @memberof BlockchainConfig8
     */
    capabilities: number;
}

/**
 * Check if a given object implements the BlockchainConfig8 interface.
 */
export function instanceOfBlockchainConfig8(value: object): value is BlockchainConfig8 {
    if (!('version' in value) || value['version'] === undefined) return false;
    if (!('capabilities' in value) || value['capabilities'] === undefined) return false;
    return true;
}

export function BlockchainConfig8FromJSON(json: any): BlockchainConfig8 {
    return BlockchainConfig8FromJSONTyped(json, false);
}

export function BlockchainConfig8FromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockchainConfig8 {
    if (json == null) {
        return json;
    }
    return {
        
        'version': json['version'],
        'capabilities': json['capabilities'],
    };
}

export function BlockchainConfig8ToJSON(value?: BlockchainConfig8 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'version': value['version'],
        'capabilities': value['capabilities'],
    };
}

