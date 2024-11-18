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
import type { AccountAddress } from './AccountAddress';
import {
    AccountAddressFromJSON,
    AccountAddressFromJSONTyped,
    AccountAddressToJSON,
    AccountAddressToJSONTyped,
} from './AccountAddress';

/**
 * 
 * @export
 * @interface InscriptionTransferAction
 */
export interface InscriptionTransferAction {
    /**
     * 
     * @type {AccountAddress}
     * @memberof InscriptionTransferAction
     */
    sender: AccountAddress;
    /**
     * 
     * @type {AccountAddress}
     * @memberof InscriptionTransferAction
     */
    recipient: AccountAddress;
    /**
     * amount in minimal particles
     * @type {string}
     * @memberof InscriptionTransferAction
     */
    amount: string;
    /**
     * 
     * @type {string}
     * @memberof InscriptionTransferAction
     */
    comment?: string;
    /**
     * 
     * @type {string}
     * @memberof InscriptionTransferAction
     */
    type: InscriptionTransferActionTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof InscriptionTransferAction
     */
    ticker: string;
    /**
     * 
     * @type {number}
     * @memberof InscriptionTransferAction
     */
    decimals: number;
}


/**
 * @export
 */
export const InscriptionTransferActionTypeEnum = {
    Ton20: 'ton20',
    Gram20: 'gram20'
} as const;
export type InscriptionTransferActionTypeEnum = typeof InscriptionTransferActionTypeEnum[keyof typeof InscriptionTransferActionTypeEnum];


/**
 * Check if a given object implements the InscriptionTransferAction interface.
 */
export function instanceOfInscriptionTransferAction(value: object): value is InscriptionTransferAction {
    if (!('sender' in value) || value['sender'] === undefined) return false;
    if (!('recipient' in value) || value['recipient'] === undefined) return false;
    if (!('amount' in value) || value['amount'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('ticker' in value) || value['ticker'] === undefined) return false;
    if (!('decimals' in value) || value['decimals'] === undefined) return false;
    return true;
}

export function InscriptionTransferActionFromJSON(json: any): InscriptionTransferAction {
    return InscriptionTransferActionFromJSONTyped(json, false);
}

export function InscriptionTransferActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): InscriptionTransferAction {
    if (json == null) {
        return json;
    }
    return {
        
        'sender': AccountAddressFromJSON(json['sender']),
        'recipient': AccountAddressFromJSON(json['recipient']),
        'amount': json['amount'],
        'comment': json['comment'] == null ? undefined : json['comment'],
        'type': json['type'],
        'ticker': json['ticker'],
        'decimals': json['decimals'],
    };
}

  export function InscriptionTransferActionToJSON(json: any): InscriptionTransferAction {
      return InscriptionTransferActionToJSONTyped(json, false);
  }

  export function InscriptionTransferActionToJSONTyped(value?: InscriptionTransferAction | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'sender': AccountAddressToJSON(value['sender']),
        'recipient': AccountAddressToJSON(value['recipient']),
        'amount': value['amount'],
        'comment': value['comment'],
        'type': value['type'],
        'ticker': value['ticker'],
        'decimals': value['decimals'],
    };
}

