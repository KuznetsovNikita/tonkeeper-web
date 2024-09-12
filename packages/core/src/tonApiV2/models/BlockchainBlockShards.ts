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
import type { BlockchainBlockShardsShardsInner } from './BlockchainBlockShardsShardsInner';
import {
    BlockchainBlockShardsShardsInnerFromJSON,
    BlockchainBlockShardsShardsInnerFromJSONTyped,
    BlockchainBlockShardsShardsInnerToJSON,
    BlockchainBlockShardsShardsInnerToJSONTyped,
} from './BlockchainBlockShardsShardsInner';

/**
 * 
 * @export
 * @interface BlockchainBlockShards
 */
export interface BlockchainBlockShards {
    /**
     * 
     * @type {Array<BlockchainBlockShardsShardsInner>}
     * @memberof BlockchainBlockShards
     */
    shards: Array<BlockchainBlockShardsShardsInner>;
}

/**
 * Check if a given object implements the BlockchainBlockShards interface.
 */
export function instanceOfBlockchainBlockShards(value: object): value is BlockchainBlockShards {
    if (!('shards' in value) || value['shards'] === undefined) return false;
    return true;
}

export function BlockchainBlockShardsFromJSON(json: any): BlockchainBlockShards {
    return BlockchainBlockShardsFromJSONTyped(json, false);
}

export function BlockchainBlockShardsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockchainBlockShards {
    if (json == null) {
        return json;
    }
    return {
        
        'shards': ((json['shards'] as Array<any>).map(BlockchainBlockShardsShardsInnerFromJSON)),
    };
}

  export function BlockchainBlockShardsToJSON(json: any): BlockchainBlockShards {
      return BlockchainBlockShardsToJSONTyped(json, false);
  }

  export function BlockchainBlockShardsToJSONTyped(value?: BlockchainBlockShards | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'shards': ((value['shards'] as Array<any>).map(BlockchainBlockShardsShardsInnerToJSON)),
    };
}

