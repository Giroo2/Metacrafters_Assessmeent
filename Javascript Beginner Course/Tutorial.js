/* 
// Metacrafters - Beginning Javascript
//
// This is a javascript playground for testing your javascript code!
// When you are ready to test, simply right click and select "Run Code"
// to see the result print below. If you have more then one snippet of code,
// you can highlight the code you want to test, and then right click and select "Run Code"
*/

// Enter your code below this line

// Code example
// Create a variable to hold your NFTs
const nfts = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, eyeColor, shirtType, bling) {
    const nft = {
        name: name,
        eyeColor: eyeColor,
        shirtType: shirtType,
        bling: bling
    };

    nfts.push(nft);
    console.log("Minted: " + name);
}

// Create a function that will go through the array of NFTs
// and print their metadata with console.log()
function listNFTs() {
    return nfts.map((nft, index) => {
        return `\nID: \t\t${index + 1}\nName: \t\t${nft.name}\nEye Color: \t${nft.eyeColor}\nShirt Type: \t${nft.shirtType}\nBling: \t\t${nft.bling}`;
    }).join('\n');
}

// Print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal NFTs Minted: " + nfts.length);
}

// Call your functions below this line
mintNFT("Bob", "Blue", "Hoodie", "Gold Chain");
mintNFT("Sue", "Blue", "Hoodie", "Gold Chain");
mintNFT("Tim", "Blue", "Hoodie", "Gold Chain");
mintNFT("John", "Blue", "Hoodie", "Gold Chain");
mintNFT("Gab", "Brown", "Hoodie", "Gold Chain");

// Log the NFTs to the console
console.log(listNFTs());
getTotalSupply();
