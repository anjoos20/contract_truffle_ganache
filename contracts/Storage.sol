//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

contract mycontr1{
    int num;

    function setNum(int _num) public{
    num = _num;
    }


    function getNum() public view returns(int){
        return num;
    }
}