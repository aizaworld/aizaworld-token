// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

/// @custom:security-contact official@aizaworld.com
contract AizaWorldToken is ERC20, ERC20Burnable {
    constructor() ERC20("AizaWorld Token", "AIZA") {
        _mint(msg.sender, 600000000 * 10 ** decimals());
    }
}