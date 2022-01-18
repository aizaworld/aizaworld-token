const BN = web3.utils.BN;

const AizaWorldToken = artifacts.require('AizaWorldToken.sol');
const TestHelper = require('./helper');

const totalSupply = new BN(600).mul(new BN(10).pow(new BN(24))); // 600M
const tokenName = "AizaWorld Token";
const tokenSymbol = "AIZA";
const tokenDecimals = 18;

let aizaToken;
let admin;
let user;

contract('AizaWorldToken', accounts => {
  describe('Test Aiza World token info', async () => {
    before('Deploy AizaWorldToken to network', async () => {
      admin = accounts[0];
      user = accounts[1];
      aizaToken = await AizaWorldToken.new();
    });

    it(`Test essential info after deployed`, async () => {
      TestHelper.assertEqual(totalSupply, await aizaToken.totalSupply(), "Wrong total supply");
      TestHelper.assertEqual(tokenName, await aizaToken.name(), "Wrong token name");
      TestHelper.assertEqual(tokenSymbol, await aizaToken.symbol(), "Wrong token symbol");
      TestHelper.assertEqual(tokenDecimals, await aizaToken.decimals(), "Wrong token decimals");

      TestHelper.assertEqual(
        totalSupply,
        await aizaToken.balanceOf(admin),
        "Wrong admin balance"
      );
    });

    it(`Test burn`, async () => {
      let adminBal = await aizaToken.balanceOf(admin);
      let burntAmount = new BN(10).pow(new BN(19));
      let totalSupply = await aizaToken.totalSupply();

      await aizaToken.burn(burntAmount, { from: admin });

      let newAdminBal = adminBal.sub(burntAmount);
      let newTotalSupply = totalSupply.sub(burntAmount);

      TestHelper.assertEqual(newAdminBal, await aizaToken.balanceOf(admin));
      TestHelper.assertEqual(newTotalSupply, await aizaToken.totalSupply());
    });

    it(`Test burnFrom`, async () => {
      let adminBal = await aizaToken.balanceOf(admin);
      let userBal = await aizaToken.balanceOf(user);
      let totalSupply = await aizaToken.totalSupply();
      let burntAmount = new BN(10).pow(new BN(19));

      await aizaToken.approve(user, burntAmount, { from: admin });
      await aizaToken.burnFrom(admin, burntAmount, { from: user });

      let newAdminBal = adminBal.sub(burntAmount);
      let newTotalSupply = totalSupply.sub(burntAmount);

      TestHelper.assertEqual(newAdminBal, await aizaToken.balanceOf(admin));
      TestHelper.assertEqual(newTotalSupply, await aizaToken.totalSupply());
      TestHelper.assertEqual(userBal, await aizaToken.balanceOf(user));
    });
  });
});