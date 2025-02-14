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
 * @interface WorkchainDescr
 */
export interface WorkchainDescr {
    /**
     * 
     * @type {number}
     * @memberof WorkchainDescr
     */
    workchain: number;
    /**
     * 
     * @type {number}
     * @memberof WorkchainDescr
     */
    enabledSince: number;
    /**
     * 
     * @type {number}
     * @memberof WorkchainDescr
     */
    actualMinSplit: number;
    /**
     * 
     * @type {number}
     * @memberof WorkchainDescr
     */
    minSplit: number;
    /**
     * 
     * @type {number}
     * @memberof WorkchainDescr
     */
    maxSplit: number;
    /**
     * 
     * @type {number}
     * @memberof WorkchainDescr
     */
    basic: number;
    /**
     * 
     * @type {boolean}
     * @memberof WorkchainDescr
     */
    active: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof WorkchainDescr
     */
    acceptMsgs: boolean;
    /**
     * 
     * @type {number}
     * @memberof WorkchainDescr
     */
    flags: number;
    /**
     * 
     * @type {string}
     * @memberof WorkchainDescr
     */
    zerostateRootHash: string;
    /**
     * 
     * @type {string}
     * @memberof WorkchainDescr
     */
    zerostateFileHash: string;
    /**
     * 
     * @type {number}
     * @memberof WorkchainDescr
     */
    version: number;
}

/**
 * Check if a given object implements the WorkchainDescr interface.
 */
export function instanceOfWorkchainDescr(value: object): value is WorkchainDescr {
    if (!('workchain' in value) || value['workchain'] === undefined) return false;
    if (!('enabledSince' in value) || value['enabledSince'] === undefined) return false;
    if (!('actualMinSplit' in value) || value['actualMinSplit'] === undefined) return false;
    if (!('minSplit' in value) || value['minSplit'] === undefined) return false;
    if (!('maxSplit' in value) || value['maxSplit'] === undefined) return false;
    if (!('basic' in value) || value['basic'] === undefined) return false;
    if (!('active' in value) || value['active'] === undefined) return false;
    if (!('acceptMsgs' in value) || value['acceptMsgs'] === undefined) return false;
    if (!('flags' in value) || value['flags'] === undefined) return false;
    if (!('zerostateRootHash' in value) || value['zerostateRootHash'] === undefined) return false;
    if (!('zerostateFileHash' in value) || value['zerostateFileHash'] === undefined) return false;
    if (!('version' in value) || value['version'] === undefined) return false;
    return true;
}

export function WorkchainDescrFromJSON(json: any): WorkchainDescr {
    return WorkchainDescrFromJSONTyped(json, false);
}

export function WorkchainDescrFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkchainDescr {
    if (json == null) {
        return json;
    }
    return {
        
        'workchain': json['workchain'],
        'enabledSince': json['enabled_since'],
        'actualMinSplit': json['actual_min_split'],
        'minSplit': json['min_split'],
        'maxSplit': json['max_split'],
        'basic': json['basic'],
        'active': json['active'],
        'acceptMsgs': json['accept_msgs'],
        'flags': json['flags'],
        'zerostateRootHash': json['zerostate_root_hash'],
        'zerostateFileHash': json['zerostate_file_hash'],
        'version': json['version'],
    };
}

  export function WorkchainDescrToJSON(json: any): WorkchainDescr {
      return WorkchainDescrToJSONTyped(json, false);
  }

  export function WorkchainDescrToJSONTyped(value?: WorkchainDescr | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'workchain': value['workchain'],
        'enabled_since': value['enabledSince'],
        'actual_min_split': value['actualMinSplit'],
        'min_split': value['minSplit'],
        'max_split': value['maxSplit'],
        'basic': value['basic'],
        'active': value['active'],
        'accept_msgs': value['acceptMsgs'],
        'flags': value['flags'],
        'zerostate_root_hash': value['zerostateRootHash'],
        'zerostate_file_hash': value['zerostateFileHash'],
        'version': value['version'],
    };
}

