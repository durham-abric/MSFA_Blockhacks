pragma solidity ^0.4.21;

contract Subscrypton{
    
    address constant private subscrypto_address = 0xca35b7d915458ef540ade6068dfe2f44e8fa733c;
    uint256 netflix_rate;
    uint256 spotify_rate;
    uint8 netflix_spaces;
    uint8 spotify_spaces;
    uint256 spotify_price;
    uint256 netflix_price;
    enum AccountType{Netflix, Spotify}
    mapping(address => uint256) public balanceOf;
    mapping(address => AccountType) public typeOf;
    
    function Subscrypton() public payable{
        
    }
    
    function takeCommision(address _payment_recipient) public payable{
        require(msg.sender == subscrypto_address);
        if(typeOf[_payment_recipient] == AccountType.Netflix){
            balanceOf[subscrypto_address] += (netflix_rate) / netflix_spaces;
        }else if(typeOf[_payment_recipient] == AccountType.Spotify){
            balanceOf[subscrypto_address] += (spotify_rate) / spotify_spaces;
        }
    }
    
    function setAccountType(address _address, AccountType _type) public{
        require(msg.sender == subscrypto_address);
        typeOf[_address] = _type;
    }
    
    function mintForNewAccount(address _address) public payable{
       require(msg.sender == subscrypto_address);
        if(typeOf[_address] == AccountType.Netflix){
            require(netflix_spaces > 2);
            balanceOf[_address] += (netflix_rate)*(netflix_spaces - 2) / netflix_spaces;
        }else if(typeOf[_address] == AccountType.Spotify){
            require(spotify_spaces > 2);
            balanceOf[_address] += (spotify_rate)*(spotify_spaces - 2) / spotify_spaces;
        }
    }
    
    function payForService(address _payee, address _recipient) public payable{
        require(msg.sender == subscrypto_address);
        uint256 preBal;
        if(typeOf[_recipient] == AccountType.Netflix){
            preBal = balanceOf[_payee];
            require(preBal >= netflix_price);
            balanceOf[_payee] -= netflix_price;
            require(balanceOf[_payee] == (preBal - netflix_price));
            balanceOf[_recipient] += netflix_price;
        }else if(typeOf[_recipient] == AccountType.Spotify){
            preBal = balanceOf[_payee];
            require(preBal >= spotify_price);
            balanceOf[_payee] -= spotify_price;
            require(balanceOf[_payee] == (preBal - spotify_price));
            balanceOf[_recipient] += spotify_price;
        }
    }
    
    function setSpotifyRate(uint256 _rate) public payable{
        require(msg.sender == subscrypto_address);
        spotify_rate = _rate;
    }
    
    function setNetflixRate(uint256 _rate) public{
        require(msg.sender == subscrypto_address);
        netflix_rate = _rate;
    }
    
    function setSpotifyPrice(uint256 _price) public{
        require(msg.sender == subscrypto_address);
        spotify_price = _price;
    }
    
    function setNetflixPrice(uint256 _price) public{
        require(msg.sender == subscrypto_address);
        netflix_price = _price;
    }
    
    function setSpotifySpaces(uint8 _spaces) public{
        require(msg.sender == subscrypto_address);
        spotify_spaces = _spaces;
    }
    
    function setNetflixSpaces(uint8 _spaces) public{
        require(msg.sender == subscrypto_address);
        netflix_spaces = _spaces;
    }
    
    function getBalance() public view returns (uint256){
        return balanceOf[msg.sender];
    }
    
    function getAccountType() public view returns (AccountType){
        return typeOf[msg.sender];
    }
    
}