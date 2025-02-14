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
 * The reward in nanoTons for block creation in the TON blockchain.
 * @export
 * @interface BlockchainConfig14
 */
export interface BlockchainConfig14 {
    /**
     * 
     * @type {number}
     * @memberof BlockchainConfig14
     */
    masterchainBlockFee: number;
    /**
     * 
     * @type {number}
     * @memberof BlockchainConfig14
     */
    basechainBlockFee: number;
}

/**
 * Check if a given object implements the BlockchainConfig14 interface.
 */
export function instanceOfBlockchainConfig14(value: object): value is BlockchainConfig14 {
    if (!('masterchainBlockFee' in value) || value['masterchainBlockFee'] === undefined) return false;
    if (!('basechainBlockFee' in value) || value['basechainBlockFee'] === undefined) return false;
    return true;
}

export function BlockchainConfig14FromJSON(json: any): BlockchainConfig14 {
    return BlockchainConfig14FromJSONTyped(json, false);
}

export function BlockchainConfig14FromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockchainConfig14 {
    if (json == null) {
        return json;
    }
    return {
        
        'masterchainBlockFee': json['masterchain_block_fee'],
        'basechainBlockFee': json['basechain_block_fee'],
    };
}

  export function BlockchainConfig14ToJSON(json: any): BlockchainConfig14 {
      return BlockchainConfig14ToJSONTyped(json, false);
  }

  export function BlockchainConfig14ToJSONTyped(value?: BlockchainConfig14 | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'masterchain_block_fee': value['masterchainBlockFee'],
        'basechain_block_fee': value['basechainBlockFee'],
    };
}

