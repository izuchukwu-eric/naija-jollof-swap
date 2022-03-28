require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/CqOkESoYL1oafHHuwU93W4bKy_tB5QDr",
      accounts: [
        "151743e1bd2787a539c09c89b1b4ad28f70ea5b1972c4d36e32a5de8f35afb61",
      ],
    },
  },
};
