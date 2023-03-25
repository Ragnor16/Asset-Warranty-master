// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StockRegistry {
    
    struct Stock {
        string product;
        string model;
        string dealer;
        string serialNumber;
    }
    
    mapping (uint => Stock) public stocks;
    uint public stockCount;
    
    function addStock(string memory _product, string memory _model, string memory _dealer, string memory _serialNumber) public {
        stockCount++;
        stocks[stockCount] = Stock(_product, _model, _dealer, _serialNumber);
    }
    
}