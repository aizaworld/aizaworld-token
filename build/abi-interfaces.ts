import { Web3JsAbiCall } from '../build/abi-common';

export interface AizaWorldToken {
  allowance(owner: string, spender: string): Web3JsAbiCall<string>;
  approve(spender: string, amount: string | number): Web3JsAbiCall<boolean>;
  balanceOf(account: string): Web3JsAbiCall<string>;
  burn(amount: string | number): Web3JsAbiCall<void>;
  burnFrom(account: string, amount: string | number): Web3JsAbiCall<void>;
  decimals(): Web3JsAbiCall<string>;
  decreaseAllowance(spender: string, subtractedValue: string | number): Web3JsAbiCall<boolean>;
  increaseAllowance(spender: string, addedValue: string | number): Web3JsAbiCall<boolean>;
  name(): Web3JsAbiCall<string>;
  symbol(): Web3JsAbiCall<string>;
  totalSupply(): Web3JsAbiCall<string>;
  transfer(recipient: string, amount: string | number): Web3JsAbiCall<boolean>;
  transferFrom(sender: string, recipient: string, amount: string | number): Web3JsAbiCall<boolean>;
}

export interface Context {

}

export interface ERC20 {
  name(): Web3JsAbiCall<string>;
  symbol(): Web3JsAbiCall<string>;
  decimals(): Web3JsAbiCall<string>;
  totalSupply(): Web3JsAbiCall<string>;
  balanceOf(account: string): Web3JsAbiCall<string>;
  transfer(recipient: string, amount: string | number): Web3JsAbiCall<boolean>;
  allowance(owner: string, spender: string): Web3JsAbiCall<string>;
  approve(spender: string, amount: string | number): Web3JsAbiCall<boolean>;
  transferFrom(sender: string, recipient: string, amount: string | number): Web3JsAbiCall<boolean>;
  increaseAllowance(spender: string, addedValue: string | number): Web3JsAbiCall<boolean>;
  decreaseAllowance(spender: string, subtractedValue: string | number): Web3JsAbiCall<boolean>;
}

export interface ERC20Burnable {
  allowance(owner: string, spender: string): Web3JsAbiCall<string>;
  approve(spender: string, amount: string | number): Web3JsAbiCall<boolean>;
  balanceOf(account: string): Web3JsAbiCall<string>;
  decimals(): Web3JsAbiCall<string>;
  decreaseAllowance(spender: string, subtractedValue: string | number): Web3JsAbiCall<boolean>;
  increaseAllowance(spender: string, addedValue: string | number): Web3JsAbiCall<boolean>;
  name(): Web3JsAbiCall<string>;
  symbol(): Web3JsAbiCall<string>;
  totalSupply(): Web3JsAbiCall<string>;
  transfer(recipient: string, amount: string | number): Web3JsAbiCall<boolean>;
  transferFrom(sender: string, recipient: string, amount: string | number): Web3JsAbiCall<boolean>;
  burn(amount: string | number): Web3JsAbiCall<void>;
  burnFrom(account: string, amount: string | number): Web3JsAbiCall<void>;
}

export interface IERC20 {
  totalSupply(): Web3JsAbiCall<string>;
  balanceOf(account: string): Web3JsAbiCall<string>;
  transfer(recipient: string, amount: string | number): Web3JsAbiCall<boolean>;
  allowance(owner: string, spender: string): Web3JsAbiCall<string>;
  approve(spender: string, amount: string | number): Web3JsAbiCall<boolean>;
  transferFrom(sender: string, recipient: string, amount: string | number): Web3JsAbiCall<boolean>;
}

export interface IERC20Metadata {
  allowance(owner: string, spender: string): Web3JsAbiCall<string>;
  approve(spender: string, amount: string | number): Web3JsAbiCall<boolean>;
  balanceOf(account: string): Web3JsAbiCall<string>;
  totalSupply(): Web3JsAbiCall<string>;
  transfer(recipient: string, amount: string | number): Web3JsAbiCall<boolean>;
  transferFrom(sender: string, recipient: string, amount: string | number): Web3JsAbiCall<boolean>;
  name(): Web3JsAbiCall<string>;
  symbol(): Web3JsAbiCall<string>;
  decimals(): Web3JsAbiCall<string>;
}

export interface Migrations {
  last_completed_migration(): Web3JsAbiCall<string>;
  owner(): Web3JsAbiCall<string>;
  setCompleted(completed: string | number): Web3JsAbiCall<void>;
}
