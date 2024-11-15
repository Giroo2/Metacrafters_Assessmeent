Project Title
ETH PROOF: Beginner EVM Course Assessment – "Getting Started with Solidity"

Description
This project serves as an assessment for creating a theoretical token using Solidity. It includes specific requirements to guide the implementation, covering essential aspects of token creation, such as defining variables and implementing mint and burn functions.

Getting Started
The program is written in Solidity and developed using the Remix IDE. The token class is named "MyToken" and includes the following public variables:

TokenName
tokenAbbr
totalSupply
The program also implements required functionalities, including mint and burn functions, to modify the token supply.

Installation
To execute the program:

Use the Remix IDE or any Solidity-compatible IDE.
No modifications to the code or folder structure are required.
How to Run the Program
Follow these steps to execute the program:

Copy the script and paste it into Remix IDE (or any IDE that supports Solidity).
Compile and deploy the contract.
Copy your account address and paste it into the _address fields of the burn, mint, and balances functions.
To mint tokens:
Enter a value in the _value field.
Click the totalSupply button to verify the updated supply.
To burn tokens:
Enter a value in the _value field of the burn function.
Click the totalSupply button to confirm the reduced supply.
To check token details:
Click tokenAbbr for the abbreviation or TokenName for the name.
Note: If the burn value exceeds the supply, the supply remains at zero.
Authors
Alkier Magallanes

Email: magallanesalkier@gmail.com
License
This project is licensed under the [INSERT LICENSE NAME] License. Refer to the LICENSE.md file for more information.
